import { THEME_KEY } from "@/Constants";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [currentTheme, setCurrentTheme] = useState("light");

  // Define navigation links as an array for easier maintenance
  const navLinks = [
    { href: "/about", label: "About" },
    { href: "/professional", label: "Professional" },
    { href: "/writings", label: "Writings" },
  ];

  useEffect(() => {
    // https://medium.com/hypersphere-codes/detecting-system-theme-in-javascript-css-react-f6b961916d48
    const isDarkMode = window.matchMedia(
      "(prefers-color-scheme: dark)",
    ).matches;
    const theme = localStorage.getItem(THEME_KEY);
    const userTheme = theme ?? (isDarkMode ? "dark" : "light");
    setTheme(userTheme);
  }, []);

  const toggleTheme = () => {
    const currentTheme = localStorage.getItem(THEME_KEY);
    const newTheme = currentTheme === "light" ? "dark" : "light";
    setTheme(newTheme);
  };

  const setTheme = (theme: string) => {
    document.documentElement.setAttribute(THEME_KEY, theme);
    localStorage.setItem(THEME_KEY, theme);
    setCurrentTheme(theme);
  };

  const sunIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="size-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
      />
    </svg>
  );

  const moonIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="size-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z"
      />
    </svg>
  );

  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        {/* Dropdown Menu for mobile screens (visible on small, hidden on medium and up) */}
        <div className="dropdown lg:hidden">
          <div tabIndex={0} role="button" className="btn btn-circle btn-ghost">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h7"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu dropdown-content menu-sm z-20 mt-3 w-52 rounded-box bg-base-100 p-2 shadow"
          >
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Full Menu for wider screens (hidden on small, visible on medium and up) */}
        <div className="hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="btn btn-ghost text-base">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="navbar-center transition-transform">
        <div className="group flex flex-row items-center">
          <a href="/" className="select-none text-xl font-semibold">
            Zach Seidner
          </a>
          <div className="w-2" />
          <div className="relative translate-x-[-10px] transform select-none text-2xl opacity-0 transition-all duration-500 group-hover:block group-hover:translate-x-0 group-hover:opacity-100">
            👋
          </div>
        </div>
      </div>

      <div className="navbar-end">
        <button className="btn btn-circle btn-ghost" onClick={toggleTheme}>
          {currentTheme === "dark" ? sunIcon : moonIcon}
        </button>
      </div>
    </div>
  );
}
