"""اختبارات وحدة الأقمار الصناعية"""

import unittest
import sys
import os
sys.path.insert(0, os.path.abspath(os.path.join(os.path.dirname(__file__), '../..')))

from src.satfinder.satellite import SatelliteManager
from src.satfinder.database import Database

class TestSatelliteManager(unittest.TestCase):
    def setUp(self):
        self.db = Database(":memory:")
        self.db.execute("""
            CREATE TABLE satellites (
                id INTEGER PRIMARY KEY,
                name_ar TEXT,
                orbital_position TEXT,
                status TEXT
            )
        """)
        self.db.execute("""
            INSERT INTO satellites (name_ar, orbital_position, status)
            VALUES ('نايل سات', '7.0W', 'active')
        """)
        self.manager = SatelliteManager(self.db)
    
    def test_get_all(self):
        """اختبار الحصول على جميع الأقمار"""
        satellites = self.manager.get_all()
        self.assertEqual(len(satellites), 1)
        self.assertEqual(satellites[0]['name_ar'], 'نايل سات')
    
    def test_get_with_frequencies(self):
        """اختبار الحصول على قمر مع تردداته"""
        satellite = self.manager.get_with_frequencies(1)
        self.assertIsNotNone(satellite)
        self.assertEqual(satellite['name_ar'], 'نايل سات')

if __name__ == '__main__':
    unittest.main()
