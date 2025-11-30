"use client";

import { MOCK_PROJECT_RANKINGS } from "@/lib/constants";
import "@/styles/dashboard.css";
import Image from "next/image";

export function ProjectRankings() {
  return (
    <div className="project-rankings">
      <div className="project-rankings__header">
        <span className="project-rankings__title">Project rankings</span>
        <Image
          src="/assets/images/info-icon.svg"
          alt="Info icon"
          width={16}
          height={16}
        />
      </div>
      <div className="project-rankings__list">
        {MOCK_PROJECT_RANKINGS.map((project) => (
          <div key={project.id} className="project-rankings__item">
            <Image
              src="/assets/images/arb.svg"
              alt="Info icon"
              width={64}
              height={64}
            />
            <div className="project-rankings__details">
              <span className="project-rankings__name">{project.name}</span>
              <span className="project-rankings__rank">
                Rank {project.rank}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
