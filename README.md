# 🛍️ LINE Miniapp E-commerce

LINE miniapp สำหรับแสดงสินค้าและระบบตะกร้าสินค้า เชื่อมต่อกับ Google Sheets แบบ real-time

![Version](https://img.shields.io/badge/version-1.0.0-blue.svg)
![License](https://img.shields.io/badge/license-MIT-green.svg)

## ✨ Features

- 🛒 **ระบบตะกร้าสินค้า** - เพิ่ม/ลบสินค้า คำนวณยอดรวมอัตโนมัติ
- 📊 **เชื่อมต่อ Google Sheets** - ดึงข้อมูลสินค้าแบบ real-time
- 🎨 **UI สวยงาม** - ออกแบบตามมาตรฐาน LINE Design
- 📱 **Responsive** - ใช้งานได้ทั้ง mobile และ desktop
- 🔍 **กรองหมวดหมู่** - เลือกดูสินค้าตามหมวดหมู่
- 🖼️ **แสดงรูปหลายภาพ** - สไลด์รูปสินค้าได้
- 🔧 **Debug Mode** - แสดง error message ที่ชัดเจน

## 📸 Screenshots

### หน้ารายการสินค้า
![Product List](https://via.placeholder.com/300x500?text=Product+List)

### หน้ารายละเอียดสินค้า
![Product Detail](https://via.placeholder.com/300x500?text=Product+Detail)

### ตะกร้าสินค้า
![Shopping Cart](https://via.placeholder.com/300x500?text=Shopping+Cart)

## 🚀 Getting Started

### Prerequisites

- Python 3.x (สำหรับรัน web server)
- Google Cloud Project พร้อม API Key
- Google Sheet ที่เตรียมข้อมูลไว้

### Installation

1. **Clone repository**
```bash
git clone https://github.com/yourusername/line-miniapp-ecommerce.git
cd line-miniapp-ecommerce
```

2. **ตั้งค่า Google Sheets API**
   - ไปที่ [Google Cloud Console](https://console.cloud.google.com/)
   - สร้าง Project ใหม่
   - เปิดใช้งาน **Google Sheets API**
   - สร้าง API Key
   - คัดลอก API Key

3. **แก้ไขค่าใน `index.html`**
```javascript
const GOOGLE_SHEET_ID = 'YOUR_SHEET_ID';
const API_KEY = 'YOUR_API_KEY';
const SHEET_NAME = 'YOUR_SHEET_NAME';
```

4. **เตรียม Google Sheet**

โครงสร้าง columns:

| Column | ชื่อ | ตัวอย่าง |
|--------|------|----------|
| A | No. | 1, 2, 3... |
| B | Category | มวนอับ, มวนถิง, เครื่องดื่ม |
| C | Product Name | T&T, Fresh Berry |
| D | Product Detail | T&T 500 มวน |
| E | Price | 149, 129 |
| I | Cover Image (Direct Link) | https://drive.google.com/uc?id=...&export=view |
| J | Image 2 (Direct Link) | https://drive.google.com/uc?id=...&export=view |
| K | Image 3 (Direct Link) | https://drive.google.com/uc?id=...&export=view |

5. **Share Google Sheet**
   - คลิก "Share"
   - เปลี่ยนเป็น "Anyone with the link"
   - สิทธิ์: Viewer

6. **รัน web server**
```bash
# Python 3
python -m http.server 8000

# หรือใช้ Python 2
python -m SimpleHTTPServer 8000
```

7. **เปิดเบราว์เซอร์**
```
http://localhost:8000/index.html
```

## 📁 Project Structure

```
line-miniapp-ecommerce/
├── index.html              # Main application (แนะนำใช้)
├── test-connection.html    # ทดสอบการเชื่อมต่อ API
├── README.md              # เอกสารนี้
├── LICENSE                # License file
└── docs/
    └── TROUBLESHOOTING.md # คู่มือแก้ปัญหา
```

## 🔧 Configuration

### Google Sheets API Key

1. ไปที่ [Google Cloud Console](https://console.cloud.google.com/apis/credentials)
2. สร้าง API Key
3. **🔐 สำคัญ: ตั้งค่า API Restrictions เพื่อความปลอดภัย**
   
   **Application restrictions:**
   - Development: `None`
   - Production: `HTTP referrers (web sites)`
     - ใส่: `https://yourusername.github.io/*`
     - ใส่: `http://localhost:8000/*` (สำหรับทดสอบ)
   
   **API restrictions:**
   - เลือก: `Restrict key`
   - เลือกเฉพาะ: `Google Sheets API`

4. คลิก Save

**📖 อ่านเพิ่มเติม:** [API-KEY-SECURITY.md](API-KEY-SECURITY.md) - คำแนะนำความปลอดภัย API Key

### Direct Link สำหรับรูปภาพ

แปลง Google Drive URL:
```
จาก: https://drive.google.com/file/d/FILE_ID/view
เป็น: https://drive.google.com/uc?id=FILE_ID&export=view
```

## 🐛 Troubleshooting

### Error: "Failed to fetch"

**สาเหตุ:** เปิดไฟล์จาก `file://` protocol

**วิธีแก้:**
```bash
python -m http.server 8000
```
แล้วเปิด `http://localhost:8000`

### Error: "403 Forbidden"

**สาเหตุ:** Google Sheet ไม่ได้ share หรือ API Key ผิด

**วิธีแก้:**
1. Share Google Sheet เป็น "Anyone with the link"
2. ตรวจสอบ API Key
3. ตรวจสอบว่าเปิดใช้งาน Google Sheets API แล้ว

### รูปไม่แสดง

**สาเหตุ:** URL รูปไม่ใช่ Direct Link

**วิธีแก้:**
- ใช้รูปแบบ: `https://drive.google.com/uc?id=FILE_ID&export=view`
- Share รูปทุกไฟล์เป็น "Anyone with the link"

ดูเพิ่มเติมที่ [docs/TROUBLESHOOTING.md](docs/TROUBLESHOOTING.md)

## 🚀 Deployment

### Netlify

1. ไปที่ [Netlify](https://www.netlify.com/)
2. ลาก folder ไปวาง
3. ได้ URL: `https://yoursite.netlify.app`

### Vercel

1. ติดตั้ง Vercel CLI:
```bash
npm install -g vercel
```

2. Deploy:
```bash
vercel
```

### GitHub Pages

1. Push code ไปยัง GitHub
2. Settings → Pages
3. เลือก branch → Save
4. ได้ URL: `https://yourusername.github.io/repo-name`

## 🔗 Integration with LINE

### LIFF Setup (Optional)

1. สร้าง LINE Official Account
2. สร้าง LIFF App ที่ [LINE Developers Console](https://developers.line.biz/)
3. แก้ไขในโค้ด:
```javascript
await liff.init({ liffId: 'YOUR-LIFF-ID' });
```

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Your Name**
- GitHub: [@yourusername](https://github.com/yourusername)
- Email: your.email@example.com

## 🙏 Acknowledgments

- LINE Design System
- Google Sheets API
- Font Awesome Icons

## 📞 Support

หากพบปัญหาหรือมีคำถาม:
- 📧 Email: your.email@example.com
- 🐛 [Create an Issue](https://github.com/yourusername/line-miniapp-ecommerce/issues)

## 🗺️ Roadmap

- [ ] เพิ่มระบบ payment gateway
- [ ] เชื่อมต่อกับ LINE Messaging API
- [ ] ระบบจัดการ order
- [ ] Admin dashboard
- [ ] Multi-language support

---

Made with ❤️ for LINE miniapp developers
