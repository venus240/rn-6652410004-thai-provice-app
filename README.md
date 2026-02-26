# Ubon Travel - ค้นพบเสน่ห์เมืองอุบล 🏯

แอปพลิเคชันแนะนำสถานที่ท่องเที่ยว ร้านอาหาร คาเฟ่ และงานประเพณี ในจังหวัดอุบลราชธานี พัฒนาด้วย React Native (Expo) และ Supabase

---

## 📸 ภาพตัวอย่างแอปพลิเคชัน

<div align="center">
  <img src="https://pic.in.th/image/c0bfd56c-0b2b-4280-8743-16b175f4a3b0.6Cqu03" width="200" alt="Home Screen"/>
  <img src="https://pic.in.th/image/05272a50-7fd4-45b4-9785-2146db86be6f.6CqEfD" width="200" alt="Detail Screen 1"/>
  <img src="https://pic.in.th/image/f1a1a363-a828-4164-89c3-54646a50397e.6CqcKN" width="200" alt="Detail Screen 2"/>
  <img src="https://pic.in.th/image/1f2310f4-ccba-4623-9339-3ed0b1bb5a3d.6Cqwaa" width="200" alt="Location Map"/>
</div>

---

## ✨ คุณสมบัติเด่น (Features)

- **ค้นหาสถานที่แยกตามหมวดหมู่**: สถานที่ท่องเที่ยว, ร้านอาหาร, คาเฟ่, วัด และงานประเพณี
- **ข้อมูลพิกัดและแผนที่**: เชื่อมต่อกับ Google Maps เพื่อนำทางไปยังสถานที่จริง
- **ข้อมูลเจาะลึก**: แสดงรายละเอียดสถานที่, เบอร์โทรศัพท์ และที่อยู่
- **หน้าแรกสุดพรีเมียม**: ระบบ Widget แสดงวันและสภาพอากาศ พร้อมดีไซน์ Glassmorphism
- **Real-time Data**: ข้อมูลถูกจัดการผ่าน Supabase Backend

---

## 🛠 เทคโนโลยีที่ใช้ (Tech Stack)

- **Frontend**: React Native (Expo SDK 54)
- **Language**: TypeScript
- **Navigation**: React Navigation (Stack)
- **Backend & Database**: Supabase (PostgreSQL)
- **Styling**: Vanilla Stylesheet with Premium Design Tokens
- **Icons**: @expo/vector-icons (MaterialCommunityIcons)

---

## 📊 โครงสร้างฐานข้อมูล (Database Schema)

ตาราง `locations` ถูกใช้เพื่อเก็บข้อมูลสถานที่ทั้งหมด โดยมีโครงสร้างดังนี้:

![Database Schema](https://img2.pic.in.th/Captured6bda5914c5d2c28.png)

```sql
CREATE TABLE locations (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  category TEXT NOT NULL CHECK (category IN ('tourist', 'restaurant', 'cafe', 'temple', 'festival')),
  name TEXT NOT NULL,
  description TEXT NOT NULL,
  address TEXT NOT NULL,
  phone TEXT,
  latitude DOUBLE PRECISION NOT NULL,
  longitude DOUBLE PRECISION NOT NULL,
  image_url TEXT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT now()
);
```

---

## 🚀 เริ่มต้นใช้งาน (Getting Started)

### 1. ติดตั้ง Dependencies
```bash
npm install
```

### 2. ตั้งค่า Environment Variables
สร้างไฟล์ `.env` ที่ root directory และเพิ่มค่าจาก Supabase Project ของคุณ:
```env
EXPO_PUBLIC_SUPABASE_URL=YOUR_SUPABASE_URL
EXPO_PUBLIC_SUPABASE_ANON_KEY=YOUR_SUPABASE_ANON_KEY
```

### 3. รันแอปพลิเคชัน
```bash
npx expo start
```

---

## 📁 โครงสร้างโปรเจกต์
- `/src/screens`: หน้าจอหลักของแอป (Home, List, Detail)
- `/src/constants`: ไฟล์เก็บค่าคงที่ เช่น สี (theme), ข้อมูลจังหวัด (province)
- `/src/services`: การเชื่อมต่อกับ Supabase
- `/src/types`: การกำหนด Interface และ Types ต่างๆ

---
❤️ พัฒนาขึ้นเพื่อส่งเสริมการท่องเที่ยวจังหวัดอุบลราชธานี
