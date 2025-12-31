
export enum Platform {
  FACEBOOK = 'facebook',
  TIKTOK = 'tiktok'
}

export interface Service {
  id: string;
  name: string;
  description: string;
  icon: React.ReactNode;
  status: 'active' | 'maintenance';
  priceInfo?: string;
}

export interface PlatformData {
  title: string;
  services: Service[];
  color: string;
}
