variable "aws_region" {
  description = "AWS Region"
  type        = string
  default     = "us-east-1"
}

variable "app_version" {
  description = "Application version"
  type        = string
  default     = "4.1.0"
}

variable "domain_name" {
  description = "Domain name"
  type        = string
  default     = "satfinder.example.com"
}

variable "redis_password" {
  description = "Redis password"
  type        = string
  sensitive   = true
}

variable "gemini_api_key" {
  description = "Gemini API Key"
  type        = string
  sensitive   = true
}
