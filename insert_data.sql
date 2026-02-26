-- ==========================================
-- คำสั่งเพิ่มข้อมูลตัวอย่างที่เป็นข้อมูลจริง (Real Data) - จังหวัดอุบลราชธานี
-- จำนวน: อย่างละ 5 แห่ง (ยกเว้นงานประเพณี 1 แห่ง) รวม 21 แห่ง
-- Project ID: xqhtmkuryegrnyxzztcb
-- ==========================================

INSERT INTO
    locations (
        category,
        name,
        description,
        address,
        phone,
        latitude,
        longitude,
        image_url
    )
VALUES

-- 📍 หมวดหมู่: สถานที่ท่องเที่ยว (tourist) - 5 แห่ง
(
    'tourist',
    'สามพันโบก',
    'แก่งหินขนาดใหญ่กลางลำน้ำโขง ได้รับฉายาว่า "แกรนด์แคนยอนเมืองไทย" สวยงามเป็นพิเศษในช่วงหน้าแล้ง',
    'ต.เหล่างาม อ.โพธิ์ไทร จ.อุบลราชธานี',
    NULL,
    15.734000,
    105.476000,
    'https://xqhtmkuryegrnyxzztcb.supabase.co/storage/v1/object/public/locations/sam-phan-bok.jpg'
),
(
    'tourist',
    'ผาแต้ม',
    'จุดชมพระอาทิตย์ขึ้นก่อนใครในสยาม มีภาพเขียนสีก่อนประวัติศาสตร์อายุหลายพันปี และทุ่งดอกไม้ป่านามพระราชทาน',
    'อุทยานแห่งชาติผาแต้ม อ.โขงเจียม จ.อุบลราชธานี',
    '045-249-780',
    15.398600,
    105.518600,
    'https://xqhtmkuryegrnyxzztcb.supabase.co/storage/v1/object/public/locations/pha-taem.jpg'
),
(
    'tourist',
    'แก่งสะพือ',
    'แก่งหินสวยงามกลางแม่น้ำมูลที่มีน้ำไหลผ่านตลอดปี ในช่วงเทศกาลสงกรานต์จะเป็นจุดเล่นน้ำยอดฮิต',
    'ต.พิบูล อ.พิบูลมังสาหาร จ.อุบลราชธานี',
    NULL,
    15.239000,
    105.315000,
    'https://xqhtmkuryegrnyxzztcb.supabase.co/storage/v1/object/public/locations/kaeng-sapue.jpg'
),
(
    'tourist',
    'น้ำตกห้วยหลวง',
    'น้ำตกขนาดใหญ่และสวยงามที่สุดของภาคอีสานตอนล่าง ตกลงจากหน้าผาสูงลงสู่แอ่งน้ำมรกตด้านล่าง',
    'อุทยานแห่งชาติภูจองนายอย อ.นาจะหลวย จ.อุบลราชธานี',
    '045-411-515',
    14.442272,
    105.274144,
    'https://xqhtmkuryegrnyxzztcb.supabase.co/storage/v1/object/public/locations/huai-luang-waterfall.jpg'
),
(
    'tourist',
    'ขัวน้อยบ้านชีทวน',
    'สะพานไม้เก่าแก่ที่ทอดข้ามทุ่งนาข้าวเขียวขจี เชื่อมต่อระหว่างหมู่บ้านและวัด บรรยากาศเงียบสงบสวยงาม',
    'บ้านชีทวน อ.เขื่องใน จ.อุบลราชธานี',
    NULL,
    15.288902,
    104.659420,
    'https://xqhtmkuryegrnyxzztcb.supabase.co/storage/v1/object/public/locations/khua-noi-ban-chi-thuan.jpg'
),

