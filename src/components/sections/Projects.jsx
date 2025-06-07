import { ScrollReveal } from "../ScrollReveal"

export const Projects = () => {
    return (
        <section id="projects" className="min-h-screen flex items-center justify-center py-20">
            <ScrollReveal>
                <div className="max-w-5xl mx-auto px-4">
                    <h2 className="text-5xl font-semibold mb-8 bg-gradient-to-r from-[var(--accent-primary)] to-[var(--accent-secondary)] bg-clip-text text-transparent text-center leading-relaxed pb-1">Projects</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                        <div className="p-6 rounded-xl border border-[var(--text-primary)]/50 hover:-translate-y-1 hover:border-[var(--accent-primary)] hover:shadow-[0_2px_8px_var(--accent-primary)/20] transition-all">
                            <h3 className="text-xl font-semibold mb-2">Portfolio Website</h3>
                            <p className="text-[var(--text-secondary)] mb-4">You're currently viewing my portfolio website. I designed and built it to develop my frontend skills. It is an extension of my resume, further highlighting my skills, experience, education, and projects.</p>
                            <div className="flex flex-wrap gap-2 mb-4">
                                {["JavaScript", "HTML", "CSS", "React", "Vite", "Tailwind CSS"].map((tech, key) => (
                                    <span 
                                        key={key} 
                                        className="bg-[var(--accent-primary)]/10 text-[var(--accent-primary)] py-1 px-3 rounded-full text-sm hover:bg-[var(--accent-primary)]/20 hover:shadow-[0_2px_8px_var(--accent-primary)/20] transition"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                            <div className="flex justify-between items-center">
                                <a 
                                    href="https://github.com/spmchugh/portfolio" 
                                    className="text-center bg-[var(--accent-primary)] text-[var(--text-button)] py-3 px-6 rounded font-semibold transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_var(--accent-primary)]/40" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                >
                                    View Code &gt;
                                </a>
                            </div>

                        </div>

                        <div className="p-6 rounded-xl border border-[var(--text-primary)]/50 hover:-translate-y-1 hover:border-[var(--accent-primary)] hover:shadow-[0_2px_8px_var(--accent-primary)/20] transition-all">
                            <h3 className="text-xl font-semibold mb-2">Discord Bot</h3>
                            <p className="text-[var(--text-secondary)] mb-4">A Discord bot designed to track and display player statistics directly in Discord servers. It supports player account registration, rank tracking, on-demand stat retrieval, and dynamic leaderboards.</p>
                            <div className="flex flex-wrap gap-2 mb-4">
                                {["Python", "SQLAlchemy", "REST API", "Matplotlib", "AWS"].map((tech, key) => (
                                    <span 
                                        key={key} 
                                        className="bg-[var(--accent-primary)]/10 text-[var(--accent-primary)] py-1 px-3 rounded-full text-sm hover:bg-[var(--accent-primary)]/20 hover:shadow-[0_2px_8px_var(--accent-primary)/20] transition"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                            <div className="flex justify-between items-center">
                                <a 
                                    href="https://github.com/spmchugh/Discord-Bot" 
                                    className="text-center bg-[var(--accent-primary)] text-[var(--text-button)] py-3 px-6 rounded font-semibold transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_var(--accent-primary)]/40" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                >
                                    View Project &gt;
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </ScrollReveal>
        </section>
    )
}