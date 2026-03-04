import React from "react";
import { Card } from "../../components/Card";
import { Badge } from "../../components/Badge";

export interface Course {
  id: string;
  title: string;
  instructor: string;
  progress: number;
  status: "In Progress" | "Completed" | "Not Started";
}

export const EducationCourses: React.FC = () => {
  const courses: Course[] = [
    {
      id: "1",
      title: "React Advanced",
      instructor: "John Smith",
      progress: 65,
      status: "In Progress",
    },
    {
      id: "2",
      title: "TypeScript Basics",
      instructor: "Jane Doe",
      progress: 100,
      status: "Completed",
    },
    {
      id: "3",
      title: "GraphQL Mastery",
      instructor: "Mike Chen",
      progress: 0,
      status: "Not Started",
    },
  ];

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Education & Courses</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map((course) => (
          <Card
            key={course.id}
            className="p-6 hover:shadow-lg transition-shadow"
          >
            <div className="mb-4">
              <h3 className="text-lg font-semibold mb-2">{course.title}</h3>
              <p className="text-gray-600 text-sm mb-3">
                by {course.instructor}
              </p>
              <Badge
                variant={course.status === "Completed" ? "mint" : "secondary"}
              >
                {course.status}
              </Badge>
            </div>
            <div className="bg-gray-200 h-2 rounded-full overflow-hidden">
              <div
                className="bg-blue-500 h-full rounded-full transition-all"
                style={{ width: `${course.progress}%` }}
              />
            </div>
            <p className="text-sm text-gray-600 mt-2">
              {course.progress}% complete
            </p>
          </Card>
        ))}
      </div>
    </div>
  );
};
