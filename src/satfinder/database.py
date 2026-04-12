"""وحدة إدارة قاعدة البيانات"""

import sqlite3
import os
from typing import List, Dict, Any, Optional

class Database:
    def __init__(self, db_path: str = "database/satfinder.db"):
        self.db_path = db_path
        os.makedirs(os.path.dirname(db_path), exist_ok=True)
    
    def get_connection(self):
        return sqlite3.connect(self.db_path)
    
    def execute(self, query: str, params: tuple = ()) -> List[Dict]:
        conn = self.get_connection()
        conn.row_factory = sqlite3.Row
        cursor = conn.execute(query, params)
        results = [dict(row) for row in cursor.fetchall()]
        conn.commit()
        conn.close()
        return results
    
    def execute_one(self, query: str, params: tuple = ()) -> Optional[Dict]:
        results = self.execute(query, params)
        return results[0] if results else None
