export interface ConservationProject {
  projectId: string;
  siteId: string;
  siteName: string;
  objective: string;
  conservationMethod: string;
  startDate: string; 
  endDate?: string;  
  fundingSource: string;
  leaderId: string;
  contributorIds: string[];
}
