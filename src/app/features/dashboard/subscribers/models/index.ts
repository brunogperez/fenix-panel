export interface Subscriber {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: number;
  createdAt: Date;
  updatedAt: Date;
  subscriptionEndDate: Date; 
  remainingDays?: number;
}
