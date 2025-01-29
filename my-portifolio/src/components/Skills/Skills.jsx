import React from "react";
import "./Skills.css"; // Arquivo de estilos
import { skillsData, levelText } from "./Skills-level"; // Dados de habilidades

export const Skills = () => {
  return (
    <section className="skills-container">
      <section className="skills">
        <h2>
          {" "}
          <i className="material-icons">engineering</i> Competências
        </h2>
        {skillsData.map((group, index) => (
          <div key={index} className="skill-group">
            {/* Grupo de Estrelas */}
            <div className="stars">
              {/* Tooltip aplicado ao grupo inteiro */}
              <span className="skills-hover-text">
                {levelText[group.level]}
              </span>
              {Array.from({ length: 5 }, (_, i) => (
                <span
                  key={i}
                  className={i < group.level ? "star filled" : "star"}
                >
                  ★
                </span>
              ))}
            </div>
            {/* Tags de Habilidades */}
            <div className="skill-tags">
              {group.skills.map((skill, i) => (
                <span key={i} className="skill-name">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </section>
      <section className="languages">
        <h2>
          <i className="material-icons">language</i> Idiomas
        </h2>
        <ul className="languages-list">
          <li className="languages-info">
            <p>
              <img
                width="24"
                height="24"
                src="https://img.icons8.com/fluency/48/brazil-circular.png"
                alt="brazil-circular"
                className="languages-icon"
              />
              Português brasileiro
            </p>
            <p>nível: Nativo</p>
          </li>
          <li className="languages-info">
            <p>
              <img
                width="24"
                height="24"
                src="https://img.icons8.com/fluency/24/usa-circular.png"
                alt="usa-circular"
                className="languages-icon"
              />
              Inglês
            </p>
            <p>nível: Intermediário</p>
          </li>
          <li className="languages-info">
            <p>
              <img
                width="24"
                height="24"
                src="https://img.icons8.com/color/24/spain2-circular.png"
                alt="spain2-circular"
                className="languages-icon"
              />
              Espanhol
            </p>
            <p>nível: básico</p>
          </li>
        </ul>
      </section>
    </section>
  );
};
