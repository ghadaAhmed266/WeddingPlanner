export interface Notification {
  id?: string;
  userId: string;
  type: 'reminder' | 'payment_due' | 'booking_update' | 'offer';
  message: string;
  relatedBookingId?: string | null;
  read: boolean;
  createdAt: any;
  deliverChannels: ('push' | 'email')[];
}
