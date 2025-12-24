function Header() {
    return (
        <header className="flex justify-between items-center p-200 w-full md:px-400 md:py-200">
            
                <img
                    src="assets/images/logo-light-theme.svg"
                    alt="logo-light-theme"
                    class="w-60"
                />
            <button className="bg-neutral-200 size-8 grid place-items-center rounded-6 md:size-11 md:rounded-8">
                <img src="assets/images/icon-moon.svg" alt="moon-icon" />
            </button>
        </header>
    );
}

export default Header;
