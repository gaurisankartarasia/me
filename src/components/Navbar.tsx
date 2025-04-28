
// import React, { useEffect, useState } from 'react';
// import { NavLink, useLocation } from 'react-router-dom';
// import NProgress from 'nprogress';
// import 'nprogress/nprogress.css';
// import { Menu, Home, BookOpen, GitBranch, LucideIcon } from "lucide-react";

// import {
//   Sheet,
//   SheetContent,
//   SheetHeader,
//   SheetTitle,
//   SheetTrigger,
// } from "@/components/ui/sheet";
// import { Button } from "@/components/ui/button";
// import ThemeSwitch from './Theme';

// interface NavItemProps {
//   path: string;
//   name: string;
//   icon?: LucideIcon;
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

//   // Initialize and complete NProgress when location changes
//   useEffect(() => {
//     NProgress.start();
//     NProgress.done();
//   }, [location]);

//   // Close mobile menu when location changes
//   useEffect(() => {
//     setOpen(false);
//   }, [location]);

//   // Track scroll position for navbar styling
//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 20);
//     };
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
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
//       className={({ isActive }) =>
//         `${isMobile ? 'w-full' : 'w-auto'} flex items-center gap-2 px-3 py-2 rounded-md transition-colors ${
//           isActive
//             ? 'bg-accent text-accent-foreground font-medium'
//             : 'text-muted-foreground hover:bg-accent hover:text-accent-foreground'
//         }`
//       }
//     >
//       {isMobile && Icon && <Icon className="h-4 w-4" />}
//       <span>{name}</span>
//     </NavLink>
//   );

//   return (
//     <>
//       {/* Desktop Navbar - hidden on smaller screens */}
//       <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 hidden lg:block ${
//         isScrolled ? 'py-1 shadow-sm' : 'py-2'
//       }`}>
//         <div className="bg-background/90 border-b backdrop-blur-sm">
//           <div className="container flex items-center justify-between h-14">
//             {/* Logo/Brand (if needed) */}
//             <div>
//               {/* You could add a logo here */}
//             </div>
            
//             {/* Desktop Navigation */}
//             <nav className="flex items-center space-x-1 mx-auto">
//               {navItems.map(item => (
//                 <NavItem key={item.path} path={item.path} name={item.name} />
//               ))}
//             </nav>
            
//             {/* Theme Switch */}
//             <div>
//               <ThemeSwitch />
//             </div>
//           </div>
//         </div>
//       </header>

//       {/* Mobile Navigation */}
//       <div className="lg:hidden fixed bottom-6 right-6 z-50">
//         <Sheet open={open} onOpenChange={setOpen}>
//           <SheetTrigger asChild>
//             <Button 
//               size="icon" 
//               variant="secondary"
//               className="h-12 w-12 rounded-full shadow-md"
//               aria-label="Menu"
//             >
//               <Menu className="h-5 w-5" />
//             </Button>
//           </SheetTrigger>
//           <SheetContent side="bottom" className="h-auto rounded-t-xl">
//             <SheetHeader className="flex-row justify-between items-center mb-4">
//               <SheetTitle>Navigation</SheetTitle>
//               <ThemeSwitch />
//             </SheetHeader>
//             <nav className="flex flex-col space-y-1">
//               {navItems.map(item => (
//                 <NavItem 
//                   key={item.path} 
//                   path={item.path}
//                   name={item.name}
//                   icon={item.icon}
//                   isMobile={true} 
//                   onClick={() => setOpen(false)} 
//                 />
//               ))}
//             </nav>
//           </SheetContent>
//         </Sheet>
//       </div>
      
//       {/* Spacer to prevent content from hiding under fixed navbar */}
//       <div className="h-16 lg:block hidden" />
//     </>
//   );
// };

// export default Navbar;




