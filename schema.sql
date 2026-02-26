-- ==========================================
-- 1. สร้างตารางสำหรับเก็บข้อมูลสถานที่ (Places Table)
-- ==========================================

-- ตารางนี้จะเก็บข้อมูลสถานที่ทั้งหมด โดยแบ่งตามหมวดหมู่
CREATE TABLE IF NOT EXISTS locations (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,

-- category: จำกัดประเภทข้อมูล (tourist, restaurant, cafe, temple, festival)
category TEXT NOT NULL CHECK (
    category IN (
        'tourist',
        'restaurant',
        'cafe',
        'temple',
        'festival'
    )
),
name TEXT NOT NULL, -- ชื่อสถานที่ (เช่น สามพันโบก)
description TEXT NOT NULL, -- รายละเอียด (เช่น แกรนด์แคนยอนเมืองไทย...)
address TEXT NOT NULL, -- ที่อยู่ (เช่น อ.โพธิ์ไทร จ.อุบลราชธานี)
phone TEXT, -- เบอร์โทรศัพท์ (ใส่เป็นสายอักขระเพื่อรองรับขีดหรือช่องว่าง)

-- พิกัดทางภูมิศาสตร์สำหรับแสดงผลบนแผนที่ (Google Maps)
latitude DOUBLE PRECISION NOT NULL,
longitude DOUBLE PRECISION NOT NULL,

-- ลิงก์รูปภาพ: ต้องชี้ไปยัง Supabase Storage Bucket ที่เราสร้างขึ้น


image_url TEXT NOT NULL,                
  
  created_at TIMESTAMPTZ DEFAULT now()    -- บันทึกเวลาที่เพิ่มข้อมูลอัตโนมัติ
);

-- เพิ่ม Comment เพื่ออธิบายโครงสร้างตาราง (สำหรับนักพัฒนาคนอื่น)
COMMENT ON
TABLE locations IS 'ตารางเก็บข้อมูลสถานที่ท่องเที่ยวและร้านค้าในจังหวัดอุบลราชธานี';

COMMENT ON COLUMN locations.category IS 'ประเภทของสถานที่: tourist, restaurant, cafe, temple, festival';

COMMENT ON COLUMN locations.image_url IS 'URL รูปภาพจาก Supabase Storage (Public URL)';

-- ==========================================
-- 2. ตั้งค่าความปลอดภัย (Row Level Security - RLS)
-- ==========================================

-- เปิดใช้งาน RLS เพื่อควบคุมสิทธิ์การเข้าถึง
ALTER TABLE locations ENABLE ROW LEVEL SECURITY;

-- สร้าง Policy ให้ "ทุกคน" (รวมถึงคนที่ไม่ล็อกอิน) สามารถดึงข้อมูลไปแสดงผลได้ (Read-Only)
-- หมายเหตุ: หากต้องการให้เพิ่มข้อมูลจากแอปได้ ต้องเปลี่ยน Policy หรือใช้ Service Role
CREATE POLICY "Allow public read access" ON locations FOR
SELECT USING (true);

-- ==========================================
-- 3. คำสั่งล้างข้อมูล (Optional - ใช้กรณีต้องการรีเซ็ตโจทย์)
-- ==========================================
-- TRUNCATE TABLE locations;

-- ==========================================
-- 4. ตัวอย่างการเพิ่มข้อมูล (Sample Data)
-- หมายเหตุ: ต้องเปลี่ยน [YOUR_PROJECT_ID] เป็น ID ของคุณจริงๆ
-- ==========================================

/*
INSERT INTO locations (category, name, description, address, phone, latitude, longitude, image_url) VALUES
('tourist', 'สามพันโบก', 'แกรนด์แคนยอนเมืองไทย ร่องหินที่เกิดจากแรงน้ำกัดเซาะในช่วงฤดูน้ำหลาก', 'อ.โพธิ์ไทร จ.อุบลราชธานี', NULL, 15.7340, 105.4760, 
'https://[YOUR_PROJECT_ID].supabase.co/storage/v1/object/public/locations/sam-phan-bok.jpg'),

('temple', 'วัดศิรินธรวราราม (ภูพร้าว)', 'วัดเรืองแสง จุดเช็คอินที่สวยที่สุดยามค่ำคืน', 'อ.สิรินธร จ.อุบลราชธานี', NULL, 15.1481, 105.4704, 
'https://[YOUR_PROJECT_ID].supabase.co/storage/v1/object/public/locations/wat-phu-prao.jpg');
*/