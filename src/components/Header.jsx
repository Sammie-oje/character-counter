import { useEffect } from "react";

function Header() {
  //Users should be able to toggle theme manually 
    function onToggleTheme() {
        document.documentElement.classList.toggle("dark");
    }

//When the OS's theme changes, the app's theme should be reactive to this change and display the appropriate theme 
    useEffect(() => {
        const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

        const applyTheme = query => {
            document.documentElement.classList.toggle("dark", query.matches);
        };

        mediaQuery.addEventListener("change", applyTheme);

        return () => mediaQuery.removeEventListener("change", applyTheme);
    }, []);

    return (
        <header className="flex justify-between items-center p-200 w-full md:px-400 md:py-200">
            <img
                src="assets/images/logo-light-theme.svg"
                alt="logo-light-theme"
                className="w-60 block dark:hidden"
            />

            <img
                src="assets/images/logo-dark-theme.svg"
                alt="logo-dark-theme"
                className="w-60 hidden dark:block"
            />
            <button
                className="bg-neutral-200 size-8 grid place-items-center rounded-6 md:size-11 md:rounded-8 dark:bg-neutral-700"
                onClick={onToggleTheme}
            >
                <img
                    src="assets/images/icon-sun.svg"
                    alt="sun-icon"
                    className="hidden dark:block"
                />
                <img
                    src="assets/images/icon-moon.svg"
                    alt="moon-icon"
                    className="block dark:hidden"
                />
            </button>
        </header>
    );
}

export default Header;
