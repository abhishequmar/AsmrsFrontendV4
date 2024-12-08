export interface Publication {
  publicationId: string;
  siteId: string;
  authorId: string;
  authorName: string;
  title: string;
  abstract: string;  // Optional field, can be null
  datePublished: string;  // Using string to store date as ISO string
  fileLink: string;  // URL as a string
}
