import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import HeroSection from "../components/HeroSection";
import CourseCard from "../components/CourseCard";
import { courses } from "../data/courses";

const companiesRow1 = [
  { name: "TCS", logo: "https://i.postimg.cc/j5fZmfBw/TCS.png" },
  { name: "Infosys", logo: "https://i.postimg.cc/90t1Fhmc/infosys.png" },
  { name: "Wipro", logo: "https://i.postimg.cc/sg1PbShj/wipro.png" },
  { name: "HCL", logo: "https://i.postimg.cc/Pf4mxKbf/hcl.png" },
  {
    name: "Tech Mahindra",
    logo: "https://i.postimg.cc/qvCh8GK3/Chat-GPT-Image-Jun-12-2025-01-19-45-AM.png",
  },
  { name: "L&T Infotech", logo: "https://i.postimg.cc/NGSQ1vkd/lti.png" },
  { name: "TCS", logo: "https://i.postimg.cc/j5fZmfBw/TCS.png" },
  { name: "Infosys", logo: "https://i.postimg.cc/90t1Fhmc/infosys.png" },
  { name: "Wipro", logo: "https://i.postimg.cc/sg1PbShj/wipro.png" },
  { name: "HCL", logo: "https://i.postimg.cc/Pf4mxKbf/hcl.png" },
  {
    name: "Tech Mahindra",
    logo: "https://i.postimg.cc/qvCh8GK3/Chat-GPT-Image-Jun-12-2025-01-19-45-AM.png",
  },
  { name: "L&T Infotech", logo: "https://i.postimg.cc/NGSQ1vkd/lti.png" },
];

const companiesRow2 = [
  {
    name: "Capgemini",
    logo: "https://i.postimg.cc/fb8NyGbj/Chat-GPT-Image-Jun-12-2025-01-27-14-AM.png",
  },
  { name: "Mindtree", logo: "https://i.postimg.cc/NGk1rkXM/mindtree.png" },
  { name: "Cognizant", logo: "https://i.postimg.cc/90g0Y0Vx/cognizant.png" },
  { name: "Zoho", logo: "https://i.postimg.cc/DzhvsLLv/zoho.png" },
  { name: "Freshworks", logo: "https://i.postimg.cc/hP7c5p04/freshworks.png" },
  { name: "Flipkart", logo: "https://i.postimg.cc/qBNNpcGS/flipkart.png" },
  {
    name: "Capgemini",
    logo: "https://i.postimg.cc/fb8NyGbj/Chat-GPT-Image-Jun-12-2025-01-27-14-AM.png",
  },
  { name: "Mindtree", logo: "https://i.postimg.cc/NGk1rkXM/mindtree.png" },
  { name: "Cognizant", logo: "https://i.postimg.cc/90g0Y0Vx/cognizant.png" },
  { name: "Zoho", logo: "https://i.postimg.cc/DzhvsLLv/zoho.png" },
  { name: "Freshworks", logo: "https://i.postimg.cc/hP7c5p04/freshworks.png" },
  { name: "Flipkart", logo: "https://i.postimg.cc/qBNNpcGS/flipkart.png" },
];

