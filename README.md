# Ubon Travel - ค้นพบเสน่ห์เมืองอุบล 🏯

แอปพลิเคชันแนะนำสถานที่ท่องเที่ยว ร้านอาหาร คาเฟ่ และงานประเพณี ในจังหวัดอุบลราชธานี พัฒนาด้วย React Native (Expo) และ Supabase

---

## 📸 ภาพตัวอย่างแอปพลิเคชัน

<div align="center">
  <img src="https://img5.pic.in.th/file/secure-sv1/c0bfd56c-0b2b-4280-8743-16b175f4a3b0.jpg" width="200" alt="Home Screen"/>
  <img src="https://img5.pic.in.th/file/secure-sv1/05272a50-7fd4-45b4-9785-2146db86be6f.jpg" width="200" alt="Detail Screen 1"/>
  <img src="https://img2.pic.in.th/f1a1a363-a828-4164-89c3-54646a50397e.jpg" width="200" alt="Detail Screen 2"/>
  <img src="https://img2.pic.in.th/1f2310f4-ccba-4623-9339-3ed0b1bb5a3d.jpg" width="200" alt="Location Map"/>
</div>





## 📊 โครงสร้างฐานข้อมูล (Database Schema)

ตาราง `locations` ถูกใช้เพื่อเก็บข้อมูลสถานที่ทั้งหมด โดยมีโครงสร้างดังนี้:

![Database Schema](https://img2.pic.in.th/Captured6bda5914c5d2c28.png)



---

## 🚀 เริ่มต้นใช้งาน (Getting Started)

### 1. ติดตั้ง Dependencies
```bash
npm install
```

### 2. ตั้งค่า Environment Variables
สร้างไฟล์ `.env` ที่ root directory และเพิ่มค่าจาก Supabase Project ของคุณ:
```env
EXPO_PUBLIC_SUPABASE_URL=https://xqhtmkuryegrnyxzztcb.supabase.co
EXPO_PUBLIC_SUPABASE_ANON_KEY=sb_publishable_-h-ay5q3xUd-o9r462bmhA_SZTs1EcG
```

### 3. รันแอปพลิเคชัน
```bash
npx expo start
```
    