export interface Place {
    id: string;
    category: string;
    name: string;
    description: string;
    address: string;
    phone?: string;
    latitude: number;
    longitude: number;
    image_url: string;
}