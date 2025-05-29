export const Home = () => {
    return (
        <section id = "home" className = "min-h-screen flex items-center justify-center relative">
            <div className = "text-center z-10 px-4">
                <h1 className="text-5xl md:text-7xl font-bold mb-6 inline-block bg-gradient-to-r from-[#19381F] to-[#141B41] bg-clip-text text-transparent leading-tight">
                    Hello, I'm Sean McHugh
                </h1>
                <p className = "text-gray-800 text-lg mb-8 max-w-xl mx-auto">
                    I am recent graduate who majored in Computer Science, Data Science, and Economics. I am currently seeking full-time opportunities in data, financial, or business analytics, as well as investment research, software development, database management, logistics, and related positions.
                </p>
                <div className = "flex justify-center space-x-4">
                    <a href="#projects" className="bg-[#426B69] text-black py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_#426B69]/40">View Projects</a>
                    <a href="#contact" className="border border-[#19381F] text-[#19381F] py-3 px-6 rounded font-medium transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_0_15px_#426B69]/40 hover:bg-[#426B69]/40">Contact Me</a>
                </div>
            </div>
        </section>
    )
}