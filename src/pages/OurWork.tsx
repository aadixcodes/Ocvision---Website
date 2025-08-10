// import React, { useState, useRef, useEffect } from 'react';
// import { motion } from 'framer-motion';
// import { Play, Pause, ArrowRight } from 'lucide-react';

// // Sample data
// const creativeDisciplines = [
//     {
//         id: 1,
//         title: "Photography",
//         description: "Capturing moments that tell your story",
//         image: "/assets/images/work8.jpg"
       
        
//       },
//     {
//         id: 2,
//         title: "Photography",
//          description: "Capturing moments that tell your story",
//         image: "/assets/images/work9.jpg"
//       },
//     {
//         id: 3,
//         title: "Photography",
//         description: "Capturing moments that tell your story",
//         image: "/assets/images/work1.jpg"
//       },
//     {
//         id: 4,
//         title: "Photography",
//         description: "Capturing moments that tell your story",
//         image: "/assets/images/work2.jpg"
//       },
//     {
//         id: 5,
//         title: "Photography",
//         description: "Capturing moments that tell your story",
//         image: "/assets/images/work3.png"
//       },
//     {
//         id: 6,
//         title: "Photography",
//         description: "Capturing moments that tell your story",
//         image: "/assets/images/work4.jpg"
//       },
//     {
//         id: 7,
//         title: "Photography",
//         description: "Capturing moments that tell your story",
//         image: "/assets/images/work5.jpg"
//       },
//     {
//         id: 8,
//         title: "Photography",
//         description: "Capturing moments that tell your story",
//         image: "/assets/images/work6.jpg"
//       },
//     {
//         id: 9,
//         title: "Photography",
//         description: "Capturing moments that tell your story",
//         image: "/assets/images/work7.jpg"
//       },
//     {
//         id: 10,
//         title: "Photography",
//         description: "Capturing moments that tell your story",
//         image: "/assets/images/about2.png"
        
//       },
//     {
//         id: 11,
//         title: "Photography",
//         description: "Capturing moments that tell your story",
//         image: "/assets/images/about1.png"
//       },

//   {
//     id: 12,
//     title: "Photography",
//     description: "Capturing moments that tell your story",
//     image: "/assets/images/fash_photo1.jpg"
//   },
//   {
//     id: 13,
//     title: "Videography",
//     description: "Motion pictures that bring ideas to life",
//     image: "/assets/images/fash_photo2.jpg"
//   },
//   {
//     id: 14,
//     title: "Design",
//     description: "Visual solutions that communicate effectively",
//     image: "/assets/images/fash_photo3.jpg"
//   },
//   {
//     id: 15,
//     title: "Design",
//     description: "Visual solutions that communicate effectively",
//     image: "/assets/images/fash_photo4.jpg"
//   },
//   {
//     id: 16,
//     title: "Design",
//     description: "Visual solutions that communicate effectively",
//     image: "/assets/images/fash_photo5.jpg"
//   },
//   {
//     id: 17,
//     title: "Design",
//     description: "Visual solutions that communicate effectively",
//     image: "/assets/images/fash_photo6.JPG"
//   },
//   {
//     id: 18,
//     title: "Design",
//     description: "Visual solutions that communicate effectively",
//     image: "/assets/images/fash_photo7.JPG"
//   },
//   {
//     id: 19,
//     title: "Design",
//     description: "Visual solutions that communicate effectively",
//     image: "/assets/images/fash_photo8.JPG"
//   },
//   {
//     id: 20,
//     title: "Design",
//     description: "Visual solutions that communicate effectively",
//     image: "/assets/images/fash_photo9.JPG"
//   },
//   {
//     id: 21,
//     title: "Design",
//     description: "Visual solutions that communicate effectively",
//     image: "/assets/images/fash_photo10.JPG"
//   },
//   {
//     id: 22,
//     title: "Design",
//     description: "Visual solutions that communicate effectively",
//     image: "/assets/images/fash_photo11.JPG"
//   },
//   {
//     id: 23,
//     title: "Design",
//     description: "Visual solutions that communicate effectively",
//     image: "/assets/images/fash_photo12.JPG"
//   },
//   {
//     id: 24,
//     title: "Design",
//     description: "Visual solutions that communicate effectively",
//     image: "/assets/images/fash_photo13.JPG"
//   },
//   {
//     id: 25,
//     title: "Design",
//     description: "Visual solutions that communicate effectively",
//     image: "/assets/images/fash_photo14.JPG"
//   },
//   {
//     id: 26,
//     title: "Design",
//     description: "Visual solutions that communicate effectively",
//     image: "/assets/images/fash_photo15.JPG"
//   },
//   {
//     id: 27,
//     title: "Design",
//     description: "Visual solutions that communicate effectively",
//     image: "/assets/images/fash_photo16.JPG"
//   },
//   {
//     id: 28,
//     title: "Design",
//     description: "Visual solutions that communicate effectively",
//     image: "/assets/images/fash_photo17.JPG"
//   },
//   {
//     id: 29,
//     title: "Design",
//     description: "Visual solutions that communicate effectively",
//     image: "/assets/images/fash_photo18.jpeg"
//   },
//   {
//     id: 30,
//     title: "Design",
//     description: "Visual solutions that communicate effectively",
//     image: "/assets/images/fash_photo19.jpeg"
//   },
//   {
//     id: 31,
//     title: "Design",
//     description: "Visual solutions that communicate effectively",
//     image: "/assets/images/fash_photo20.jpeg"
//   },
//   {
//     id: 32,
//     title: "Design",
//     description: "Visual solutions that communicate effectively",
//     image: "/assets/images/fash_photo21.jpeg"
//   },
//   {
//     id: 33,
//     title: "Design",
//     description: "Visual solutions that communicate effectively",
//     image: "/assets/images/fash_photo22.jpeg"
//   },
//   {
//     id: 34,
//     title: "Design",
//     description: "Visual solutions that communicate effectively",
//     image: "/assets/images/fash_photo23.jpeg"
//   }  
// ];


