import { ScrollReveal } from "../ScrollReveal";

export const About = () => {

    const languages = ["Python", "Java", "JavaScript", "C", "C++", "R", "SQL", "HTML", "CSS", "Haskell", "Assembly"];
    const dataTools = ["Tableau", "Tableau Prep", "Power BI", "Excel", "Stata", "RStudio"];
    const webDev = ["Node.js", "React", "Tailwind", "Vite", "Flask", "Bootstrap"]
    const cloudTools = ["GCP", "AWS", "Azure"]

    return (
        <section id="about" className="min-h-screen flex items-center justify-center py-20">
            <ScrollReveal>
                <div className="max-w-4xl mx-auto px-4">
                    <h2 className="text-5xl font-semibold mb-8 bg-gradient-to-r from-[var(--accent-primary)] to-[var(--accent-secondary)] bg-clip-text text-transparent text-center leading-relaxed pb-1">About Me</h2>

                    <div className="rounded-xl p-8 border-[var(--text-primary)]/50 border hover:-translate-y-1 hover:border-[var(--accent-primary)] hover:shadow-[0_2px_8px_var(--accent-primary)/20] transition-all">
                        <p className="mb-6">
                            Hi, I'm Sean, a recent college graduate with a foundation in data analytics and coding. Through a variety of coursework and hands-on projects, I've gained experience with a wide range of programming languages, tools, and software. I'm looking to apply these skills to organizations to make data-driven decisions which lead to success.</p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                                <h3 className="text-xl font-semibold mb-4">Languages</h3>
                                <div className="flex flex-wrap gap-2">
                                    {languages.map((language, key) => (
                                        <span key={key} className="bg-[var(--accent-primary)]/10 text-[var(--accent-primary)] py-1 px-3 rounded-full text-sm hover:bg-[var(--accent-primary)]/20 hover:shadow-[0_2px_8px_var(--accent-primary)/20] transition">{language}</span>
                                    ))}
                                </div>
                            </div>

                            <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                                <h3 className="text-xl font-semibold mb-4">Data Analysis</h3>
                                <div className="flex flex-wrap gap-2">
                                    {dataTools.map((dataTool, key) => (
                                        <span
                                            key={key}
                                            className="bg-[var(--accent-primary)]/10 text-[var(--accent-primary)] py-1 px-3 rounded-full text-sm hover:bg-[var(--accent-primary)]/20 hover:shadow-[0_2px_8px_var(--accent-primary)/20] transition">{dataTool}</span>
                                    ))}
                                </div>
                            </div>

                            <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                                <h3 className="text-xl font-semibold mb-4">Web Development</h3>
                                <div className="flex flex-wrap gap-2">
                                    {webDev.map((webTool, key) => (
                                        <span
                                            key={key}
                                            className="bg-[var(--accent-primary)]/10 text-[var(--accent-primary)] py-1 px-3 rounded-full text-sm hover:bg-[var(--accent-primary)]/20 hover:shadow-[0_2px_8px_var(--accent-primary)/20] transition">{webTool}</span>
                                    ))}
                                </div>
                            </div>

                            <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                                <h3 className="text-xl font-semibold mb-4">Cloud Technologies</h3>
                                <div className="flex flex-wrap gap-2">
                                    {cloudTools.map((cloudTool, key) => (
                                        <span
                                            key={key}
                                            className="bg-[var(--accent-primary)]/10 text-[var(--accent-primary)] py-1 px-3 rounded-full text-sm hover:bg-[var(--accent-primary)]/20 hover:shadow-[0_2px_8px_var(--accent-primary)/20] transition">{cloudTool}</span>
                                    ))}
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8 ">
                        <div className="p-6 rounded-xl border-[var(--text-primary)]/50 border hover:-translate-y-1 hover:border-[var(--accent-primary)] hover:shadow-[0_2px_8px_var(--accent-primary)/20] transition-all">
                            <h3 className="text-xl font-semibold mb-4">Education</h3>
                            <ul className="list-disc list-inside space-y-2">
                                <li>
                                    <strong>University of Wisconsin - Madison</strong> (2021 - 2025)
                                </li>
                                <li>
                                    <i>Majors:</i> Computer Science, Data Science, Economics (3.94 GPA)
                                </li>
                                <li>
                                    <i>Relevant Coursework:</i> Data Structures & Algorithms, Artificial Intelligence, Database Management Systems, Data Science Modeling, Data Visualization, Econometrics
                                </li>
                                <li>
                                    <i>Extra Curriculars:</i> Madison Esports Club (Treasurer), Euchre Club (Treasurer), Artificial Intelligence Club, WUD Games, Cheese Club, Econ Salon
                                </li>
                            </ul>
                        </div>
                        <div className="p-6 rounded-xl border-[var(--text-primary)]/50 border hover:-translate-y-1 hover:border-[var(--accent-primary)] hover:shadow-[0_2px_8px_var(--accent-primary)/20] transition-all">
                            <h3 className="text-xl font-semibold mb-4">Experience</h3>
                            <div className="space-y-4">
                                <div>
                                    <h4><strong>Intern Analyst at The McHugh Group, LLC</strong> <i>(Summer 2024)</i></h4>
                                    <p>Analyzed client data to produce a comprehensive business report and used market data and trends to identify potential investment opportunities in the technology sector.</p>
                                    <div className="my-4" />
                                    <h4><strong>Digital IT Intern at Parker Hannifin</strong> <i>(Summer 2023)</i></h4>
                                    <p>Automated repetitive tasks using Azure and Python, including notifications for expiring website certificates and extraction of project information, and developed Power BI dashboards to support sprint planning.</p>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </ScrollReveal>
        </section>
    )
}