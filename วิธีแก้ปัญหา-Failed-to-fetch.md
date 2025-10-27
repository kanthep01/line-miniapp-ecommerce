# 🔧 แก้ไขปัญหา "Failed to fetch"

## ❌ Error ที่พบ:
```
Error loading products: Error: Failed to fetch
```

---

## 🎯 สาเหตุและวิธีแก้ไข

### ปัญหาที่ 1: 🌐 CORS Error (เปิดไฟล์จาก file://)

**สาเหตุ:**
- เปิดไฟล์ HTML โดยตรงจาก File Explorer (double-click)
- URL เป็น `file:///C:/Users/...` แทนที่จะเป็น `http://...`
- Browser block การเรียก API จาก file:// protocol

**วิธีแก้:**

#### ✅ วิธีที่ 1: ใช้ Python Web Server (แนะนำ)
```bash
# เปิด Command Prompt / Terminal ที่ folder ที่มีไฟล์ HTML
cd C:\path\to\your\folder

# รัน web server
python -m http.server 8000

# เปิดเบราว์เซอร์ไปที่:
http://localhost:8000/line-ecommerce-debug.html
```

#### ✅ วิธีที่ 2: ใช้ VS Code Live Server
1. ติดตั้ง VS Code
2. ติดตั้ง Extension: "Live Server"
3. คลิกขวาที่ไฟล์ HTML → "Open with Live Server"

#### ✅ วิธีที่ 3: อัปโหลดไปยัง Hosting (สำหรับ Production)

**Netlify (ฟรี):**
1. ไปที่ https://www.netlify.com/
2. ลาก folder ที่มีไฟล์ HTML ไปวาง
3. ได้ URL แบบ: `https://yoursite.netlify.app`

**Vercel (ฟรี):**
1. ไปที่ https://vercel.com/
2. อัปโหลดไฟล์
3. ได้ URL แบบ: `https://yoursite.vercel.app`

**GitHub Pages (ฟรี):**
1. สร้าง repository บน GitHub
2. อัปโหลดไฟล์ HTML
3. เปิด Settings → Pages
4. เลือก branch → Save
5. ได้ URL แบบ: `https://yourusername.github.io/repo-name`

---

### ปัญหาที่ 2: 🔒 Google Sheet ไม่ได้ Share

**วิธีแก้:**
1. เปิด Google Sheets
2. คลิก **"Share"** (มุมขวาบน)
3. เปลี่ยนเป็น **"Anyone with the link"**
4. สิทธิ์: **Viewer**
5. คลิก **"Done"**

**ตรวจสอบ:**
- เปิด Incognito/Private Window
- ลองเปิด URL: `https://docs.google.com/spreadsheets/d/YOUR_SHEET_ID`
- ถ้าเปิดได้ = ✅ Share ถูกต้อง

---

### ปัญหาที่ 3: 🔑 API Key ไม่ถูกต้อง

**วิธีตรวจสอบ:**
1. ไปที่ https://console.cloud.google.com/apis/credentials
2. คลิกที่ API Key ของคุณ
3. เช็คว่า:
   - ✅ Status = **Enabled**
   - ✅ API restrictions = **Google Sheets API** (ควรมี)
   - ✅ ไม่มี IP/Referrer restrictions (ถ้าทดสอบ)

**วิธีแก้:**
- คัดลอก API Key ใหม่
- ใส่ใน code บรรทัดที่ 407

---

### ปัญหาที่ 4: 🚫 Google Sheets API ไม่ได้เปิด

**วิธีเปิด:**
1. ไปที่ https://console.cloud.google.com/apis/library
2. ค้นหา **"Google Sheets API"**
3. คลิก **"Enable"**

**ตรวจสอบ:**
- ไปที่ https://console.cloud.google.com/apis/dashboard
- ดูว่ามี **Google Sheets API** ใน Enabled APIs

---

### ปัญหาที่ 5: ❌ ชื่อ Sheet ไม่ถูกต้อง