// // Videos 
// const featuredProjects = [
//   {
//     id: 8,
//     title: "Summer Campaign",
//     videoUrl: "https://res.cloudinary.com/dbutuibtl/video/upload/v1749877779/otla_new_08_fabdd1.mp4",
//     thumbnail: "/assets/images/thumb_08.JPG"
//   },
//   {
//     id: 9,
//     title: "Summer Campaign",
//     videoUrl: "https://res.cloudinary.com/dbutuibtl/video/upload/v1749877811/Dazzzlin_09_tbpbeg.mp4",
//     thumbnail: "/assets/images/thumb_09.JPG"
//   },
//   {
//     id: 10,
//     title: "Summer Campaign",
//     videoUrl: "https://res.cloudinary.com/dbutuibtl/video/upload/v1749877674/another_women_10_jxpmn8.mp4",
//     thumbnail: "/assets/images/thumb_10.JPG"
//   },
//   {
//     id: 1,
//     title: "Summer Campaign",
//     videoUrl: "https://res.cloudinary.com/dbutuibtl/video/upload/v1749877932/Sequence_01_hvakn8.mp4",
//     thumbnail: "/assets/images/thumb_01.JPG"
//   },
//   {
//     id: 2,
//     title: "Product Launch",
//     videoUrl: "https://res.cloudinary.com/dbutuibtl/video/upload/v1749877967/Sequence_02_whz5wg.mp4",
//     thumbnail: "/assets/images/thumb_02.JPG"
//   },
//   {
//     id: 3,
//     title: "Brand Story",
//     videoUrl: "https://res.cloudinary.com/dbutuibtl/video/upload/v1749877961/otla_x_ocvision_03_ljefuc.mp4",
//     thumbnail: "/assets/images/thumb_03.JPG"
//   },
//   {
//     id: 4,
//     title: "Brand Story",
//     videoUrl: "https://res.cloudinary.com/dbutuibtl/video/upload/v1749877992/numb_04_sqpefa.mp4",
//     thumbnail: "/assets/images/thumb_04.JPG"
//   },
//   {
//     id: 5,
//     title: "Brand Story",
//     videoUrl: "https://res.cloudinary.com/dbutuibtl/video/upload/v1749877933/ocvision_bhs_05_occoij.mp4",
//     thumbnail: "/assets/images/thumb_05.JPG"
//   },
//   {
//     id: 6,
//     title: "Brand Story",
//     videoUrl: "https://res.cloudinary.com/dbutuibtl/video/upload/v1749877923/ocvision_recording_studio_06_tyoumf.mp4",
//     thumbnail: "/assets/images/thumb_06.JPG"
//   },
//   {
//     id: 7,
//     title: "Brand Story",
//     videoUrl: "https://res.cloudinary.com/dbutuibtl/video/upload/v1749877966/cine_oc_vision_07_mr0v6l.mp4",
//     thumbnail: "/assets/images/thumb_07.JPG"
//   },
// ];

// const OurWork = () => {
//     const [playingVideo, setPlayingVideo] = useState<number | null>(null);
//     const [loadedImages, setLoadedImages] = useState<{[key: string]: boolean}>({});
//     const [visibleImages, setVisibleImages] = useState<number>(3);
//     const [visibleVideos, setVisibleVideos] = useState<number>(3);
//     const videoRefs = useRef<{[key: number]: HTMLVideoElement | null}>({});
  
//     // Handle image load
//     const handleImageLoad = (id: string) => {
//       setLoadedImages(prev => ({ ...prev, [id]: true }));
//     };
  
//     // Toggle video play/pause
//     const toggleVideo = (id: number) => {
//       if (playingVideo === id) {
//         videoRefs.current[id]?.pause();
//         setPlayingVideo(null);
//       } else {
//         if (playingVideo) videoRefs.current[playingVideo]?.pause();
//         setPlayingVideo(id);
//         setTimeout(() => videoRefs.current[id]?.play(), 100);
//       }
//     };
  
//     // Load more images
//     const loadMoreImages = () => {
//       setVisibleImages(prev => Math.min(prev + 3, creativeDisciplines.length));
//     };
  
