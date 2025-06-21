import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="min-h-screen pt bg-[#000000] qualibytes-background">
      {/* Hero Section */}
      <section className="w-full bg-[#030307] pt-36 pb-12 px-6 text-center relative overflow-hidden mb-12">
        <div className="max-w-4xl mx-auto z-10 relative">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
            About <span className="text-gradient">Qualibytes</span>
          </h1>
          <p className="text-blue-400 text-lg">
            Transforming tech education with cutting-edge courses and a hands-on
            approach to learning.
          </p>
        </div>
        <div className="absolute top-[-100px] left-[50%] transform -translate-x-1/2 w-[400px] h-[400px] bg-blue-500 opacity-20 blur-[150px] rounded-full z-0" />
      </section>

      {/* Our Story */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <p className="text-gray-300 mb-4">
                Qualibytes was founded in 2019 with a simple mission: to make
                quality tech education accessible to everyone. We believe that
                education should be practical, relevant, and aligned with
                industry demands.
              </p>
              <p className="text-gray-300 mb-4">
                Our team of experienced instructors and tech professionals is
                passionate about sharing knowledge and helping students build
                rewarding careers in technology. We've designed our courses to
                focus on practical skills and real-world applications, ensuring
                our graduates are job-ready from day one.
              </p>
              <p className="text-gray-300">
                Since our inception, we've helped thousands of students
                transition into tech careers, upgrade their skills, and advance
                in their professional journey. Our commitment to excellence and
                student success remains at the core of everything we do.
              </p>
            </motion.div>

            <motion.div
              className="relative h-[400px] rounded-xl overflow-hidden"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <img
                src="https://i.postimg.cc/90bYhFfh/QB.png"
                alt="Qualibytes Training Impact"
                className="object-cover w-full h-full rounded-xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Mission */}
      <section className="py-16 bg-black">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
            <p className="text-xl text-gray-300 mb-10">
              To empower individuals with the skills and knowledge needed to
              thrive in the ever-evolving tech industry through practical,
              industry-relevant education.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <ValueCard
                title="Innovation"
                description="We continuously update our curriculum to reflect the latest industry trends and technologies."
                index={0}
              />
              <ValueCard
                title="Excellence"
                description="We are committed to providing the highest quality education and learning experience."
                index={1}
              />
              <ValueCard
                title="Inclusivity"
                description="We believe tech education should be accessible to everyone, regardless of background."
                index={2}
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">Meet Our Team</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Our team consists of passionate educators, industry experts, and
              tech enthusiasts dedicated to delivering exceptional learning
              experiences.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 place-items-center">
            <TeamMember
              name="Akshit Giri"
              role="Founder & CEO"
              bio="A seasoned Founder and CEO with over 10 years of experience in the IT industry. Successfully built and scaled two startups, both recognized for their innovation and impact in the technology sector.Successfully built and scaled two startups in the IT sector, known for innovation and impactful solutions. "
              index={0}
            />
            <TeamMember
              name="Snajay Gupta"
              role="Strategy & Operations Lead"
              bio="A results-driven Strategy & Operations Lead with over 6 years of experience at the intersection of software engineering and business operations. Combines a strong technical foundation with strategic insight to optimize processes, drive cross-functional initiatives, and support scalable growth."
              index={1}
            />
          </div>
        </div>
      </section>
    </div>
  );
};

interface ValueCardProps {
  title: string;
  description: string;
  index: number;
}

const ValueCard: React.FC<ValueCardProps> = ({ title, description, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.1 * index }}
      className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-6"
    >
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </motion.div>
  );
};

interface TeamMemberProps {
  name: string;
  role: string;
  bio: string;
  index: number;
}

const TeamMember: React.FC<TeamMemberProps> = ({ name, role, bio, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.1 * index }}
      className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-6"
    >
      <div className="h-20 w-20 bg-gradient-to-br from-qualibytes-blue to-qualibytes-purple rounded-full flex items-center justify-center text-2xl font-bold mb-4 mx-auto">
        {name.charAt(0)}
      </div>
      <h3 className="text-xl font-bold mb-1 text-center">{name}</h3>
      <p className="text-qualibytes-blue mb-4 text-center">{role}</p>
      <p className="text-gray-400 text-center">{bio}</p>
    </motion.div>
  );
};

export default About;
