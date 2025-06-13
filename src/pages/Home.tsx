import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import HeroSection from "../components/HeroSection";
import CourseCard from "../components/CourseCard";
import { courses } from "../data/courses"; // ✅ using your real data

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
  const featuredCourses = courses.slice(0, 3); // ✅ safely use original data

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
              to="/Programs"
              className="inline-flex items-center px-8 py-3 border border-white rounded-md hover:bg-white hover:text-black text-lg transition-all"
            >
              Enroll Now
            </Link>
          </motion.div>
        </div>
      </section>

      {/* 🎓 Alumni Section */}
      <section className="py-16 bg-black text-white overflow-hidden relative">
        <h2 className="text-center text-2xl md:text-3xl font-bold mb-10">
          Our Alumni Work At
        </h2>

        <div className="absolute top-0 left-0 w-24 h-full bg-gradient-to-r from-black to-transparent z-10" />
        <div className="absolute top-0 right-0 w-24 h-full bg-gradient-to-l from-black to-transparent z-10" />

        <div className="overflow-hidden whitespace-nowrap">
          <div className="flex animate-marquee items-center gap-x-10 min-w-max">
            {[...companiesRow1, ...companiesRow1].map((c, i) => (
              <div
                key={`row1-${i}`}
                className="flex items-center justify-center min-w-[120px]"
              >
                <motion.img
                  whileHover={{ scale: 1.1 }}
                  src={c.logo}
                  alt={c.name}
                  className="h-32 w-auto object-contain transition drop-shadow hover:scale-105"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="overflow-hidden whitespace-nowrap mt-6">
          <div className="flex animate-marquee items-center gap-x-10 min-w-max">
            {[...companiesRow2, ...companiesRow2].map((c, i) => (
              <div
                key={`row2-${i}`}
                className="flex items-center justify-center min-w-[120px]"
              >
                <motion.img
                  whileHover={{ scale: 1.1 }}
                  src={c.logo}
                  alt={c.name}
                  className="h-32 w-auto object-contain transition drop-shadow hover:scale-105"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 📈 Career Impact Section */}
      <section className="w-full bg-black text-white py-20 px-4 md:px-12">
        <div className="max-w-screen-2xl mx-auto grid md:grid-cols-3 items-start gap-12">
          {/* Section Header */}
          <div className="text-center mx-auto md:col-span-3 mb-10">
            <h3 className="text-sm uppercase tracking-widest text-blue-400 mb-2">
              The Impact of Upskilling
            </h3>
            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
              Explore Career Breakthroughs <br className="hidden md:block" />
              from Our Alumni
            </h2>
          </div>

          {/* Left: Bar Graph + Stats */}
          <div className="space-y-6 flex flex-col items-center md:items-start">
            <div className="flex items-end gap-4 h-48">
              <div className="w-6 h-[40%] bg-blue-300 rounded-t-md"></div>
              <div className="w-6 h-[60%] bg-blue-400 rounded-t-md"></div>
              <div className="w-6 h-[80%] bg-blue-500 rounded-t-md"></div>
              <div className="w-6 h-[100%] bg-blue-600 rounded-t-md"></div>
            </div>
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-bold">95%</h3>
              <p className="text-sm text-gray-300">
                of our students from non-technical backgrounds successfully
                transitioned into IT careers after completing the program,
                proving that with the right guidance and skills, anyone can
                break into the tech industry.
              </p>
            </div>
          </div>

          {/* Center: Pie Chart with Labels */}
          <div className="flex flex-col items-center justify-start space-y-6">
            <img
              src="https://i.postimg.cc/9X6tmYz0/piechart.png" // Replace with actual pie chart
              alt="Success Distribution Pie Chart"
              className="max-w-[220px]"
            />
            <ul className="text-sm text-gray-300 space-y-2 text-left">
              <li className="flex justify-between w-64">
                <span>🔵 Salary Boosts</span> <span>60%</span>
              </li>
              <li className="flex justify-between w-64">
                <span>🟠 High-Package Achievers</span> <span>20%</span>
              </li>
              <li className="flex justify-between w-64">
                <span>🟢 Other Outcomes</span> <span>20%</span>
              </li>
            </ul>
          </div>

          {/* Right: Glowing Line Chart (Image Placeholder) */}
          <div className="flex flex-col items-center md:items-end justify-start space-y-6">
            <img
              src="https://i.postimg.cc/qq7kW5CR/Chat-GPT-Image-Jun-13-2025-08-47-20-PM.png" // 🔁 Replace this path with your actual image path
              alt="Career Growth Graph"
              className="w-[180px] h-[220px] object-contain"
            />
            <div className="text-center md:text-right">
              <h3 className="text-xl font-semibold text-white">
                Career Growth Over Time
              </h3>
              <p className="text-sm text-gray-300">
                Our alumni reported consistent and substantial growth in their
                careers within 1–3 years of upskilling—achieving better roles,
                higher salaries, and increased responsibilities across diverse
                industries.
              </p>
            </div>
          </div>

          {/* CTA Button Centered Below */}
          <div className="md:col-span-3 flex justify-center pt-14">
            <a
              href="tel:+918377032324"
              className="bg-white text-black font-bold text-lg py-3 px-6 rounded-md hover:bg-gray-200 transition inline-flex items-center gap-3 shadow-md"
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
