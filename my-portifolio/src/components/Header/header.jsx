import './header.css';

export const Header = ({ onLinkClick }) => {
    const handleClick = (event, id) => {
        event.preventDefault();
        if (onLinkClick) {
            onLinkClick(id);
        }
    };

    return (
        <header>
            <h1 className="title level-item has-text-centered">Guilherme Vinicius Santana</h1>
            <nav>
                <ul>
                    <li>
                        <a href="#experiencias" onClick={(event) => handleClick(event, 'experiencias')}>
                            Experiências
                        </a>
                    </li>
                    <li>
                        <a href="#formacao" onClick={(event) => handleClick(event, 'formacao')}>
                            Formação e Cursos
                        </a>
                    </li>
                    <li>
                        <a href="#competencias" onClick={(event) => handleClick(event, 'competencias')}>
                            Competências e Idiomas
                        </a>
                    </li>
                    <li>
                        <a href="#portifolio-web" onClick={(event) => handleClick(event, 'portifolio-web')}>
                            Portfólio Web Design
                        </a>
                    </li>
                    <li>
                        <a href="#portifolio-games" onClick={(event) => handleClick(event, 'portifolio-games')}>
                            Portfólio Game Design
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    );
};