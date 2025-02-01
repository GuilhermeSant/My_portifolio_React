import React, { useState } from "react";
import { PortifolioWebData, morePortifolioWebData } from "./PortifolioWeb-data";
import "./PortifolioWeb.css";
import githubIcon from "../../img/github-icon.png";
import eyeIcon from "../../img/eyeIcon.png";

export const PortifolioWeb = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [showMoreProjects, setShowMoreProjects] = useState(false);
  const [selectedMoreProject, setSelectedMoreProject] = useState(null);

  const handleOpenMoreProjects = () => {
    setShowMoreProjects(true);
  };

  const handleCloseMoreProjects = () => {
    setShowMoreProjects(false);
  };

  const handleSelectMoreProject = (event) => {
    const project = morePortifolioWebData.find(
      (p) => p.title === event.target.value
    );
    setSelectedMoreProject(project);
  };

  return (
    <section className="portifolio-web" id="portifolio-web">
      <div className="portifolio-container">
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
      </div>

      <button className="more-projects-button" onClick={handleOpenMoreProjects}>
        Mais projetos
      </button>

      {selectedProject && (
        <div className="modal-overlay" onClick={() => setSelectedProject(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h2>{selectedProject.title}</h2>
            <div className="modal-img-container">
              <a
                href={selectedProject.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="modal-hover-msg">
                  Clique na imagem para ver o projeto !!!
                </span>
                <img
                  src={selectedProject.img}
                  alt={selectedProject.alt}
                  className="modal-img--portrait"
                />
              </a>
            </div>
            <p className="modal-description">{selectedProject.description}</p>
            <p className="modal-github--text">
              O código está disponível no GitHub:
            </p>
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
                className="modal-github-icon"
              />
            </a>
            <button className="close-modal" onClick={() => setSelectedProject(null)}>x</button>
          </div>
        </div>
      )}

      {showMoreProjects && (
        <div className="modal-overlay" onClick={handleCloseMoreProjects}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h2>Mais Projetos</h2>
            <select
              className="more-selector"
              onChange={handleSelectMoreProject}
            >
              <option >Selecione um projeto</option>
              {morePortifolioWebData.map((project, index) => (
                <option key={index} value={project.title}>
                  {project.title}
                </option>
              ))}
            </select>
            {selectedMoreProject && (
              <div className="more-project-details">
                <h3 className="more-project-title">
                  {" "}
                  {selectedMoreProject.title}
                </h3>
                <p className="more-project-description">
                  {selectedMoreProject.description}
                </p>
                <p>Ver Projeto</p>
                <a
                  href={selectedMoreProject.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="modal-eye-icon"
                >
                  <img width="24" height="24" src={eyeIcon} alt="visible" />
                </a>
                <br />
                <p>Git Hub</p>
                <a
                  href={selectedMoreProject.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    width="32"
                    height="32"
                    src={githubIcon}
                    alt="github"
                    className="modal-github-icon"
                  />
                </a>
                <button className="close-modal" onClick={() => handleCloseMoreProjects()}>x</button>
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
};

export default PortifolioWeb;
