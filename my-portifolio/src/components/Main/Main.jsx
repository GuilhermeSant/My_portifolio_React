import React, { useState, useEffect } from 'react';
import { Contatos } from "../Contatos";
import { Education } from "../Education";
import { Experiencias } from "../Experiencias";
import { PortifolioWeb } from "../PortifolioWeb";
import { PortifolioGames } from "../PortifolioGames";
import { Skills } from "../Skills";
import { Header } from "../Header";
import { AccordionItem } from "../../Scripts/utils";
import './Main.css';

export const Main = () => {
  const [activeId, setActiveId] = useState(null);

  const handleLinkClick = (id) => {
    setActiveId(id);
    setTimeout(() => {
      const element = document.getElementById(id);
      if (element) {
        const offset = element.getBoundingClientRect().top + window.scrollY - 170;
        window.scrollTo({ top: offset, behavior: 'smooth' });
      }
    }, 400);
  };

  return (
    <main className="main">
      <Header onLinkClick={handleLinkClick} />
      <button id="backToTop" className="backToTop">
        <i className="material-icons">arrow_upward</i>
      </button>

      <Contatos />
      <div className="accordionItem">
      <AccordionItem  id="experiencias" title="Experiências" isOpen={activeId === 'experiencias'}>
        <Experiencias />
      </AccordionItem>
      </div>

      <div className="accordionItem">     
      <AccordionItem id="formacao" title="Formação e Cursos" isOpen={activeId === 'formacao'}>
        <Education />
      </AccordionItem>
      </div>

      <div className="accordionItem">
      <AccordionItem id="competencias" title="Competências e Idiomas" isOpen={activeId === 'competencias'}>
        <Skills />
      </AccordionItem>
      </div>

      <div className="accordionItem">
      <AccordionItem id="portifolio-web" title="Portfólio Web Design" isOpen={activeId === 'portifolio-web'}>
        <PortifolioWeb />
      </AccordionItem>
      </div>

      <div className="accordionItem">
      <AccordionItem id="portifolio-games" title="Portfólio Game Design" isOpen={activeId === 'portifolio-games'}>
        <PortifolioGames />
      </AccordionItem>
      </div>
    </main>
  );
};
