# 🔐 การจัดการ API Key อย่างปลอดภัย

## ❓ คำถาม: ทำไมไม่ลบ API Key?

**คำตอบ:** ถ้าลบ API Key ออก web app จะดึงข้อมูลจาก Google Sheets **ไม่ได้เลย**

---

## 🎯 ความจริงเกี่ยวกับ API Key ใน Static Website

### ⚠️ สิ่งที่ต้องเข้าใจ:

1. **Static HTML = API Key จะโผล่ออกมาอยู่ดี**
   - เป็นไฟล์ HTML ธรรมดา (ไม่มี server)
   - ผู้ใช้เปิด View Source ก็เห็น API Key ได้
   - **ซ่อนไม่ได้จริงๆ**

2. **Google รู้เรื่องนี้**
   - Google ออกแบบ API Key สำหรับใช้ฝั่ง client
   - มีระบบ **API Restrictions** เพื่อป้องกัน
   - ตราบใดที่ตั้งค่าถูกต้อง = **ปลอดภัย**

---

## ✅ วิธีที่ถูกต้อง: ตั้งค่า API Restrictions

### ขั้นตอนการตั้งค่าความปลอดภัย:

#### 1. ไปที่ Google Cloud Console
👉 https://console.cloud.google.com/apis/credentials

#### 2. คลิกที่ API Key ของคุณ

#### 3. ตั้งค่า **Application restrictions**

**สำหรับ Development (ทดสอบ):**
```
Application restrictions: None
```

**สำหรับ Production (เว็บจริง):**
```
Application restrictions: HTTP referrers (web sites)

Website restrictions:
- https://yourusername.github.io/*
- http://localhost:8000/*

(ใส่ URL ที่เว็บคุณจะรันจริง)
```

#### 4. ตั้งค่า **API restrictions**

```
API restrictions: Restrict key

Selected APIs:
✅ Google Sheets API

(เลือกแค่ Sheets API เท่านั้น)
```

#### 5. คลิก **Save**

---

## 🛡️ ความปลอดภัยที่ได้:

| การโจมตี | ป้องกันได้ไหม | วิธีป้องกัน |
|----------|---------------|-------------|
| คนอื่นเห็น API Key | ❌ ป้องกันไม่ได้ | ไม่สามารถซ่อนใน static HTML |
| คนอื่นใช้ API Key | ✅ ป้องกันได้ | HTTP referrer restriction |
| เรียก API อื่น | ✅ ป้องกันได้ | API restriction |
| เกิน quota | ✅ ป้องกันได้ | Monitor usage + Set quota |

**สรุป:** ตราบใดที่ตั้งค่า restrictions ถูกต้อง = **ปลอดภัยพอ**

---

## 💰 การใช้งานและค่าใช้จ่าย

### Google Sheets API Quota:

```
ฟรี:
- 60 requests/minute/user
- 100 requests/100 seconds/user
- 500 requests/100 seconds/project
```

**สำหรับ web app นี้:**
- 1 request = 1 ครั้งที่โหลดหน้า
- ปกติไม่เกิน quota
- **ใช้ฟรีได้**

### Monitor Usage:

👉 https://console.cloud.google.com/apis/dashboard

ดู:
- จำนวน request ต่อวัน
- ถ้าเห็นแปลกๆ → มีคนใช้ผิดปกติ

---

## 🔄 ทางเลือกอื่น (ถ้าต้องการความปลอดภัยสูงสุด)

### วิธีที่ 2: ใช้ Backend Proxy

**สร้าง API ของตัวเอง:**

```javascript
// ไม่เรียก Google Sheets API โดยตรง
// แต่เรียกผ่าน API ของตัวเอง

// Frontend
const response = await fetch('https://your-backend.com/api/products');

// Backend (Node.js/Python/etc.)
// ซ่อน API Key ในฝั่ง server
// เรียก Google Sheets API แทน
```

**ข้อดี:**
- ✅ ซ่อน API Key ได้จริง
- ✅ ควบคุมได้เต็มที่

**ข้อเสีย:**
- ❌ ต้องมี server
- ❌ ซับซ้อนขึ้น
- ❌ อาจมีค่าใช้จ่าย hosting

**แนะนำสำหรับ:**
- โปรเจคใหญ่
- ข้อมูลสำคัญมาก
- มี budget

### วิธีที่ 3: ใช้ Google Apps Script

**สร้าง Web App จาก Google Apps Script:**

