

// // Navbar.tsx
// import React, { useEffect } from 'react';
// import { NavLink, useLocation } from 'react-router-dom';
// import NProgress from 'nprogress';
// import 'nprogress/nprogress.css';
// import { FaHome, FaBook } from "react-icons/fa";
// import { VscGithubProject } from "react-icons/vsc";
// import { SiReactos } from "react-icons/si";
// import ThemeToggle from './ThemeToggle';

// const Navbar: React.FC = () => {
//   const location = useLocation();

//   useEffect(() => {
//     NProgress.start();
//     NProgress.done();
//   }, [location]);

//   useEffect(() => {
//     const style = document.createElement('style');
//     style.textContent = `
//       #nprogress .bar {
//         background: linear-gradient(to right, #3b82f6, #8b5cf6) !important;
//         height: 3px !important;
//       }
//       #nprogress .peg {
//         box-shadow: 0 0 10px #3b82f6, 0 0 5px #8b5cf6 !important;
//       }
//     `;
//     document.head.appendChild(style);
//     return () => style.remove();
//   }, []);

//   return (
//     <div className="fixed top-0 left-0 right-0 z-50">
//       {/* Main Navbar */}
//       <div className="bg-white/70 dark:bg-gray-900/70 backdrop-blur-lg border-b border-gray-200/50 dark:border-gray-700/50">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex justify-between items-center h-16">
//             {/* Logo Section */}
//             <NavLink 
//               to="/" 
//               className="flex items-center space-x-3 group"
//             >
//               <div className="relative w-10 h-10 overflow-hidden rounded-xl transition-transform duration-300 group-hover:scale-105">
//                 <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 dark:from-blue-500/10 dark:to-purple-500/10 rounded-xl"></div>
//                 <img
//                   src="https://firebasestorage.googleapis.com/v0/b/stellar-wings.appspot.com/o/IMG_20240807_235955.jpg?alt=media&token=9f0f3591-8a90-490b-bb97-ad466843ce1f"
//                   className="w-full h-full object-cover rounded-xl"
//                   alt="GST Logo"
//                 />
//               </div>
//               {/* <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
//                 GST
//               </span> */}
//             </NavLink>

//             {/* Navigation Links and Theme Toggle */}
//             <div className="flex items-center space-x-1">
//               <NavLink
//                 to="/"
//                 className={({ isActive }: { isActive: boolean }) =>
//                   `px-4 py-2 rounded-xl flex items-center space-x-2 transition-all duration-300 ${
//                     isActive
//                       ? 'bg-blue-100/50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400'
//                       : 'hover:bg-gray-100/50 dark:hover:bg-gray-800/30 text-gray-700 dark:text-gray-300'
//                   }`
//                 }
//               >
//                 <FaHome />
//                 <span className="font-medium">Home</span>
//               </NavLink>

//               <NavLink
//                 to="/knowledge"
//                 className={({ isActive }: { isActive: boolean }) =>
//                   `px-4 py-2 rounded-xl flex items-center space-x-2 transition-all duration-300 ${
//                     isActive
//                       ? 'bg-blue-100/50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400'
//                       : 'hover:bg-gray-100/50 dark:hover:bg-gray-800/30 text-gray-700 dark:text-gray-300'
//                   }`
//                 }
//               >
//                 <SiReactos  />
//                 <span className="font-medium">Knowledge</span>
//               </NavLink>

//               <NavLink
//                 to="/projects"
//                 className={({ isActive }: { isActive: boolean }) =>
//                   `px-4 py-2 rounded-xl flex items-center space-x-2 transition-all duration-300 ${
//                     isActive
//                       ? 'bg-blue-100/50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400'
//                       : 'hover:bg-gray-100/50 dark:hover:bg-gray-800/30 text-gray-700 dark:text-gray-300'
//                   }`
//                 }
//               >
//                 <VscGithubProject className="text-lg" />
//                 <span className="font-medium">Projects</span>
//               </NavLink>

