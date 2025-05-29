import { ScrollReveal } from "../ScrollReveal";

export const About = () => {

    const languages = ["Python", "Java", "JavaScript", "C", "C++", "R", "SQL", "HTML", "CSS", "Haskell"];

    const dataTools = ["Tableau", "Tableau Prep", "Power BI", "Excel", "Stata", "RStudio"];

    return (
        <section id = "about" className = "min-h-screen flex items-center justify-center py-20">
            <ScrollReveal>
                <div className = "max-w-4xl mx-auto px-4">
                    <h2 className = "text-4xl font-semibold mb-8 bg-gradient-to-r from-[#19381F] to-[#141B41] bg-clip-text text-transparent text-center">About Me</h2>

                    <div className = "rounded-xl p-8 border-black/50 border hover:-translate-y-1 transition-all">
                        <p className = "mb-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, necessitatibus? Placeat cupiditate exercitationem doloremque doloribus quia aliquid aperiam dolores, molestias assumenda ratione earum quos impedit inventore maiores iusto enim hic?</p>
                        <div className = "grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className = "rounded-xl p-6 hover:-translate-y-1 transition-all">
                                <h3 className = "text-xl font-semibold mb-4">Languages</h3>
                                <div className = "flex flex-wrap gap-2">
                                    {languages.map((language, key) => (
                                        <span key = {key} className = "bg-[#19381F]/10 text-[#19381F] py-1 px-3 rounded-full text-sm hover:bg-[#19381F]/20 hover:shadow-[0_2px_8px_#19381F/20] transition">{language}</span>
                                    ))}
                                </div>
                            </div>

                            <div className = "rounded-xl p-6 hover:-translate-y-1 transition-all">
                                <h3 className = "text-xl font-semibold mb-4">Data Analysis</h3>
                                <div className = "flex flex-wrap gap-2">
                                    {dataTools.map((tool, key) => (
                                        <span key = {key} className = "bg-[#19381F]/10 text-[#19381F] py-1 px-3 rounded-full text-sm hover:bg-[#19381F]/20 hover:shadow-[0_2px_8px_#19381F/20] transition">{tool}</span>
                                    ))}
                                </div>
                            </div>

                            
                        </div>
                    </div>

                    <div className = "grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                        <div className = "p-6 rounded-xl border-black/50 border hover:-translate-y-1 transition-all">
                            <h3 className = "text-xl font-semibold mb-4">Education</h3>
                            <ul className = "list-disc list-inside space-y-2">
                                <li>
                                    <strong>University of Wisconsin - Madison</strong> (2021 - 2025)
                                </li>
                                <li>
                                    <i>Majors:</i> Computer Science, Data Science, Economics
                                </li>
                                <li>
                                    <i>Relevant Coursework:</i> Data Structures & Algorithms, Artificial Intelligence, Database Management Systems, Data Science Modeling, Data Visualization, Econometrics
                                </li>
                            </ul>
                        </div>
                        <div className = "p-6 rounded-xl border-black/50 border hover:-translate-y-1 transition-all">
                            <h3 className = "text-xl font-semibold mb-4">Experience</h3>
                            <div className = "space-y-4">
                                <div>
                                    <h4 className = "font-semibold">Intern Analyst at The McHugh Group, LLC</h4>
                                    <p>Analyzed client data to create a comprehensive report highlighting business growth and used historical stock market data to identify potential technology sector investments.</p>
                                    <div className="my-4" />
                                    <h4 className = "font-semibold">Digital IT Intern at Parker Hannifin</h4>
                                    <p>Automated expiring website alerts and project information extraction. Also created dashboards in Power BI for sprint planning.</p>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </ScrollReveal>
        </section>
    )
}