```javascript
// Google Apps Script
function doGet() {
  var sheet = SpreadsheetApp.openById('SHEET_ID');
  var data = sheet.getDataRange().getValues();
  return ContentService.createTextOutput(JSON.stringify(data))
    .setMimeType(ContentService.MimeType.JSON);
}
```

**Deploy as web app → ได้ URL**

```javascript
// Frontend
const response = await fetch('https://script.google.com/macros/s/.../exec');
```

**ข้อดี:**
- ✅ ไม่ต้องใช้ API Key
- ✅ ฟรี
- ✅ ควบคุม permissions ได้

**ข้อเสีย:**
- ❌ ช้ากว่า Sheets API
- ❌ มี quota น้อยกว่า
- ❌ ต้องเขียน Apps Script

---

## 🎯 แนะนำสำหรับโปรเจคนี้

### ✅ **ใช้ API Key + Restrictions** (วิธีที่ 1)

**เหมาะสำหรับ:**
- ข้อมูลไม่ sensitive (รายการสินค้า ราคา)
- โปรเจคเล็ก-กลาง
- ต้องการความเร็ว
- ไม่มี budget

**ตั้งค่าเหล่านี้:**
1. ✅ HTTP referrer restrictions
2. ✅ API restrictions (Sheets API only)
3. ✅ Monitor usage
4. ✅ ตั้ง quota alerts

**= ปลอดภัยพอสำหรับการใช้งานทั่วไป**

---

## 📋 Checklist ความปลอดภัย

### เมื่ออัปโหลดไปยัง GitHub:

- [x] ✅ เก็บ API Key ไว้ในโค้ด (ไม่ต้องลบ)
- [x] ✅ ตั้งค่า HTTP referrer restrictions
- [x] ✅ ตั้งค่า API restrictions
- [x] ✅ เขียนคำเตือนใน README.md
- [x] ✅ แนะนำวิธีตั้งค่าความปลอดภัย
- [ ] ⏳ Deploy to GitHub Pages
- [ ] ⏳ ใส่ URL จริงใน restrictions
- [ ] ⏳ Monitor usage

### เมื่อ Deploy แล้ว:

```
1. Deploy to GitHub Pages
2. ได้ URL: https://yourusername.github.io/line-miniapp-ecommerce/
3. ไปตั้งค่า HTTP referrer:
   https://yourusername.github.io/*
4. Save
5. ทดสอบว่าใช้งานได้
```

---

## 📊 เปรียบเทียบวิธีต่างๆ

| วิธี | ความปลอดภัย | ความยาก | ค่าใช้จ่าย | แนะนำ |
|------|------------|---------|-----------|-------|
| **API Key + Restrictions** | ⭐⭐⭐ | ⭐ | ฟรี | ✅ ใช้นี่ |
| Backend Proxy | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐ | มี | สำหรับโปรเจคใหญ่ |
| Apps Script | ⭐⭐⭐⭐ | ⭐⭐⭐ | ฟรี | ถ้าไม่ต้องการเร็ว |

---

## 🆘 ถาม-ตอบ

### Q: API Key รั่วไหลแล้วจะทำยังไง?

**A:** สร้าง API Key ใหม่:
1. ไปที่ Google Cloud Console
2. Delete API Key เก่า
3. Create API Key ใหม่
4. ตั้งค่า restrictions
5. แทนที่ในโค้ด

### Q: คนอื่นเห็น API Key แล้วไปใช้ได้ไหม?

**A:** ใช้ไม่ได้ถ้าตั้งค่า HTTP referrer restrictions
- API Key จะใช้งานได้แค่จาก URL ที่กำหนด
- เรียกจากที่อื่น → Error 403

### Q: ควรใส่ชื่อ API Key เป็นอะไร?

**A:** ใส่ชื่อที่บอกที่ใช้งาน:
- `line-miniapp-production`
- `ntshop-github-pages`
- `ecommerce-website-prod`

---

## 📝 สรุป

### ❌ อย่าทำ:
- ลบ API Key ออก (จะใช้งานไม่ได้)
- ใช้ API Key แบบไม่มี restrictions
- เพิกเฉยต่อ usage monitoring

### ✅ ทำ:
- **เก็บ API Key ไว้ในโค้ด**
- **ตั้งค่า HTTP referrer restrictions**
- **ตั้งค่า API restrictions**
- Monitor usage เป็นประจำ
- สร้าง API Key ใหม่ถ้าสงสัย

---

**สำหรับโปรเจคนี้ = ใช้ API Key + Restrictions = ปลอดภัยพอ ✅**
