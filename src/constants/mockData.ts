import { Place } from "../types/place";

export const mockPlaces: Place[] = [
  {
    id: "1",
    category: "tourist",
    name: "สามพันโบก",
    description: "แกรนด์แคนยอนเมืองไทย จุดท่องเที่ยวชื่อดัง",
    address: "อำเภอโพธิ์ไทร จ.อุบลราชธานี",
    latitude: 15.734,
    longitude: 105.476,
    image_url:
      "https://upload.wikimedia.org/wikipedia/commons/7/76/Sam_Phan_Bok.jpg",
  },
  {
    id: "2",
    category: "restaurant",
    name: "ร้านอาหารอินโดจีน",
    description: "ร้านอาหารวิวแม่น้ำโขง บรรยากาศดี",
    address: "อำเภอโขงเจียม จ.อุบลราชธานี",
    phone: "045000000",
    latitude: 15.327,
    longitude: 105.508,
    image_url:
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836",
  },
];