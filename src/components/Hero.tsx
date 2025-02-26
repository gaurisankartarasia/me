






// import { useState } from 'react';
// import { Link } from 'react-router-dom';
// import { FaGithub, FaLinkedin, FaInstagram, FaFacebook, FaWhatsapp } from "react-icons/fa";
// import { FaSquareXTwitter } from "react-icons/fa6";
// import { Tooltip } from '@nextui-org/react';
// import {Card} from "@nextui-org/react";

// const Hero = () => {
//   const [imageLoaded, setImageLoaded] = useState(false);

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-900 dark:to-blue-900">
//       {/* Decorative Background Elements */}
//       <div className="absolute inset-0 overflow-hidden">
//         <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-100 dark:bg-purple-900/20 rounded-full blur-3xl"></div>
//         <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-100 dark:bg-blue-900/20 rounded-full blur-3xl"></div>
//       </div>

//       <div className="relative min-h-screen flex items-center justify-center p-4">
//         <Card isPressable shadow='none' className=" p-8 md:p-12 w-full max-w-4xl">
//           <div className="grid md:grid-cols-2 gap-8 items-center">
//             {/* Left Column - Image and Name */}
//             <div className="space-y-6 text-center md:text-left">
//               <div className="relative inline-block group">
//                 <div className="absolute inset-0 bg-blue-500 rounded-2xl blur-2xl opacity-20 group-hover:opacity-30 transition-opacity"></div>
//                 <div className="relative w-40 h-40 mx-auto md:mx-0">
//                   {!imageLoaded && (
//                     <div className="absolute inset-0 rounded-2xl animate-pulse bg-gray-200 dark:bg-gray-700" />
//                   )}
//                   <img
//                     src="https://firebasestorage.googleapis.com/v0/b/stellar-wings.appspot.com/o/IMG_20240807_235955.jpg?alt=media&token=9f0f3591-8a90-490b-bb97-ad466843ce1f"
//                     className={`w-40 h-40 rounded-2xl object-cover shadow-lg transition-all duration-500 ${
//                       imageLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
//                     }`}
//                     alt="Gaurisankar Tarasia"
//                     onLoad={() => setImageLoaded(true)}
//                   />
//                 </div>
//               </div>
              
//               <div>
//                 <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
//                   {/* Gaurisankar Tarasia */}
//                   GAURISANKAR TARASIA
//                 </h1>
                
//               </div>
//             </div>

//             {/* Right Column - Social Links */}
//             <div className="space-y-8">
//               {/* Primary Social Links */}
//               <div className="grid grid-cols-3 gap-4">
//                 <Tooltip content='Go to GitHub profile' showArrow={true} color="foreground" >
//                 <Link
//                   to="https://github.com/gaurisankartarasia"
//                   target="_blank"
//                   className="group flex flex-col items-center p-4 rounded-xl bg-gray-50 dark:bg-gray-800/50 hover:bg-gray-100 dark:hover:bg-gray-800 transition-all"
//                 >
//                   <FaGithub className="w-8 h-8 text-gray-700 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors" />
//                   <span className="mt-2 text-sm text-gray-600 dark:text-gray-400">GitHub</span>
//                 </Link>
//                 </Tooltip>
//                 <Tooltip content='Go to LinkedIn profile' showArrow={true} color="foreground" >

//                 <Link
//                   to="https://linkedin.com/in/gaurisankar-tarasia-0a32a8235"
//                   target="_blank"
//                   className="group flex flex-col items-center p-4 rounded-xl bg-gray-50 dark:bg-gray-800/50 hover:bg-gray-100 dark:hover:bg-gray-800 transition-all"
//                 >
//                   <FaLinkedin className="w-8 h-8 text-gray-700 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors" />
//                   <span className="mt-2 text-sm text-gray-600 dark:text-gray-400">LinkedIn</span>
//                 </Link>
//                 </Tooltip>
//                 <Tooltip content='Go to Twitter profile' showArrow={true} color="foreground" >

//                 <Link
//                   to="https://x.com/gaurisankar_li2"
//                   target="_blank"
//                   className="group flex flex-col items-center p-4 rounded-xl bg-gray-50 dark:bg-gray-800/50 hover:bg-gray-100 dark:hover:bg-gray-800 transition-all"
//                 >
//                   <FaSquareXTwitter className="w-8 h-8 text-gray-700 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors" />
//                   <span className="mt-2 text-sm text-gray-600 dark:text-gray-400">Twitter</span>
//                 </Link>
//                 </Tooltip>
//               </div>

