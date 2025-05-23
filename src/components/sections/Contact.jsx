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
                <div className = "px-4 w-150">
                    <h2 className = "text-4xl font-semibold mb-8 bg-gradient-to-r from-[#19381F] to-[#141B41] bg-clip-text text-transparent text-center">Email Me!</h2>
                    <form className = "space-y-6" onSubmit = {handleSubmit}>
                        <div className = "relative">
                            <input type = "text" id = "name" name = "name" required value = {formData.name} className = "w-full bg-white/5 border border-black/10 rounded px-4 py-3 text-black transition focus: outline-none focus:border-blue-500 focus:bg-gray-500" placeholder = "Name..." onChange = {(e) => setFormData({...formData, name: e.target.value})}/>
                        </div>
                        <div className = "relative">
                            <input type = "email" id = "email" name = "email" required value = {formData.email} className = "w-full bg-white/5 border border-black/10 rounded px-4 py-3 text-black transition focus: outline-none focus:border-blue-500 focus:bg-gray-500" placeholder = "Email..." onChange = {(e) => setFormData({...formData, email: e.target.value})}/>
                        </div>

                        <div className = "relative">
                            <textarea id = "message" name = "message" required value = {formData.message} rows = {5} className = "w-full bg-white/5 border border-black/10 rounded px-4 py-3 text-black transition focus: outline-none focus:border-blue-500 focus:bg-gray-500" placeholder = "Your message..." onChange = {(e) => setFormData({...formData, message: e.target.value})}/>
                        </div>

                        <button type = "submit" className = "w-full bg-[#426B69] text-black py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_#426B69]/40">
                            Send Message
                        </button>
                    </form>

                </div>
            </ScrollReveal>
        </section>
    )
}