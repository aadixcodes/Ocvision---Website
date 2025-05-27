export interface NavLink {
  name: string;
  href: string;
}

export interface PortfolioItem {
  id: number;
  title: string;
  category: string;
  imageUrl: string;
  isLandscape?: boolean;
}

export interface VideoItem {
  id: number;
  title: string;
  thumbnailUrl: string;
  videoUrl?: string;
}

export interface AudioItem {
  id: number;
  title: string;
  coverArt: string;
  audioUrl?: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}