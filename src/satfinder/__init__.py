"""
Sat Finder Pro AI
التطبيق العربي الأول لخبراء الأقمار الصناعية
الإصدار 4.1.0
"""

__version__ = "4.1.0"
__author__ = "peaceara777-star"
__license__ = "MIT"

from .database import Database
from .satellite import SatelliteManager
from .repair import RepairManager
from .ai import AIAssistant

__all__ = [
    "Database",
    "SatelliteManager", 
    "RepairManager",
    "AIAssistant"
]
