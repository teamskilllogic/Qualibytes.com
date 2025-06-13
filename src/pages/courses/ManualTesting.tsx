import React from "react";

const ManualTesting = () => {
  return (
    <div className="min-h-screen bg-qualibytes-background text-white">
      {/* Banner */}
      <div className="w-full h-[325px] bg-cover bg-center" style={{ backgroundImage: 'url("https://via.placeholder.com/1900x325")' }}>
        <div className="h-full w-full flex items-center justify-center bg-black/50">
          <h1 className="text-4xl md:text-5xl font-bold text-white">12-Week Manual Testing Course</h1>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 py-16 space-y-14">
        {/* About the Course */}
        <section>
          <h2 className="text-2xl font-semibold mb-3">About the Course</h2>
          <p className="text-gray-300">
            This course is designed to give you a strong foundation in Manual Testing principles and practices.
            You'll gain in-depth knowledge of SDLC, STLC, test case design, defect lifecycle, and hands-on
            exposure to real-time project testing and documentation.
          </p>
        </section>

        {/* Weekly Modules */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            { title: "Week 1: Introduction to Software Testing", points: ["SDLC vs STLC", "Types of testing"] },
            { title: "Week 2: Requirements & Test Planning", points: ["Understanding requirements", "Test planning and strategy"] },
            { title: "Week 3: Test Case Design", points: ["Writing test cases", "Test case templates"] },
            { title: "Week 4: Defect Management", points: ["Defect lifecycle", "Bug reporting tools overview"] },
            { title: "Week 5: Testing Techniques", points: ["Black box testing", "Equivalence partitioning"] },
            { title: "Week 6: Test Execution & Reporting", points: ["Test execution flow", "Daily status reports"] },
            { title: "Week 7: Web & Mobile Testing", points: ["UI/UX test cases", "Cross-browser & responsive testing"] },
            { title: "Week 8: Agile Testing", points: ["SCRUM basics", "Sprint testing cycle"] },
            { title: "Week 9: Tools Overview", points: ["JIRA for defect tracking", "TestLink for test management"] },
            { title: "Week 10: Test Metrics & Audit", points: ["Coverage analysis", "Review & audits"] },
            { title: "Week 11: Project Simulation", points: ["Real project workflow", "Documentation practice"] },
            { title: "Week 12: Mock Interviews & Job Readiness", points: ["Interview Q&A", "Resume & LinkedIn setup"] },
          ].map((week, index) => (
            <div key={index} className="bg-gray-800 hover:bg-gray-700 transition-all duration-300 p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-bold mb-2">{week.title}</h3>
              <ul className="list-disc list-inside text-gray-300 text-sm space-y-1">
                {week.points.map((pt, i) => (
                  <li key={i}>{pt}</li>
                ))}
              </ul>
            </div>
          ))}
        </section>

        {/* CTA Button */}
        <div className="text-center pt-10">
          <a href="tel:+918377032324" className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition duration-300">
            Enroll Now
          </a>
        </div>
      </div>
    </div>
  );
};

export default ManualTesting;
