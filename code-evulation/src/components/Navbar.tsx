"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

// Navbar Component
const Navbar = () => {
  const navlinks = [
    { label: "Home", href: "/" },
    { label: "Blog", href: "/blog" },
    { label: "Articles", href: "/articles" },
    { label: "Products", href: "/products" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
    { label: "Login", href: "/login" },
    { label: "Register", href: "/register" },
    { label: "Dashboard", href: "/dashboard" },
  ];

  const pathName = usePathname();
  return (
    <nav className="py-8 flex gap-2.5 border-b justify-center items-center">
      {navlinks.map((link, index) => {
        const isActive =
          pathName === link.href ||
          (pathName.startsWith(link.href) && link.href !== "/");
        return (
          <Link
            className={`${isActive ? "underline underline-offset-4 text-amber-500" : ""} hover:text-cyan-500`}
            key={index}
            href={link.href}
          >
            {link.label}
          </Link>
        );
      })}
    </nav>
  );
};

export default Navbar;