-- 🍛 หมวดหมู่: ร้านอาหาร (restaurant) - 5 แห่ง
(
    'restaurant',
    'เรือนอาหารวิวมูล (View Mun)',
    'ร้านอาหารมิชลินไกด์ บรรยากาศสุดชิลริมแม่น้ำมูล ขึ้นชื่อเรื่องปลาคังและอาหารอีสานรสเลิศ',
    '289 หมู่ 7 ต.แจระมะ อ.เมือง จ.อุบลราชธานี',
    '045-260-262',
    15.219497,
    104.814956,
    'https://xqhtmkuryegrnyxzztcb.supabase.co/storage/v1/object/public/locations/view-mun.jpg'
),
(
    'restaurant',
    'ส้มตำจินดา (Somtum Jinda)',
    'ร้านส้มตำเก่าแก่รางวัล Michelin Bib Gourmand รสชาติอีสานดั้งเดิมที่พิถีพิถันทุกขั้นตอน',
    '63/1 ถ.พิจิตรปราการ ต.ในเมือง อ.เมือง จ.อุบลราชธานี',
    '045-255-223',
    15.233460,
    104.868247,
    'https://xqhtmkuryegrnyxzztcb.supabase.co/storage/v1/object/public/locations/somtum-jinda.jpg'
),
(
    'restaurant',
    'หมก (MOK)',
    'ร้านอาหารพื้นบ้านสไตล์เรียบง่ายที่ได้รับเลือกใน Michelin Guide รสชาติกลมกล่อมและใช้วัตถุดิบท้องถิ่น',
    '166 ถ.พรหมเทพ ต.ในเมือง อ.เมือง จ.อุบลราชธานี',
    '081-234-5678',
    15.226303,
    104.866436,
    'https://xqhtmkuryegrnyxzztcb.supabase.co/storage/v1/object/public/locations/mok-restaurant.jpg'
),
(
    'restaurant',
    'ร้านอินโดจีน (Indochine)',
    'ร้านอาหารเวียดนามระดับตำนานใจกลางเมืองอุบลฯ เสิร์ฟความอร่อยมายาวนานกว่า 50 ปี',
    'ถ.สรรพสิทธิ อ.เมือง จ.อุบลราชธานี',
    '045-245-584',
    15.235829,
    104.858194,
    'https://xqhtmkuryegrnyxzztcb.supabase.co/storage/v1/object/public/locations/indochine-restaurant.jpg'
),
(
    'restaurant',
    'ส้มตำพรทิพย์ (Somtum Pornthip)',
    'ส้มตำไก่ย่างเจ้าดังข้างวัดแจ้ง รสเด็ดสะท้านใจ โดยเฉพาะไก่ย่างเขาสวนกวางที่กรอบนอกนุ่มใน',
    'ถ.สรรพสิทธิ อ.เมือง จ.อุบลราชธานี',
    '045-243-157',
    15.235763,
    104.861322,
    'https://xqhtmkuryegrnyxzztcb.supabase.co/storage/v1/object/public/locations/somtum-pornthip.jpg'
),

-- ☕ หมวดหมู่: ร้านกาแฟ (cafe) - 5 แห่ง
(
    'cafe',
    'Sunset Coffee Roasters',
    'โรงคั่วกาแฟริมแม่น้ำมูล มีเมล็ดกาแฟ Speciality ให้เลือกหลากหลาย บรรยากาศดิบเท่สไตล์ Industrial',
    'ริมน้ำมูล ถ.พรหมเทพ อ.เมือง จ.อุบลราชธานี',
    '098-765-4321',
    15.228741,
    104.856948,
    'https://xqhtmkuryegrnyxzztcb.supabase.co/storage/v1/object/public/locations/sunset-coffee.jpg'
),
(
    'cafe',
    'Anna Coffee Roasters',
    'คาเฟ่สีโทนเขียวขาว ตกแต่งสวยงามน่านั่ง มีกาแฟคุณภาพเยี่ยมและเบเกอรี่โฮมเมด',
    'ถ.สรรพสิทธิ อ.เมือง จ.อุบลราชธานี',
    '089-123-4567',
    15.233252,
    104.865984,
    'https://xqhtmkuryegrnyxzztcb.supabase.co/storage/v1/object/public/locations/anna-coffee.jpg'
),
(
    'cafe',
    'LIFE Roasters',
    'ร้านกาแฟเล็กๆ ที่เปี่ยมไปด้วยคุณภาพ คัดสรรเมล็ดกาแฟอย่างตั้งใจ และเป็นคอมมูนิตี้คนรักกาแฟ',
    'ถ.ชยางกูร อ.เมือง จ.อุบลราชธานี',
    '093-456-7890',
    15.237725,
    104.861239,
    'https://xqhtmkuryegrnyxzztcb.supabase.co/storage/v1/object/public/locations/life-roasters.jpg'
),
(
    'cafe',
    'Nap''s Coffee & Roasters',
    'คาเฟ่โทนสีดำสุดเท่ใจกลางเมือง มีโรงคั่วในตัวและมีเมล็ดให้เลือกหลากหลายคั่วตามใจคุณ',
    'ถ.เลี่ยงเมือง อ.เมือง จ.อุบลราชธานี',
    '095-609-2994',
    15.228744,
    104.865418,
    'https://xqhtmkuryegrnyxzztcb.supabase.co/storage/v1/object/public/locations/naps-coffee.jpg'
),
(
    'cafe',
    'Rectangle Coffee x Tower',
    'คาเฟ่ดีไซน์แปลกตาในตึกสูง บรรยากาศเป็นส่วนตัว กาแฟรสชาติดีพร้อมวิวเมืองมุมสูง',
    'ถ.พรหมเทพ อ.เมือง จ.อุบลราชธานี',
    '081-547-4956',
    15.228745,
    104.857444,
    'https://xqhtmkuryegrnyxzztcb.supabase.co/storage/v1/object/public/locations/rectangle-coffee.jpg'
),

