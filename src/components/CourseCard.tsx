import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Course } from "../data/courses";

interface CourseCardProps {
  course: Course;
  index: number;
}

// ✅ Mapping course IDs to correct route slugs
const idToProgramPathMap: Record<string, string> = {
  "devops": "devops",
  "machine-learning": "aiml",
  "web-development": "mern",
  "cybersecurity": "cybersecurity", // fallback if needed
};

const CourseCard: React.FC<CourseCardProps> = ({ course, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      <Link
        to={`/programs/${idToProgramPathMap[course.id] || course.id}`}
        className="block group"
      >
        <div className="bg-black rounded-xl overflow-hidden border border-gray-800 transition-all duration-300 group-hover:border-qualibytes-blue/50 group-hover:shadow-xl">
          
          {/* Image Section */}
          <div className="relative aspect-video bg-gray-900 overflow-hidden">
            <img
              src={course.image}
              alt={course.title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />

            {/* Category Badge */}
            <div className="absolute bottom-4 left-4 bg-qualibytes-blue text-white text-xs font-semibold px-3 py-1 rounded shadow">
              {course.category}
            </div>

            {/* Duration Badge */}
            <div className="absolute bottom-4 right-4 bg-black/70 text-white text-xs font-medium px-2 py-1 rounded flex items-center gap-1">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none">
                <path d="M12 6v6h4.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
              </svg>
              {course.duration}
            </div>
          </div>

          {/* Content */}
          <div className="p-6">
            <h3 className="text-lg font-bold mb-2 text-white group-hover:text-qualibytes-blue transition-colors">
              {course.title}
            </h3>
            <p className="text-sm text-gray-400 mb-4 line-clamp-2">{course.description}</p>

            {/* Ratings & Price */}
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div className="flex">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <svg
                      key={i}
                      className={`w-4 h-4 ${
                        i < Math.floor(course.rating)
                          ? "text-yellow-400"
                          : "text-gray-600"
                      }`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span className="ml-2 text-sm text-gray-400">
                  ({course.rating.toFixed(1)})
                </span>
              </div>

              <span className="text-sm font-semibold text-qualibytes-blue">
                {course.price}
              </span>
            </div>
          </div>

          {/* Footer - Instructor & Students */}
          <div className="px-6 py-4 border-t border-gray-800">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center text-sm font-medium text-white">
                  {course.instructor.charAt(0)}
                </div>
                <span className="text-sm text-gray-400">{course.instructor}</span>
              </div>
              <span className="text-sm text-gray-400">
                {course.students.toLocaleString()} students
              </span>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default CourseCard;