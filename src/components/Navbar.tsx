
// import React, { useEffect, useState } from 'react';
// import { NavLink, useLocation } from 'react-router-dom';
// import NProgress from 'nprogress';
// import 'nprogress/nprogress.css';
// import { Menu, Home,  BookOpen, GitBranch, LucideIcon } from "lucide-react";
// import {
//   Drawer,
//   DrawerContent,
//   DrawerHeader,
//   DrawerTitle,
//   DrawerTrigger,
// } from "@/components/ui/drawer";
// import { Button } from "@/components/ui/button";

// // Define interfaces for type safety
// interface NavItemProps {
//   path: string;
//   name: string;
//   icon: LucideIcon;
//   isMobile?: boolean;
//   onClick?: () => void;
// }

// interface NavItemType {
//   path: string;
//   name: string;
//   icon: LucideIcon;
// }

// const Navbar: React.FC = () => {
//   const location = useLocation();
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [open, setOpen] = useState(false);

//   useEffect(() => {
//     NProgress.start();
//     NProgress.done();
//   }, [location]);

//   // Close drawer when location changes
//   useEffect(() => {
//     setOpen(false);
//   }, [location]);

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 20);
//     };
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   useEffect(() => {
//     const style = document.createElement('style');
//     style.textContent = `
//       #nprogress .bar {
//         background: #832c12 !important;
//         height: 3px !important;
//       }
//       #nprogress .peg {
//         box-shadow: 0 0 10px #832c12, 0 0 5px #832c12 !important;
//       }
//     `;
//     document.head.appendChild(style);
//     return () => style.remove();
//   }, []);

//   const navItems: NavItemType[] = [
//     { path: '/', name: 'Home', icon: Home },
//     { path: '/knowledge', name: 'Knowledge', icon: BookOpen },
//     { path: '/projects', name: 'Projects', icon: GitBranch },
//   ];

//   const NavItem: React.FC<NavItemProps> = ({ path, name, icon: Icon, isMobile = false, onClick }) => (
//     <NavLink
//       to={path}
//       onClick={onClick}
//       className={({ isActive }: { isActive: boolean }) =>
//         `${isMobile ? 'w-full justify-start' : 'px-3 sm:px-4'} py-2 rounded-lg flex items-center 
//         space-x-3 transition-all duration-300 font-serif ${
//           isActive
//             ? 'border border-[#832c12] dark:bg-[#352c27] text-[#832c12] dark:text-[#e6d5c3] transform -rotate-1'
//             : ' text-[#8B4513] dark:text-[#e6d5c3]/80 hover:-rotate-1'
//         }`
//       }
//     >
//       <Icon className={`${isMobile ? 'w-5 h-5' : 'w-4 h-4'}`} />
//       <span className={`${isMobile ? '' : 'hidden sm:inline'} font-medium`}>{name}</span>
//     </NavLink>
//   );

//   // Handler to close the drawer
//   const handleNavClick = () => {
//     setOpen(false);
//   };

//   return (
//     <>
//       {/* Main Navbar - Hidden on small screens */}
//       <div className={`fixed top-0 left-0 right-0 z-50 hidden md:block transition-all duration-300 ${
//         isScrolled ? 'py-1' : 'py-3'
//       }`}>
//         <div className="bg-[#fefaf5]/90 dark:bg-[#2a2420]/90 backdrop-blur-lg border-y-2 border-[#832c12]/20 dark:border-[#e6d5c3]/20">
//           {/* Vintage texture overlay */}
//           <div
//             className="absolute inset-0 opacity-5 pointer-events-none"
//             style={{
//               backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Ccircle cx='50' cy='50' r='1'/%3E%3C/g%3E%3C/svg%3E")`,
//               backgroundSize: "24px 24px",
//             }}
//           ></div>

//           <div className="max-w-7xl mx-auto px-6">
//             <div className="flex justify-center items-center h-16">
             
//               {/* Navigation Links */}
//               <div className="flex items-center space-x-1">
//                 {navItems.map(item => (
//                   <NavItem key={item.path} {...item} />
//                 ))}
//               </div>
//             </div>
//           </div>

//           {/* Decorative bottom border */}
//           <div
//             className="absolute inset-x-0 bottom-0 h-1 bg-repeat-x"
//             style={{
//               backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='4' viewBox='0 0 40 4' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 2 L10 0 L20 2 L30 0 L40 2 L40 4 L0 4 Z' fill='%23832c12' fill-opacity='0.2'/%3E%3C/svg%3E")`,
//               backgroundSize: "40px 4px",
//             }}
//           ></div>
//         </div>
//       </div>

//       {/* Mobile Floating Menu Button */}
//       <div className="fixed bottom-6 right-6 z-50 md:hidden">
//         <Drawer open={open} onOpenChange={setOpen}>
//           <DrawerTrigger asChild>
//             <Button 
//               size="icon" 
//               className="w-12 h-12 rounded-full bg-[#e6d5c3] dark:bg-[#352c27] border-2 border-[#832c12]/30 dark:border-[#e6d5c3]/30 shadow-lg
//                 text-[#832c12] dark:text-[#e6d5c3] hover:bg-[#e6d5c3]/80 dark:hover:bg-[#352c27]/80 transform -rotate-1 hover:rotate-0 transition-all duration-300"
//               aria-label="Open navigation menu"
//             >
//               <Menu size={24} />
//             </Button>
//           </DrawerTrigger>
//           <DrawerContent className="bg-[#fefaf5] dark:bg-[#2a2420] border-t-2 border-[#832c12]/20 dark:border-[#e6d5c3]/20">
//             {/* Vintage texture overlay */}
//             <div
//               className="absolute inset-0 opacity-5 pointer-events-none"
//               style={{
//                 backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Ccircle cx='50' cy='50' r='1'/%3E%3C/g%3E%3C/svg%3E")`,
//                 backgroundSize: "24px 24px",
//               }}
//             ></div>

//             <DrawerHeader className="border-b border-[#832c12]/20 dark:border-[#e6d5c3]/20">
//               <DrawerTitle className="font-serif text-xl text-center text-[#832c12] dark:text-[#e6d5c3]">pages</DrawerTitle>
            
//             </DrawerHeader>
//             <div className="p-4 flex flex-col space-y-2">
//               {navItems.map(item => (
//                 <div key={item.path}>
//                   {/* Direct nav item without DrawerClose wrapping */}
//                   <NavItem {...item} isMobile={true} onClick={handleNavClick} />
//                 </div>
//               ))}
//             </div>
//           </DrawerContent>
//         </Drawer>
//       </div>
//     </>
//   );
// };

// export default Navbar;



import React, { useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
import { Menu, Home,  BookOpen, GitBranch, LucideIcon } from "lucide-react";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";
import ThemeSwitch from './Theme'; 

// Define interfaces for type safety
interface NavItemProps {
  path: string;
  name: string;
  icon: LucideIcon;
  isMobile?: boolean;
  onClick?: () => void;
}

interface NavItemType {
  path: string;
  name: string;
  icon: LucideIcon;
}

const Navbar: React.FC = () => {
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    NProgress.start();
    NProgress.done();
  }, [location]);

  // Close drawer when location changes
  useEffect(() => {
    setOpen(false);
  }, [location]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      #nprogress .bar {
        background: #832c12 !important;
        height: 3px !important;
      }
      #nprogress .peg {
        box-shadow: 0 0 10px #832c12, 0 0 5px #832c12 !important;
      }
    `;
    document.head.appendChild(style);
    return () => style.remove();
  }, []);

  const navItems: NavItemType[] = [
    { path: '/', name: 'Home', icon: Home },
    { path: '/knowledge', name: 'Knowledge', icon: BookOpen },
    { path: '/projects', name: 'Projects', icon: GitBranch },
  ];

  const NavItem: React.FC<NavItemProps> = ({ path, name, icon: Icon, isMobile = false, onClick }) => (
    <NavLink
      to={path}
      onClick={onClick}
      className={({ isActive }: { isActive: boolean }) =>
        `${isMobile ? 'w-full justify-start' : 'px-3 sm:px-4'} py-2 rounded-lg flex items-center 
        space-x-3 transition-all duration-300 font-serif ${
          isActive
            ? 'border border-[#832c12] dark:border-[#e6d5c3]/30 dark:bg-[#352c27] text-[#832c12] dark:text-[#e6d5c3] transform -rotate-1'
            : ' text-[#8B4513] dark:text-[#e6d5c3]/80 hover:-rotate-1'
        }`
      }
    >
      <Icon className={`${isMobile ? 'w-5 h-5' : 'w-4 h-4'}`} />
      <span className={`${isMobile ? '' : 'hidden sm:inline'} font-medium`}>{name}</span>
    </NavLink>
  );

  // Handler to close the drawer
  const handleNavClick = () => {
    setOpen(false);
  };

  return (
    <>
      {/* Main Navbar - Hidden on small screens */}
      <div className={`fixed top-0 left-0 right-0 z-50 hidden md:block transition-all duration-300 ${
        isScrolled ? 'py-1' : 'py-3'
      }`}>
        <div className="bg-[#fefaf5]/90 dark:bg-[#2a2420]/90 backdrop-blur-lg border-y-2 border-[#832c12]/20 dark:border-[#e6d5c3]/20">
          {/* Vintage texture overlay */}
          <div
            className="absolute inset-0 opacity-5 pointer-events-none"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Ccircle cx='50' cy='50' r='1'/%3E%3C/g%3E%3C/svg%3E")`,
              backgroundSize: "24px 24px",
            }}
          ></div>

          <div className="max-w-7xl mx-auto px-6">
            <div className="flex justify-center items-center h-16">
              {/* Navigation Links */}
              <div className="flex items-center space-x-1">
                {navItems.map(item => (
                  <NavItem key={item.path} {...item} />
                ))}
              </div>
               
              <ThemeSwitch />

            </div>
            
          </div>
          

          {/* Decorative bottom border */}
          <div
            className="absolute inset-x-0 bottom-0 h-1 bg-repeat-x"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='4' viewBox='0 0 40 4' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 2 L10 0 L20 2 L30 0 L40 2 L40 4 L0 4 Z' fill='%23832c12' fill-opacity='0.2'/%3E%3C/svg%3E")`,
              backgroundSize: "40px 4px",
            }}
          ></div>
        </div>
      </div>

      {/* Mobile Floating Menu Button */}
      <div className="fixed bottom-6 right-6 z-50 md:hidden">
        <Drawer open={open} onOpenChange={setOpen}>
          <DrawerTrigger asChild>
            <Button 
              size="icon" 
              className="w-12 h-12 rounded-full bg-[#e6d5c3] dark:bg-[#352c27] border-2 border-[#832c12]/30 dark:border-[#e6d5c3]/30 shadow-lg
                text-[#832c12] dark:text-[#e6d5c3] hover:bg-[#e6d5c3]/80 dark:hover:bg-[#352c27]/80 transform -rotate-1 hover:rotate-0 transition-all duration-300"
              aria-label="Open navigation menu"
            >
              <Menu size={24} />
            </Button>
          </DrawerTrigger>
          <DrawerContent className="bg-[#fefaf5] dark:bg-[#2a2420] border-t-2 border-[#832c12]/20 dark:border-[#e6d5c3]/20">
            {/* Vintage texture overlay */}
            <div
              className="absolute inset-0 opacity-5 pointer-events-none"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Ccircle cx='50' cy='50' r='1'/%3E%3C/g%3E%3C/svg%3E")`,
                backgroundSize: "24px 24px",
              }}
            ></div>

            <DrawerHeader className="border-b border-[#832c12]/20 dark:border-[#e6d5c3]/20">
              <div className="flex justify-between items-center">
                <DrawerTitle className="font-serif text-xl text-center text-[#832c12] dark:text-[#e6d5c3]">pages</DrawerTitle>
                <ThemeSwitch />
              </div>
            </DrawerHeader>
            <div className="p-4 flex flex-col space-y-2">
              {navItems.map(item => (
                <div key={item.path}>
                  {/* Direct nav item without DrawerClose wrapping */}
                  <NavItem {...item} isMobile={true} onClick={handleNavClick} />
                </div>
              ))}
            </div>
          </DrawerContent>
        </Drawer>
      </div>
    </>
  );
};

export default Navbar;