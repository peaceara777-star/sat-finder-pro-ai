terraform {
  required_version = ">= 1.0"
  
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 5.0"
    }
    kubernetes = {
      source  = "hashicorp/kubernetes"
      version = "~> 2.23"
    }
    helm = {
      source  = "hashicorp/helm"
      version = "~> 2.11"
    }
  }
  
  backend "s3" {
    bucket = "satfinder-terraform-state"
    key    = "prod/terraform.tfstate"
    region = "us-east-1"
    encrypt = true
  }
}

provider "aws" {
  region = var.aws_region
}

provider "kubernetes" {
  host                   = module.eks.cluster_endpoint
  cluster_ca_certificate = base64decode(module.eks.cluster_certificate_authority_data)
  exec {
    api_version = "client.authentication.k8s.io/v1beta1"
    command     = "aws"
    args        = ["eks", "get-token", "--cluster-name", module.eks.cluster_name]
  }
}

provider "helm" {
  kubernetes {
    host                   = module.eks.cluster_endpoint
    cluster_ca_certificate = base64decode(module.eks.cluster_certificate_authority_data)
    exec {
      api_version = "client.authentication.k8s.io/v1beta1"
      command     = "aws"
      args        = ["eks", "get-token", "--cluster-name", module.eks.cluster_name]
    }
  }
}

module "network" {
  source = "../../modules/network"
  
  environment = "prod"
  vpc_cidr    = "10.0.0.0/16"
  azs         = ["us-east-1a", "us-east-1b", "us-east-1c"]
}

module "eks" {
  source = "../../modules/compute"
  
  environment     = "prod"
  cluster_name    = "satfinder-prod"
  cluster_version = "1.28"
  vpc_id          = module.network.vpc_id
  subnet_ids      = module.network.private_subnets
  
  node_groups = {
    main = {
      desired_size = 3
      min_size     = 3
      max_size     = 10
      instance_types = ["t3.medium"]
    }
  }
}

module "database" {
  source = "../../modules/database"
  
  environment = "prod"
  vpc_id      = module.network.vpc_id
  subnet_ids  = module.network.database_subnets
  
  instance_class = "db.t3.small"
  allocated_storage = 20
}

resource "helm_release" "satfinder" {
  name       = "sat-finder-pro-ai"
  repository = "https://peaceara777.github.io/helm-charts"
  chart      = "sat-finder-pro-ai"
  version    = "4.1.0"
  namespace  = "satfinder"
  
  create_namespace = true
  
  set {
    name  = "image.tag"
    value = var.app_version
  }
  
  set {
    name  = "ingress.hosts[0].host"
    value = var.domain_name
  }
  
  set {
    name  = "database.host"
    value = module.database.endpoint
  }
  
  set {
    name  = "redis.password"
    value = var.redis_password
  }
}
