import { useState } from "react";
import { PortifolioWebData } from "./PortifolioWeb-data";
import "./PortifolioWeb.css";
import githubIcon from '../../img/github-icon.png';

export const PortifolioWeb = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <>
      <section className="portifolio-web" id="portifolio-web">
        {PortifolioWebData.map((project, index) => (
          <div className="container-projects" key={index}>
            <p className="project-title">{project.title}</p>

            <img
              src={project.img}
              alt={project.alt}
              className="project-img"
              onClick={() => setSelectedProject(project)}
            />
          </div>
        ))}
      </section>

      {selectedProject && (
        <div className="modal-overlay" onClick={() => setSelectedProject(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h2>{selectedProject.title}</h2>
            <img
              src={selectedProject.img}
              alt={selectedProject.alt}
              className="project-img--portrait"
            />
            <p>{selectedProject.description}</p>
            <p>
              GitHub:
              <a
                href={selectedProject.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  width="64"
                  height="64"
                   src={githubIcon}
                  alt="github"
                />
              </a>
            </p>
            <button onClick={() => setSelectedProject(null)}>x</button>
          </div>
        </div>
      )}
    </>
  );
};
