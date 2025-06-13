import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  return (
    <motion.header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-black/90 shadow-md border-b border-gray-800"
          : "bg-black/60 backdrop-blur"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 120, damping: 20 }}
    >
      <div className="container mx-auto px-0 py-3 flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <img
            src="https://i.postimg.cc/Y0GKrbV8/Qualibytes-IT-Academy-white.png"
            alt="Qualibytes Logo"
            className="h-12 w-auto object-contain"
          />
        </Link>

        <nav className="hidden md:flex items-center space-x-8 text-sm font-medium">
          <NavLink to="/" currentPath={location.pathname}>
            Home
          </NavLink>
          <NavLink to="/programs" currentPath={location.pathname}>
            Programs
          </NavLink>
          <NavLink to="/about" currentPath={location.pathname}>
            About
          </NavLink>
          <NavLink to="/testimonials" currentPath={location.pathname}>
            Testimonials
          </NavLink>
          <NavLink to="/contact" currentPath={location.pathname}>
            Contact
          </NavLink>
        </nav>

        <div className="hidden md:flex items-center space-x-4">
          <a
            href="tel:+918377032324"
            className="px-3 py-1 bg-white text-black rounded hover:bg-gray-200 transition"
          >
            📞Talk to us
          </a>
        </div>

        <button
          className="md:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          ☰
        </button>
      </div>

      {isMobileMenuOpen && (
        <motion.div className="md:hidden bg-black/80 backdrop-blur-lg">
          <div className="px-6 py-4 flex flex-col space-y-4">
            <Link to="/" className="text-white text-lg hover:text-cyan-400">
              Home
            </Link>
            <Link
              to="/programs"
              className="text-white text-lg hover:text-cyan-400"
            >
              Programs
            </Link>
            <Link
              to="/about"
              className="text-white text-lg hover:text-cyan-400"
            >
              About
            </Link>
            <Link
              to="/testimonials"
              className="text-white text-lg hover:text-cyan-400"
            >
              Testimonials
            </Link>
            <Link
              to="/contact"
              className="text-white text-lg hover:text-cyan-400"
            >
              Contact
            </Link>
            <Link to="/login" className="text-white">
              Login
            </Link>
            <Link to="/apply" className="text-white">
              Apply Now
            </Link>
          </div>
        </motion.div>
      )}
    </motion.header>
  );
};

const NavLink = ({ to, currentPath, children }) => {
  const isActive =
    to === "/" ? currentPath === "/" : currentPath.startsWith(to);
  return (
    <motion.div className="relative group">
      <Link
        to={to}
        className={`relative text-sm font-medium transition ${
          isActive ? "text-cyan-400" : "text-white group-hover:text-cyan-400"
        }`}
      >
        {children}
        <motion.div
          className="absolute -bottom-1 left-0 h-0.5 bg-cyan-400 rounded-full shadow-[0_0_6px_#00ffff]"
          initial={{ width: 0 }}
          animate={{ width: isActive ? "100%" : "0%" }}
          whileHover={{ width: "100%" }}
          transition={{ duration: 0.3 }}
        />
      </Link>
    </motion.div>
  );
};

export default Navbar;
