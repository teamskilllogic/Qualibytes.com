
export interface Topic {
  week: number;
  topics: string[];
}

export interface Course {
  id: string;
  title: string;
  duration: string;
  description: string;
  image: string;
  price: string;
  instructor: string;
  curriculum: Topic[];
  tools: string[];
  category: string;
  level: string;
  students: number;
  rating: number;
}

export const courses: Course[] = [
  {
    id: "devops",
    title: "DevOps Engineering with AWS",
    duration: "12 Weeks",
    description: "Master DevOps practices and tools with hands-on AWS infrastructure automation. Build CI/CD pipelines and deploy scalable applications.",
    image: "/placeholder.svg",
    price: "25000 INR",
    instructor: "Satyam Srivastava",
    curriculum: [
      { week: 1, topics: ["Introduction to DevOps", "Git & GitHub Fundamentals"] },
      { week: 2, topics: ["Jenkins Configuration", "CI/CD Pipelines"] },
      { week: 3, topics: ["Docker Containers", "Docker Compose"] },
      { week: 4, topics: ["AWS Core Services", "IAM & Security"] },
      { week: 5, topics: ["EC2, S3, RDS", "AWS CLI"] },
      { week: 6, topics: ["Kubernetes Fundamentals", "K8s Architecture"] },
      { week: 7, topics: ["K8s Deployments", "K8s Services"] },
      { week: 8, topics: ["Terraform Basics", "Infrastructure as Code"] },
      { week: 9, topics: ["Monitoring with Prometheus", "Grafana Dashboards"] },
      { week: 10, topics: ["ELK Stack", "Centralized Logging"] },
      { week: 11, topics: ["AWS CloudFormation", "Advanced IaC"] },
      { week: 12, topics: ["Capstone Project", "Portfolio Building"] }
    ],
    tools: ["Git", "Jenkins", "Docker", "AWS", "Kubernetes", "Terraform", "Prometheus", "Grafana", "ELK Stack"],
    category: "Cloud Computing",
    level: "Intermediate",
    students: 1245,
    rating: 4.8
  },
  {
    id: "machine-learning",
    title: "Machine Learning Engineering",
    duration: "12 Weeks",
    description: "Become a Machine Learning expert through hands-on projects with Python, TensorFlow, and PyTorch. Deploy ML models to production.",
    image: "/placeholder.svg",
    price: "25000 INR",
    instructor: "Gopal Gupta",
    curriculum: [
      { week: 1, topics: ["Python for Data Science", "NumPy & Pandas"] },
      { week: 2, topics: ["Data Visualization", "Exploratory Analysis"] },
      { week: 3, topics: ["Statistical Learning", "Regression Fundamentals"] },
      { week: 4, topics: ["Classification Algorithms", "Decision Trees"] },
      { week: 5, topics: ["Ensemble Methods", "Random Forests"] },
      { week: 6, topics: ["Unsupervised Learning", "Clustering"] },
      { week: 7, topics: ["Neural Networks Basics", "Backpropagation"] },
      { week: 8, topics: ["TensorFlow Fundamentals", "Keras API"] },
      { week: 9, topics: ["Computer Vision with CNNs", "Image Recognition"] },
      { week: 10, topics: ["NLP Fundamentals", "Word Embeddings"] },
      { week: 11, topics: ["RNNs and LSTMs", "Sequence Models"] },
      { week: 12, topics: ["Transformers", "BERT & GPT"] },
      { week: 13, topics: ["MLOps Foundations", "Model Deployment"] },
      { week: 14, topics: ["Model Monitoring", "A/B Testing"] },
      { week: 15, topics: ["ML System Design", "Scalable ML"] },
      { week: 16, topics: ["Capstone Project", "Portfolio Building"] }
    ],
    tools: ["Python", "TensorFlow", "PyTorch", "Scikit-learn", "Pandas", "NumPy", "Jupyter", "MLflow"],
    category: "Artificial Intelligence",
    level: "Advanced",
    students: 987,
    rating: 4.9
  },
  {
    id: "web-development",
    title: "Full Stack Web Development",
    duration: "10 Weeks",
    description: "Learn frontend and backend development using modern JavaScript frameworks. Build responsive web applications with React and Node.js.",
    image: "/placeholder.svg",
    price: "20000 INR",
    instructor: "Astha Prakash",
    curriculum: [
      { week: 1, topics: ["HTML5 & CSS3", "Responsive Design"] },
      { week: 2, topics: ["JavaScript Fundamentals", "ES6+ Features"] },
      { week: 3, topics: ["DOM Manipulation", "Web APIs"] },
      { week: 4, topics: ["React Fundamentals", "Component Architecture"] },
      { week: 5, topics: ["React Hooks", "State Management"] },
      { week: 6, topics: ["Redux", "Context API"] },
      { week: 7, topics: ["Node.js", "Express Framework"] },
      { week: 8, topics: ["RESTful APIs", "API Design"] },
      { week: 9, topics: ["MongoDB", "Mongoose ODM"] },
      { week: 10, topics: ["Authentication", "JWT"] },
      { week: 11, topics: ["TypeScript", "Type Safety"] },
      { week: 12, topics: ["Testing", "Jest & React Testing Library"] },
      { week: 13, topics: ["Deployment", "CI/CD"] },
      { week: 14, topics: ["Capstone Project", "Portfolio Building"] }
    ],
    tools: ["HTML", "CSS", "JavaScript", "React", "Node.js", "Express", "MongoDB", "TypeScript", "Jest"],
    category: "Web Development",
    level: "Beginner",
    students: 2103,
    rating: 4.7
  },
  {
    id: "cybersecurity",
    title: "Cybersecurity Fundamentals",
    duration: "10 Weeks",
    description: "Learn core cybersecurity principles, tools, and techniques to protect systems and networks from digital threats and attacks.",
    image: "/placeholder.svg",
    price: "$999",
    instructor: "Emily Washington",
    curriculum: [
      { week: 1, topics: ["Security Fundamentals", "CIA Triad"] },
      { week: 2, topics: ["Network Security", "Firewalls & VPNs"] },
      { week: 3, topics: ["Cryptography", "Encryption Algorithms"] },
      { week: 4, topics: ["Threat Intelligence", "Vulnerability Assessment"] },
      { week: 5, topics: ["Web Application Security", "OWASP Top 10"] },
      { week: 6, topics: ["Penetration Testing", "Ethical Hacking"] },
      { week: 7, topics: ["Incident Response", "Digital Forensics"] },
      { week: 8, topics: ["Cloud Security", "Secure Configuration"] },
      { week: 9, topics: ["Security Compliance", "Risk Management"] },
      { week: 10, topics: ["Capstone Project", "Security Portfolio"] }
    ],
    tools: ["Wireshark", "Metasploit", "Nmap", "Burp Suite", "OpenVAS", "Snort", "Kali Linux"],
    category: "Cybersecurity",
    level: "Intermediate",
    students: 876,
    rating: 4.6
  }
];
