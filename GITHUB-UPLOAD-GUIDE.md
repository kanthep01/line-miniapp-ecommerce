# 📤 คำแนะนำการอัปโหลดโค้ดไปยัง GitHub

## 🎯 เตรียมความพร้อม

### ขั้นตอนที่ 1: ติดตั้ง Git

#### Windows:
1. ดาวน์โหลด Git จาก: https://git-scm.com/download/win
2. ติดตั้งตามขั้นตอน (ใช้ค่า default ได้)
3. เปิด Command Prompt แล้วพิมพ์:
```bash
git --version
```

#### Mac:
```bash
# ใช้ Homebrew
brew install git

# หรือดาวน์โหลดจาก
https://git-scm.com/download/mac
```

#### Linux:
```bash
sudo apt-get install git
```

---

## 🚀 วิธีที่ 1: ผ่าน GitHub Desktop (แนะนำสำหรับมือใหม่)

### ขั้นตอน:

1. **ดาวน์โหลด GitHub Desktop**
   - ไปที่: https://desktop.github.com/
   - ติดตั้ง GitHub Desktop

2. **เข้าสู่ระบบ GitHub**
   - เปิด GitHub Desktop
   - Sign in ด้วย GitHub account

3. **สร้าง Repository ใหม่**
   - คลิก: File → New Repository
   - ชื่อ: `line-miniapp-ecommerce`
   - Description: `LINE miniapp for e-commerce with Google Sheets integration`
   - เลือก Local Path
   - Initialize with README: ❌ (ไม่ต้องเลือก เพราะมี README แล้ว)
   - คลิก: **Create Repository**

4. **คัดลอกไฟล์เข้า Repository**
   - คัดลอกไฟล์ทั้งหมดจาก Downloads ไปใส่ใน folder ที่สร้าง
   - ไฟล์ที่ต้องมี:
     - ✅ index.html
     - ✅ test-connection.html
     - ✅ README.md
     - ✅ LICENSE
     - ✅ .gitignore
     - ✅ วิธีแก้ปัญหา-Failed-to-fetch.md

5. **Commit Changes**
   - กลับไปที่ GitHub Desktop
   - จะเห็นไฟล์ทั้งหมดที่เพิ่มเข้ามา
   - Summary: `Initial commit - LINE miniapp ecommerce`
   - คลิก: **Commit to main**

6. **Publish to GitHub**
   - คลิก: **Publish repository**
   - เลือก: Public (หรือ Private ตามต้องการ)
   - คลิก: **Publish repository**

7. **เสร็จสิ้น! 🎉**
   - ไปดูได้ที่: `https://github.com/yourusername/line-miniapp-ecommerce`

---

## 💻 วิธีที่ 2: ผ่าน Command Line (สำหรับผู้ที่มีประสบการณ์)

### ขั้นตอนที่ 1: ตั้งค่า Git (ครั้งแรกเท่านั้น)

```bash
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"
```

### ขั้นตอนที่ 2: สร้าง Repository บน GitHub

1. ไปที่: https://github.com/new
2. Repository name: `line-miniapp-ecommerce`
3. Description: `LINE miniapp for e-commerce with Google Sheets integration`
4. Public หรือ Private
5. ❌ ไม่ต้องเลือก "Initialize this repository with a README"
6. คลิก: **Create repository**

### ขั้นตอนที่ 3: อัปโหลดโค้ด

```bash
# 1. ไปที่ folder ที่มีไฟล์
cd C:\path\to\your\folder

# 2. เริ่มต้น Git repository
git init

# 3. เพิ่มไฟล์ทั้งหมด
git add .

# 4. Commit
git commit -m "Initial commit - LINE miniapp ecommerce"

# 5. เชื่อมต่อกับ GitHub (แทนที่ yourusername)
git remote add origin https://github.com/yourusername/line-miniapp-ecommerce.git

# 6. เปลี่ยน branch เป็น main (ถ้ายังเป็น master)
git branch -M main

# 7. Push ขึ้น GitHub
git push -u origin main
```

### ขั้นตอนที่ 4: ตรวจสอบ

เปิด: `https://github.com/yourusername/line-miniapp-ecommerce`

---

## 🔐 สำคัญ: ซ่อน API Key

### ⚠️ อย่า Commit API Key ขึ้น GitHub!

ก่อน commit ให้ **ลบ API Key** ออกจากโค้ด:

