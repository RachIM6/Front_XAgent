'use client';

import { Course, Module } from '@/lib/mockData';
import { ChevronDown, ChevronRight } from 'lucide-react';
import { useState } from 'react';

interface RoadmapSidebarProps {
  course: Course;
  currentModuleId?: string;
  currentSectionId?: string;
  onNavigate: (moduleId: string, sectionId: string) => void;
}

export function RoadmapSidebar({ 
  course, 
  currentModuleId, 
  currentSectionId, 
  onNavigate 
}: RoadmapSidebarProps) {
  const [expandedModules, setExpandedModules] = useState<Set<string>>(
    new Set([currentModuleId].filter(Boolean))
  );

  const toggleModule = (moduleId: string) => {
    const newExpanded = new Set(expandedModules);
    if (newExpanded.has(moduleId)) {
      newExpanded.delete(moduleId);
    } else {
      newExpanded.add(moduleId);
    }
    setExpandedModules(newExpanded);
  };

  const getModuleTitle = (module: Module, index: number) => {
    if (module.type === 'level_quiz') return 'Level Quiz';
    if (module.type === 'final_quiz') return 'Final Quiz';
    return `Module ${index}. ${module.title}`;
  };

  return (
    <div className="w-64 shrink-0 bg-white border-r border-gray-200 overflow-y-auto">
      <div className="p-4 border-b border-gray-200">
        <h2 className="text-lg font-semibold text-gray-900">Course Roadmap</h2>
      </div>
      
      <div className="p-2">
        {course.modules.map((module, moduleIndex) => {
          const isExpanded = expandedModules.has(module.id);
          const isCurrentModule = currentModuleId === module.id;
          
          return (
            <div key={module.id} className="mb-2">
              <button
                onClick={() => toggleModule(module.id)}
                className={`w-full flex items-center justify-between p-3 rounded-lg text-left transition-colors ${
                  isCurrentModule 
                    ? 'bg-blue-50 text-blue-700 border border-blue-200' 
                    : 'hover:bg-gray-50 text-gray-700'
                }`}
              >
                <div className="flex-1">
                  <div className="font-medium text-sm mb-1">
                    {getModuleTitle(module, moduleIndex)}
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="flex-1 bg-gray-200 rounded-full h-1">
                      <div
                        className="bg-blue-600 h-1 rounded-full transition-all duration-300"
                        style={{ width: `${module.progress}%` }}
                      />
                    </div>
                    <span className="text-xs text-gray-500">
                      {module.progress}%
                    </span>
                  </div>
                </div>
                
                {isExpanded ? (
                  <ChevronDown className="h-4 w-4 ml-2" />
                ) : (
                  <ChevronRight className="h-4 w-4 ml-2" />
                )}
              </button>
              
              {isExpanded && (
                <div className="ml-4 mt-1 space-y-1">
                  {module.sections.map((section) => {
                    const isCurrentSection = currentSectionId === section.id;
                    
                    return (
                      <button
                        key={section.id}
                        onClick={() => onNavigate(module.id, section.id)}
                        className={`w-full text-left p-2 rounded text-sm transition-colors ${
                          isCurrentSection
                            ? 'bg-blue-100 text-blue-800 font-medium'
                            : 'hover:bg-gray-50 text-gray-600'
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <span>{section.title}</span>
                          <span className="text-xs">
                            {section.progress}%
                          </span>
                        </div>
                      </button>
                    );
                  })}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}