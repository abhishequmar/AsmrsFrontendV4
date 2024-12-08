export interface Notification {
  notificationId: number;
  userId: number;
  message: string;
  dateSent: string;  // Using string to store date and time as ISO string
  notificationType: string;
  readStatus: boolean;
}