//               {/* Additional Social Links */}
//               <div className="flex justify-center space-x-6 pt-6 border-t border-gray-200 dark:border-gray-700">
//               <Tooltip content='Go to Instagram profile' showArrow={true} color='secondary' >

//                 <Link
//                   to="https://www.instagram.com/gaurisankartarasia/"
//                   target="_blank"
//                   className="group relative"
//                 >
//                   <div className="absolute inset-0 bg-pink-500 rounded-lg blur opacity-0 group-hover:opacity-20 transition-opacity"></div>
//                   <FaInstagram className="relative w-6 h-6 text-gray-400 group-hover:text-pink-500 dark:group-hover:text-pink-400 transition-colors" />
//                 </Link>
//                 </Tooltip>
//                 <Tooltip content='Go to Facebook profile' showArrow={true} color='primary' >

//                 <Link
//                   to="https://www.facebook.com/gaurisankar.littu"
//                   target="_blank"
//                   className="group relative"
//                 >
//                   <div className="absolute inset-0 bg-blue-500 rounded-lg blur opacity-0 group-hover:opacity-20 transition-opacity"></div>
//                   <FaFacebook className="relative w-6 h-6 text-gray-400 group-hover:text-blue-500 dark:group-hover:text-blue-400 transition-colors" />
//                 </Link>
//                 </Tooltip>
//                 <Tooltip content='Message on WhatsApp' showArrow={true} color='success' >

//                 <Link
//                   to="https://wa.me/9938292646?text=Hello%20Gaurisankar%20I%20found%20your%20contact%20from%20your%20portfolio%20website"
//                   target="_blank"
//                   className="group relative"
//                 >
//                   <div className="absolute inset-0 bg-blue-500 rounded-lg blur opacity-0 group-hover:opacity-20 transition-opacity"></div>
//                   <FaWhatsapp className="relative w-6 h-6 text-gray-400 group-hover:text-green-500 dark:group-hover:text-green-400 transition-colors" />
//                 </Link>
//                 </Tooltip>
//               </div>
//             </div>
//           </div>
//         </Card>
//       </div>
//     </div>
//   );
// };

// export default Hero;




import { useState } from "react"
import {Link} from "react-router-dom"
import { FiMessageCircle, FiGithub, FiLinkedin, FiInstagram, FiFacebook, FiTwitter } from "react-icons/fi";

