
export interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  content: string;
  image: string;
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Rahul Singh",
    role: "DevOps Engineer",
    company: "Amazon Web Services",
    content: "Qualibytes' DevOps Engineering course completely transformed my career. The hands-on projects gave me real-world experience that I could immediately apply in job interviews. Within a month of completing the course, I landed my dream job at AWS.",
    image: "/placeholder.svg"
  },
  {
    id: 2,
    name: "Priya Patel",
    role: "Machine Learning Engineer",
    company: "Microsoft",
    content: "The Machine Learning Engineering program exceeded my expectations. The curriculum was comprehensive and up-to-date with the latest industry trends. The instructors were incredibly knowledgeable and provided personalized feedback on my projects.",
    image: "/placeholder.svg"
  },
  {
    id: 3,
    name: "James Wilson",
    role: "Full Stack Developer",
    company: "Accenture",
    content: "As someone transitioning from a non-tech background, Qualibytes made learning web development approachable and engaging. The step-by-step project-based learning approach helped me build a strong portfolio that impressed employers.",
    image: "/placeholder.svg"
  },
  {
    id: 4,
    name: "Sophia Chen",
    role: "Security Analyst",
    company: "Deloitte",
    content: "The Cybersecurity course provided the perfect blend of theory and practical application. The lab environments allowed me to practice real-world security scenarios safely. I now work at Deloitte as a security analyst, all thanks to Qualibytes.",
    image: "/placeholder.svg"
  }
];
