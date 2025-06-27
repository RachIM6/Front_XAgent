"use client";

import { useState, useEffect } from "react";
import { useParams, useRouter, useSearchParams } from "next/navigation";
import { ProtectedRoute } from "@/components/ProtectedRoute";
import { Navbar } from "@/components/Navbar";
import { RoadmapSidebar } from "@/components/RoadmapSidebar";
import { ContentPane } from "@/components/ContentPane";
import { ChatToggle } from "@/components/ChatToggle";
import { useRoadmap } from "@/hooks/useRoadmap";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

// Generate static params for known course IDs
export async function generateStaticParams() {
  return [{ id: "1" }, { id: "2" }, { id: "3" }];
}

export default function CoursePage() {
  const params = useParams();
  const searchParams = useSearchParams();
  const router = useRouter();

  const courseId = params.id as string;
  const [currentModuleId, setCurrentModuleId] = useState<string>("");
  const [currentSectionId, setCurrentSectionId] = useState<string>("");

  const { course, currentModule } = useRoadmap(
    courseId,
    currentModuleId,
    currentSectionId
  );

  // Initialize with URL params or first module/section
  useEffect(() => {
    if (!course) return;

    const moduleParam = searchParams.get("module");
    const sectionParam = searchParams.get("section");

    if (moduleParam && sectionParam) {
      setCurrentModuleId(moduleParam);
      setCurrentSectionId(sectionParam);
    } else {
      // Default to first module and first section
      const firstModule = course.modules[0];
      const firstSection = firstModule?.sections[0];

      if (firstModule && firstSection) {
        setCurrentModuleId(firstModule.id);
        setCurrentSectionId(firstSection.id);
      }
    }
  }, [course, searchParams]);

  const handleNavigate = (moduleId: string, sectionId: string) => {
    setCurrentModuleId(moduleId);
    setCurrentSectionId(sectionId);

    // Update URL without page reload
    const url = new URL(window.location.href);
    url.searchParams.set("module", moduleId);
    url.searchParams.set("section", sectionId);
    window.history.replaceState({}, "", url.toString());
  };

  const currentSection =
    currentModule?.sections.find((s) => s.id === currentSectionId) || null;

  if (!course) {
    return (
      <ProtectedRoute>
        <div className="min-h-screen bg-gray-100">
          <Navbar />
          <div className="flex items-center justify-center min-h-[50vh]">
            <div className="text-center">
              <h1 className="text-2xl font-semibold text-gray-900 mb-2">
                Course not found
              </h1>
              <Link
                href="/dashboard"
                className="text-blue-600 hover:text-blue-700 inline-flex items-center"
              >
                <ArrowLeft className="h-4 w-4 mr-1" />
                Back to Dashboard
              </Link>
            </div>
          </div>
        </div>
      </ProtectedRoute>
    );
  }

  return (
    <ProtectedRoute>
      <div className="min-h-screen bg-gray-100">
        <Navbar />

        <div className="border-b border-gray-200 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex items-center space-x-4">
              <Link
                href="/dashboard"
                className="text-gray-400 hover:text-gray-600 transition-colors"
              >
                <ArrowLeft className="h-5 w-5" />
              </Link>
              <h1 className="text-3xl font-semibold text-gray-900">
                {course.title}
              </h1>
            </div>
          </div>
        </div>

        <div className="flex h-[calc(100vh-8rem)] relative">
          <RoadmapSidebar
            course={course}
            currentModuleId={currentModuleId}
            currentSectionId={currentSectionId}
            onNavigate={handleNavigate}
          />

          <ContentPane section={currentSection} />

          <ChatToggle />
        </div>
      </div>
    </ProtectedRoute>
  );
}
