import Link from "next/link";

// Navbar Component
const Navbar = () => {
  const navLinks = [
    { title: "Home", url: "/" },
    { title: "Blog", url: "/blog" },
  ];

  return (
    <nav className="py-8 border-b">
      {/* nav links */}
      <ul className="flex justify-center items-center gap-5">
        {navLinks.map((link) => (
          <li key={link.title}>
            <Link href={link.url} className="font-medium text-lg">
              {link.title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
