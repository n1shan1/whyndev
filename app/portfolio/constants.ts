export const PROJECTS_DATA = [
  {
    slug: "thedevco",
    title: "TheDevCo",
    category: "Developer Platform",
    description:
      "A modern developer platform concept showcasing tools, resources, and products designed specifically for engineering teams and developer-first companies.",

    client: "Personal Project",
    date: "2024",
    website: 'https://thedevco-pi.vercel.app/',

    technologies: ["Next.js", "Tailwind CSS", "Framer Motion"],

    challenge:
      "Developer-focused companies often struggle to communicate technical credibility through traditional marketing websites. Most platforms either feel too corporate or lack the performance and clarity developers expect. The goal was to design a platform experience that felt closer to a product interface than a marketing site.",

    solution:
      "TheDevCo was designed as a product-style website rather than a traditional landing page. The interface uses modular UI sections, animated transitions, and structured documentation-style layouts to present developer tools clearly. Emphasis was placed on performance, readable typography, and a minimal interface that mirrors the design language used by modern developer platforms.",

    results:
      "The final product demonstrates how developer platforms can combine technical credibility with strong visual design. It serves as a blueprint for developer-first SaaS companies that want to communicate both engineering depth and product quality.",

    image: "/projects/the-dev-co.jpg",
  },

  {
    slug: "pingpanda",
    title: "PingPanda",
    category: "Developer SaaS",
    description:
      "A real-time SaaS monitoring platform that delivers instant notifications for product activity such as signups, payments, and milestones directly into Discord.",

    client: "Personal Project",
    date: "2024",
    website: 'https://pingpanda-main.netlify.app/',

    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "REST API",
      "Discord Webhooks",
      "Event Logging System",
    ],

    challenge:
      "Many SaaS founders rely on dashboards to monitor business performance, but dashboards require constant checking. The challenge was to create a system that pushes critical product insights—like new users or revenue events—directly to the tools teams already use daily, such as Discord.",

    solution:
      "PingPanda introduces a developer-friendly logging API that allows SaaS applications to send structured events to a central service. These events are processed and instantly delivered to Discord channels as formatted notifications. The platform allows teams to monitor business activity in real time without opening analytics dashboards.",

    results:
      "The platform demonstrates how SaaS observability can shift from passive dashboards to proactive notifications. Founders and teams gain instant awareness of important events like new customers, revenue milestones, and product activity, helping them stay closer to their business performance.",

    image: "/projects/pingpanda.jpg",
  },

  {
    slug: "quill-ai",
    title: "Quill",
    category: "AI SaaS",
    description:
      "An AI-powered document intelligence platform that allows users to upload PDFs and interact with their content through natural language conversations.",

    client: "Personal Project",
    date: "2024",
    website: 'https://quill-psi-jet.vercel.app/',

    technologies: [
      "Next.js 14",
      "TypeScript",
      "Tailwind CSS",
      "tRPC",
      "Prisma",
      "PostgreSQL",
      "LangChain",
      "Google Generative AI",
      "Pinecone",
      "React-PDF",
      "Stripe",
      "Kinde Auth",
    ],

    challenge:
      "Professionals working with large documents—contracts, reports, research papers—often spend hours manually searching for information. Traditional document viewers provide no intelligent understanding of the content, making knowledge extraction slow and inefficient.",

    solution:
      "Quill was built as a full-stack AI document platform powered by Retrieval-Augmented Generation (RAG). Uploaded documents are processed, converted into embeddings, and stored in Pinecone. Using LangChain and Google's Generative AI, users can ask questions about their documents and receive context-aware responses instantly.",

    results:
      "Quill demonstrates how AI can transform static documents into interactive knowledge systems. Users can explore complex documents conversationally, significantly reducing the time required to extract insights from large datasets.",

    image: "/projects/quill.jpg",
  },

  {
    slug: "imagine-ai",
    title: "Imagine AI",
    category: "AI",
    description:
      "A generative AI platform that enables users to create high-quality images from text prompts through a simple and visually engaging interface.",

    client: "Personal Project",
    date: "2024",
    website: 'https://imagine-plum.vercel.app/',

    technologies: [
      "Next.js",
      "React",
      "Tailwind CSS",
      "Clerk Auth",
      "Stripe",
      "Shadcn UI",
      "TypeScript",
      "tRPC",
      "Prisma",
      "PostgreSQL",
      "Google Generative AI",
    ],

    challenge:
      "AI image generation tools often overwhelm users with complex interfaces and fragmented workflows. The challenge was to create an interface that made AI image generation feel intuitive while still providing advanced capabilities.",

    solution:
      "Imagine AI was designed with a product-focused interface that prioritizes simplicity and visual exploration. Users can generate images, preview outputs in a responsive gallery layout, and manage generations through a clean dashboard. Authentication and payment infrastructure allow the platform to scale as a production SaaS product.",

    results:
      "The platform demonstrates how AI creativity tools can combine powerful generative models with simple, accessible interfaces that appeal to both technical and non-technical users.",

    image: "/projects/imagine.jpg",
  },

  {
    slug: "youcase",
    title: "YouCase",
    category: "E-Commerce",
    description:
      "An e-commerce platform that allows users to design and purchase fully customized phone cases with real-time previews.",

    client: "Personal Project",
    date: "2024",
    website: 'https://youcase.vercel.app/',

    technologies: ["Next.js", "Tailwind CSS", "Stripe", "React"],

    challenge:
      "Customization-driven e-commerce experiences often suffer from slow interfaces and complex product configuration flows. The challenge was to design a smooth, intuitive customization process that works seamlessly across devices.",

    solution:
      "YouCase provides a real-time product customization interface where users can upload designs, preview their cases instantly, and complete purchases through an integrated Stripe checkout flow. The interface was optimized for performance to ensure smooth previews and quick loading times.",

    results:
      "The platform showcases how modern web technologies can power interactive e-commerce experiences while maintaining fast performance and a clean shopping journey.",

    image: "/projects/youcase.jpg",
  },

  {
    slug: "flowscrape",
    title: "FlowScrape",
    category: "SaaS",
    description:
      "A web data extraction platform designed to help businesses collect structured information from websites and automate data workflows.",

    client: "Personal Project",
    date: "2025",
    website: 'https://flow-scrape-umber.vercel.app/',

    technologies: ["Next.js", "React", "Tailwind CSS", "Node.js"],

    challenge:
      "Many businesses rely on web data for market research, pricing analysis, and lead generation. However, building custom scraping pipelines requires technical expertise and infrastructure.",

    solution:
      "FlowScrape provides a dashboard where users can manage scraping workflows, monitor extraction jobs, and visualize collected data. The platform simplifies complex scraping operations into a clean SaaS-style interface designed for both developers and business users.",

    results:
      "FlowScrape demonstrates how complex backend automation can be packaged into an accessible SaaS product, enabling businesses to extract and analyze web data without building custom infrastructure.",

    image: "/projects/flow-scrape.jpg",
  },
];

