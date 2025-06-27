'use client';

import { createContext, useContext, useState, ReactNode } from 'react';
import { mockCourses } from '@/lib/mockData';

interface ProgressContextType {
  courses: typeof mockCourses;
  updateSectionProgress: (courseId: string, moduleId: string, sectionId: string, progress: number) => void;
}

const ProgressContext = createContext<ProgressContextType | undefined>(undefined);

export function ProgressProvider({ children }: { children: ReactNode }) {
  const [courses, setCourses] = useState(mockCourses);

  const updateSectionProgress = (courseId: string, moduleId: string, sectionId: string, progress: number) => {
    setCourses(prevCourses =>
      prevCourses.map(course => {
        if (course.id !== courseId) return course;
        
        const updatedModules = course.modules.map(module => {
          if (module.id !== moduleId) return module;
          
          const updatedSections = module.sections.map(section =>
            section.id === sectionId ? { ...section, progress } : section
          );
          
          // Calculate module progress based on sections
          const moduleProgress = Math.round(
            updatedSections.reduce((sum, section) => sum + section.progress, 0) / updatedSections.length
          );
          
          return { ...module, sections: updatedSections, progress: moduleProgress };
        });
        
        // Calculate course progress based on modules
        const courseProgress = Math.round(
          updatedModules.reduce((sum, module) => sum + module.progress, 0) / updatedModules.length
        );
        
        return { ...course, modules: updatedModules, progress: courseProgress };
      })
    );
  };

  return (
    <ProgressContext.Provider value={{ courses, updateSectionProgress }}>
      {children}
    </ProgressContext.Provider>
  );
}

export function useProgress() {
  const context = useContext(ProgressContext);
  if (context === undefined) {
    throw new Error('useProgress must be used within a ProgressProvider');
  }
  return context;
}