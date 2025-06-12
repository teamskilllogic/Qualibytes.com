
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { motion } from "framer-motion";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-qualibytes-background pt-20">
      <motion.div 
        className="text-center px-4"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-9xl font-bold text-gradient mb-4">404</h1>
        <h2 className="text-3xl font-bold mb-4">Page Not Found</h2>
        <p className="text-xl text-gray-400 mb-8">
          The page you are looking for doesn't exist or has been moved.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link 
            to="/" 
            className="px-8 py-4 bg-qualibytes-blue hover:bg-blue-600 text-white font-medium rounded-md transition-colors"
          >
            Back to Home
          </Link>
          <Link 
            to="/courses" 
            className="px-8 py-4 border border-qualibytes-purple text-white hover:bg-qualibytes-purple/10 rounded-md transition-colors"
          >
            Browse Courses
          </Link>
        </div>
      </motion.div>
    </div>
  );
};

export default NotFound;