//     // Load more videos
//     const loadMoreVideos = () => {
//       setVisibleVideos(prev => Math.min(prev + 3, featuredProjects.length));
//     };
  
//     // Check if image is landscape (width > height)
//     const isLandscape = (imgUrl: string) => {
//       // In a real app, you would check the actual image dimensions
//       // For this example, we'll assume certain images are landscape
//       return imgUrl.includes('work') || imgUrl.includes('thumb');
//     };
  
//     return (
//       <div className="bg-dark text-gray-100 min-h-screen">
//         {/* Hero Banner Section */}
//         <section className="relative h-screen max-h-[800px] flex items-center justify-center overflow-hidden">
//           <div className="absolute inset-0 bg-black/60 z-10"></div>
//           <div 
//             className="absolute inset-0 bg-cover bg-center z-0"
//             style={{
//               backgroundImage: "url('https://i.pinimg.com/736x/cd/79/ea/cd79ea220072c42e7710b77a15be73d4.jpg')",
//               backgroundSize: "cover",
//               backgroundPosition: "center"
//             }}
//           ></div>
          
//           <div className="relative z-20 text-center px-4">
//             <motion.h1 
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.8 }}
//               className="text-4xl md:text-6xl font-bold mb-6"
//             >
//               Our <span className="text-accent">Creative</span> Work
//             </motion.h1>
//             <motion.p 
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.8, delay: 0.2 }}
//               className="text-xl max-w-3xl mx-auto mb-8"
//             >
//               Explore our portfolio of visual storytelling across multiple disciplines
//             </motion.p>
//             <motion.div
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{ duration: 0.8, delay: 0.4 }}
//               className="animate-bounce mt-12"
//             >
//               <ArrowRight className="w-8 h-8 mx-auto rotate-90" />
//             </motion.div>
//           </div>
//         </section>
  
//         {/* Creative Disciplines - Image Gallery */}
//         <section className="py-20 px-4 max-w-7xl mx-auto">
//           <div className="text-center mb-16">
//             <h2 className="text-3xl md:text-4xl font-bold mb-4">
//               <span className="yellow-underline">Our Creative Photography</span>
//             </h2>
//             <p className="max-w-2xl mx-auto text-gray-300">
//               Specialized services tailored to bring your vision to life
//             </p>
//           </div>
  
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {creativeDisciplines.slice(0, visibleImages).map((discipline) => (
//               <motion.div 
//                 key={discipline.id}
//                 whileHover={{ scale: 1.03 }}
//                 className="relative group rounded-xl overflow-hidden shadow-2xl"
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1 }}
//                 transition={{ duration: 0.5 }}
//               >
//                 <div className={`relative ${isLandscape(discipline.image) ? 'h-[400px]' : 'h-[600px]'} w-full`}>
//                   {/* Low-quality placeholder */}
//                   {!loadedImages[discipline.id.toString()] && (
//                     <div className="absolute inset-0 bg-gray-800 animate-pulse"></div>
//                   )}
                  
//                   {/* Lazy-loaded high-quality image */}
//                   <img 
//                     src={discipline.image} 
//                     alt={discipline.title}
//                     className={`w-full h-full object-cover transition-all duration-500 group-hover:scale-105 ${
//                       loadedImages[discipline.id.toString()] ? 'opacity-100' : 'opacity-0'
//                     }`}
//                     loading="lazy"
//                     onLoad={() => handleImageLoad(discipline.id.toString())}
//                   />
//                 </div>
//               </motion.div>
//             ))}
//           </div>
  
//           {visibleImages < creativeDisciplines.length && (
//             <div className="text-center mt-12">
//               <button 
//                 onClick={loadMoreImages}
//                 className="btn btn-accent px-8 py-3 rounded-full text-lg font-medium"
//               >
//                 Load More
//               </button>
//             </div>
//           )}
//         </section>
  
//         {/* Featured Projects - Video Gallery */}
//         <section className="py-20 bg-dark-gray">
//           <div className="max-w-7xl mx-auto px-4">
//             <div className="text-center mb-16">
//               <h2 className="text-3xl md:text-4xl font-bold mb-4">
//                 <span className="yellow-underline">Our Creative Videography</span>
//               </h2>
//               <p className="max-w-2xl mx-auto text-gray-300">
//                 Our most impactful work that tells compelling visual stories
//               </p>
//             </div>
  
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//               {featuredProjects.slice(0, visibleVideos).map((project) => (
//                 <div 
//                   key={project.id} 
//                   className="group relative rounded-2xl overflow-hidden"
//                   style={{ height: isLandscape(project.thumbnail) ? '600px' : '600px' }}
//                 >
//                   <div className="relative h-full w-full">
//                     {playingVideo === project.id ? (
//                       <video
//                         ref={(el) => { videoRefs.current[project.id] = el }}
//                         src={project.videoUrl}
//                         className="w-full h-full object-cover"
//                         loop
//                         muted
//                         playsInline
//                         preload="none"
//                         onClick={() => toggleVideo(project.id)}
//                       />
//                     ) : (
//                       <>
//                         <img 
//                           src={project.thumbnail} 
//                           alt={project.title}
//                           className="w-full h-full object-cover"
//                           onLoad={() => handleImageLoad(`video-${project.id}`)}
//                         />
//                         <div 
//                           className="absolute inset-0 bg-black/30 flex items-center justify-center cursor-pointer"
//                           onClick={() => toggleVideo(project.id)}
//                         >
//                         </div>
//                       </>
//                     )}
                    
//                     <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-6">
//                       <div className="flex justify-between items-start">
//                         <button 
//                           onClick={() => toggleVideo(project.id)}
//                           className="bg-white/20 backdrop-blur-sm rounded-full p-2 hover:bg-white/30 transition-colors"
//                           aria-label={playingVideo === project.id ? "Pause video" : "Play video"}
//                         >
//                           {playingVideo === project.id ? (
//                             <Pause className="w-5 h-5 text-white" />
//                           ) : (
//                             <Play className="w-5 h-5 text-white" />
//                           )}
//                         </button>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>
  
//             {visibleVideos < featuredProjects.length && (
//               <div className="text-center mt-12">
//                 <button 
//                   onClick={loadMoreVideos}
//                   className="btn btn-accent px-8 py-3 rounded-full text-lg font-medium"
//                 >
//                   Load More
//                 </button>
//               </div>
//             )}
//           </div>
//         </section>
//       </div>
//     );
//   };
  
//   export default OurWork;

import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Play, Pause, ArrowRight } from 'lucide-react';

