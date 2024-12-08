export interface Map {
  mapId: number;
  siteId: number;
  mapType: string;
  coordinates: string;
  dataLayers?: string;  // Optional field, can be null
  dateCreated: string;  // Using string to store date as ISO string
}