const Home = () => {
  const featuredCourses = courses.slice(0, 3);

  return (
    <main className="w-full bg-black text-white">
      <HeroSection />

      {/* 🔥 Courses Section */}
      <section className="w-full bg-black text-white py-16 px-4 md:px-8">
        <h2 className="text-center text-3xl md:text-4xl font-bold mb-10">
          Explore Our <span className="text-gradient">Top Courses</span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {featuredCourses.map((course, index) => (
            <motion.div
              key={course.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <CourseCard course={course} index={index} />
            </motion.div>
          ))}
        </div>
        <div className="text-center mt-12">
          <motion.div whileTap={{ scale: 0.95 }} whileHover={{ scale: 1.05 }}>
            <Link
              to="/courses"
              className="inline-flex items-center px-8 py-3 border border-white rounded-md hover:bg-white hover:text-black text-lg transition-all"
            >
              Enroll Now
            </Link>
          </motion.div>
        </div>
      </section>

      {/* 🎓 Alumni Marquee Section */}
      <section
        className="py-16 bg-black text-white overflow-hidden relative"
        aria-labelledby="alumni-heading"
      >
        <h2
          id="alumni-heading"
          className="text-center text-2xl md:text-3xl font-bold mb-10"
        >
          Our Alumni Work At
        </h2>

        {/* Gradient edges (can keep or remove based on black bg) */}
        <div className="absolute top-0 left-0 w-24 h-full bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
        <div className="absolute top-0 right-0 w-24 h-full bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />

        {/* Row 1 */}
        <div className="overflow-hidden whitespace-nowrap">
          <div className="flex animate-marquee items-center gap-x-10 min-w-max">
            {[...companiesRow1, ...companiesRow1].map((c, i) => (
              <div
                key={`row1-${i}`}
                className="flex items-center justify-center min-w-[120px] flex-shrink-0"
              >
                <motion.img
                  whileHover={{ scale: 1.1 }}
                  src={c.logo}
                  alt={`${c.name} logo`}
                  title={c.name}
                  loading="lazy"
                  className="h-32 w-auto object-contain transition duration-300 ease-in-out drop-shadow hover:scale-105"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Row 2 */}
        <div className="overflow-hidden whitespace-nowrap mt-6">
          <div className="flex animate-marquee items-center gap-x-10 min-w-max">
            {[...companiesRow2, ...companiesRow2].map((c, i) => (
              <div
                key={`row2-${i}`}
                className="flex items-center justify-center min-w-[120px] flex-shrink-0"
              >
                <motion.img
                  whileHover={{ scale: 1.1 }}
                  src={c.logo}
                  alt={`${c.name} logo`}
                  title={c.name}
                  loading="lazy"
                  className="h-32 w-auto object-contain transition duration-300 ease-in-out drop-shadow hover:scale-105"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="w-full bg-black text-white py-20 px-4 md:px-12">
        <div className="max-w-screen-2xl mx-auto grid md:grid-cols-3 items-start gap-12">
          {/* Centered Heading */}
          <div className="text-center mx-auto md:col-span-3 mb-10">
            <h3 className="text-sm uppercase tracking-widest text-blue-400 mb-2">
              The Impact of Upskilling
            </h3>
            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
              Explore Career Breakthroughs <br className="hidden md:block" />
              from Our Alumni
            </h2>
          </div>

          {/* Left: Graph + Stats */}
          <div className="md:col-span-2">
            {/* Trajectory Bars */}
            <div className="flex items-end gap-4 justify-center md:justify-start h-48 mb-8">
              <div className="w-6 h-[40%] bg-blue-300 rounded-t-md"></div>
              <div className="w-6 h-[60%] bg-blue-400 rounded-t-md"></div>
              <div className="w-6 h-[80%] bg-blue-500 rounded-t-md"></div>
              <div className="w-6 h-[100%] bg-blue-600 rounded-t-md"></div>
            </div>

            {/* Role Breakdown */}
            <ul className="space-y-3 text-base text-white max-w-lg mx-auto md:mx-0">
              <li className="flex justify-between">
                <span>Tech Service Roles & Solutions</span>
                <span className="font-semibold">14.1%</span>
              </li>
              <li className="flex justify-between">
                <span>FinTech & Digital Finance Careers</span>
                <span className="font-semibold">13.9%</span>
              </li>
              <li className="flex justify-between">
                <span>E-commerce & Retail Innovation Paths</span>
                <span className="font-semibold">13.7%</span>
              </li>
              <li className="flex justify-between">
                <span>Consumer-Facing Tech & Product Roles</span>
                <span className="font-semibold">8.2%</span>
              </li>
            </ul>
          </div>

          {/* Right: CTA */}
          <div className="flex flex-col items-center md:items-end text-center md:text-right mt-12 md:mt-32">
            <a
              href="tel:+918377032324"
              className="bg-white text-black font-bold text-lg py-3 px-6 rounded-md hover:bg-gray-200 transition-all inline-flex items-center gap-3 shadow-md"
            >
              <span className="text-pink-600">📞</span> Talk to us
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
