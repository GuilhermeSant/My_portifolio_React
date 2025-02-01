import { useState } from "react";
import { PortifolioGameData } from "./PortifolioGames-data";

export const PortifolioGames = () => {

  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section className="portifolio-game" id="portifolio-game">
      <div className="portifolio-container">
        {PortifolioGameData.map((project, index) => (
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
                  src={selectedProject.gif}
                  alt={selectedProject.alt}
                  className="modal-img--portrait"
                  onError={(e) => {
                    e.target.onerror = null; 
                    e.target.src = `${selectedProject.img}` ;
                  }}
                />
              </a>
            </div>
            <p className="modal-description">{selectedProject.description}</p>

            <button className="close-modal" onClick={() => setSelectedProject(null)}>x</button>
          </div>
        </div>
      )}
    </section>
  );
};
