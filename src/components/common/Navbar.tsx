// "use client";

// import Link from "next/link";
// import React from "react";
// import {
//   NavigationMenu,
//   NavigationMenuContent,
//   NavigationMenuItem,
//   NavigationMenuLink,
//   NavigationMenuList,
//   NavigationMenuTrigger,
// } from "../ui/navigation-menu";
// import { Switch } from "../ui/switch";
// import { Button } from "../ui/button";
// import { AlignJustify } from "lucide-react";

// const Navbar = () => {
//   return (
//     <header className="py-4 shadow-md">
//       <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
//         {/* logo */}

//         <div>
//           <Link href={"/"} className="text-xl font-bold">
//             Daily News
//           </Link>
//         </div>

//         {/* Desktop menu */}
//         <NavigationMenu className="hidden lg:flex">
//           <NavigationMenuList>
//             <NavigationMenuItem className="flex items-center space-x-8">
//               <NavigationMenuLink href="/news">News</NavigationMenuLink>
//               <NavigationMenuLink href="/services" className="p-0">
//                 <NavigationMenuTrigger>Services</NavigationMenuTrigger>
//                 <NavigationMenuContent className="custom-content">
//                   <ul className="space-y-2">
//                     <li>
//                       <NavigationMenuLink href="/services/dl-ai">
//                         Data Science and Artificial Intelligence
//                       </NavigationMenuLink>
//                     </li>
//                     <li>
//                       <NavigationMenuLink href="/services/web-dev">
//                         Web Development
//                       </NavigationMenuLink>
//                     </li>
//                     <li>
//                       <NavigationMenuLink href="/services/software-dev">
//                         Software Development
//                       </NavigationMenuLink>
//                     </li>
//                     <li>
//                       <NavigationMenuLink href="/services/ux-ui">
//                         UX/UI Design
//                       </NavigationMenuLink>
//                     </li>
//                   </ul>
//                 </NavigationMenuContent>
//               </NavigationMenuLink>
//               <NavigationMenuLink href="/about">About</NavigationMenuLink>

//               <NavigationMenuLink href="/contact">Contact</NavigationMenuLink>
//             </NavigationMenuItem>
//           </NavigationMenuList>
//         </NavigationMenu>

//         {/* color switcher and button */}
//         <div className="hidden lg:flex items-center gap-4">
//           <div className="flex gap-4 items-center">
//             <span>Dark Mode</span>
//             <Switch className="cursor-pointer" />
//           </div>
//           <Button variant={"default"}>Get Started</Button>
//         </div>

//         {/* Mobile Hamburger Menu */}

//         <div className="lg:hidden">
//           <Button variant={"outline"}>
//             <AlignJustify color="#fff" />
//           </Button>
//         </div>
//       </nav>
//     </header>
//   );
// };

// export default Navbar;

"use client";

import Link from "next/link";
import React from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "../ui/navigation-menu";
import { Switch } from "../ui/switch";
import { Button } from "../ui/button";
import { AlignJustify } from "lucide-react";
import { usePathname } from "next/navigation";
import MobileMenu from "./MobileMenu";

const Navbar = () => {
  const pathName = usePathname();
  return (
    <header className="py-4 shadow-md bg-background text-foreground">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <div>
          <Link href="/" className="text-xl font-bold">
            Daily News
          </Link>
        </div>

        {/* Desktop Menu */}
        <NavigationMenu className="hidden lg:flex">
          <NavigationMenuList className="flex items-center space-x-8">
            <NavigationMenuItem>
              <NavigationMenuLink
                className={`${
                  pathName === "/news" ? "bg-black px-4 py-2 text-white" : ""
                } hover:bg-black px-4 py-2 hover:text-white`}
                href="/news"
              >
                News
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger>Services</NavigationMenuTrigger>
              <NavigationMenuContent className="bg-white dark:bg-zinc-900 rounded-md shadow-lg custom-content p-4">
                <ul className="space-y-3 text-sm">
                  <li>
                    <NavigationMenuLink
                      href="/services/dl-ai"
                      className="block"
                    >
                      Data Science and Artificial Intelligence
                    </NavigationMenuLink>
                  </li>
                  <li>
                    <NavigationMenuLink
                      href="/services/web-dev"
                      className="block"
                    >
                      Web Development
                    </NavigationMenuLink>
                  </li>
                  <li>
                    <NavigationMenuLink
                      href="/services/software-dev"
                      className="block"
                    >
                      Software Development
                    </NavigationMenuLink>
                  </li>
                  <li>
                    <NavigationMenuLink
                      href="/services/ux-ui"
                      className="block"
                    >
                      UX/UI Design
                    </NavigationMenuLink>
                  </li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink
                className={`${
                  pathName === "/about" ? "bg-black px-4 py-2 text-white" : ""
                } hover:bg-black px-4 py-2 hover:text-white`}
                href="/about"
              >
                About
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink
                className={`${
                  pathName === "/contact" ? "bg-black px-4 py-2 text-white" : ""
                } hover:bg-black px-4 py-2 hover:text-white`}
                href="/contact"
              >
                Contact
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        {/* Theme toggle and CTA */}
        <div className="hidden lg:flex items-center gap-4">
          <div className="flex items-center gap-2">
            <span>Dark Mode</span>
            <Switch className="cursor-pointer" />
          </div>
          <Button variant="default">Get Started</Button>
        </div>

        {/* Mobile Hamburger */}
        <MobileMenu />
      </nav>
    </header>
  );
};

export default Navbar;
