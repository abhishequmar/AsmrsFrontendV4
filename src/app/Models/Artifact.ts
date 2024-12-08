export interface Artifact {
  artifactId: string;              // Matches ArtifactId (string, GUID)
  siteId: string;                  // Matches SiteId (string)
  discoveredById: string;          // Matches DiscoveredById (string)
  name: string;                    // Matches Name (string, Required, Length: 3-100)
  material: string;                // Matches Material (string, Required, Length: 50)
  condition: string;               // Matches Condition (string, Required, Length: 50)
  culturalSignificance?: string;   // Matches CulturalSignificance (string, Optional)
  dateFound: string;               // Matches DateFound (DateTime, Converted to ISO string in TypeScript)
  preservationStatus: string;  
  currentLocation: string;  
  previousLocation: string;      
}
