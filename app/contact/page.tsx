"use client";

import { useEffect, useRef, useState } from "react";
import { Navigation } from "@/components/landing/navigation";
import { FooterSection } from "@/components/landing/footer-section";
import { Button } from "@/components/ui/button";
import { ArrowRight, Mail, Phone, MapPin, Send } from "lucide-react";

const contactInfo = [
  {
    icon: Mail,
    title: "Email",
    value: "hello@whyn.dev",
    note: "We respond within 24 hours",
    href: "mailto:hello@whyn.dev",
  },
  {
    icon: Phone,
    title: "Phone",
    value: "+49 1575 4405511",
    note: "Available Mon-Fri, 10am-6pm",
    href: "tel:+491575440551",
  },
  {
    icon: MapPin,
    title: "Location",
    value: "Bocholt, Germany",
    note: "Remote meetings available",
    href: null,
  },
];

export default function ContactPage() {
  const [isVisible, setIsVisible] = useState(false);
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setFormState({ name: "", email: "", phone: "", company: "", message: "" });
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <Navigation />

      {/* Hero */}
      <section className="relative pt-32 lg:pt-44 pb-16 lg:pb-24">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div
            className={`transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <span className="inline-flex items-center gap-3 text-sm font-mono text-muted-foreground mb-6">
              <span className="w-8 h-px bg-foreground/30" />
              Contact Us
            </span>
          </div>

          <h1
            className={`text-5xl md:text-7xl lg:text-[8rem] font-display leading-[0.9] tracking-tight mb-8 transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            Get in Touch.
          </h1>

          <p
            className={`text-xl lg:text-2xl text-muted-foreground leading-relaxed max-w-2xl transition-all duration-700 delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Let&apos;s discuss your project and create something extraordinary together.
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="relative pb-16 lg:pb-24">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid md:grid-cols-3 gap-6">
            {contactInfo.map((info, index) => {
              const content = (
                <div
                  key={info.title}
                  className={`group border border-foreground/10 p-8 lg:p-10 hover:border-foreground/30 hover:-translate-y-1 transition-all duration-500 ${
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                  }`}
                  style={{ transitionDelay: `${index * 100 + 400}ms` }}
                >
                  <div className="w-12 h-12 border border-foreground/10 flex items-center justify-center mb-6 group-hover:bg-foreground group-hover:text-background transition-colors duration-300">
                    <info.icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-display text-xl mb-2">{info.title}</h3>
                  <p className="text-lg text-foreground font-medium mb-2">{info.value}</p>
                  <p className="text-sm text-muted-foreground">{info.note}</p>
                </div>
              );

              return info.href ? (
                <a key={info.title} href={info.href}>
                  {content}
                </a>
              ) : (
                <div key={info.title}>{content}</div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="relative py-24 lg:py-32 border-t border-foreground/10">
        <div className="max-w-3xl mx-auto px-6 lg:px-12">
          <div className="mb-12">
            <span className="inline-flex items-center gap-3 text-sm font-mono text-muted-foreground mb-6">
              <span className="w-8 h-px bg-foreground/30" />
              Send a Message
            </span>
            <h2 className="text-4xl lg:text-5xl font-display tracking-tight mb-4">
              Tell us about
              <br />
              your project.
            </h2>
            <p className="text-lg text-muted-foreground">
              We&apos;ll respond within 12 hours during business hours.
            </p>
          </div>

          {isSubmitted && (
            <div className="mb-8 p-6 border border-green-500/30 bg-green-500/5 rounded-lg">
              <p className="text-green-600 dark:text-green-400 font-medium">
                Thank you! We&apos;ll be in touch soon.
              </p>
            </div>
          )}

          <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              {/* Name */}
              <div>
                <label htmlFor="name" className="block text-sm font-mono text-muted-foreground mb-2">
                  Name *
                </label>
                <input
                  id="name"
                  type="text"
                  required
                  value={formState.name}
                  onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                  className="w-full px-4 py-3 bg-transparent border border-foreground/10 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-foreground/40 transition-colors duration-300"
                  placeholder="Your name"
                />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-mono text-muted-foreground mb-2">
                  Email *
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  value={formState.email}
                  onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                  className="w-full px-4 py-3 bg-transparent border border-foreground/10 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-foreground/40 transition-colors duration-300"
                  placeholder="your@email.com"
                />
              </div>

              {/* Phone */}
              <div>
                <label htmlFor="phone" className="block text-sm font-mono text-muted-foreground mb-2">
                  Phone
                </label>
                <input
                  id="phone"
                  type="tel"
                  value={formState.phone}
                  onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                  className="w-full px-4 py-3 bg-transparent border border-foreground/10 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-foreground/40 transition-colors duration-300"
                  placeholder="+49 123 456789"
                />
              </div>

              {/* Company */}
              <div>
                <label htmlFor="company" className="block text-sm font-mono text-muted-foreground mb-2">
                  Company
                </label>
                <input
                  id="company"
                  type="text"
                  value={formState.company}
                  onChange={(e) => setFormState({ ...formState, company: e.target.value })}
                  className="w-full px-4 py-3 bg-transparent border border-foreground/10 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-foreground/40 transition-colors duration-300"
                  placeholder="Your company"
                />
              </div>
            </div>

            {/* Message */}
            <div>
              <label htmlFor="message" className="block text-sm font-mono text-muted-foreground mb-2">
                Message *
              </label>
              <textarea
                id="message"
                required
                rows={6}
                value={formState.message}
                onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                className="w-full px-4 py-3 bg-transparent border border-foreground/10 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-foreground/40 transition-colors duration-300 resize-none"
                placeholder="Tell us about your project, goals, and timeline..."
              />
            </div>

            {/* Submit */}
            <Button
              type="submit"
              size="lg"
              className="w-full bg-foreground hover:bg-foreground/90 text-background h-14 text-base rounded-full group"
            >
              Send Message
              <Send className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
            </Button>
          </form>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="relative py-24 lg:py-32 border-t border-foreground/10">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 text-center">
          <span className="font-mono text-xs tracking-widest text-muted-foreground uppercase block mb-6">
            Other ways to reach us
          </span>
          <h2 className="text-4xl lg:text-6xl font-display tracking-tight mb-6 max-w-3xl mx-auto">
            Whether you have a quick question or want to discuss a project,
          </h2>
          <p className="text-xl text-muted-foreground mb-12 max-w-xl mx-auto">
            we&apos;re here to help.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="mailto:hello@whyn.dev">
              <Button
                size="lg"
                className="bg-foreground hover:bg-foreground/90 text-background px-10 h-14 text-base rounded-full group"
              >
                Send Email
                <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
              </Button>
            </a>
            <a href="tel:+491575440551">
              <Button
                size="lg"
                variant="outline"
                className="h-14 px-10 text-base rounded-full border-foreground/20 hover:bg-foreground/5"
              >
                Call Now
              </Button>
            </a>
          </div>
        </div>
      </section>

      <FooterSection />
    </main>
  );
}
