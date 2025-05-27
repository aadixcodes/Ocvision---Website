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
    imageUrl: '/assets/images/work1.jpg',
    alt: 'Footwear Shoot',
  },
  {
    id: 2,
    imageUrl: '/assets/images/work4.jpg',
    alt: 'Footwear Shoot',
  },
  {
    id: 3,
    imageUrl: '/assets/images/work2.jpg',
    alt: 'Cosmetics Shoot',
  },
];

export const aboutImages = [
  {
    id: 1,
    imageUrl: '/assets/images/about1.png',
    alt: 'Behind the scene',
  },
  {
    id: 2,
    imageUrl: '/assets/images/about2.png',
    alt: 'Behind the scene',
  },
];

export const portfolioItems: PortfolioItem[] = [
  {
    id: 1,
    title: 'Sneakers Shoot',
    category: 'Footwear',
    imageUrl: '/assets/images/work1.jpg',
    isLandscape: true,
  },
  {
    id: 2,
    title: 'Compact Powder Spill',
    category: 'Cosmetics',
    imageUrl: '/assets/images/work2.jpg',
    isLandscape: true,
  },
  {
    id: 3,
    title: 'Professional Camera Close-Up',
    category: 'Photography Gear',
    imageUrl: '/assets/images/work3.png',
    isLandscape: true,
  },
  {
    id: 4,
    title: 'Monochrome Street Sneakers',
    category: 'Footwear',
    imageUrl: '/assets/images/work4.jpg',
    isLandscape: true,
  },
  {
    id: 5,
    title: 'Urban Streetwear Sneakers',
    category: 'Footwear',
    imageUrl: '/assets/images/work5.jpg',
    isLandscape: true,
  },
  {
    id: 6,
    title: 'Grey Hiking Boots',
    category: 'Footwear',
    imageUrl: '/assets/images/work6.jpg',
    isLandscape: true,
  },
  {
    id: 7,
    title: 'Compact Powder Collection',
    category: 'Cosmetics',
    imageUrl: '/assets/images/work7.jpg',
    isLandscape: true,
  },
  {
    id: 8,
    title: ' Classic Red and Black Sneakers',
    category: 'Footwear',
    imageUrl: '/assets/images/work8.jpg',
    isLandscape: true,
  },
];

export const videoItems: VideoItem[] = [
  {
    id: 1,
    title: 'Wedding Highlights',
    thumbnailUrl: '/assets/images/about1.png',
    videoUrl: 'https://videos.pexels.com/video-files/29620281/12746015_1080_1920_60fps.mp4', // Add this
  },
  {
    id: 2,
    title: 'Corporate Brand Story',
    thumbnailUrl: 'https://images.pexels.com/photos/3194523/pexels-photo-3194523.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    videoUrl: 'https://videos.pexels.com/video-files/29620281/12746015_1080_1920_60fps.mp4', 
  },
  {
    id: 3,
    title: 'Music Video Production',
    thumbnailUrl: 'https://images.pexels.com/photos/2425061/pexels-photo-2425061.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    videoUrl: 'https://videos.pexels.com/video-files/29620281/12746015_1080_1920_60fps.mp4', 
  },
  {
    id: 4,
    title: 'Short Documentary',
    thumbnailUrl: 'https://images.pexels.com/photos/2876617/pexels-photo-2876617.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    videoUrl: 'https://videos.pexels.com/video-files/29620281/12746015_1080_1920_60fps.mp4', 
  },
  {
    id: 5,
    title: 'Travel Vlog Series',
    thumbnailUrl: 'https://images.pexels.com/photos/15286/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    videoUrl: 'https://videos.pexels.com/video-files/29620281/12746015_1080_1920_60fps.mp4', 
  },
  {
    id: 6,
    title: 'Product Commercial',
    thumbnailUrl: 'https://images.pexels.com/photos/5427671/pexels-photo-5427671.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    videoUrl: 'https://videos.pexels.com/video-files/29620281/12746015_1080_1920_60fps.mp4', 
  },
  {
    id: 7,
    title: 'Event Recap',
    thumbnailUrl: 'https://images.pexels.com/photos/2608516/pexels-photo-2608516.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    videoUrl: 'https://videos.pexels.com/video-files/29620281/12746015_1080_1920_60fps.mp4', 
  },
  {
    id: 8,
    title: 'Fashion Campaign',
    thumbnailUrl: 'https://images.pexels.com/photos/3394347/pexels-photo-3394347.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    videoUrl: 'https://videos.pexels.com/video-files/29620281/12746015_1080_1920_60fps.mp4', 
  },
  {
    id: 9,
    title: 'Real Estate Tour',
    thumbnailUrl: 'https://images.pexels.com/photos/3214064/pexels-photo-3214064.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    videoUrl: 'https://videos.pexels.com/video-files/29620281/12746015_1080_1920_60fps.mp4', 
  },
];

export const audioItems: AudioItem[] = [
  {
    id: 1,
    title: 'Commercial Soundtracks',
    coverArt: 'https://images.pexels.com/photos/164821/pexels-photo-164821.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    audioUrl: '/assets/audios/sound.mp3', // Add this
  },
  {
    id: 2,
    title: 'Podcast Production',
    coverArt: 'https://images.pexels.com/photos/2097428/pexels-photo-2097428.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    audioUrl: '/assets/audios/sound.mp3',
  },
  {
    id: 3,
    title: 'Voice-Over Services',
    coverArt: 'https://images.pexels.com/photos/682082/pexels-photo-682082.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    audioUrl: '/assets/audios/sound.mp3',
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
    imageUrl: '/assets/images/contactus.jpg',
    alt: 'Studio space',
  },
  {
    id: 2,
    imageUrl: '/assets/images/work3.png',
    alt: 'Camera',
  },
];