export const CATEGORIES = ["All", "AI", "E-Commerce", "SaaS", "Developer Platform"];

export const PORTFOLIO_PAGE = {
  header: {
    title: "Our Work.",
    subtitle: "A collection of premium digital experiences, web apps, and AI integrations."
  },
  projects: {
    liveSite: "Live Site",
    techStack: "Tech Stack",
    coreTools: "core tools",
    visualPresentation: "Visual Presentation Area",
    client: "Client",
    timeline: "Timeline",
    technologies: "Technologies",
    interestedTitle: "Interested?",
    interestedDesc: "We can build a similar tailored solution for your exact business use case.",
    contactUs: "Contact Us",
    challenge: "The Challenge",
    solution: "Our Solution",
    implementations: "Key Implementations",
    implementationList: [
      "Architectural system design",
      "Frontend UI/UX development",
      "Backend infrastructure integration",
      "Performance optimization phase"
    ],
    result: "The Result"
  },
  bottomCta: {
    title: "Like what you see?",
    subtitle: "Let's create something amazing together.",
    button: "Start Your Project"
  },
  projectDetailsCta: {
    title: "Ready for your project?",
    subtitle: "Let's get started together. Send me an inquiry and receive a response within 12 hours.",
    button: "Start Your Project",
    footer: "whyn agency — Web Design & Software Development — Available for new projects"
  }
};