// Sample data organized by categories
const photographyCategories = {
  "Fashion": [
    { id: 1, image: "https://res.cloudinary.com/dbutuibtl/image/upload/v1754841479/fash_photo12_xml7ki.jpg" },
    { id: 2, image: "https://res.cloudinary.com/dbutuibtl/image/upload/v1754841471/fash_photo10_aqxwdn.jpg" },
    { id: 3, image: "https://res.cloudinary.com/dbutuibtl/image/upload/v1754841469/fash_photo11_krggxr.jpg" },
    { id: 4, image: "https://res.cloudinary.com/dbutuibtl/image/upload/v1754841469/fash_photo7_arqvwr.jpg" },
    { id: 5, image: "https://res.cloudinary.com/dbutuibtl/image/upload/v1754841467/fash_photo6_co7jws.jpg" },
    { id: 6, image: "https://res.cloudinary.com/dbutuibtl/image/upload/v1754841466/fash_photo16_oij9tf.jpg" },
    { id: 7, image: "https://res.cloudinary.com/dbutuibtl/image/upload/v1754841465/fash_photo8_qusmvt.jpg" },
    { id: 8, image: "https://res.cloudinary.com/dbutuibtl/image/upload/v1754841456/fash_photo17_qmto4x.jpg" },
    { id: 9, image: "https://res.cloudinary.com/dbutuibtl/image/upload/v1754841455/fash_photo15_ghyvov.jpg" },
    { id: 10, image: "https://res.cloudinary.com/dbutuibtl/image/upload/v1754841451/fash_photo13_fm5pua.jpg" },
    { id: 11, image: "https://res.cloudinary.com/dbutuibtl/image/upload/v1754841444/thumb_09_tbalur.jpg" },
    { id: 12, image: "https://res.cloudinary.com/dbutuibtl/image/upload/v1754841443/fash_photo23_f3olqf.jpg" },
    { id: 13, image: "https://res.cloudinary.com/dbutuibtl/image/upload/v1754841443/fash_photo22_awlkor.jpg" },
    { id: 14, image: "https://res.cloudinary.com/dbutuibtl/image/upload/v1754841439/fash_photo21_eu48lv.jpg" },
    { id: 15, image: "https://res.cloudinary.com/dbutuibtl/image/upload/v1754841438/fash_photo20_ac41jt.jpg" },
    { id: 16, image: "https://res.cloudinary.com/dbutuibtl/image/upload/v1754841436/fash_photo19_inbxae.jpg" },
    { id: 17, image: "https://res.cloudinary.com/dbutuibtl/image/upload/v1754841433/fash_photo18_cljome.jpg" },
    { id: 18, image: "https://res.cloudinary.com/dbutuibtl/image/upload/v1754841432/fash_photo5_llwidt.jpg" },
    { id: 19, image: "https://res.cloudinary.com/dbutuibtl/image/upload/v1754841393/fash_photo4_randc1.jpg" },
    { id: 20, image: "https://res.cloudinary.com/dbutuibtl/image/upload/v1754841371/fash_photo3_qhp0lk.jpg" },
    { id: 21, image: "https://res.cloudinary.com/dbutuibtl/image/upload/v1754841345/fash_photo2_elpf6x.jpg" },
    { id: 22, image: "https://res.cloudinary.com/dbutuibtl/image/upload/v1754841345/fash_photo1_odboe8.jpg" },
    { id: 23, image: "https://res.cloudinary.com/dbutuibtl/image/upload/v1754841341/work13_uuej8n.jpg" },
    { id: 24, image: "https://res.cloudinary.com/dbutuibtl/image/upload/v1754841341/work12_bfzlt2.jpg" },
    { id: 25, image: "https://res.cloudinary.com/dbutuibtl/image/upload/v1754840345/27_hgdjvq.jpg" },
    { id: 26, image: "https://res.cloudinary.com/dbutuibtl/image/upload/v1754840342/31_irrynl.jpg" },
    { id: 27, image: "https://res.cloudinary.com/dbutuibtl/image/upload/v1754840340/19_rshfnd.jpg" },
    { id: 28, image: "https://res.cloudinary.com/dbutuibtl/image/upload/v1754840340/23_jcdnm1.jpg" },
    { id: 29, image: "https://res.cloudinary.com/dbutuibtl/image/upload/v1754840339/10_mtuxio.jpg" },
    { id: 30, image: "https://res.cloudinary.com/dbutuibtl/image/upload/v1754840339/6_w6kyrg.jpg" },
    { id: 31, image: "https://res.cloudinary.com/dbutuibtl/image/upload/v1754840339/18_mibs3t.jpg" },
    { id: 32, image: "https://res.cloudinary.com/dbutuibtl/image/upload/v1754840338/13_kqyglo.jpg" },
    { id: 33, image: "https://res.cloudinary.com/dbutuibtl/image/upload/v1754840338/21_fuws0t.jpg" },
    { id: 34, image: "https://res.cloudinary.com/dbutuibtl/image/upload/v1754840336/30_alizdj.jpg" },
    { id: 35, image: "https://res.cloudinary.com/dbutuibtl/image/upload/v1754840335/12_agyytq.jpg" },
    { id: 36, image: "https://res.cloudinary.com/dbutuibtl/image/upload/v1754840336/14_cmbxyi.jpg" },
    { id: 37, image: "https://res.cloudinary.com/dbutuibtl/image/upload/v1754840335/8_nnzlao.jpg" }
  ],
  "Commercial/Product Shoot": [
    { id: 38, image: "https://res.cloudinary.com/dbutuibtl/image/upload/v1754841666/work10_y9plcq.png" },
    { id: 39, image: "https://res.cloudinary.com/dbutuibtl/image/upload/v1754840579/1_snqeuu.jpg" },
    { id: 40, image: "https://res.cloudinary.com/dbutuibtl/image/upload/v1754840577/7_lwbfjg.jpg" },
    { id: 41, image: "https://res.cloudinary.com/dbutuibtl/image/upload/v1754840578/9_iibnr4.jpg" },
    { id: 42, image: "https://res.cloudinary.com/dbutuibtl/image/upload/v1754840580/17_fcgw4w.jpg" },
    { id: 43, image: "https://res.cloudinary.com/dbutuibtl/image/upload/v1754840579/11_bx2b8j.jpg" },
    { id: 44, image: "https://res.cloudinary.com/dbutuibtl/image/upload/v1754840581/16_jbz4us.jpg" },
    { id: 45, image: "https://res.cloudinary.com/dbutuibtl/image/upload/v1754840582/24_yj9nps.jpg" },
    { id: 46, image: "https://res.cloudinary.com/dbutuibtl/image/upload/v1754840584/32_mlfh5u.jpg" },
    { id: 47, image: "https://res.cloudinary.com/dbutuibtl/image/upload/v1754840584/20_d0woxn.jpg" },
    { id: 48, image: "https://res.cloudinary.com/dbutuibtl/image/upload/v1754840584/28_abdcxz.jpg" },
    { id: 49, image: "https://res.cloudinary.com/dbutuibtl/image/upload/v1754840586/25_ewq6u1.jpg" },
    { id: 50, image: "https://res.cloudinary.com/dbutuibtl/image/upload/v1754840586/22_mtlcxk.jpg" },
    { id: 51, image: "https://res.cloudinary.com/dbutuibtl/image/upload/v1754840586/26_wioszi.jpg" },
    { id: 52, image: "https://res.cloudinary.com/dbutuibtl/image/upload/v1754840587/29_faqflk.jpg" },
    { id: 53, image: "https://res.cloudinary.com/dbutuibtl/image/upload/v1754840588/15_eadwtk.jpg" },
    { id: 54, image: "https://res.cloudinary.com/dbutuibtl/image/upload/v1754840595/42_nabpgn.jpg" },
    { id: 55, image: "https://res.cloudinary.com/dbutuibtl/image/upload/v1754840596/41_b2gqg9.jpg" },
    { id: 56, image: "https://res.cloudinary.com/dbutuibtl/image/upload/v1754841576/thumb_10_nbwnye.jpg" },
    { id: 57, image: "https://res.cloudinary.com/dbutuibtl/image/upload/v1754841609/work1_vxl0fh.jpg" },
    { id: 58, image: "https://res.cloudinary.com/dbutuibtl/image/upload/v1754841610/work2_je8l9q.jpg" },
    { id: 59, image: "https://res.cloudinary.com/dbutuibtl/image/upload/v1754841613/work3_gefo2e.png" },
    { id: 60, image: "https://res.cloudinary.com/dbutuibtl/image/upload/v1754841641/work4_kgl0qw.jpg" },
    { id: 61, image: "https://res.cloudinary.com/dbutuibtl/image/upload/v1754841643/work5_ok0vrs.jpg" },
    { id: 62, image: "https://res.cloudinary.com/dbutuibtl/image/upload/v1754841658/work6_lgxzuy.jpg" },
    { id: 63, image: "https://res.cloudinary.com/dbutuibtl/image/upload/v1754841659/work7_odq6jl.jpg" },
    { id: 64, image: "https://res.cloudinary.com/dbutuibtl/image/upload/v1754841662/work8_raxkee.jpg" },
    { id: 65, image: "https://res.cloudinary.com/dbutuibtl/image/upload/v1754841664/work9_dn95mv.jpg" }
  ],
  "Corporate and Local Brands": [
    { id: 66, image: "https://res.cloudinary.com/dbutuibtl/image/upload/v1754840643/46_gv3xcr.jpg" },
    { id: 67, image: "https://res.cloudinary.com/dbutuibtl/image/upload/v1754840642/40_hri17v.jpg" },
    { id: 68, image: "https://res.cloudinary.com/dbutuibtl/image/upload/v1754840640/36_bnl2uu.jpg" },
    { id: 69, image: "https://res.cloudinary.com/dbutuibtl/image/upload/v1754840639/37_wssjup.jpg" },
    { id: 70, image: "https://res.cloudinary.com/dbutuibtl/image/upload/v1754840636/33_ndflt1.jpg" },
    { id: 71, image: "https://res.cloudinary.com/dbutuibtl/image/upload/v1754840631/35_dofy7d.jpg" }
  ],
  "Kids & Lifestyle": [
    { id: 72, image: "https://res.cloudinary.com/dbutuibtl/image/upload/v1754840786/45_tm3lsy.jpg" },
    { id: 73, image: "https://res.cloudinary.com/dbutuibtl/image/upload/v1754840783/43_r7avkk.jpg" },
    { id: 74, image: "https://res.cloudinary.com/dbutuibtl/image/upload/v1754840781/44_oslgr3.jpg" },
    { id: 75, image: "https://res.cloudinary.com/dbutuibtl/image/upload/v1754840769/34_vjt5ws.jpg" }
  ],
  "Wedding Shoot": [
    // No images provided for this category
  ],
  "Behind the Scene": [
    { id: 76, image: "https://res.cloudinary.com/dbutuibtl/image/upload/v1754841703/about1_flp17p.png" },
    { id: 77, image: "https://res.cloudinary.com/dbutuibtl/image/upload/v1754841702/about2_uete2w.png" },
    { id: 78, image: "https://res.cloudinary.com/dbutuibtl/image/upload/v1754841699/thumb_07_tog2yl.jpg" },
    { id: 79, image: "https://res.cloudinary.com/dbutuibtl/image/upload/v1754841697/thumb_06_vsogfr.jpg" },
    { id: 80, image: "https://res.cloudinary.com/dbutuibtl/image/upload/v1754841695/thumb_05_fjrfee.jpg" },
    { id: 81, image: "https://res.cloudinary.com/dbutuibtl/image/upload/v1754841690/thumb_03_xlmxfy.jpg" },
    { id: 82, image: "https://res.cloudinary.com/dbutuibtl/image/upload/v1754840701/40_msmkh6.jpg" },
    { id: 83, image: "https://res.cloudinary.com/dbutuibtl/image/upload/v1754840699/46_xaszul.jpg" },
    { id: 84, image: "https://res.cloudinary.com/dbutuibtl/image/upload/v1754840698/39_izoriw.jpg" },
    { id: 85, image: "https://res.cloudinary.com/dbutuibtl/image/upload/v1754840687/4_o5lgvo.jpg" },
    { id: 86, image: "https://res.cloudinary.com/dbutuibtl/image/upload/v1754840686/3_bvkhyi.jpg" },
    { id: 87, image: "https://res.cloudinary.com/dbutuibtl/image/upload/v1754840686/2_kao19e.jpg" },
    { id: 88, image: "https://res.cloudinary.com/dbutuibtl/image/upload/v1754840685/5_wntmuo.jpg" }
  ]
};

