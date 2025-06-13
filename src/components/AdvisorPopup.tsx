import React, { useEffect, useState } from "react";

const AdvisorPopup = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    // Show the modal automatically after 1.5 seconds
    const timer = setTimeout(() => {
      setShow(true);
    }, 1500);

    return () => clearTimeout(timer); // clean up timer
  }, []);

  if (!show) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm">
      <div className="w-full max-w-[800px] h-[500px] rounded-xl overflow-hidden flex flex-col md:flex-row shadow-xl border border-gray-700 bg-black">
        {/* Left: Image */}
        <div className="w-full md:w-1/2 h-1/2 md:h-full">
          <img
            src="https://i.postimg.cc/52n9x1b3/counsellor.png"
            alt="Counselor"
            className="w-full h-full object-cover object-top"
          />
        </div>

        {/* Right: Form */}
        <div className="w-full md:w-1/2 h-1/2 md:h-full bg-black text-white relative flex flex-col justify-center p-6">
          <button
            onClick={() => setShow(false)}
            className="absolute top-2 right-2 text-white text-lg bg-gray-800 rounded-full w-8 h-8"
          >
            ✕
          </button>

          <h2 className="text-2xl font-bold mb-4">Talk to our Advisor!</h2>

          <form className="space-y-4">
            <select className="w-full p-2 rounded bg-gray-800">
              <option>Select Program</option>
              <option>DevOps</option>
              <option>Full Stack</option>
              <option>AI/ML</option>
              <option>Other</option>
            </select>
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-2 rounded bg-gray-800"
            />
            <input
              type="email"
              placeholder="Email Address"
              className="w-full p-2 rounded bg-gray-800"
            />
            <div className="flex">
              <span className="p-2 bg-gray-700 rounded-l">+91</span>
              <input
                type="text"
                placeholder="Phone Number"
                className="flex-1 p-2 rounded-r bg-gray-800"
              />
            </div>
            <button
              type="submit"
              className="bg-pink-600 hover:bg-pink-700 w-full p-2 rounded font-medium"
            >
              Continue
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AdvisorPopup;
