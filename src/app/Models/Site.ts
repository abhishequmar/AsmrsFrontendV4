export interface Site {
  siteId: string ;
  name: string;
  location: string;
  historicalPeriod?: string;  // Optional field, can be null
  description: string | null;  // Optional field, can be null
  discoveredById: string | null;  // Foreign key for User
  conservationStatus?: string;  // Optional field, can be null
  dateDiscovered?: string;  // Optional field, using string to store date as ISO string
  imageUrl?: string;  // Optional field, can be null
}
