export interface User {
  id?: string;
  name: string;
  email: string;
  phone?: string;
  password:string;
  role: 'admin' | 'photographer' | 'client';
  avatarUrl?: string | null;
  createdAt?: any;
  updatedAt?: any;
}
