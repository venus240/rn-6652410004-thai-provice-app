# คู่มือการตั้งค่า Supabase และ Storage (ฉบับละเอียด)

ไฟล์นี้จะแนะนำขั้นตอนการตั้งค่าฐานข้อมูลและระบบจัดเก็บรูปภาพ (Storage) สำหรับแอปพลิเคชันแนะนำจังหวัดอุบลราชธานี

---

## 1. การตั้งค่า Database (SQL Editor)

ไปที่ Supabase Dashboard → **SQL Editor** แล้วรันคำสั่ง SQL ด้านล่างนี้ เพื่อสร้างตารางและตั้งค่าสิทธิ์การเข้าถึง

### 1.1 สร้างตาราง `locations`
ตารางนี้ใช้สำหรับเก็บข้อมูลสถานที่ท่องเที่ยว ร้านอาหาร และอื่น ๆ

```sql
-- สร้างตาราง locations
CREATE TABLE IF NOT EXISTS locations (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  
  -- หมวดหมู่: จำกัดเฉพาะค่าที่กำหนด
  category TEXT NOT NULL CHECK (category IN ('tourist', 'restaurant', 'cafe', 'temple', 'festival')),
  
  name TEXT NOT NULL,                -- ชื่อสถานที่
  description TEXT NOT NULL,         -- รายละเอียดเบื้องต้น
  address TEXT NOT NULL,             -- ที่อยู่/ตำแหน่ง
  phone TEXT,                        -- เบอร์โทรศัพท์ (ใส่เป็นสายอักขระเพื่อรองรับขีดหรือช่องว่าง)
  
  -- พิกัดสำหรับ Google Maps
  latitude DOUBLE PRECISION NOT NULL,
  longitude DOUBLE PRECISION NOT NULL,
  
  -- URL รูปภาพ (จะดึงมาจาก Supabase Storage)
  image_url TEXT NOT NULL,           
  
  created_at TIMESTAMPTZ DEFAULT now() -- วันที่สร้างข้อมูล
);

-- เพิ่ม Comment เพื่ออธิบายคอลัมน์ (เพื่อความละเอียด)
COMMENT ON COLUMN locations.category IS 'ประเภทของสถานที่: tourist, restaurant, cafe, temple, festival';
COMMENT ON COLUMN locations.image_url IS 'ลิงก์รูปภาพที่เก็บไว้ใน Supabase Storage หรือ Public URL';
```

### 1.2 ตั้งค่าความปลอดภัย (Row Level Security - RLS)
เพื่อให้แอปพลิเคชันสามารถดึงข้อมูลได้ (Public Read)

```sql
-- เปิดใช้งาน RLS
ALTER TABLE locations ENABLE ROW LEVEL SECURITY;

-- สร้าง Policy ให้ทุกคนสามารถอ่านข้อมูลได้ (Read-Only)
CREATE POLICY "Allow public read content" ON locations
  FOR SELECT USING (true);
```

---

## 2. การตั้งค่า Storage (ระบบเก็บรูปภาพ)

เนื่องจากคุณต้องการใช้รูปภาพจาก **Supabase Storage** แทนลิงก์จากเว็บอื่น ให้ทำตามขั้นตอนดังนี้:

### 2.1 สร้าง Bucket
1. ไปที่เมนู **Storage** ใน Supabase Dashboard
2. คลิกปุ่ม **New Bucket**
3. ตั้งชื่อว่า `locations` (หรือชื่ออื่นที่คุณต้องการ แต่ในโค้ดจะใช้ชื่อนี้)
4. **สำคัญ:** ติ๊กถูกที่ช่อง **Public bucket** (เพื่อให้แอปเข้าถึงรูปภาพได้โดยไม่ต้องใช้ Token ซับซ้อน)

### 2.2 ตั้งค่า RLS สำหรับ Storage
เพื่อให้แอปสามารถแสดงผลรูปภาพได้

1. ในหน้า Storage คลิกที่ **Policies**
2. ในส่วนของ `locations` bucket คลิก **New Policy**
3. เลือก **Get started quickly** และเลือก **Give public access to all users** (Select)
4. กด **Save**

