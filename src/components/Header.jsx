import { useState, useEffect } from "react";
import { IconSwap } from "./IconSwap.jsx";
import Sun from "../assets/images/icon-sun.svg?react";
import Moon from "../assets/images/icon-moon.svg?react";

function Header() {
  const htmlEl = document.documentElement;
  const [isDark, setIsDark] = useState(htmlEl.classList.contains("dark"));

  //Users should be able to toggle theme manually
  function onToggleTheme() {
    htmlEl.classList.toggle("dark");
    setIsDark((prev) => !prev);
  }

  //When the OS's theme changes, the app's theme should be reactive to this change and display the appropriate theme
  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

    const applyTheme = (query) => {
      htmlEl.classList.toggle("dark", query.matches);
    };

    mediaQuery.addEventListener("change", applyTheme);

    return () => mediaQuery.removeEventListener("change", applyTheme);
  }, []);

  return (
    <header className="flex justify-between items-center p-200 w-full md:px-400 md:py-200">
      <img
        src="src/assets/images/logo-light-theme.svg"
        alt="logo-light-theme"
        className="w-60 block dark:hidden"
      />

      <img
        src="src/assets/images/logo-dark-theme.svg"
        alt="logo-dark-theme"
        className="w-60 hidden dark:block"
      />
      <button
        aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
        className="bg-neutral-200 size-8 grid place-items-center rounded-6 md:size-11 md:rounded-8 dark:bg-neutral-700"
        onClick={onToggleTheme}
      >
        <IconSwap isActive={isDark} activeIcon={<Sun />} icon={<Moon />} />
      </button>
    </header>
  );
}

export default Header;
