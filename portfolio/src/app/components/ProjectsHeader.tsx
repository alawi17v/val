'use client';

import Link from 'next/link';
import { useTheme } from '../context/ThemeContext';

interface ProjectsHeaderProps {
  projectCount: number;
}

export default function ProjectsHeader({ projectCount }: ProjectsHeaderProps) {
  const { theme, toggleTheme, mounted } = useTheme();

  return (
    <>
      {/* Fixed Header Bar with Navigation and Title */}
      <div
        className="fixed top-4 left-4 right-4 sm:top-5 sm:left-5 sm:right-5 lg:top-6 lg:left-6 lg:right-6 z-30 flex items-center justify-between"
        style={{
          transform: 'translate3d(0,0,0)', // Force hardware acceleration for mobile
          WebkitTransform: 'translate3d(0,0,0)', // Safari-specific
          position: 'fixed' // Ensure fixed positioning is explicit
        }}
      >
        {/* Back Button */}
        <Link
          href="/"
          className="p-2 rounded-lg bg-base0B hover:bg-base0A transition-all duration-300 shadow-lg active:scale-95"
          aria-label="Back to Home"
        >
          <svg
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            strokeWidth={2}
            className="text-base00 w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h7.5"
            />
          </svg>
        </Link>

        {/* Projects Title - Centered with count */}
        <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center gap-2">
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-base05 whitespace-nowrap">
            Ali&apos;s Projects
          </h1>
          <span className="bg-base0D text-base00 px-2 py-1 rounded-full text-xs font-bold">
            {projectCount}
          </span>
        </div>

        {/* Theme Toggle Button */}
        <button
          onClick={toggleTheme}
          className="p-2 rounded-lg bg-base0D hover:bg-base0C transition-all duration-300 shadow-lg active:scale-95"
          aria-label={`Current: ${theme} mode`}
          title={`Current: ${theme} mode`}
        >
          <svg
            className="w-5 h-5 text-base00"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {!mounted ? (
              <>
                {/* Auto icon - half sun, half moon (default during initial render) */}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8a4 4 0 100 8V8z"
                  fill="currentColor"
                />
              </>
            ) : theme === 'light' ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
              />
            ) : theme === 'dark' ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
              />
            ) : (
              <>
                {/* Auto icon - half sun, half moon */}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8a4 4 0 100 8V8z"
                  fill="currentColor"
                />
              </>
            )}
          </svg>
        </button>
      </div>
    </>
  );
}
