export interface Offer {
  id?: string;
  photographerId: string;
  title: string;
  description: string;
  discountPercent: number;
  validFrom: any;
  validTo: any;
  isActive: boolean;
}