import React, { useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
import { Menu, Home, BookOpen, GitBranch, LucideIcon } from "lucide-react";

// Import Drawer components instead of Sheet
import {
  Drawer,
  DrawerClose, // Optional: if you want an explicit close button
  DrawerContent,
  DrawerFooter, // Optional: if you want a footer
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"; // Make sure path is correct
import { Button } from "@/components/ui/button";
import ThemeSwitch from './Theme';

interface NavItemProps {
  path: string;
  name: string;
  icon?: LucideIcon;
  isMobile?: boolean;
  onClick?: () => void; // Keep onClick to close the drawer on navigation
}

interface NavItemType {
  path: string;
  name: string;
  icon: LucideIcon;
}

const Navbar: React.FC = () => {
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [open, setOpen] = useState(false); // State remains the same

  // Initialize and complete NProgress when location changes
  useEffect(() => {
    NProgress.start();
    NProgress.done();
  }, [location]);

  // Close mobile menu (now drawer) when location changes
  useEffect(() => {
    setOpen(false);
  }, [location]);

  // Track scroll position for navbar styling
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems: NavItemType[] = [
    { path: '/', name: 'Home', icon: Home },
    { path: '/knowledge', name: 'Knowledge', icon: BookOpen },
    { path: '/github_repos', name: 'GitHub Repos', icon: GitBranch },
    { path: '/projects', name: 'Projects', icon: GitBranch },
    
  ];

  // NavItem component remains the same, including the onClick prop
  const NavItem: React.FC<NavItemProps> = ({ path, name, icon: Icon, isMobile = false, onClick }) => (
    <NavLink
      to={path}
      onClick={onClick} // This will call setOpen(false) when a NavItem is clicked
      className={({ isActive }) =>
        `${isMobile ? 'w-full' : 'w-auto'} flex items-center gap-2 px-3 py-2 rounded-3xl transition-colors ${
          isActive
            ? 'border-2 text-accent-foreground font-medium'
            : 'text-muted-foreground hover:text-accent-foreground'
        }`
      }
    >
      {isMobile && Icon && <Icon className="h-4 w-4" />}
      <span>{name}</span>
    </NavLink>
  );

  return (
    <>
      {/* Desktop Navbar - hidden on smaller screens (remains unchanged) */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 hidden lg:block ${
        isScrolled ? 'py-1 shadow-sm' : 'py-2'
      }`}>
        <div className="bg-background/90 border-b backdrop-blur-sm">
          <div className="container flex items-center justify-between h-14">
            <div>{/* Logo placeholder */}</div>
            <nav className="flex items-center space-x-1 mx-auto">
              {navItems.map(item => (
                <NavItem key={item.path} path={item.path} name={item.name} />
              ))}
            </nav>
            <div>
              <ThemeSwitch />
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Navigation - Now using Drawer */}
      <div className="lg:hidden fixed bottom-6 right-6 z-50">
        {/* Use Drawer instead of Sheet */}
        <Drawer open={open} onOpenChange={setOpen}>
          {/* Use DrawerTrigger */}
          <DrawerTrigger asChild>
            <Button
              size="icon"
              variant="secondary"
              className="h-12 w-12 rounded-full shadow-md"
              aria-label="Menu"
            >
              <Menu className="h-5 w-5" />
            </Button>
          </DrawerTrigger>
          {/* Use DrawerContent */}
          {/* Removed side="bottom" as Drawer typically defaults to bottom */}
          {/* Kept className for rounded corners */}
          <DrawerContent className="h-auto rounded-t-xl">
             {/* Optional: Add padding if needed, e.g., p-4 */}
            <div className="mx-auto w-full max-w-sm p-4 pb-6"> {/* Added padding and max-width for better layout */}
              {/* Use DrawerHeader */}
              <DrawerHeader className="flex flex-row justify-between items-center p-0 mb-4"> {/* Adjusted padding and kept flex layout */}
                {/* Use DrawerTitle */}
                <DrawerTitle>Navigation</DrawerTitle>
              
                <ThemeSwitch />
              </DrawerHeader>
              
              {/* Navigation items are placed directly inside DrawerContent (or a wrapper div) */}
              <nav className="flex flex-col space-y-1">
                {navItems.map(item => (
                  <NavItem
                    key={item.path}
                    path={item.path}
                    name={item.name}
                    icon={item.icon}
                    isMobile={true}
                    // onClick still correctly closes the drawer via setOpen(false)
                    onClick={() => setOpen(false)}
                  />
                ))}
              </nav>
              {/* Optional: Add DrawerFooter or DrawerClose if needed */}
              <DrawerFooter>
                <DrawerClose asChild>
                  <Button variant="outline">Close</Button>
                </DrawerClose>
              </DrawerFooter>
            </div>
          </DrawerContent>
        </Drawer>
      </div>

      {/* Spacer (remains unchanged) */}
      <div className="h-16 lg:block hidden" />
    </>
  );
};

export default Navbar;