'use client';

import { Section } from '@/lib/mockData';

interface ContentPaneProps {
  section: Section | null;
}

export function ContentPane({ section }: ContentPaneProps) {
  if (!section) {
    return (
      <div className="flex-1 p-6 flex items-center justify-center">
        <div className="text-center text-gray-500">
          <p className="text-lg">Select a section to view content</p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex-1 p-6 bg-white">
      <div className="prose max-w-none">
        <h1 className="text-3xl font-semibold mb-6 text-gray-900">
          {section.title}
        </h1>
        
        <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 mb-6">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-medium text-gray-700">Section Progress</span>
            <span className="text-sm font-semibold text-gray-900">
              {section.progress}%
            </span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className="bg-green-600 h-2 rounded-full transition-all duration-300"
              style={{ width: `${section.progress}%` }}
            />
          </div>
        </div>
        
        <div className="text-gray-700 leading-relaxed whitespace-pre-line">
          {section.content}
        </div>
        
        <div className="mt-8 pt-6 border-t border-gray-200">
          <button
            disabled
            className="px-6 py-3 bg-gray-300 text-gray-500 rounded-lg font-medium cursor-not-allowed"
          >
            Take Quiz (Coming Soon)
          </button>
        </div>
      </div>
    </div>
  );
}