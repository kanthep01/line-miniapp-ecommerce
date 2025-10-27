// 📝 ไฟล์ตัวอย่างการตั้งค่า
// คัดลอกไฟล์นี้เป็น config.js แล้วใส่ค่าจริงของคุณ

const CONFIG = {
    GOOGLE_SHEET_ID: 'YOUR_GOOGLE_SHEET_ID',  // จาก URL ของ Google Sheets
    API_KEY: 'YOUR_GOOGLE_API_KEY',            // จาก Google Cloud Console
    SHEET_NAME: 'YOUR_SHEET_NAME'              // ชื่อ sheet ของคุณ (เช่น 'Sheet1', 'Products')
};

// วิธีหา GOOGLE_SHEET_ID:
// จาก URL: https://docs.google.com/spreadsheets/d/1ABC123xyz/edit
// SHEET_ID คือ: 1ABC123xyz

// วิธีสร้าง API_KEY:
// 1. ไปที่ https://console.cloud.google.com/
// 2. สร้าง Project
// 3. เปิดใช้งาน Google Sheets API
// 4. Credentials → Create Credentials → API Key
// 5. คัดลอก API Key

// วิธีหา SHEET_NAME:
// ดูแถบด้านล่างซ้ายของ Google Sheets
// ชื่อ sheet จะแสดงอยู่ (เช่น 'Sheet1', 'Products', 'ntshop list')
