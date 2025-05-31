import { ScrollReveal } from "../ScrollReveal"

export const Home = () => {
    return (
        <section id="home" className="min-h-screen flex items-center justify-center relative pt-16 sm:pt-0">
            <ScrollReveal>
                <div className="text-center z-10 px-4">
                    <h1 className="text-5xl md:text-7xl font-bold mb-6 inline-block bg-gradient-to-r from-[var(--accent-primary)] to-[var(--accent-secondary)] bg-clip-text text-transparent leading-tight">
                        Hello, I'm Sean McHugh
                    </h1>
                    <p className="text-[var(--text-secondary)] text-lg mb-8 max-w-xl mx-auto">
                        I am a recent graduate with a background in Computer Science, Data Science, and Economics. I am seeking full-time opportunities in data analytics, financial or business analysis, investment research, database management, logistics, and related fields.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
                        <a href="https://www.linkedin.com/in/sean-mchugh-p/" className="w-3/4 text-center bg-[var(--accent-primary)] text-[var(--text-button)] py-3 px-6 rounded font-semibold transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_var(--accent-primary)]/40" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                        
                        <a href="https://github.com/spmchugh" className="w-3/4 text-center bg-[var(--accent-primary)] text-[var(--text-button)] py-3 px-6 rounded font-semibold transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_var(--accent-primary)]/40" target="_blank" rel="noopener noreferrer">GitHub</a>
                        
                        <a href="" className="w-3/4 text-center bg-[var(--accent-primary)] text-[var(--text-button)] py-3 px-6 rounded font-semibold transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_var(--accent-primary)]/40" target="_blank" rel="noopener noreferrer">Resume</a>
                    </div>
                </div>
            </ScrollReveal>
        </section>
    )
}