import { Card } from "@/components/ui/card"
import { Tooltip } from "@/components/ui/tooltip"
import { TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

export default function Hero() {
  const [imageLoaded, setImageLoaded] = useState(false)

  return (
    <div className="min-h-screen bg-[#fefaf5] dark:bg-[#2a2420]">
      {/* Vintage texture overlay */}
      <div
        className="absolute inset-0 opacity-5 pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Ccircle cx='50' cy='50' r='1'/%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: "24px 24px",
        }}
      ></div>

      {/* Decorative borders */}
      <div
        className="absolute inset-x-0 top-0 h-4 bg-repeat-x"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='12' viewBox='0 0 40 12' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 6 L10 0 L20 6 L30 0 L40 6 L40 12 L0 12 Z' fill='%23832c12' fill-opacity='0.1'/%3E%3C/svg%3E")`,
          backgroundSize: "40px 12px",
        }}
      ></div>
      <div
        className="absolute inset-x-0 bottom-0 h-4 bg-repeat-x transform rotate-180"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='12' viewBox='0 0 40 12' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 6 L10 0 L20 6 L30 0 L40 6 L40 12 L0 12 Z' fill='%23832c12' fill-opacity='0.1'/%3E%3C/svg%3E")`,
          backgroundSize: "40px 12px",
        }}
      ></div>

      <div className="relative min-h-screen flex items-center justify-center p-4">
        <Card className="relative w-full max-w-4xl bg-[#fefaf5] dark:bg-[#352c27] border-[#832c12] border-2">
          {/* Corner ornaments */}
          <div className="absolute -top-3 -left-3 w-12 h-12 border-t-2 border-l-2 border-[#832c12]"></div>
          <div className="absolute -top-3 -right-3 w-12 h-12 border-t-2 border-r-2 border-[#832c12]"></div>
          <div className="absolute -bottom-3 -left-3 w-12 h-12 border-b-2 border-l-2 border-[#832c12]"></div>
          <div className="absolute -bottom-3 -right-3 w-12 h-12 border-b-2 border-r-2 border-[#832c12]"></div>

          <div className="p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Left Column */}
              <div className="space-y-8 text-center md:text-left">
                <div className="relative inline-block mx-auto md:mx-0">
                  {/* Vintage frame effect */}
                  <div className="absolute inset-0 border-4 border-[#832c12] rounded-lg transform -rotate-3"></div>
                  <div className="relative w-48 h-48">
                    {!imageLoaded && <div className="absolute inset-0 rounded-lg animate-pulse bg-[#e6d5c3]" />}
                    <img
                      src="https://firebasestorage.googleapis.com/v0/b/stellar-wings.appspot.com/o/IMG_20240807_235955_11zon.jpg?alt=media&token=204ab2c4-926a-44b0-88d2-394dc1f34251"
                      className={`w-48 h-48 rounded-lg object-cover shadow-lg transition-all duration-500 transform rotate-3 ${
                        imageLoaded ? "opacity-100 scale-100" : "opacity-0 scale-95"
                      }`}
                      alt="Gaurisankar Tarasia"
                      onLoad={() => setImageLoaded(true)}
                    />
                  </div>
                </div>

                <div className="relative">
                  <h1 className="font-serif text-4xl font-bold text-[#832c12] dark:text-[#e6d5c3]">
                    GAURISANKAR TARASIA
                  </h1>
                  {/* Decorative underline */}
                  <div className="mt-2 h-1 w-32 mx-auto md:mx-0 bg-[#832c12] dark:bg-[#e6d5c3] opacity-50"></div>
                </div>
              </div>

              {/* Right Column */}
              <div className="space-y-8">
                <div className="grid grid-cols-3 gap-6">
                  <TooltipProvider>
                    {[
                      { icon: FiGithub, label: "GitHub", href: "https://github.com/gaurisankartarasia" },
                      {
                        icon: FiLinkedin,
                        label: "LinkedIn",
                        href: "https://linkedin.com/in/gaurisankar-tarasia-0a32a8235",
                      },
                      { icon: FiTwitter, label: "Twitter", href: "https://x.com/gaurisankar_li2" },
                    ].map((social) => (
                      <Tooltip key={social.label}>
                        <TooltipTrigger asChild>
                          <Link
                            to={social.href}
                            target="_blank"
                            className="group flex flex-col items-center p-4 rounded-lg  dark:bg-[#2a2420]  dark:hover:bg-[#3a342f] transition-all border border-[#832c12] dark:border-[#e6d5c3]"
                          >
                            <social.icon className="w-8 h-8 text-[#832c12] dark:text-[#e6d5c3]" />
                            <span className="mt-2 text-sm font-serif text-[#832c12] dark:text-[#e6d5c3]">
                              {social.label}
                            </span>
                          </Link>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Go to {social.label} profile</p>
                        </TooltipContent>
                      </Tooltip>
                    ))}
                  </TooltipProvider>
                </div>

                <div className="flex justify-center space-x-8 pt-6 border-t-2 border-[#832c12] dark:border-[#e6d5c3] border-dashed">
                  <TooltipProvider>
                    {[
                      { icon: FiInstagram, label: "Instagram", href: "https://www.instagram.com/gaurisankartarasia/" },
                      { icon: FiFacebook, label: "Facebook", href: "https://www.facebook.com/gaurisankar.littu" },
                      {
                        icon: FiMessageCircle,
                        label: "WhatsApp",
                        href: "https://wa.me/9938292646?text=Hello%20Gaurisankar%20I%20found%20your%20contact%20from%20your%20portfolio%20website",
                      },
                    ].map((social) => (
                      <Tooltip key={social.label}>
                        <TooltipTrigger asChild>
                          <Link to={social.href} target="_blank" className="group relative p-2">
                            <social.icon className="w-6 h-6 text-[#832c12] dark:text-[#e6d5c3] transition-transform group-hover:scale-110" />
                          </Link>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Go to {social.label}</p>
                        </TooltipContent>
                      </Tooltip>
                    ))}
                  </TooltipProvider>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  )
}