```javascript
// ในไฟล์ index.html
const GOOGLE_SHEET_ID = 'YOUR_SHEET_ID';  // ← เปลี่ยนเป็นแบบนี้
const API_KEY = 'YOUR_API_KEY';            // ← เปลี่ยนเป็นแบบนี้
const SHEET_NAME = 'YOUR_SHEET_NAME';      // ← เปลี่ยนเป็นแบบนี้
```

แล้วใส่คำแนะนำใน README.md ว่าให้ user แทนที่ค่าเอง

---

## 🌐 เปิดใช้งาน GitHub Pages

### ทำให้เว็บเข้าถึงได้จาก URL สาธารณะ:

1. ไปที่ Repository ของคุณ
2. Settings → Pages
3. Source: เลือก `main` branch
4. Folder: `/ (root)`
5. คลิก: **Save**
6. รอ 1-2 นาที
7. เปิดได้ที่: `https://yourusername.github.io/line-miniapp-ecommerce/`

---

## 📝 อัปเดตโค้ดในภายหลัง

### ผ่าน GitHub Desktop:

1. แก้ไขไฟล์
2. เปิด GitHub Desktop
3. เขียน commit message
4. คลิก: **Commit to main**
5. คลิก: **Push origin**

### ผ่าน Command Line:

```bash
# 1. แก้ไขไฟล์

# 2. เช็คสถานะ
git status

# 3. เพิ่มไฟล์ที่แก้ไข
git add .

# 4. Commit
git commit -m "Update: เพิ่มฟีเจอร์ XYZ"

# 5. Push
git push
```

---

## 🔄 Clone Repository (ดาวน์โหลดโค้ดกลับมา)

```bash
git clone https://github.com/yourusername/line-miniapp-ecommerce.git
cd line-miniapp-ecommerce
```

---

## 📚 คำสั่ง Git พื้นฐาน

| คำสั่ง | คำอธิบาย |
|--------|----------|
| `git init` | เริ่มต้น Git repository |
| `git add .` | เพิ่มไฟล์ทั้งหมด |
| `git commit -m "message"` | บันทึกการเปลี่ยนแปลง |
| `git push` | อัปโหลดไปยัง GitHub |
| `git pull` | ดาวน์โหลดจาก GitHub |
| `git status` | เช็คสถานะ |
| `git log` | ดูประวัติ commit |
| `git clone <url>` | Clone repository |

---

## ❓ ถาม-ตอบ

### Q: ถ้าลืม push จะทำยังไง?
```bash
git push
```

### Q: ถ้าต้องการย้อนกลับการเปลี่ยนแปลง?
```bash
# ย้อนไฟล์ที่ยังไม่ commit
git checkout -- filename.html

# ย้อนไปยัง commit ก่อนหน้า
git reset --hard HEAD~1
```

### Q: ถ้า commit ผิดจะแก้ไขยังไง?
```bash
# แก้ไข commit message ล่าสุด
git commit --amend -m "message ใหม่"

# แก้ไขไฟล์ใน commit ล่าสุด
git add filename.html
git commit --amend --no-edit
```

### Q: ลบ API Key ที่ commit ไปแล้วจะทำยังไง?
```bash
# ลบจากประวัติ (ระวัง! จะเปลี่ยน history)
git filter-branch --force --index-filter \
  "git rm --cached --ignore-unmatch index.html" \
  --prune-empty --tag-name-filter cat -- --all

# Force push
git push origin --force --all
```
**หมายเหตุ:** API Key ที่เคย commit ไปถือว่ารั่วไหลแล้ว ควรสร้าง API Key ใหม่

---

## 🎓 เรียนรู้เพิ่มเติม

- 📖 [GitHub Guides](https://guides.github.com/)
- 📹 [Git & GitHub Tutorial (YouTube)](https://www.youtube.com/results?search_query=git+github+tutorial)
- 📝 [Git Cheat Sheet](https://education.github.com/git-cheat-sheet-education.pdf)

---

## 🆘 ต้องการความช่วยเหลือ?

- 💬 [GitHub Community](https://github.community/)
- 📚 [GitHub Documentation](https://docs.github.com/)
- 🐛 [Stack Overflow](https://stackoverflow.com/questions/tagged/git)

---

**สำเร็จ! โค้ดของคุณพร้อมแชร์กับโลกแล้ว! 🎉**
