export interface Booking {
  id?: string;
  clientId: string;
  photographerId: string;
  serviceId: string;

  eventDate: any;
  bookingDate: any;
  venue: string;

  status: 'pending' | 'confirmed' | 'in_progress' | 'completed' | 'cancelled';

  notes?: string;
  adminNotes?: string;

  totalPrice: number;
  paidAmount: number;
  remainingAmount: number;
}
