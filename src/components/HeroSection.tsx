import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import ParticleBackground from "./ParticleBackground";

const HeroSection = () => {
  return (
    <section className="relative w-full bg-black text-white overflow-hidden">
      <ParticleBackground />

      <div className="w-full px-4 md:px-8 py-16 md:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
          {/* 🎥 Left Side – Video & Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <header className="space-y-4 mb-6">
              <h1 className="text-5xl md:text-6xl font-extrabold text-qualibytes-blue leading-tight">
                Qualibytes
              </h1>
              <p className="text-lg md:text-xl font-medium">
                Not Just Training — Career Launchpad
              </p>
              <p className="text-gray-300">
                Industry projects. Internship. Guaranteed guidance to get
                placed.
              </p>
            </header>

            <div className="w-full mt-4 aspect-video bg-gray-900 rounded-xl border border-gray-700 overflow-hidden shadow-lg">
              <video controls className="w-full h-full object-cover">
                <source src="#" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mt-6">
              <motion.button
                whileTap={{ scale: 0.95 }}
                whileHover={{ scale: 1.05 }}
                className="px-8 py-4 bg-qualibytes-blue hover:bg-blue-600 text-white font-medium rounded-md transition-all"
              >
                <Link to="/Programs">Explore Programs</Link>
              </motion.button>

              <motion.button
                whileTap={{ scale: 0.95 }}
                whileHover={{ scale: 1.05 }}
                className="px-8 py-4 border border-qualibytes-purple text-white hover:bg-qualibytes-purple/10 rounded-md transition-all"
              >
                <a href="tel:+918377032324">Talk to an Advisor</a>
              </motion.button>
            </div>
          </motion.div>

          {/* 🧠 Right Side – Animated Panels */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-4 pr-0"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            {panels.map((panel) => (
              <PanelLink key={panel.title} to={panel.to} title={panel.title}>
                {panel.content}
              </PanelLink>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const panels = [
  {
    title: "DevOps Metrics",
    to: "/Programs/devops",
    content: (
      <>
        <div className="text-sm font-mono text-gray-400 mb-2">
          CI/CD Pipeline Logs
        </div>
        <div className="space-y-1 font-mono text-sm bg-black rounded p-2">
          <div className="text-green-400">✔ Build complete</div>
          <div className="text-blue-400">➤ Deploying to production...</div>
          <div className="text-yellow-400 animate-pulse">● Running tests</div>
        </div>
        <div className="mt-4 text-sm text-gray-400">Uptime</div>
        <div className="w-full h-2 bg-gradient-to-r from-green-400 to-lime-500 rounded-full animate-pulse mt-1" />
      </>
    ),
  },
  {
    title: "AI/ML Dashboard",
    to: "/Programs/aiml",
    content: (
      <>
        <div className="text-sm font-mono mb-1">Model Accuracy</div>
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-full border-4 border-dashed border-purple-500 animate-spin" />
          <span className="text-purple-300 font-bold">95.3%</span>
        </div>
        <div className="mt-4 text-sm font-mono">Predictions</div>
        <div className="bg-gray-800 p-2 rounded mt-1 text-xs font-mono text-left space-y-1">
          <div>
            <span className="text-purple-400">›</span> customer: likely to churn
          </div>
          <div>
            <span className="text-purple-400">›</span> click: 87% conversion
          </div>
        </div>
      </>
    ),
  },
  {
    title: "Full Stack Project",
    to: "/Programs/java-fullstack",
    content: (
      <div className="bg-[#1e1e1e] text-sm font-mono text-gray-100 p-4 rounded-xl leading-relaxed">
        <div className="text-gray-400 mb-1">App.tsx</div>
        <code className="block text-green-400">const App = () =&gt; {"{"}</code>
        <code className="block pl-4 text-blue-400">return (</code>
        <code className="block pl-8 text-yellow-400">
          &lt;div className="app"&gt;
        </code>
        <code className="block pl-12">&lt;Navbar /&gt;</code>
        <code className="block pl-12">&lt;HeroSection /&gt;</code>
        <code className="block pl-8 text-yellow-400">&lt;/div&gt;</code>
        <code className="block pl-4 text-blue-400">)</code>
        <code className="block text-green-400">{"}"}</code>
      </div>
    ),
  },
  {
    title: "Testing Console",
    to: "/Programs/automation-testing",
    content: (
      <div className="bg-[#1a1a1a] text-sm font-mono text-gray-100 p-4 rounded-xl leading-relaxed">
        <div className="text-gray-400 mb-1">test_login.py</div>
        <code className="block text-blue-300">import pytest</code>
        <br />
        <code className="block text-green-300">def test_login():</code>
        <code className="block pl-4 text-yellow-300">
          assert login("admin", "123") == True
        </code>
      </div>
    ),
  },
];

interface PanelLinkProps {
  title: string;
  to: string;
  children: React.ReactNode;
  className?: string;
}

const PanelLink = ({ title, to, children, className = "" }: PanelLinkProps) => (
  <Link to={to}>
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      transition={{ duration: 0.8 }}
      className={`group relative bg-white/5 border border-white/10 backdrop-blur-xl rounded-2xl p-6 shadow-2xl hover:shadow-purple-500/30 transition-all cursor-pointer ${className}`}
    >
      <h3 className="text-lg font-bold mb-4 group-hover:text-purple-300 transition">
        {title}
      </h3>
      <div className="absolute top-0 left-0 w-full h-full rounded-2xl bg-purple-500/10 opacity-0 group-hover:opacity-100 transition duration-300 pointer-events-none" />
      {children}
    </motion.div>
  </Link>
);

export default HeroSection;
