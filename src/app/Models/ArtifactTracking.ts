export interface ArtifactTracking {
  trackingId: number;
  artifactId: number;
  currentLocation: string;
  dateMoved: string;  // Using string to store date as ISO string
  previousLocation?: string;  // Optional field
  purpose?: string;  // Optional field
}
