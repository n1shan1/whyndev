import { Mail, Phone, MapPin } from "lucide-react";

export const CONTACT_INFO = [
  {
    icon: Mail,
    title: "Email",
    value: process.env.NEXT_PUBLIC_CONTACT_EMAIL || "connect.nishantdev@gmail.com",
    note: "We usually respond within 12–24 hours",
    href: `mailto:${process.env.NEXT_PUBLIC_CONTACT_EMAIL || "connect.nishantdev@gmail.com"}`,
  },
  {
    icon: Phone,
    title: "Phone / WhatsApp",
    value: "+91 9444816924",
    note: "Available Mon–Fri, 10am–7pm IST",
    href: "tel:+919444816924",
  },
  {
    icon: MapPin,
    title: "Location",
    value: "Chennai, India",
    note: "Remote meetings worldwide",
    href: null,
  },
];

export const CONTACT_PAGE = {
  hero: {
    tag: "Contact",
    title: "Let's Build Something Great.",
    subtitle:
      "Have a project in mind? Tell us about your goals and we'll help you turn it into a high-performance digital product.",
  },

  form: {
    tag: "Start a Conversation",
    title: ["Tell us about", "your project."],
    subtitle:
      "Share a few details and we'll get back to you within one business day.",
    success: "Thanks for reaching out. We'll contact you shortly.",

    fields: {
      name: {
        label: "Name *",
        placeholder: "Your full name",
      },
      email: {
        label: "Email *",
        placeholder: "you@example.com",
      },
      phone: {
        label: "Phone",
        placeholder: "+91 98765 43210",
      },
      company: {
        label: "Company / Brand",
        placeholder: "Your company or startup",
      },
      message: {
        label: "Project Details *",
        placeholder:
          "Tell us about your project, timeline, and goals. The more details you share, the better we can help.",
      },
    },

    submit: "Send Message",
  },

  bottomCta: {
    tag: "Prefer a direct conversation?",
    title: "Whether you have a quick question or want to discuss a project,",
    subtitle: "we're always happy to help.",
    buttons: {
      email: "Email Us",
      call: "Call / WhatsApp",
    },
  },
};