**วิธีตรวจสอบ:**
1. เปิด Google Sheets
2. ดูแถบด้านล่างซ้าย
3. ชื่อ Sheet = **"ntshop list"** (ตรงตัว space ด้วย)

**ถ้าชื่อไม่ตรง:**
- แก้ไขชื่อใน Sheet
- หรือแก้ไขในโค้ดบรรทัดที่ 408:
```javascript
const SHEET_NAME = 'ชื่อ-sheet-ของคุณ';
```

---

## 🔍 วิธี Debug

### ขั้นตอนที่ 1: เปิด Console
1. กด **F12**
2. เลือกแท็บ **"Console"**
3. ดู log ที่แสดง

### ขั้นตอนที่ 2: อ่าน Error Message

**ตัวอย่าง Error:**

```
❌ 404 Not Found
→ Sheet ID ผิด หรือ Sheet ไม่มีจริง

❌ 403 Forbidden
→ API Key ผิด หรือ Sheet ไม่ได้ share

❌ 400 Bad Request
→ ชื่อ Sheet ผิด

❌ Failed to fetch
→ CORS issue หรือ Network error
```

### ขั้นตอนที่ 3: ทดสอบ API ด้วยมือ

เปิด URL นี้ในเบราว์เซอร์:
```
https://sheets.googleapis.com/v4/spreadsheets/YOUR_SHEET_ID/values/ntshop%20list?key=YOUR_API_KEY
```

แทนที่:
- `YOUR_SHEET_ID` = Sheet ID ของคุณ
- `YOUR_API_KEY` = API Key ของคุณ
- `ntshop%20list` = ชื่อ sheet (%20 = space)

**ถ้าเห็นข้อมูล JSON = ✅ API ทำงาน**
**ถ้าเห็น error = ❌ แก้ไขตาม error message**

---

## 📋 Checklist การแก้ปัญหา

### เช็คพื้นฐาน:
- [ ] ใช้ web server (ไม่เปิดจาก file://)
- [ ] Google Sheet share เป็น "Anyone with the link"
- [ ] API Key ถูกต้องและ Enable
- [ ] Google Sheets API เปิดใช้งานแล้ว
- [ ] ชื่อ Sheet ตรง (case-sensitive)
- [ ] Sheet ID ถูกต้อง

### เช็คใน Console (F12):
- [ ] ไม่มี CORS error
- [ ] HTTP Status = 200 (สำเร็จ)
- [ ] มีข้อมูล products โหลดมา
- [ ] รูปภาพโหลดได้

---

## 💡 ทดสอบอย่างรวดเร็ว

### Test 1: API Key + Sheet ID
```bash
# แทนที่ค่าแล้วรันใน browser หรือ curl
curl "https://sheets.googleapis.com/v4/spreadsheets/1PC-SmUUHBCB4VXIKi3LCroUQEE6sJQG_sO54fNvpqoA/values/ntshop%20list?key=AIzaSyBuBES7W1M-aWW2MR3okOyEJPV9VBitkrs"
```

### Test 2: Python Server
```bash
# ต้องอยู่ใน folder เดียวกับไฟล์ HTML
python -m http.server 8000

# เปิดเบราว์เซอร์
# http://localhost:8000/line-ecommerce-debug.html
```

---

## 🎯 แนะนำ: ลำดับการแก้ไข

1. **ลำดับแรก:** ใช้ web server (Python)
2. **ลำดับที่สอง:** ตรวจสอบ Google Sheet share
3. **ลำดับที่สาม:** ตรวจสอบ API Key
4. **ลำดับที่สี่:** เช็ค Console error
5. **สุดท้าย:** ทดสอบ API โดยตรง

---

## 📞 ยังไม่ได้?

ส่งภาพหน้าจอของ:
1. Console (F12 → Console tab)
2. Network tab (F12 → Network → กด refresh)
3. หน้าจอ Error ที่เห็น

แล้วจะช่วยแก้ไขให้ครับ! 😊
