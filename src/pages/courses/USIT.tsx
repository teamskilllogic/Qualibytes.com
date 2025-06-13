import React from "react";

const USITStaffing = () => {
  return (
    <div className="min-h-screen bg-qualibytes-background text-white">
      {/* Banner */}
      <div className="w-full h-[325px] bg-cover bg-center" style={{ backgroundImage: 'url("https://via.placeholder.com/1900x325")' }}>
        <div className="h-full w-full flex items-center justify-center bg-black/50">
          <h1 className="text-4xl md:text-5xl font-bold text-white">7-Day U.S. IT Staffing Course</h1>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 py-16 space-y-14">
        {/* About the Course */}
        <section>
          <h2 className="text-2xl font-semibold mb-3">About the Course</h2>
          <p className="text-gray-300">
            This 7-day course is tailored for individuals looking to start a career in U.S. IT staffing.
            Learn the fundamentals of IT recruitment, sourcing methods, candidate screening, compliance,
            and effective communication strategies to staff technology roles across the U.S.
          </p>
        </section>

        {/* Daily Modules */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            { title: "Day 1: U.S. IT Staffing Overview", points: ["IT staffing industry basics", "Common job titles: Java, .NET, QA, etc."] },
            { title: "Day 2: IT Recruitment Lifecycle", points: ["Job requirements & intake", "End-to-end process"] },
            { title: "Day 3: Sourcing & Portals", points: ["Boolean search", "Dice, Monster, LinkedIn"] },
            { title: "Day 4: Screening & Communication", points: ["Tech resume filtering", "Cold calling & emails"] },
            { title: "Day 5: Documentation & ATS", points: ["Working with ATS", "Resume tracking"] },
            { title: "Day 6: Visa Types & Pay Terms", points: ["H1B, GC, USC, TN, OPT, CPT", "W2, C2C, 1099"] },
            { title: "Day 7: Mock Calls & Interview Prep", points: ["Live recruiter simulation", "FAQs & resume tips"] },
          ].map((day, index) => (
            <div key={index} className="bg-gray-800 hover:bg-gray-700 transition-all duration-300 p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-bold mb-2">{day.title}</h3>
              <ul className="list-disc list-inside text-gray-300 text-sm space-y-1">
                {day.points.map((pt, i) => (
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

export default USITStaffing;