### 2.3 การอัปโหลดและดึง URL
1. อัปโหลดรูปภาพของคุณเข้าไปใน bucket `locations` (เช่น `sam-phan-bok.jpg`)
2. รูปแบบ URL ของคุณจะเป็นดังนี้:
   `https://[PROJECT_REF].supabase.co/storage/v1/object/public/locations/[FILE_NAME]`

---

## 3. การเพิ่มข้อมูลตัวอย่าง (Insert Data)

**คำแนะนำ:** ก่อนรันคำสั่งด้านล่างนี้ ให้คุณเปลี่ยน `YOUR_PROJECT_ID` เป็น ID ของโปรเจกต์ Supabase ของคุณเอง

```sql
-- แทนที่ YOUR_PROJECT_ID ด้วย ID จริงของคุณ (เช่น abcdefghijklmnopqrst)
-- รูปภาพในตัวอย่างนี้สมมติว่าคุณอัปโหลดไฟล์ชื่อเดียวกับสถานที่เข้า bucket 'places' แล้ว

INSERT INTO locations (category, name, description, address, phone, latitude, longitude, image_url) VALUES

-- สถานที่ท่องเที่ยว (tourist)
('tourist', 'สามพันโบก', 'แกรนด์แคนยอนเมืองไทย ร่องหินที่เกิดจากแรงน้ำกัดเซาะในช่วงฤดูน้ำหลาก', 'อ.โพธิ์ไทร จ.อุบลราชธานี', NULL, 15.7340, 105.4760, 
 'https://xqhtmkuryegrnyxzztcb.supabase.co/storage/v1/object/public/locations/sam-phan-bok.jpg'),

('tourist', 'ผาแต้ม', 'อุทยานแห่งชาติที่มีชื่อเสียงด้านภาพเขียนสีก่อนประวัติศาสตร์', 'อ.โขงเจียม จ.อุบลราชธานี', '045-249-780', 15.3986, 105.5186, 
 'https://xqhtmkuryegrnyxzztcb.supabase.co/storage/v1/object/public/locations/pha-taem.jpg'),

-- ร้านอาหาร (restaurant)
('restaurant', 'ร้านอินโดจีน', 'ร้านอาหารเก่าแก่ชื่อดัง เมนูยอดฮิตคือ แหนมเนือง และอาหารพื้นเมือง', 'ถ.สรรพสิทธิ์ อ.เมือง จ.อุบลราชธานี', '045-245-584', 15.2312, 104.8510, 
 'https://xqhtmkuryegrnyxzztcb.supabase.co/storage/v1/object/public/locations/indo-chinese-restaurant.jpg'),

-- วัด (temple)
('temple', 'วัดศิรินธรวราราม (ภูพร้าว)', 'วัดเรืองแสง จุดเช็คอินที่สวยที่สุดยามค่ำคืน', 'อ.สิรินธร จ.อุบลราชธานี', NULL, 15.1481, 105.4704, 
 'https://xqhtmkuryegrnyxzztcb.supabase.co/storage/v1/object/public/locations/wat-phu-prao.jpg'),

('temple', 'วัดหนองบัว', 'วัดที่มีเจดีย์จำลองจากมหาโพธิพุทธคยา ประเทศอินเดีย สวยงามตระการตา', 'อ.เมือง จ.อุบลราชธานี', NULL, 15.2446, 104.8468, 
 'https://xqhtmkuryegrnyxzztcb.supabase.co/storage/v1/object/public/locations/wat-nong-bua.jpg');
```

---

## 4. สรุปความสัมพันธ์ของข้อมูล

| Table Field | Storage Bucket | ความสัมพันธ์ |
| :--- | :--- | :--- |
| `image_url` | `locations` | เก็บ URL เต็มรูปแบบที่ชี้ไปยังไฟล์ใน Bucket |

---

## 5. การตรวจสอบความเรียบร้อย
1. ตรวจสอบที่เมนู **Table Editor** ว่าข้อมูลเข้าครบถ้วนไหม
2. ลองคัดลอกลิงก์จากคอลัมน์ `image_url` ไปวางใน Browser ว่ารูปขึ้นหรือไม่
3. หากรูปไม่ขึ้น ให้เช็คว่า Bucket ตั้งเป็น **Public** หรือยัง?
