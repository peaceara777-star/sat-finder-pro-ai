"""وحدة إدارة الإصلاحات"""

from .database import Database
from typing import List, Dict

class RepairManager:
    def __init__(self, db: Database):
        self.db = db
    
    def get_all(self, category: str = None) -> List[Dict]:
        if category:
            return self.db.execute(
                "SELECT * FROM repairs WHERE category = ? ORDER BY severity DESC",
                (category,)
            )
        return self.db.execute("SELECT * FROM repairs ORDER BY category, severity DESC")
    
    def get_by_id(self, repair_id: int) -> Dict:
        repair = self.db.execute_one("SELECT * FROM repairs WHERE id = ?", (repair_id,))
        if repair:
            self.db.execute("UPDATE repairs SET views_count = views_count + 1 WHERE id = ?", (repair_id,))
        return repair
