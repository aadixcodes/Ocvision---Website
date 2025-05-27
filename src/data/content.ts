import { NavLink, PortfolioItem, VideoItem, AudioItem, SocialLink } from '../types';
import { Camera, Video, Music, Facebook, Instagram, Twitter, Youtube, Mail } from 'lucide-react';

export const navLinks: NavLink[] = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Photography', href: '#photography' },
  { name: 'Video', href: '#video' },
  { name: 'Audio', href: '#audio' },
  { name: 'Contact', href: '#contact' },
];

export const heroImages = [
  {
    id: 1,
    imageUrl: 'https://images.pexels.com/photos/3014856/pexels-photo-3014856.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    alt: 'Wedding photography',
  },
  {
    id: 2,
    imageUrl: 'https://images.pexels.com/photos/2873486/pexels-photo-2873486.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    alt: 'Film production',
  },
  {
    id: 3,
    imageUrl: 'https://images.pexels.com/photos/3062541/pexels-photo-3062541.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    alt: 'Portrait session',
  },
];

export const aboutImages = [
  {
    id: 1,
    imageUrl: 'https://images.pexels.com/photos/3379942/pexels-photo-3379942.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    alt: 'Behind the scenes',
  },
  {
    id: 2,
    imageUrl: 'https://images.pexels.com/photos/1644888/pexels-photo-1644888.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    alt: 'Team working',
  },
];

export const portfolioItems: PortfolioItem[] = [
  {
    id: 1,
    title: 'Urban Wedding',
    category: 'Wedding',
    imageUrl: 'https://images.pexels.com/photos/1244627/pexels-photo-1244627.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    isLandscape: true,
  },
  {
    id: 2,
    title: 'Nature Landscapes',
    category: 'Landscape',
    imageUrl: 'https://images.pexels.com/photos/1612461/pexels-photo-1612461.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    isLandscape: true,
  },
  {
    id: 3,
    title: 'Corporate Event',
    category: 'Event',
    imageUrl: 'https://images.pexels.com/photos/2399097/pexels-photo-2399097.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    isLandscape: true,
  },
  {
    id: 4,
    title: 'Product Showcase',
    category: 'Commercial',
    imageUrl: 'https://images.pexels.com/photos/1667071/pexels-photo-1667071.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    isLandscape: true,
  },
  {
    id: 5,
    title: 'Fashion Portfolio',
    category: 'Fashion',
    imageUrl: 'https://images.pexels.com/photos/2901215/pexels-photo-2901215.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    isLandscape: true,
  },
  {
    id: 6,
    title: 'Travel Series',
    category: 'Travel',
    imageUrl: 'https://images.pexels.com/photos/1252500/pexels-photo-1252500.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    isLandscape: true,
  },
  {
    id: 7,
    title: 'Architectural Study',
    category: 'Architecture',
    imageUrl: 'https://images.pexels.com/photos/1427578/pexels-photo-1427578.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    isLandscape: true,
  },
  {
    id: 8,
    title: 'Portrait Series',
    category: 'Portrait',
    imageUrl: 'https://images.pexels.com/photos/2080736/pexels-photo-2080736.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    isLandscape: true,
  },
];

export const videoItems: VideoItem[] = [
  {
    id: 1,
    title: 'Wedding Highlights',
    thumbnailUrl: 'https://images.pexels.com/photos/2253870/pexels-photo-2253870.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    id: 2,
    title: 'Corporate Brand Story',
    thumbnailUrl: 'https://images.pexels.com/photos/3194523/pexels-photo-3194523.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    id: 3,
    title: 'Music Video Production',
    thumbnailUrl: 'https://images.pexels.com/photos/2425061/pexels-photo-2425061.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    id: 4,
    title: 'Short Documentary',
    thumbnailUrl: 'https://images.pexels.com/photos/2876617/pexels-photo-2876617.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    id: 5,
    title: 'Travel Vlog Series',
    thumbnailUrl: 'https://images.pexels.com/photos/15286/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    id: 6,
    title: 'Product Commercial',
    thumbnailUrl: 'https://images.pexels.com/photos/5427671/pexels-photo-5427671.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    id: 7,
    title: 'Event Recap',
    thumbnailUrl: 'https://images.pexels.com/photos/2608516/pexels-photo-2608516.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    id: 8,
    title: 'Fashion Campaign',
    thumbnailUrl: 'https://images.pexels.com/photos/3394347/pexels-photo-3394347.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    id: 9,
    title: 'Real Estate Tour',
    thumbnailUrl: 'https://images.pexels.com/photos/3214064/pexels-photo-3214064.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
];

export const audioItems: AudioItem[] = [
  {
    id: 1,
    title: 'Commercial Soundtracks',
    coverArt: 'https://images.pexels.com/photos/164821/pexels-photo-164821.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    id: 2,
    title: 'Podcast Production',
    coverArt: 'https://images.pexels.com/photos/2097428/pexels-photo-2097428.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    id: 3,
    title: 'Voice-Over Services',
    coverArt: 'https://images.pexels.com/photos/682082/pexels-photo-682082.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
];

export const contactInfo = {
  phone: '+1 (555) 123-4567',
  email: 'info@ocvision.com',
  address: '123 Creative Studio St, New York, NY 10001',
};

export const socialLinks: SocialLink[] = [
  {
    platform: 'Facebook',
    url: 'https://facebook.com',
    icon: 'Facebook',
  },
  {
    platform: 'Instagram',
    url: 'https://instagram.com',
    icon: 'Instagram',
  },
  {
    platform: 'Twitter',
    url: 'https://twitter.com',
    icon: 'Twitter',
  },
  {
    platform: 'YouTube',
    url: 'https://youtube.com',
    icon: 'Youtube',
  },
];

export const servicesOffered = [
  {
    icon: Camera,
    title: 'Photography',
    description: 'Professional photography services for weddings, events, portraits, and commercial projects.',
  },
  {
    icon: Video,
    title: 'Videography',
    description: 'High-quality video production for commercials, documentaries, weddings, and corporate events.',
  },
  {
    icon: Music,
    title: 'Audio Production',
    description: 'Comprehensive audio services including sound design, mixing, and podcast production.',
  },
];

export const contactImages = [
  {
    id: 1,
    imageUrl: 'https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    alt: 'Studio space',
  },
  {
    id: 2,
    imageUrl: 'https://images.pexels.com/photos/3205568/pexels-photo-3205568.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    alt: 'Team meeting',
  },
];