export interface VisitorTour {
  tourId: string;
  siteId: string;  // Foreign key for Site
  tourGuideId: string;  // Foreign key for User (TourGuide)
  date: string;  // Using string to store date as ISO string
  time: string;
  capacity: number;
  duration: string;
  description: string;
  bookingStatus: string;
  imageUrl: string;
  siteName: string;
  visitorIds: (string | null)[];  // List of nullable visitor IDs
}
