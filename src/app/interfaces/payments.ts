export interface Payment {
  id?: string;
  amount: number;
  method: 'stripe' | 'cash';
  status: 'pending' | 'paid' | 'failed';
  transactionRef?: string;

  createdAt: any;
  paidAt?: any | null;
}
