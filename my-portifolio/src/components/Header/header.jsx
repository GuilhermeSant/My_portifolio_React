import { useState } from 'react';
import './header.css';

export const Header = ({ onLinkClick }) => {
    const [menuOpen, setMenuOpen] = useState(false);

    const handleClick = (event, id) => {
        event.preventDefault();
        if (onLinkClick) {
            onLinkClick(id);
        }
        setMenuOpen(false); // Fecha o menu ao clicar em um link
    };

    return (
        <header>
            <h1 className="title level-item has-text-centered">Guilherme Vinicius Santana</h1>
            <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
                &#9776;
            </button>
            <nav className={menuOpen ? "nav-menu open" : "nav-menu"}>
                <ul>
                    <li><a className="nav-link" href="#experiencias" onClick={(event) => handleClick(event, 'experiencias')}>Experiências</a></li>
                    <li><a className="nav-link" href="#formacao" onClick={(event) => handleClick(event, 'formacao')}>Formação e Cursos</a></li>
                    <li><a className="nav-link" href="#competencias" onClick={(event) => handleClick(event, 'competencias')}>Competências e Idiomas</a></li>
                    <li><a className="nav-link" href="#portifolio-web" onClick={(event) => handleClick(event, 'portifolio-web')}>Portfólio Web Design</a></li>
                    <li><a className="nav-link" href="#portifolio-games" onClick={(event) => handleClick(event, 'portifolio-games')}>Portfólio Game Design</a></li>
                </ul>
            </nav>
        </header>
    );
};
