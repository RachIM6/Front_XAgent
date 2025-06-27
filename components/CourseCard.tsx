'use client';

import { Course } from '@/lib/mockData';

interface CourseCardProps {
  course: Course;
  onClick: () => void;
}

export function CourseCard({ course, onClick }: CourseCardProps) {
  return (
    <div
      className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow cursor-pointer p-6 border border-gray-100"
      onClick={onClick}
    >
      <h3 className="text-xl font-semibold text-gray-900 mb-3">
        {course.title}
      </h3>
      
      <p className="text-gray-600 mb-4 line-clamp-3">
        {course.description}
      </p>
      
      <div className="space-y-2">
        <div className="flex justify-between items-center">
          <span className="text-sm text-gray-500">Progress</span>
          <span className="text-sm font-medium text-gray-900">
            {course.progress}%
          </span>
        </div>
        
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div
            className="bg-blue-600 h-2 rounded-full transition-all duration-300"
            style={{ width: `${course.progress}%` }}
          />
        </div>
      </div>
    </div>
  );
}