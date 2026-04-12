"""وحدة المساعد الذكي"""

import google.generativeai as genai
from typing import Optional

class AIAssistant:
    def __init__(self, api_key: str):
        self.api_key = api_key
        genai.configure(api_key=api_key)
        self.model = genai.GenerativeModel('gemini-1.5-pro')
    
    def ask(self, question: str) -> str:
        prompt = f"""أنت خبير متخصص في الأقمار الصناعية والرسيفرات. أجب باللغة العربية.

السؤال: {question}

قدم إجابة تقنية دقيقة ومفيدة."""
        
        response = self.model.generate_content(prompt)
        return response.text
