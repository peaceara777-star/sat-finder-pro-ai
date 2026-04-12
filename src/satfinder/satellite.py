"""وحدة إدارة الأقمار الصناعية"""

from .database import Database
from typing import List, Dict

class SatelliteManager:
    def __init__(self, db: Database):
        self.db = db
    
    def get_all(self) -> List[Dict]:
        return self.db.execute(
            "SELECT * FROM satellites WHERE status = 'active' ORDER BY name_ar"
        )
    
    def get_with_frequencies(self, sat_id: int) -> Dict:
        satellite = self.db.execute_one(
            "SELECT * FROM satellites WHERE id = ?", (sat_id,)
        )
        if satellite:
            frequencies = self.db.execute(
                "SELECT * FROM frequencies WHERE satellite_id = ? AND is_active = 1",
                (sat_id,)
            )
            satellite['frequencies'] = frequencies
        return satellite
