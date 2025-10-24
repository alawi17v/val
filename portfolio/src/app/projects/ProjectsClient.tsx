'use client';

import { useState, useEffect } from 'react';
import { Project } from './projectData';
import ProjectsHeader from '../components/ProjectsHeader';
import ProjectModal from '@/components/ProjectModal';
import { fetchMultipleGitHubRepoData, GitHubRepoData } from '@/lib/github';

interface ProjectsClientProps {
  projects: Project[];
}

export default function ProjectsClient({ projects }: ProjectsClientProps) {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [githubData, setGithubData] = useState<Record<string, GitHubRepoData>>({});

  // Fetch GitHub repository data on component mount
  useEffect(() => {
    const fetchRepoData = async () => {
      const reposWithGithub = projects.filter(p => p.githubRepo);
      if (reposWithGithub.length > 0) {
        const repoUrls = reposWithGithub.map(p => p.githubRepo!);
        const repoData = await fetchMultipleGitHubRepoData(repoUrls);
        setGithubData(repoData);
      }
    };

    fetchRepoData();
  }, [projects]);

  const handleViewProject = (project: Project) => {
    setSelectedProject(project);
  };

  const handleModalClose = () => {
    setSelectedProject(null);
  };

  return (
    <div className="min-h-screen bg-base00 text-base05">
      <ProjectsHeader
        projectCount={projects.length}
      />

      <div className="pt-24 sm:pt-28 lg:pt-32 px-4 sm:px-6 lg:px-8 pb-16">
        <main className="max-w-7xl mx-auto">
          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <div
                key={project.id}
                className="bg-base01 rounded-lg overflow-hidden border border-base02 hover:border-base0D transition-all duration-300 cursor-pointer group hover:shadow-lg hover:shadow-base0D/20"
                onClick={() => handleViewProject(project)}
                style={{
                  animation: `fadeInUp 0.5s ease-out ${0.1 * index}s forwards`,
                  opacity: 0
                }}
              >
                {/* Project Image */}
                <div className="relative h-48 bg-base02 overflow-hidden">
                  {project.images && project.images[0] ? (
                    <img
                      src={project.images[0]}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      onError={(e) => {
                        // Hide image if it fails to load
                        e.currentTarget.style.display = 'none';
                      }}
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-base04">
                      <svg
                        className="w-16 h-16"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                  )}

                  {/* Year Badge */}
                  <div className="absolute top-3 right-3 bg-base00/80 backdrop-blur-sm px-3 py-1 rounded-full text-xs text-base05 font-semibold">
                    {project.startYear}{project.endYear && project.endYear !== project.startYear ? `-${project.endYear}` : ''}
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  {/* Title and Descriptor */}
                  <h3 className="text-xl font-bold text-base05 mb-2 group-hover:text-base0D transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs text-base0D font-semibold uppercase tracking-wider mb-3">
                    {project.threeWordDescriptor}
                  </p>

                  {/* GitHub Stats */}
                  {project.githubRepo && githubData[project.githubRepo] && (
                    <div className="flex items-center gap-4 text-base0D text-sm font-semibold opacity-80 mb-3" style={{fontFamily: 'NerdFont, monospace'}}>
                      {/* Stars */}
                      {githubData[project.githubRepo].stargazers_count > 0 && (
                        <div className="flex items-center">
                          <span className="mr-1">󰓎</span>
                          <span>{githubData[project.githubRepo].stargazers_count}</span>
                        </div>
                      )}

                      {/* Forks */}
                      {githubData[project.githubRepo].forks_count > 0 && (
                        <div className="flex items-center">
                          <span className="mr-1">󰓁</span>
                          <span>{githubData[project.githubRepo].forks_count}</span>
                        </div>
                      )}
                    </div>
                  )}

                  {/* Short Description */}
                  <p className="text-base04 text-sm line-clamp-3">
                    {project.shortDescription || project.description}
                  </p>

                  {/* Links */}
                  <div className="flex items-center gap-2 mt-4">
                    {project.link && (
                      <span className="text-xs text-base0B bg-base0B/10 px-2 py-1 rounded">
                        Live Site
                      </span>
                    )}
                    {project.githubRepo && (
                      <span className="text-xs text-base0D bg-base0D/10 px-2 py-1 rounded">
                        GitHub
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>

      {/* Project Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={handleModalClose}
          githubData={githubData}
        />
      )}

      {/* Fade in animation */}
      <style jsx global>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}
