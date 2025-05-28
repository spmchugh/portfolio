import { useEffect} from "react";

export const Navbar = ({menuOpen, setMenuOpen}) => {

    useEffect(() => {
        document.body.style.overflow = menuOpen ? "hidden" : "";
    }, [menuOpen]);

    return ( <nav className = "fixed top-0 w-full z-40 bg-[#E8E9F3]/80 backdrop-blur-lg border-b border-black/10 shadow-lg">
            <div className = "max-w-5xl mx-auto px-4">
                <div className = "flex items-center justify-between h-16">
                    <a href = "#home" className = "font-semibold text-xl text-black">Sean McHugh</a>

                    <div className = "w-7 h-5 relative cursor-pointer z-40 md:hidden" onClick = {() => setMenuOpen((prev) => !prev)}>
                        &#9776;
                    </div>

                    <div className = "hidden md:flex items-center space-x-8">
                        <a href = "#home" className = "text-black hover:text-[#141B41] transition-color">Home</a>
                        <a href = "#about" className = "text-black hover:text-[#141B41] transition-color">About</a>
                        <a href = "#projects" className = "text-black hover:text-[#141B41] transition-color">Projects</a>
                        <a href = "#contact" className = "text-black-300 hover:text-[#141B41] transition-color">Contact</a>

                    </div>
                </div>
            </div>
        </nav>
    )
}