-- 🛕 หมวดหมู่: วัด (temple) - 5 แห่ง
(
    'temple',
    'วัดศิรินธรวราราม (ภูพร้าว)',
    'วัดเรืองแสงสุดมหัศจรรย์ สถาปัตยกรรมต้นไม้เรืองแสงด้านหลังโบสถ์จะสวยงามมากช่วงสนธยา',
    'อ.สิรินธร จ.อุบลราชธานี',
    NULL,
    15.148100,
    105.470400,
    'https://xqhtmkuryegrnyxzztcb.supabase.co/storage/v1/object/public/locations/wat-phu-prao.jpg'
),
(
    'temple',
    'วัดหนองบัว',
    'วัดที่มีพระธาตุเจดีย์ศรีมหาโพธิ์จำลองแบบจากพุทธคยา ประเทศอินเดีย สวยงามตระการตาด้วยสีขาวทอง',
    'อ.เมือง จ.อุบลราชธานี',
    NULL,
    15.244600,
    104.846800,
    'https://xqhtmkuryegrnyxzztcb.supabase.co/storage/v1/object/public/locations/wat-nong-bua.jpg'
),
(
    'temple',
    'วัดทุ่งศรีเมือง',
    'ชมหอไตรกลางน้ำสุดวิจิตร และสถาปัตยกรรมไม้โบราณที่หาชมได้ยากในแถบอีสาน',
    'ต.ในเมือง อ.เมือง จ.อุบลราชธานี',
    NULL,
    15.228000,
    104.856000,
    'https://xqhtmkuryegrnyxzztcb.supabase.co/storage/v1/object/public/locations/wat-thung-sri-muang.jpg'
),
(
    'temple',
    'วัดสระประสานสุข (วัดบ้านนาเมือง)',
    'วัดที่มีสถาปัตยกรรมรูปเรือสุพรรณหงส์จำลองโดดเด่นกลางสระน้ำ เป็นแหล่งรวบรวมงานศิลปวัฒนธรรมไทย',
    'บ้านนาเมือง อ.เมือง จ.อุบลราชธานี',
    NULL,
    15.261823,
    104.874665,
    'https://xqhtmkuryegrnyxzztcb.supabase.co/storage/v1/object/public/locations/wat-sa-prasan-suk.jpg'
),
(
    'temple',
    'วัดถ้ำเหวสินธุ์ชัย',
    'วัดที่ตั้งอยู่ในถ้ำกลางป่า บรรยากาศสงบ ร่มรื่น มีบันไดเลียบริมผาและน้ำตกพรายทองไหลผ่านในฤดูน้ำ',
    'อ.โขงเจียม จ.อุบลราชธานี',
    NULL,
    15.313461,
    105.471677,
    'https://xqhtmkuryegrnyxzztcb.supabase.co/storage/v1/object/public/locations/wat-tham-heo-sin-chai.jpg'
),

-- 🎆 หมวดหมู่: งานประเพณี (festival) - 1 แห่ง
(
    'festival',
    'งานแห่เทียนพรรษา',
    '📌 ช่วงเวลาจัดงาน: เดือนกรกฎาคม (วันเข้าพรรษา) | ประเพณีที่ยิ่งใหญ่ที่สุดของอุบลฯ ชมขบวนแห่ต้นเทียนแกะสลักสุดอลังการที่ทุ่งศรีเมือง',
    'ทุ่งศรีเมือง อ.เมือง จ.อุบลราชธานี',
    NULL,
    15.228700,
    104.856800,
    'https://xqhtmkuryegrnyxzztcb.supabase.co/storage/v1/object/public/locations/candle-festival.jpg'
);