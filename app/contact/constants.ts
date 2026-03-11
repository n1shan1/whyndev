import { Mail, Phone, MapPin } from "lucide-react";

export const CONTACT_INFO = [
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

export const CONTACT_PAGE = {
  hero: {
    tag: "Contact Us",
    title: "Get in Touch.",
    subtitle: "Let's discuss your project and create something extraordinary together."
  },
  form: {
    tag: "Send a Message",
    title: ["Tell us about", "your project."],
    subtitle: "We'll respond within 12 hours during business hours.",
    success: "Thank you! We'll be in touch soon.",
    fields: {
      name: { label: "Name *", placeholder: "Your name" },
      email: { label: "Email *", placeholder: "your@email.com" },
      phone: { label: "Phone", placeholder: "+49 123 456789" },
      company: { label: "Company", placeholder: "Your company" },
      message: { label: "Message *", placeholder: "Tell us about your project, goals, and timeline..." }
    },
    submit: "Send Message"
  },
  bottomCta: {
    tag: "Other ways to reach us",
    title: "Whether you have a quick question or want to discuss a project,",
    subtitle: "we're here to help.",
    buttons: {
      email: "Send Email",
      call: "Call Now"
    }
  }
};
