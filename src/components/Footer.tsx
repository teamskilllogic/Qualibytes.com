import React from "react";
import { Link } from "react-router-dom";

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0d0d0d] text-white py-12 px-6 w-screen">
      <div className="w-full max-w-screen-2xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-10">

        {/* Logo + Description */}
        <div className="md:col-span-1">
          <img
            src="https://i.postimg.cc/Y0GKrbV8/Qualibytes-IT-Academy-white.png"
            alt="Qualibytes Logo"
            className="h-10 mb-4"
          />
          <h2 className="text-xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-500 text-transparent bg-clip-text">
            Qualibytes IT Academy
          </h2>
          <p className="text-gray-400 mt-2 text-sm">
            Industry projects. Internship. Guaranteed guidance to get placed.
          </p>
          <p className="text-2xl font-extrabold text-gray-300 mt-6 italic" style={{ fontFamily: 'cursive' }}>
            UPSKILL WITH US
          </p>
        </div>

        {/* Explore */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Explore Qualibytes</h3>
          <ul className="space-y-2 text-sm text-gray-400">
            <li><Link to="/programs" className="hover:text-white">Programs</Link></li>
            <li><Link to="/contact" className="hover:text-white">Mentors</Link></li>
            <li><Link to="/contact" className="hover:text-white">Placements</Link></li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Resources</h3>
          <ul className="space-y-2 text-sm text-gray-400">
            <li><Link to="/testimonials" className="hover:text-white">Testimonials</Link></li>
            <li><Link to="/contact" className="hover:text-white">Contact Us</Link></li>
            <li><Link to="/contact" className="hover:text-white">Careers</Link></li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Company</h3>
          <ul className="space-y-2 text-sm text-gray-400">
            <li><Link to="/about" className="hover:text-white">About Us</Link></li>
            <li><Link to="/contact" className="hover:text-white">Become a Mentor</Link></li>
            <li><Link to="/contact" className="hover:text-white">Hire from Us</Link></li>
          </ul>
        </div>

        {/* Socials */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Socials</h3>
          <ul className="space-y-2 text-sm text-gray-400">
            <li><a href="https://www.instagram.com/qualibytes/" target="_blank" rel="noopener noreferrer" className="hover:text-white">Instagram</a></li>
            <li><a href="https://www.linkedin.com/company/qualibytes" target="_blank" rel="noopener noreferrer" className="hover:text-white">LinkedIn</a></li>
            <li><a href="https://x.com/qualibytes" target="_blank" rel="noopener noreferrer" className="hover:text-white">X (Twitter)</a></li>
            <li><a href="https://www.youtube.com/@QualibytesITAcademy" target="_blank" rel="noopener noreferrer" className="hover:text-white">YouTube</a></li>
          </ul>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center text-gray-500 text-sm mt-10 border-t border-gray-800 pt-6">
        <>
          © {new Date().getFullYear()} Qualibytes IT Academy. All rights reserved. | Developed by{" "}
          <a
            href="https://skilllogic.in/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:underline"
          >
            Skilllogic Technologies
          </a>
        </>
      </div>
    </footer>
  );
};

export default Footer;