
// import React, { useState } from 'react';
// import {Link} from 'react-router-dom'
// import { FaGithub, FaLinkedin, FaInstagram, FaFacebook } from "react-icons/fa";
// import { FaSquareXTwitter } from "react-icons/fa6";
// import './Hero.css';

// const Hero: React.FC = () => {
//   const [imageLoaded, setImageLoaded] = useState(false);

//   return (
//     <main className="hero container mx-auto p-16 text-center">
//       <section>

//      <div className='flex justify-center'>
//      <div className="relative w-32 h-32">
//               {!imageLoaded && (
//                 <div className="absolute inset-0 rounded-full skeleton" />
//               )}
//               <img
//                 src="https://firebasestorage.googleapis.com/v0/b/stellar-wings.appspot.com/o/IMG_20240807_235955.jpg?alt=media&token=9f0f3591-8a90-490b-bb97-ad466843ce1f" 
//                 className={`h-32 w-32 rounded-full ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
//                 alt="Me"
//                 onLoad={() => setImageLoaded(true)}
//               />
//             </div>
//      </div>


//         <h1 className="text-4xl md:text-6xl font-bold mb-4">
//           <span className="text-4xl text-blue-500">Hi, I'm</span>
//           <br />
//           Gaurisankar Tarasia
//         </h1>
//         <h2 className="text-md md:text-md mb-8">
//           Tech Enthusiast
//         </h2>
// <div className='flex items-center justify-center'>
//   <Link to="https://github.com/gaurisankartarasia" target='_blank' className='p-3 transition-all duration-300 dark:text-white dark:hover:text-black rounded-full hover:bg-gray-200'>
//   <FaGithub size={30}/>
//   </Link>
//   <Link to="https://linkedin.com/in/gaurisankar-tarasia-0a32a8235" target='_blank' className='p-3 transition-all duration-300 dark:text-white dark:hover:text-black rounded-full hover:bg-gray-200'>
//   <FaLinkedin size={30}/>
//   </Link>
//   <Link to="https://x.com/gaurisankar_li2" target='_blank' className='p-3 transition-all duration-300 dark:text-white dark:hover:text-black rounded-full hover:bg-gray-200'>
//   <FaSquareXTwitter size={30}/>
//   </Link>
// </div>

// <footer className="flex flex-col items-center justify-center">
//   <p className="mb-2 text-gray-500 mt-16">----- Social -----</p>
//   <div className="flex items-center justify-center">
//     <Link to="https://www.instagram.com/gaurisankartarasia/" target='_blank' className='p-3 text-gray-400 transition-all duration-300 dark:text-white rounded-full hover:text-gray-500'>
//       <FaInstagram size={20}/>
//     </Link>
//     <Link to="https://www.facebook.com/gaurisankar.littu" target='_blank' className='p-3 text-gray-400 transition-all duration-300 dark:text-white rounded-full hover:text-gray-500'>
//       <FaFacebook size={20}/>
//     </Link>
//   </div>
// </footer> 

//       </section>
//     </main>
//   );
// };

// export default Hero;









import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaGithub, FaLinkedin, FaInstagram, FaFacebook, FaWhatsapp } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { Tooltip } from '@nextui-org/react';

