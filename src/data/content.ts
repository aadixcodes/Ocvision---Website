import { NavLink, PortfolioItem, VideoItem, AudioItem, SocialLink } from '../types';
import { Camera, Video, Music, Facebook, Instagram, Twitter, Youtube, Mail } from 'lucide-react';

export const navLinks: NavLink[] = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '#about' },
  { name: 'Our Work', href: '/our-work' },
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
    title: 'Fashion Photography',
    category: 'Model',
    imageUrl: '/assets/images/work11.jpg',
    isLandscape: true,
  },
  {
    id: 7,
    title: 'Fashion Photography',
    category: 'Model',
    imageUrl: '/assets/images/work13.JPG',
    isLandscape: true,
  },
  {
    id: 8,
    title: 'Fashion Photography',
    category: 'Cap',
    imageUrl: '/assets/images/work12.jpeg',
    isLandscape: true,
  },
];

export const videoItems: VideoItem[] = [
  {
    id: 4,
    title: "Otla x Ocvision",
    videoUrl: "https://res.cloudinary.com/dbutuibtl/video/upload/v1749877779/otla_new_08_fabdd1.mp4",
    thumbnailUrl: "/assets/images/thumb_08.JPG"
  },
  {
    id: 5,
    title: "Dazzlin x Ocvision",
    videoUrl: "https://res.cloudinary.com/dbutuibtl/video/upload/v1749877811/Dazzzlin_09_tbpbeg.mp4",
    thumbnailUrl: "/assets/images/thumb_09.JPG"
  },
  {
    id: 6,
    title: "Otla x Ocvision",
    videoUrl: "https://res.cloudinary.com/dbutuibtl/video/upload/v1749877674/another_women_10_jxpmn8.mp4",
    thumbnailUrl: "/assets/images/thumb_10.JPG"
  },
  {
    id: 1,
    title: "Ocvision x Eaca",
    videoUrl: "https://res.cloudinary.com/dbutuibtl/video/upload/v1749877932/Sequence_01_hvakn8.mp4",
    thumbnailUrl: "/assets/images/thumb_01.JPG"
  },
  {
    id: 2,
    title: "GYM Shoot",
    videoUrl: "https://res.cloudinary.com/dbutuibtl/video/upload/v1749877967/Sequence_02_whz5wg.mp4",
    thumbnailUrl: "/assets/images/thumb_02.JPG"
  },
  {
    id: 3,
    title: "Ocvision x Otla",
    videoUrl: "https://res.cloudinary.com/dbutuibtl/video/upload/v1749877961/otla_x_ocvision_03_ljefuc.mp4",
    thumbnailUrl: "/assets/images/thumb_03.JPG"
  },
  // {
  //   id: 4,
  //   title: "Numb By Jeone",
  //   videoUrl: "/assets/videos/numb_04.mp4",
  //   thumbnailUrl: "/assets/images/thumb_04.JPG"
  // },
  // {
  //   id: 5,
  //   title: "Day of Cinematographer",
  //   videoUrl: "/assets/videos/ocvision_bhs_05.mp4",
  //   thumbnailUrl: "/assets/images/thumb_05.JPG"
  // },
  // {
  //   id: 6,
  //   title: "Ocvision Studio Shoot",
  //   videoUrl: "/assets/videos/ocvision_recording_studio_06.mp4",
  //   thumbnailUrl: "/assets/images/thumb_06.JPG"
  // },
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
  phone: '+91 8109941748, +91 9407072203',
  email: 'theocvisionagency@gmail.com',
  address: 'Kushwah nagar, near Sundaram public school, banganga,indore',
};

export const socialLinks: SocialLink[] = [
  {
    platform: 'WhatsApp',
    url: 'https://wa.me/918109941748',
    icon: 'Whatsapp',
  },
  {
    platform: 'Instagram',
    url: 'https://www.instagram.com/theocvision?igsh=Znk1eGgxOXpkanU2',
    icon: 'Instagram',
  },
  {
    platform: 'Mail',
    url: 'mailto:theocvisionagency@gmail.com',
    icon: 'Mail',
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

export const brandLogos = [
  {
    id: 1,
    name: "Brand 1",
    logoUrl: "/assets/logos2/logo1.png",
  },
  {
    id: 2,
    name: "Brand 2",
    logoUrl: "/assets/logos2/logo2.png",
  },
  {
    id: 3,
    name: "Brand 3",
    logoUrl: "/assets/logos2/logo4.png",
  },
  {
    id: 4,
    name: "Brand 4",
    logoUrl: "/assets/logos2/logo3.png",
  },
  {
    id: 6,
    name: "Brand 6",
    logoUrl: "/assets/logos2/logo8.png",
  },
  {
    id: 5,
    name: "Brand 5",
    logoUrl: "/assets/logos2/logo5.png",
  },
  {
    id: 6,
    name: "Brand 5",
    logoUrl: "/assets/logos2/logo6.png",
  },
];