// Videos 
const featuredProjects = [
  {
    id: 8,
    title: "Summer Campaign",
    videoUrl: "https://res.cloudinary.com/dbutuibtl/video/upload/v1749877779/otla_new_08_fabdd1.mp4",
    thumbnail: "/assets/images/thumb_08.JPG"
  },
  {
    id: 9,
    title: "Summer Campaign",
    videoUrl: "https://res.cloudinary.com/dbutuibtl/video/upload/v1749877811/Dazzzlin_09_tbpbeg.mp4",
    thumbnail: "/assets/images/thumb_09.JPG"
  },
  {
    id: 10,
    title: "Summer Campaign",
    videoUrl: "https://res.cloudinary.com/dbutuibtl/video/upload/v1749877674/another_women_10_jxpmn8.mp4",
    thumbnail: "/assets/images/thumb_10.JPG"
  },
  {
    id: 1,
    title: "Summer Campaign",
    videoUrl: "https://res.cloudinary.com/dbutuibtl/video/upload/v1749877932/Sequence_01_hvakn8.mp4",
    thumbnail: "/assets/images/thumb_01.JPG"
  },
  {
    id: 2,
    title: "Product Launch",
    videoUrl: "https://res.cloudinary.com/dbutuibtl/video/upload/v1749877967/Sequence_02_whz5wg.mp4",
    thumbnail: "/assets/images/thumb_02.JPG"
  },
  {
    id: 3,
    title: "Brand Story",
    videoUrl: "https://res.cloudinary.com/dbutuibtl/video/upload/v1749877961/otla_x_ocvision_03_ljefuc.mp4",
    thumbnail: "/assets/images/thumb_03.JPG"
  },
  {
    id: 4,
    title: "Brand Story",
    videoUrl: "https://res.cloudinary.com/dbutuibtl/video/upload/v1749877992/numb_04_sqpefa.mp4",
    thumbnail: "/assets/images/thumb_04.JPG"
  },
  {
    id: 5,
    title: "Brand Story",
    videoUrl: "https://res.cloudinary.com/dbutuibtl/video/upload/v1749877933/ocvision_bhs_05_occoij.mp4",
    thumbnail: "/assets/images/thumb_05.JPG"
  },
  {
    id: 6,
    title: "Brand Story",
    videoUrl: "https://res.cloudinary.com/dbutuibtl/video/upload/v1749877923/ocvision_recording_studio_06_tyoumf.mp4",
    thumbnail: "/assets/images/thumb_06.JPG"
  },
  {
    id: 7,
    title: "Brand Story",
    videoUrl: "https://res.cloudinary.com/dbutuibtl/video/upload/v1749877966/cine_oc_vision_07_mr0v6l.mp4",
    thumbnail: "/assets/images/thumb_07.JPG"
  },
];

