
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Topic } from "../data/courses";

interface CurriculumAccordionProps {
  curriculum: Topic[];
}

const CurriculumAccordion: React.FC<CurriculumAccordionProps> = ({ curriculum }) => {
  const [openWeek, setOpenWeek] = useState<number | null>(0); // First week open by default

  const toggleWeek = (weekNum: number) => {
    setOpenWeek(openWeek === weekNum ? null : weekNum);
  };

  return (
    <div className="space-y-4">
      {curriculum.map((week, index) => (
        <motion.div
          key={week.week}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1, duration: 0.3 }}
          className="border border-gray-800 rounded-lg overflow-hidden bg-gray-900/50"
        >
          <button
            className={`w-full flex items-center justify-between p-4 text-left transition-colors ${
              openWeek === week.week
                ? "bg-qualibytes-blue/20 text-white"
                : "hover:bg-gray-800/50 text-gray-300"
            }`}
            onClick={() => toggleWeek(week.week)}
          >
            <div className="flex items-center">
              <div
                className={`flex items-center justify-center w-8 h-8 mr-3 rounded-full ${
                  openWeek === week.week
                    ? "bg-qualibytes-blue text-white"
                    : "bg-gray-800 text-gray-400"
                }`}
              >
                {week.week}
              </div>
              <span className="font-medium">Week {week.week}</span>
            </div>
            <svg
              className={`w-5 h-5 transition-transform duration-200 ${
                openWeek === week.week ? "transform rotate-180" : ""
              }`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>

          <AnimatePresence>
            {openWeek === week.week && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="overflow-hidden"
              >
                <div className="p-4 border-t border-gray-800 bg-black/30">
                  <ul className="space-y-3">
                    {week.topics.map((topic, i) => (
                      <motion.li
                        key={i}
                        initial={{ x: -10, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: i * 0.1, duration: 0.2 }}
                        className="flex items-start"
                      >
                        <svg
                          className="w-5 h-5 text-qualibytes-blue mr-2 mt-0.5 flex-shrink-0"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                        <span className="text-gray-300">{topic}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      ))}
    </div>
  );
};

export default CurriculumAccordion;
