import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import { AnimatePresence } from "framer-motion";

// Global Components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AdvisorPopup from "./components/AdvisorPopup";

// Static Pages
import Home from "./pages/Home";
import Programs from "./pages/Programs";
import About from "./pages/About";
import Testimonials from "./pages/Testimonials";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

// Optional dynamic fallback
import CourseDetail from "./pages/CourseDetail";

// ✅ Course-specific static pages
import DevOps from "./pages/courses/DevOps";
import AIML from "./pages/courses/AIML";
import ManualTesting from "./pages/courses/ManualTesting";
import AutomationTesting from "./pages/courses/AutomationTesting";
import JavaFullStack from "./pages/courses/JavaFullStack";
import PHPFullStack from "./pages/courses/PHPFullStack";
import Frontend from "./pages/courses/Frontend";
import Backend from "./pages/courses/Backend";
import MERN from "./pages/courses/MERN";
import BusinessAnalyst from "./pages/courses/BusinessAnalyst";
import MedicalBilling from "./pages/courses/MedicalBilling";
import USIT from "./pages/courses/USIT";
import USHealthcare from "./pages/courses/USHealthcare";

const queryClient = new QueryClient();

const App = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Navbar />
          <AnimatePresence mode="wait">
            <Routes>
              {/* Static Pages */}
              <Route path="/" element={<Home />} />
              <Route path="/programs" element={<Programs />} />
              <Route path="/about" element={<About />} />
              <Route path="/testimonials" element={<Testimonials />} />
              <Route path="/contact" element={<Contact />} />

              {/* Static Course Pages */}
              <Route path="/programs/devops" element={<DevOps />} />
              <Route path="/programs/aiml" element={<AIML />} />
              <Route path="/programs/manual-testing" element={<ManualTesting />} />
              <Route path="/programs/automation-testing" element={<AutomationTesting />} />
              <Route path="/programs/java-fullstack" element={<JavaFullStack />} />
              <Route path="/programs/php-fullstack" element={<PHPFullStack />} />
              <Route path="/programs/frontend" element={<Frontend />} />
              <Route path="/programs/backend" element={<Backend />} />
              <Route path="/programs/mern" element={<MERN />} />
              <Route path="/programs/business-analyst" element={<BusinessAnalyst />} />
              <Route path="/programs/medical-billing" element={<MedicalBilling />} />
              <Route path="/programs/us-it" element={<USIT />} />
              <Route path="/programs/us-healthcare" element={<USHealthcare />} />

              {/* Fallback Dynamic Page (if needed) */}
              <Route path="/programs/:id" element={<CourseDetail />} />

              {/* 404 */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </AnimatePresence>
          <Footer />
          <AdvisorPopup />
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;