import React, { useState, useEffect, useRef } from 'react';
import '../Styles/App.css';

export function setupBackToTopButton() {
  const backToTopButton = document.getElementById('backToTop');

  if (!backToTopButton) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
      backToTopButton.classList.add('show');
    } else {
      backToTopButton.classList.remove('show');
    }
  });

  backToTopButton.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

// Configura os itens do acordeão (expandir/recolher)
export const AccordionItem = ({ id, title, isOpen, children }) => {
  const [isExpanded, setIsExpanded] = useState(isOpen);
  const contentRef = useRef(null);

  useEffect(() => {
      setIsExpanded(isOpen);
  }, [isOpen]);

  const toggleAccordion = () => {
      setIsExpanded(!isExpanded);
  };

  return (
      <section id={id} className="accordion-item">
          <h2 className="accordion-header" onClick={toggleAccordion}>
              {title} <span className="arrow">{isExpanded ? "▲" : "▼"}</span>
          </h2>
          <div
              ref={contentRef}
              className={`accordion-content ${isExpanded ? 'expanded' : ''}`}
          >
              {children}
          </div>
      </section>
  );
};