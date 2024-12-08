export interface Platform {
  platformId: number;
  userId: number;
  deviceType: string;
  lastAccessDate: string;  // Using string to store date and time as ISO string
  preferredLanguage: string;
}