const OurWork = () => {
  const [activeTab, setActiveTab] = useState<'photography' | 'videography'>('photography');
  const [activeCategory, setActiveCategory] = useState<string>('Fashion');
  const [playingVideo, setPlayingVideo] = useState<number | null>(null);
  const [loadedImages, setLoadedImages] = useState<{[key: string]: boolean}>({});
  const [visibleImages, setVisibleImages] = useState<number>(6);
  const [visibleVideos, setVisibleVideos] = useState<number>(6);
  const videoRefs = useRef<{[key: number]: HTMLVideoElement | null}>({});

  // Handle image load
  const handleImageLoad = (id: string) => {
    setLoadedImages(prev => ({ ...prev, [id]: true }));
  };

  // Toggle video play/pause
  const toggleVideo = (id: number) => {
    if (playingVideo === id) {
      videoRefs.current[id]?.pause();
      setPlayingVideo(null);
    } else {
      if (playingVideo) videoRefs.current[playingVideo]?.pause();
      setPlayingVideo(id);
      setTimeout(() => videoRefs.current[id]?.play(), 100);
    }
  };

  // Load more images
  const loadMoreImages = () => {
    const currentImages = photographyCategories[activeCategory as keyof typeof photographyCategories];
    setVisibleImages(prev => Math.min(prev + 6, currentImages.length));
  };

  // Load more videos
  const loadMoreVideos = () => {
    setVisibleVideos(prev => Math.min(prev + 6, featuredProjects.length));
  };

  // Get image aspect ratio class
  const getAspectRatioClass = (imgUrl: string) => {
    // This is a simplified approach - in a real app you'd check actual image dimensions
    const landscapeKeywords = ['work', 'thumb', 'commercial'];
    const isLandscape = landscapeKeywords.some(keyword => imgUrl.includes(keyword));
    return isLandscape ? 'aspect-video' : 'aspect-[3/4]';
  };

  return (
    <div className="bg-dark text-gray-100 min-h-screen">
      {/* Hero Banner Section */}
      <section className="relative h-screen max-h-[800px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-black/60 z-10"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{
            backgroundImage: "url('https://i.pinimg.com/736x/cd/79/ea/cd79ea220072c42e7710b77a15be73d4.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center"
          }}
        ></div>
        
        <div className="relative z-20 text-center px-4">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            Our <span className="text-accent">Creative</span> Work
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl max-w-3xl mx-auto mb-8"
          >
            Explore our portfolio of visual storytelling across multiple disciplines
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="animate-bounce mt-12"
          >
            <ArrowRight className="w-8 h-8 mx-auto rotate-90" />
          </motion.div>
        </div>
      </section>

      {/* Content Toggle Buttons */}
      <section className="py-12 px-4 max-w-7xl mx-auto">
        <div className="flex justify-center gap-4 mb-12">
          <button
            onClick={() => setActiveTab('photography')}
            className={`px-8 py-3 rounded-full text-lg font-medium transition-all ${
              activeTab === 'photography' 
                ? 'bg-accent text-dark' 
                : 'bg-gray-800 hover:bg-gray-700'
            }`}
          >
            Photography
          </button>
          <button
            onClick={() => setActiveTab('videography')}
            className={`px-8 py-3 rounded-full text-lg font-medium transition-all ${
              activeTab === 'videography' 
                ? 'bg-accent text-dark' 
                : 'bg-gray-800 hover:bg-gray-700'
            }`}
          >
            Videography
          </button>
        </div>

         {/* Photography Content */}
         {activeTab === 'photography' && (
          <div>
            {/* Category Buttons */}
            <div className="flex flex-wrap justify-center gap-3 mb-12">
              {Object.keys(photographyCategories).map(category => (
                <button
                  key={category}
                  onClick={() => {
                    setActiveCategory(category);
                    setVisibleImages(6);
                  }}
                  className={`px-6 py-2 rounded-full text-sm md:text-base transition-all ${
                    activeCategory === category 
                      ? 'bg-accent text-dark font-medium' 
                      : 'bg-gray-800 hover:bg-gray-700'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Image Grid */}
            {photographyCategories[activeCategory as keyof typeof photographyCategories].length > 0 ? (
              <>
                <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
                  {photographyCategories[activeCategory as keyof typeof photographyCategories]
                    .slice(0, visibleImages)
                    .map((item) => (
                      <motion.div 
                        key={item.id}
                        whileHover={{ scale: 1.02 }}
                        className="relative group rounded-xl overflow-hidden break-inside-avoid"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5 }}
                      >
                        <div className="relative w-full">
                          {/* Low-quality placeholder */}
                          {!loadedImages[item.id.toString()] && (
                            <div className={`${getAspectRatioClass(item.image)} bg-gray-800 animate-pulse`}></div>
                          )}
                          
                          {/* Lazy-loaded high-quality image */}
                          <img 
                            src={item.image} 
                            alt=""
                            className={`w-full rounded-xl object-cover transition-all duration-500 group-hover:brightness-110 ${
                              loadedImages[item.id.toString()] ? 'opacity-100' : 'opacity-0 absolute'
                            } ${getAspectRatioClass(item.image)}`}
                            loading="lazy"
                            onLoad={() => handleImageLoad(item.id.toString())}
                          />
                        </div>
                      </motion.div>
                    ))}
                </div>

                {visibleImages < photographyCategories[activeCategory as keyof typeof photographyCategories].length && (
                  <div className="text-center mt-12">
                    <button 
                      onClick={loadMoreImages}
                      className="btn btn-accent px-8 py-3 rounded-full text-lg font-medium"
                    >
                      Load More
                    </button>
                  </div>
                )}
              </>
            ) : (
              <div className="text-center py-20">
                <div className="max-w-2xl mx-auto">
                  <h3 className="text-2xl font-medium mb-4">No images available for this category</h3>
                  <p className="text-gray-400">
                    We're currently working on adding content for this category. Please check back later or explore our other categories.
                  </p>
                </div>
              </div>
            )}
          </div>
        )}


        {/* Videography Content - Kept exactly the same as original */}
        {activeTab === 'videography' && (
          <div className="py-20">
            <div className="max-w-7xl mx-auto px-4">

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {featuredProjects.slice(0, visibleVideos).map((project) => (
                  <div 
                    key={project.id} 
                    className="group relative rounded-2xl overflow-hidden"
                    style={{ height: '600px' }}
                  >
                    <div className="relative h-full w-full">
                      {playingVideo === project.id ? (
                        <video
                          ref={(el) => { videoRefs.current[project.id] = el }}
                          src={project.videoUrl}
                          className="w-full h-full object-cover"
                          loop
                          muted
                          playsInline
                          preload="none"
                          onClick={() => toggleVideo(project.id)}
                        />
                      ) : (
                        <>
                          <img 
                            src={project.thumbnail} 
                            alt={project.title}
                            className="w-full h-full object-cover"
                            onLoad={() => handleImageLoad(`video-${project.id}`)}
                          />
                          <div 
                            className="absolute inset-0 bg-black/30 flex items-center justify-center cursor-pointer"
                            onClick={() => toggleVideo(project.id)}
                          >
                          </div>
                        </>
                      )}
                      
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-6">
                        <div className="flex justify-between items-start">
                          <button 
                            onClick={() => toggleVideo(project.id)}
                            className="bg-white/20 backdrop-blur-sm rounded-full p-2 hover:bg-white/30 transition-colors"
                            aria-label={playingVideo === project.id ? "Pause video" : "Play video"}
                          >
                            {playingVideo === project.id ? (
                              <Pause className="w-5 h-5 text-white" />
                            ) : (
                              <Play className="w-5 h-5 text-white" />
                            )}
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {visibleVideos < featuredProjects.length && (
                <div className="text-center mt-12">
                  <button 
                    onClick={loadMoreVideos}
                    className="btn btn-accent px-8 py-3 rounded-full text-lg font-medium"
                  >
                    Load More
                  </button>
                </div>
              )}
            </div>
          </div>
        )}
      </section>
    </div>
  );
};

export default OurWork;