//               <ThemeToggle />
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className="h-0.5 bg-gradient-to-r from-blue-500/10 to-purple-500/10 dark:from-blue-400/5 dark:to-purple-400/5"></div>
//     </div>
//   );
// };

// export default Navbar;


















import React, { useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
import { FaHome, FaBook } from "react-icons/fa";
import { VscGithubProject } from "react-icons/vsc";
import { SiReactos } from "react-icons/si";
import ThemeToggle from './ThemeToggle';

const Navbar: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    NProgress.start();
    NProgress.done();
  }, [location]);

  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      #nprogress .bar {
        background: linear-gradient(to right, #3b82f6, #8b5cf6) !important;
        height: 3px !important;
      }
      #nprogress .peg {
        box-shadow: 0 0 10px #3b82f6, 0 0 5px #8b5cf6 !important;
      }
    `;
    document.head.appendChild(style);
    return () => style.remove();
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 z-50">
      {/* Main Navbar */}
      <div className="bg-white/70 dark:bg-gray-900/70 backdrop-blur-lg border-b border-gray-200/50 dark:border-gray-700/50">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo Section */}
            <NavLink 
              to="/" 
              className="flex items-center space-x-3 group"
            >
              <div className="relative w-8 h-8 sm:w-10 sm:h-10 overflow-hidden rounded-xl transition-transform duration-300 group-hover:scale-105">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 dark:from-blue-500/10 dark:to-purple-500/10 rounded-xl"></div>
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/stellar-wings.appspot.com/o/IMG_20240807_235955.jpg?alt=media&token=9f0f3591-8a90-490b-bb97-ad466843ce1f"
                  className="w-full h-full object-cover rounded-xl"
                  alt="GST Logo"
                />
              </div>
            </NavLink>

            {/* Navigation Links and Theme Toggle */}
            <div className="flex items-center space-x-1 sm:space-x-2">
              <NavLink
                to="/"
                className={({ isActive }: { isActive: boolean }) =>
                  `px-3 sm:px-4 py-2 rounded-xl flex items-center space-x-2 transition-all duration-300 ${
                    isActive
                      ? 'bg-blue-100/50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400'
                      : 'hover:bg-gray-100/50 dark:hover:bg-gray-800/30 text-gray-700 dark:text-gray-300'
                  }`
                }
              >
                <FaHome className="text-lg" />
                <span className="hidden sm:inline font-medium">Home</span>
              </NavLink>

              <NavLink
                to="/knowledge"
                className={({ isActive }: { isActive: boolean }) =>
                  `px-3 sm:px-4 py-2 rounded-xl flex items-center space-x-2 transition-all duration-300 ${
                    isActive
                      ? 'bg-blue-100/50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400'
                      : 'hover:bg-gray-100/50 dark:hover:bg-gray-800/30 text-gray-700 dark:text-gray-300'
                  }`
                }
              >
                <SiReactos className="text-lg" />
                <span className="hidden sm:inline font-medium">Knowledge</span>
              </NavLink>

              <NavLink
                to="/projects"
                className={({ isActive }: { isActive: boolean }) =>
                  `px-3 sm:px-4 py-2 rounded-xl flex items-center space-x-2 transition-all duration-300 ${
                    isActive
                      ? 'bg-blue-100/50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400'
                      : 'hover:bg-gray-100/50 dark:hover:bg-gray-800/30 text-gray-700 dark:text-gray-300'
                  }`
                }
              >
                <VscGithubProject className="text-lg" />
                <span className="hidden sm:inline font-medium">Projects</span>
              </NavLink>

              <ThemeToggle />
            </div>
          </div>
        </div>
      </div>

      <div className="h-0.5 bg-gradient-to-r from-blue-500/10 to-purple-500/10 dark:from-blue-400/5 dark:to-purple-400/5"></div>
    </div>
  );
};

export default Navbar;