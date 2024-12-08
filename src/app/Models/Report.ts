export interface Report {
  reportId: number;
  siteId: number;
  reportType: string;
  content: string;
  dateGenerated: string;  // Using string to store date as ISO string
  generatedBy: number;  // Foreign key for User (GeneratedBy)
}
