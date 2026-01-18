export enum Media {
  DIGITAL_PRINT = 'digital print',
  COLOUR_FILM = 'colour film',
  BLACK_AND_WHITE_FILM = 'black & white film',
  WATERCOLOUR = 'watercolour',
  INK = 'ink',
  SILVER_GELATIN = 'silver gelatin print',
  VIDEO = 'video',
  OTHER = 'other',
}

export interface Artwork {
  id: string;
  title: string;
  imageUrl: string;
  thumbnailUrl: string;
  description?: string;
  dimensions?: string;
  media?: Media;
  year?: string;
  series?: string;
  location?: string;
}
