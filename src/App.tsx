/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { FeaturedProjects } from './components/FeaturedProjects';
import { Skills } from './components/Skills';
import { Education } from './components/Education';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { BackgroundEffects } from './components/BackgroundEffects';
import { CustomCursor } from './components/CustomCursor';
import { ProjectDetailModal } from './components/ProjectDetailModal';
import { CvModal } from './components/CvModal';
import { Project } from './types/portfolio';
import { PROJECTS } from './data/projects';

export default function App() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isCvModalOpen, setIsCvModalOpen] = useState(false);

  // Sync with URL hash for shareable deep links (e.g. #project-echolearn)
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash.startsWith('#project-')) {
        const projectId = hash.replace('#project-', '');
        const match = PROJECTS.find((p) => p.id === projectId);
        if (match) {
          setSelectedProject(match);
        }
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleSelectProject = (project: Project) => {
    setSelectedProject(project);
    window.history.pushState(null, '', `#project-${project.id}`);
  };

  const handleCloseProject = () => {
    setSelectedProject(null);
    if (window.location.hash.startsWith('#project-')) {
      window.history.pushState(null, '', window.location.pathname + '#projects');
    }
  };

  return (
    <div className="min-h-screen bg-[#FAFAF8] text-[#171717] relative selection:bg-[#6C8FF5]/20 selection:text-[#171717]">
      {/* Subtle interactive cursor for desktop */}
      <CustomCursor />

      {/* Very delicate dot grid & soft pastel ambient glow */}
      <BackgroundEffects />

      {/* Floating minimal navigation */}
      <Navbar onOpenCvModal={() => setIsCvModalOpen(true)} />

      {/* Main content flow */}
      <main className="relative">
        <Hero onOpenCvModal={() => setIsCvModalOpen(true)} />
        <About />
        <FeaturedProjects onSelectProject={handleSelectProject} />
        <Skills />
        <Education />
        <Contact onOpenCvModal={() => setIsCvModalOpen(true)} />
      </main>

      {/* Minimal Footer */}
      <Footer />

      {/* Project Case Study View */}
      <ProjectDetailModal
        project={selectedProject}
        onClose={handleCloseProject}
      />

      {/* CV Download / Verified Profile Modal */}
      <CvModal
        isOpen={isCvModalOpen}
        onClose={() => setIsCvModalOpen(false)}
      />
    </div>
  );
}
