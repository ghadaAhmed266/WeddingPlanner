export interface Photographer {
  id?: string;
  userId: string;
  rating: number;

  services: PhotographerService[];
  portfolio: string[];
}

export interface PhotographerService {
  id: string;
  title: string;
  description: string;
  price: number;
}
