'use client';

import { useProgress } from '@/contexts/ProgressContext';
import { Course, Module } from '@/lib/mockData';

export interface RoadmapData {
  course: Course | null;
  currentModule: Module | null;
  currentSectionId: string | null;
}

export function useRoadmap(courseId: string, moduleId?: string, sectionId?: string): RoadmapData {
  const { courses } = useProgress();
  
  const course = courses.find(c => c.id === courseId) || null;
  const currentModule = course?.modules.find(m => m.id === moduleId) || null;
  const currentSectionId = sectionId || null;
  
  return {
    course,
    currentModule,
    currentSectionId
  };
}