'use client';

import { MOCK_PROJECT_RANKINGS } from '@/lib/constants';
import '@/styles/dashboard.css';

export function ProjectRankings() {
  return (
    <div className="project-rankings">
      <div className="project-rankings__header">
        <span className="project-rankings__title">Project rankings</span>
        <svg
          className="project-rankings__info"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <circle cx="12" cy="12" r="10" />
          <line x1="12" y1="16" x2="12" y2="12" />
          <line x1="12" y1="8" x2="12.01" y2="8" />
        </svg>
      </div>
      <div className="project-rankings__list">
        {MOCK_PROJECT_RANKINGS.map((project) => (
          <div key={project.id} className="project-rankings__item">
            <div
              className="project-rankings__icon"
              style={{
                background: 'linear-gradient(135deg, #4a9fff 0%, #0066cc 100%)',
              }}
            />
            <div className="project-rankings__details">
              <span className="project-rankings__name">{project.name}</span>
              <span className="project-rankings__rank">Rank {project.rank}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
