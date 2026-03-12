"use client";

import { useState, useMemo } from "react";
import Image from "next/image";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import contactTitle from "@/assets/contact-title.png";
import contactMascot from "@/assets/contact-mascot.png";

export default function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mathAnswer, setMathAnswer] = useState("");
  const [message, setMessage] = useState("");
  const [consent, setConsent] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const mathChallenge = useMemo(() => {
    const a = Math.floor(Math.random() * 9) + 1;
    const b = Math.floor(Math.random() * 9) + 1;
    return { a, b, answer: a + b };
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    if (!name.trim() || !email.trim() || !message.trim()) {
      setError("Please fill in all fields.");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      setError("Please enter a valid email address.");
      return;
    }
    if (parseInt(mathAnswer) !== mathChallenge.answer) {
      setError("Incorrect math answer. Please try again.");
      return;
    }
    if (!consent) {
      setError("Please consent to data storage to submit.");
      return;
    }
    const subject = encodeURIComponent(`Contact from ${name.trim()}`);
    const body = encodeURIComponent(`Name: ${name.trim()}\nEmail: ${email.trim()}\n\n${message.trim()}`);
    window.location.href = `mailto:contact@tattoosforyourenemies.com?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />

      <div className="flex justify-center my-12">
        <Image src={contactTitle} alt="Contact" className="h-10 md:h-14 object-contain w-auto" width={200} height={56} />
      </div>

      <div className="flex justify-center mb-8">
        <Image src={contactMascot} alt="Flash Seller" className="w-40 md:w-52 object-contain h-auto" width={208} height={208} />
      </div>

      <section className="max-w-3xl mx-auto px-6 pb-16">
        {submitted ? (
          <div className="text-center font-['Special_Elite'] text-lg">
            <p>Thanks for reaching out! Your email client should have opened with your message.</p>
          </div>
        ) : (
          <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-start">
            <div className="md:w-2/5 font-['Special_Elite'] text-base md:text-lg">
              <h2 className="text-xl md:text-2xl font-bold mb-3">Feel free to reach out!</h2>
              <p className="text-muted-foreground">You can connect with us via the contact form on this page.</p>
            </div>
            <form onSubmit={handleSubmit} className="md:w-3/5 w-full space-y-4">
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2">
                <label className="w-28 text-sm font-['Special_Elite'] shrink-0">Your Name</label>
                <input type="text" placeholder="Your Name" value={name} onChange={(e) => setName(e.target.value)} maxLength={100} className="w-full border border-border bg-background px-3 py-2 text-sm rounded-none focus:outline-none focus:ring-1 focus:ring-foreground" />
              </div>
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2">
                <label className="w-28 text-sm font-['Special_Elite'] shrink-0">Your Email</label>
                <input type="email" placeholder="Your Email" value={email} onChange={(e) => setEmail(e.target.value)} maxLength={255} className="w-full border border-border bg-background px-3 py-2 text-sm rounded-none focus:outline-none focus:ring-1 focus:ring-foreground" />
              </div>
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2">
                <label className="w-28 text-sm font-['Special_Elite'] shrink-0">{mathChallenge.a} + {mathChallenge.b} =</label>
                <input type="text" placeholder="Correct Response" value={mathAnswer} onChange={(e) => setMathAnswer(e.target.value)} maxLength={5} className="w-full border border-border bg-background px-3 py-2 text-sm rounded-none focus:outline-none focus:ring-1 focus:ring-foreground" />
              </div>
              <div>
                <label className="text-sm font-['Special_Elite'] block mb-1">Your Message</label>
                <textarea placeholder="Your Message" value={message} onChange={(e) => setMessage(e.target.value)} maxLength={1000} rows={6} className="w-full border border-border bg-background px-3 py-2 text-sm rounded-none resize-y focus:outline-none focus:ring-1 focus:ring-foreground" />
              </div>
              {error && <p className="text-red-600 text-sm">{error}</p>}
              <button type="submit" className="bg-foreground text-background px-6 py-2 text-sm font-['Special_Elite'] tracking-widest uppercase hover:opacity-80 transition-opacity">Send Email</button>
              <label className="flex items-start gap-2 text-xs text-muted-foreground cursor-pointer">
                <input type="checkbox" checked={consent} onChange={(e) => setConsent(e.target.checked)} className="mt-0.5" />
                I consent to having this website store my submitted information so they can respond to my inquiry. See our privacy policy to learn more how we use data.
              </label>
            </form>
          </div>
        )}
      </section>

      <Footer />
    </div>
  );
}
