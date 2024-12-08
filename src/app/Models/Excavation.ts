export interface Excavation {
  excavationId: string ;
  siteId: string;
  siteName: string;
  title: string;
  startDate: string; // Using string to store date as ISO string
  endDate?: string; // Optional field, can be null
  leadArchaeologistId: string;
  leadArchaeologistName: string; // Name of the lead archaeologist
  status: string;
  teamMembers: string[]; // List of team member names or IDs, initialized as an empty array
}
