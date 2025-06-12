import React from "react";
import { useParams } from "react-router-dom";
import { courses } from "../data/courses";

const CourseDetail = () => {
  const { id } = useParams();
  const course = courses.find((c) => c.id === id);

  if (!course) {
    return <div className="text-white p-10">Course Not Found</div>;
  }

  return (
    <div className="min-h-screen bg-qualibytes-background text-white py-20 px-6">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold mb-4">{course.title}</h1>
        <p className="mb-4">{course.description}</p>
        <p><strong>Duration:</strong> {course.duration}</p>
        <p><strong>Instructor:</strong> {course.instructor}</p>
        <p><strong>Price:</strong> {course.price}</p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Curriculum</h2>
        <ul className="space-y-2">
          {course.curriculum.map((week) => (
            <li key={week.week}>
              <strong>Week {week.week}:</strong> {week.topics.join(", ")}
            </li>
          ))}
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Tools</h2>
        <p>{course.tools.join(", ")}</p>
      </div>
    </div>
  );
};

export default CourseDetail;