const Hero = () => {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-900 dark:to-blue-900">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-100 dark:bg-purple-900/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-100 dark:bg-blue-900/20 rounded-full blur-3xl"></div>
      </div>

      <div className="relative min-h-screen flex items-center justify-center p-8">
        <div className="bg-white/70 dark:bg-gray-900/70 backdrop-blur-xl rounded-3xl p-8 md:p-12 w-full max-w-4xl shadow-xl">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Left Column - Image and Name */}
            <div className="space-y-6 text-center md:text-left">
              <div className="relative inline-block group">
                <div className="absolute inset-0 bg-blue-500 rounded-2xl blur-2xl opacity-20 group-hover:opacity-30 transition-opacity"></div>
                <div className="relative w-40 h-40 mx-auto md:mx-0">
                  {!imageLoaded && (
                    <div className="absolute inset-0 rounded-2xl animate-pulse bg-gray-200 dark:bg-gray-700" />
                  )}
                  <img
                    src="https://firebasestorage.googleapis.com/v0/b/stellar-wings.appspot.com/o/IMG_20240807_235955.jpg?alt=media&token=9f0f3591-8a90-490b-bb97-ad466843ce1f"
                    className={`w-40 h-40 rounded-2xl object-cover shadow-lg transition-all duration-500 ${
                      imageLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                    }`}
                    alt="Gaurisankar Tarasia"
                    onLoad={() => setImageLoaded(true)}
                  />
                </div>
              </div>
              
              <div>
                <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
                  {/* Gaurisankar Tarasia */}
                  GAURISANKAR TARASIA
                </h1>
                {/* <div className="mt-2 inline-block px-4 py-1 rounded-full bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/50 dark:to-purple-900/50">
                  <p className="text-gray-700 dark:text-gray-300 font-medium">
                    Tech Enthusiast
                  </p>
                </div> */}
              </div>
            </div>

            {/* Right Column - Social Links */}
            <div className="space-y-8">
              {/* Primary Social Links */}
              <div className="grid grid-cols-3 gap-4">
                <Tooltip content='Go to GitHub profile' showArrow={true} color="foreground" >
                <Link
                  to="https://github.com/gaurisankartarasia"
                  target="_blank"
                  className="group flex flex-col items-center p-4 rounded-xl bg-gray-50 dark:bg-gray-800/50 hover:bg-gray-100 dark:hover:bg-gray-800 transition-all"
                >
                  <FaGithub className="w-8 h-8 text-gray-700 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors" />
                  <span className="mt-2 text-sm text-gray-600 dark:text-gray-400">GitHub</span>
                </Link>
                </Tooltip>
                <Tooltip content='Go to LinkedIn profile' showArrow={true} color="foreground" >

                <Link
                  to="https://linkedin.com/in/gaurisankar-tarasia-0a32a8235"
                  target="_blank"
                  className="group flex flex-col items-center p-4 rounded-xl bg-gray-50 dark:bg-gray-800/50 hover:bg-gray-100 dark:hover:bg-gray-800 transition-all"
                >
                  <FaLinkedin className="w-8 h-8 text-gray-700 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors" />
                  <span className="mt-2 text-sm text-gray-600 dark:text-gray-400">LinkedIn</span>
                </Link>
                </Tooltip>
                <Tooltip content='Go to Twitter profile' showArrow={true} color="foreground" >

                <Link
                  to="https://x.com/gaurisankar_li2"
                  target="_blank"
                  className="group flex flex-col items-center p-4 rounded-xl bg-gray-50 dark:bg-gray-800/50 hover:bg-gray-100 dark:hover:bg-gray-800 transition-all"
                >
                  <FaSquareXTwitter className="w-8 h-8 text-gray-700 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors" />
                  <span className="mt-2 text-sm text-gray-600 dark:text-gray-400">Twitter</span>
                </Link>
                </Tooltip>
              </div>

              {/* Additional Social Links */}
              <div className="flex justify-center space-x-6 pt-6 border-t border-gray-200 dark:border-gray-700">
              <Tooltip content='Go to Instagram profile' showArrow={true} color='secondary' >

                <Link
                  to="https://www.instagram.com/gaurisankartarasia/"
                  target="_blank"
                  className="group relative"
                >
                  <div className="absolute inset-0 bg-pink-500 rounded-lg blur opacity-0 group-hover:opacity-20 transition-opacity"></div>
                  <FaInstagram className="relative w-6 h-6 text-gray-400 group-hover:text-pink-500 dark:group-hover:text-pink-400 transition-colors" />
                </Link>
                </Tooltip>
                <Tooltip content='Go to Facebook profile' showArrow={true} color='primary' >

                <Link
                  to="https://www.facebook.com/gaurisankar.littu"
                  target="_blank"
                  className="group relative"
                >
                  <div className="absolute inset-0 bg-blue-500 rounded-lg blur opacity-0 group-hover:opacity-20 transition-opacity"></div>
                  <FaFacebook className="relative w-6 h-6 text-gray-400 group-hover:text-blue-500 dark:group-hover:text-blue-400 transition-colors" />
                </Link>
                </Tooltip>
                <Tooltip content='Message on WhatsApp' showArrow={true} color='success' >

                <Link
                  to="https://wa.me/9938292646?text=Hello%20Gaurisankar%20I%20found%20your%20contact%20from%20your%20portfolio%20website"
                  target="_blank"
                  className="group relative"
                >
                  <div className="absolute inset-0 bg-blue-500 rounded-lg blur opacity-0 group-hover:opacity-20 transition-opacity"></div>
                  <FaWhatsapp className="relative w-6 h-6 text-gray-400 group-hover:text-green-500 dark:group-hover:text-green-400 transition-colors" />
                </Link>
                </Tooltip>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;