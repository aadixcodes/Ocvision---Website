// import React from 'react';
// import { contactInfo, socialLinks, contactImages } from '../data/content';
// import { Phone, Mail, MapPin, Instagram, MessageCircle } from 'lucide-react';

// const ContactSection: React.FC = () => {
//   const renderSocialIcon = (iconName: string) => {
//     switch (iconName) {
//       case 'Whatsapp':
//         return <MessageCircle size={24} />;
//       case 'Instagram':
//         return <Instagram size={24} />;
//       case 'Mail':
//         return <Mail size={24} />;
//       default:
//         return null;
//     }
//   };

//   return (
//     <section id="contact" className="bg-dark section-padding">
//       <div className="container mx-auto container-padding">
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
//           <div className="animate-slide-right">
//             <h2 className="text-3xl md:text-4xl font-bold mb-6">
//               <span className="yellow-underline">Get in Touch</span>
//             </h2>
            
//             <div className="space-y-6 mb-8">
//               <div className="flex items-center">
//                 <Phone className="text-accent mr-4" size={24} />
//                 <span>{contactInfo.phone}</span>
//               </div>
//               <div className="flex items-center">
//                 <Mail className="text-accent mr-4" size={24} />
//                 <span>{contactInfo.email}</span>
//               </div>
//               <div className="flex items-start">
//                 <MapPin className="text-accent mr-4" size={24} />
//                 <span>{contactInfo.address}</span>
//               </div>
//             </div>
            
//             <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
//             <div className="flex space-x-4">
//               {socialLinks.map((link) => (
//                 <a 
//                   key={link.platform}
//                   href={link.url}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="text-white hover:text-accent transition-colors duration-300"
//                 >
//                   {renderSocialIcon(link.icon)}
//                 </a>
//               ))}
//             </div>
            
//             <div className="mt-12">
//               <form className="space-y-6">
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                   <input 
//                     type="text" 
//                     placeholder="Your Name" 
//                     className="bg-dark-gray border border-light-gray p-3 w-full focus:border-accent focus:outline-none transition-colors duration-300"
//                   />
//                   <input 
//                     type="email" 
//                     placeholder="Your Email" 
//                     className="bg-dark-gray border border-light-gray p-3 w-full focus:border-accent focus:outline-none transition-colors duration-300"
//                   />
//                 </div>
//                 <input 
//                   type="text" 
//                   placeholder="Subject" 
//                   className="bg-dark-gray border border-light-gray p-3 w-full focus:border-accent focus:outline-none transition-colors duration-300"
//                 />
//                 <textarea 
//                   placeholder="Your Message" 
//                   rows={5}
//                   className="bg-dark-gray border border-light-gray p-3 w-full focus:border-accent focus:outline-none transition-colors duration-300"
//                 ></textarea>
//                 <button type="submit" className="btn">
//                   Send Message
//                 </button>
//               </form>
//             </div>
//           </div>
          
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-4 animate-slide-left">
//             {contactImages.map((image) => (
//               <div key={image.id} className="portfolio-item h-64">
//                 <img 
//                   src={image.imageUrl} 
//                   alt={image.alt} 
//                   className="w-full h-full object-cover"
//                 />
//                 <div className="portfolio-overlay">
//                   <span className="text-accent">{image.alt}</span>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ContactSection;


import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { contactInfo, socialLinks, contactImages } from '../data/content';
import { Phone, Mail, MapPin, Instagram, MessageCircle, X } from 'lucide-react';

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [showPopup, setShowPopup] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const { name, email, subject, message } = formData;

    if (!name || !email || !subject || !message) {
      alert('Please fill all fields!');
      return;
    }

    if (formRef.current) {
      emailjs
        .sendForm(
          'service_ilno0io',      // ⬅️ apna service ID daalna
          'template_ke5plop',     // ⬅️ apna template ID daalna
          formRef.current,
          'AapphC-LzCw7DQq_n'
        )
        .then(
          () => {
            setShowPopup(true);
            setFormData({
              name: '',
              email: '',
              subject: '',
              message: '',
            });
          },
          (error) => {
            console.error(error);
            alert('Something went wrong. Try again!');
          }
        );
    }
  };

  const renderSocialIcon = (iconName: string) => {
    switch (iconName) {
      case 'Whatsapp':
        return <MessageCircle size={24} />;
      case 'Instagram':
        return <Instagram size={24} />;
      case 'Mail':
        return <Mail size={24} />;
      default:
        return null;
    }
  };

  return (
    <section id="contact" className="bg-dark section-padding">
      <div className="container mx-auto container-padding">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-slide-right">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              <span className="yellow-underline">Get in Touch</span>
            </h2>

            <div className="space-y-6 mb-8">
              <div className="flex items-center">
                <Phone className="text-accent mr-4" size={24} />
                <span>{contactInfo.phone}</span>
              </div>
              <div className="flex items-center">
                <Mail className="text-accent mr-4" size={24} />
                <span>{contactInfo.email}</span>
              </div>
              <div className="flex items-start">
                <MapPin className="text-accent mr-4" size={24} />
                <span>{contactInfo.address}</span>
              </div>
            </div>

            <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              {socialLinks.map((link) => (
                <a
                  key={link.platform}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-accent transition-colors duration-300"
                >
                  {renderSocialIcon(link.icon)}
                </a>
              ))}
            </div>

            <div className="mt-12">
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    className="bg-dark-gray border border-light-gray p-3 w-full focus:border-accent focus:outline-none transition-colors duration-300"
                  />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Your Email"
                    className="bg-dark-gray border border-light-gray p-3 w-full focus:border-accent focus:outline-none transition-colors duration-300"
                  />
                </div>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Subject"
                  className="bg-dark-gray border border-light-gray p-3 w-full focus:border-accent focus:outline-none transition-colors duration-300"
                />
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your Message"
                  rows={5}
                  className="bg-dark-gray border border-light-gray p-3 w-full focus:border-accent focus:outline-none transition-colors duration-300"
                ></textarea>
                <button type="submit" className="btn">
                  Send Message
                </button>
              </form>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 animate-slide-left">
            {contactImages.map((image) => (
              <div key={image.id} className="portfolio-item h-64">
                <img
                  src={image.imageUrl}
                  alt={image.alt}
                  className="w-full h-full object-cover"
                />
                <div className="portfolio-overlay">
                  <span className="text-accent">{image.alt}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {showPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
          <div className="bg-dark-gray p-8 rounded-xl text-center shadow-xl max-w-sm w-full relative">
            <X
              size={24}
              className="text-white absolute top-4 right-4 cursor-pointer"
              onClick={() => setShowPopup(false)}
            />
            <h2 className="text-2xl font-bold text-accent mb-4">Thank You!</h2>
            <p className="text-white mb-6">
              Your form has been submitted successfully. <br /> Our team will contact you soon.
            </p>
            <button className="btn" onClick={() => setShowPopup(false)}>
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default ContactSection;
