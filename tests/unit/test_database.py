"""اختبارات وحدة قاعدة البيانات"""

import unittest
import sys
import os
sys.path.insert(0, os.path.abspath(os.path.join(os.path.dirname(__file__), '../..')))

from src.satfinder.database import Database

class TestDatabase(unittest.TestCase):
    def setUp(self):
        self.db = Database(":memory:")
    
    def test_connection(self):
        """اختبار الاتصال بقاعدة البيانات"""
        conn = self.db.get_connection()
        self.assertIsNotNone(conn)
    
    def test_execute(self):
        """اختبار تنفيذ الاستعلامات"""
        self.db.execute("CREATE TABLE test (id INTEGER, name TEXT)")
        self.db.execute("INSERT INTO test VALUES (1, 'test')")
        result = self.db.execute("SELECT * FROM test")
        self.assertEqual(len(result), 1)
        self.assertEqual(result[0]['name'], 'test')
    
    def tearDown(self):
        pass

if __name__ == '__main__':
    unittest.main()
