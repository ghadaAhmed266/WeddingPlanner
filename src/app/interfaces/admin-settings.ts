export interface AdminSettings {
  id?: string;
  reminderDaysBefore: number[];
  cancellationPolicy: string;
  paymentPolicies: {
    minDepositPercent: number;
    lateFeePercent: number;
  };
}
