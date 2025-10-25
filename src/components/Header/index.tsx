"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import ThemeToggler from "./ThemeToggler";
import menuData from "./menuData";

const Header = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [sticky, setSticky] = useState(false);
  const [openIndex, setOpenIndex] = useState(-1);

  const navbarToggleHandler = () => setNavbarOpen(!navbarOpen);

  const handleStickyNavbar = () => {
    if (window.scrollY >= 80) setSticky(true);
    else setSticky(false);
  };

  const handleSubmenu = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  const pathname = usePathname();

  useEffect(() => {
    window.addEventListener("scroll", handleStickyNavbar);
    return () => window.removeEventListener("scroll", handleStickyNavbar);
  }, []);

  return (
    <header
      className={`header top-0 left-0 z-40 flex w-full items-center ${
        sticky
          ? "dark:bg-gray-dark dark:shadow-sticky-dark shadow-sticky fixed z-50 bg-white/80 backdrop-blur-xs transition"
          : "absolute bg-transparent"
      }`}
    >
      <div className="container mx-auto flex w-full items-center justify-between px-4 py-3 lg:py-5">
        {/* Logo */}
        <div className="flex-shrink-0">
          <Link href="/">
            <Image
              src="/images/logo/rjco-logo.svg"
              alt="RJCO Logo"
              width={80}
              height={80}
              className="object-contain"
              priority
            />
          </Link>
        </div>

        {/* Menu */}
        {/* <div className="flex items-center lg:order-2"> */}
          {/* <ThemeToggler /> */}

          {/* Mobile menu button */}
          <button
            onClick={navbarToggleHandler}
            id="navbarToggler"
            aria-label="Mobile Menu"
            className="ml-4 block lg:hidden rounded-lg px-3 py-[6px] ring-primary focus:ring-2"
          >
            <span
              className={`block h-0.5 w-6 bg-black my-1.5 transition-all duration-300 dark:bg-white ${
                navbarOpen ? "rotate-45 translate-y-2" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-6 bg-black my-1.5 transition-all duration-300 dark:bg-white ${
                navbarOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-6 bg-black my-1.5 transition-all duration-300 dark:bg-white ${
                navbarOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            />
          </button>
        {/* </div> */}

        {/* Navigation */}
        <nav
          id="navbarCollapse"
          className={`absolute right-0 top-full z-30 w-64 rounded border border-gray-200 bg-white px-6 py-4 shadow-lg transition-all duration-300 lg:static lg:flex lg:w-auto lg:border-none lg:bg-transparent lg:shadow-none lg:px-0 lg:py-0 ${
            navbarOpen ? "block" : "hidden"
          }`}
        >
          <ul className="block lg:flex lg:space-x-12">
            {menuData.map((menuItem, index) => (
              <li key={index} className="relative group">
                {menuItem.path ? (
                  <Link
                    href={menuItem.path}
                    className={`block py-2 text-base lg:py-6 lg:px-0 ${
                      pathname === menuItem.path
                        ? "text-primary dark:text-white"
                        : "text-dark hover:text-primary dark:text-white/70 dark:hover:text-white"
                    }`}
                  >
                    {menuItem.title}
                  </Link>
                ) : (
                  <>
                    <p
                      onClick={() => handleSubmenu(index)}
                      className="flex cursor-pointer items-center justify-between py-2 text-base lg:py-6 lg:px-0 text-dark group-hover:text-primary dark:text-white/70 dark:group-hover:text-white"
                    >
                      {menuItem.title}
                      <span className="pl-3">
                        <svg width="25" height="24" viewBox="0 0 25 24">
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M6.29289 8.8427C6.68342 8.45217 7.31658 8.45217 7.70711 8.8427L12 13.1356L16.2929 8.8427C16.6834 8.45217 17.3166 8.45217 17.7071 8.8427C18.0976 9.23322 18.0976 9.86639 17.7071 10.2569L12 15.964L6.29289 10.2569C5.90237 9.86639 5.90237 9.23322 6.29289 8.8427Z"
                            fill="currentColor"
                          />
                        </svg>
                      </span>
                    </p>
                    <div
                      className={`absolute left-0 top-full w-64 rounded bg-white shadow-lg transition-all duration-300 lg:top-[110%] lg:opacity-0 lg:group-hover:opacity-100 ${
                        openIndex === index ? "block" : "hidden"
                      }`}
                    >
                      {menuItem.submenu.map((submenuItem, subIndex) => (
                        <Link
                          href={submenuItem.path}
                          key={subIndex}
                          className="block rounded-sm py-2.5 px-3 text-sm text-dark hover:text-primary dark:text-white/70 dark:hover:text-white"
                        >
                          {submenuItem.title}
                        </Link>
                      ))}
                    </div>
                  </>
                )}
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
