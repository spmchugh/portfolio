import { useEffect} from "react";

export const Navbar = ({menuOpen, setMenuOpen}) => {

    useEffect(() => {
        document.body.style.overflow = menuOpen ? "hidden" : "";
    }, [menuOpen]);

    return ( <nav className = "fixed top-0 w-full z-40 bg-[var(--background)]/80 backdrop-blur-lg border-b border-[var(--background-opposite)]/10 shadow-lg">
            <div className = "max-w-5xl mx-auto px-4">
                <div className = "flex items-center justify-between h-16">
                    <a href = "#home" className = "font-semibold text-xl text-[var(--text-primary)]">Sean McHugh</a>

                    <div className = "w-7 h-5 relative cursor-pointer z-40 md:hidden" onClick = {() => setMenuOpen((prev) => !prev)}>
                        &#9776;
                    </div>

                    <div className="hidden md:flex items-center space-x-8">
                        <a href="#home" className="text-[var(--text-primary)] hover:text-[var(--accent-primary)] transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-0 after:bg-[var(--accent-primary)] after:transition-all after:duration-300 hover:after:w-full">Home</a>
                        <a href="#about" className="text-[var(--text-primary)] hover:text-[var(--accent-primary)] transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-0 after:bg-[var(--accent-primary)] after:transition-all after:duration-300 hover:after:w-full">About</a>
                        <a href="#projects" className="text-[var(--text-primary)] hover:text-[var(--accent-primary)] transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-0 after:bg-[var(--accent-primary)] after:transition-all after:duration-300 hover:after:w-full">Projects</a>
                        <a href="#contact" className="text-[var(--text-primary)] hover:text-[var(--accent-primary)] transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-0 after:bg-[var(--accent-primary)] after:transition-all after:duration-300 hover:after:w-full">Contact</a>
                    </div>
                </div>
            </div>
        </nav>
    )
}