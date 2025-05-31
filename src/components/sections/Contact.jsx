import { ScrollReveal } from "../ScrollReveal"
import { useState } from "react";
import emailjs from "emailjs-com"

export const Contact = () => {

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    })

    const handleSubmit = (e) => {
        e.preventDefault()

        emailjs.sendForm(import.meta.env.VITE_SERVICE_ID, import.meta.env.VITE_TEMPLATE_ID, e.target, import.meta.env.VITE_PUBLIC_KEY).then((result) => {
            alert("Message sent successfully!");
            setFormData({name: "", email: "", message: ""});
        }).catch(() => alert("Message failed to send. Try again later."));
    };

    return (
        <section id = "contact" className = "min-h-screen flex items-center justify-center py-20">
            <ScrollReveal>
                <div className="px-4 w-full min-w-[300px] md:w-[500px] sm:w-2/3 p-6">
                    <h2 className = "text-5xl font-semibold mb-8 bg-gradient-to-r from-[var(--accent-primary)] to-[var(--accent-secondary)] bg-clip-text text-transparent text-center leading-relaxed pb-1">Email Me!</h2>
                    <form className = "space-y-6" onSubmit = {handleSubmit}>
                        <div className = "relative">
                            <input type = "text" id = "name" name = "name" required value = {formData.name} className = "w-full bg-[var(--background)]/5 border border-[var(--text-primary)]/10 rounded px-4 py-3 text-[var(--text-primary)] transition focus:outline-none focus:border-[var(--accent-secondary)] focus:bg-[var(--background-opposite)]/10" placeholder = "Name..." onChange = {(e) => setFormData({...formData, name: e.target.value})}/>
                        </div>
                        <div className = "relative">
                            <input type = "email" id = "email" name = "email" required value = {formData.email} className = "w-full bg-[var(--background)]/5 border border-[var(--text-primary)]/10 rounded px-4 py-3 text-[var(--text-primary)] transition focus:outline-none focus:border-[var(--accent-secondary)] focus:bg-[var(--background-opposite)]/10" placeholder = "Email..." onChange = {(e) => setFormData({...formData, email: e.target.value})}/>
                        </div>

                        <div className = "relative">
                            <textarea id = "message" name = "message" required value = {formData.message} rows = {5} className = "w-full bg-[var(--background)]/5 border border-[var(--text-primary)]/10 rounded px-4 py-3 text-[var(--text-primary)] transition focus:outline-none focus:border-[var(--accent-secondary)] focus:bg-[var(--background-opposite)]/10" placeholder = "Your message..." onChange = {(e) => setFormData({...formData, message: e.target.value})}/>
                        </div>

                        <button type = "submit" className = "w-full bg-[var(--accent-primary)] text-[var(--text-primary)] py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_var(--accent-primary)]/40">
                            Send Message
                        </button>
                    </form>

                </div>
            </ScrollReveal>
        </section>
    )
}