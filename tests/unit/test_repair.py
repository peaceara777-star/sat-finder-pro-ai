"""اختبارات وحدة الإصلاحات"""

import unittest
import sys
import os
sys.path.insert(0, os.path.abspath(os.path.join(os.path.dirname(__file__), '../..')))

from src.satfinder.repair import RepairManager
from src.satfinder.database import Database

class TestRepairManager(unittest.TestCase):
    def setUp(self):
        self.db = Database(":memory:")
        self.db.execute("""
            CREATE TABLE repairs (
                id INTEGER PRIMARY KEY,
                category TEXT,
                title_ar TEXT,
                severity TEXT,
                views_count INTEGER DEFAULT 0
            )
        """)
        self.db.execute("""
            INSERT INTO repairs (category, title_ar, severity)
            VALUES ('signal', 'ضعف الإشارة', 'medium')
        """)
        self.manager = RepairManager(self.db)
    
    def test_get_all(self):
        """اختبار الحصول على جميع الإصلاحات"""
        repairs = self.manager.get_all()
        self.assertEqual(len(repairs), 1)
        self.assertEqual(repairs[0]['title_ar'], 'ضعف الإشارة')
    
    def test_get_by_category(self):
        """اختبار الحصول على إصلاحات حسب الفئة"""
        repairs = self.manager.get_all(category='signal')
        self.assertEqual(len(repairs), 1)

if __name__ == '__main__':
    unittest.main()
