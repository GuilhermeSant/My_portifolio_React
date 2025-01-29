export const PortifolioWeb = () => {
    return (
        <>
            <section>
                    <div className="container-projects">
                        <a href="https://guilhermesant.github.io/Jane-Doe-Git/index.html" target="_blank" rel="noopener noreferrer">
                            <img 
                                src="./img/jane_doe.png" 
                                alt="Site Jane-Doe-Git" 
                                style={{ height: '300px', width: '500px' }} 
                                className="port-img" 
                            />
                        </a>
                        <h3>
                            Site com home e links funcionais e página responsiva, 
                            com links de YouTube e Google Maps para endereço fictício.
                            <p>Link no GitHub: 
                                <a href="https://github.com/GuilhermeSant/Jane-Doe-Git" target="_blank" rel="noopener noreferrer"> 
                                    https://github.com/GuilhermeSant/Jane-Doe-Git
                                </a>
                            </p>
                            <p>Clique na imagem para visitar o site!</p>
                        </h3>
                    </div>
                    {/* Outros projetos Web */}
                    <div className="container-projects">
                        <a href="https://guilhermesant.github.io/Netflix-clone/" target="_blank" rel="noopener noreferrer">
                            <img 
                                src="./img/netflix-clone.png" 
                                alt="Site Netflix-clone" 
                                className="port-img" 
                            />
                        </a>
                        <h3>
                            Site feito no curso de front-end da Digital House replicando tela de login da Netflix com HTML e CSS.
                            <p>Link no GitHub: 
                                <a href="https://github.com/GuilhermeSant/Netflix-clone" target="_blank" rel="noopener noreferrer"> 
                                    https://github.com/GuilhermeSant/Netflix-clone
                                </a>
                            </p>
                            <p>Clique na imagem para visitar o site!</p>
                        </h3>
                    </div>
                    <div className="container-projects">
                        <a href="https://guilhermesant.github.io/disneyplus-clone/" target="_blank" rel="noopener noreferrer">
                            <img 
                                src="./img/disney-clone.png" 
                                alt="Site Disneyplus-clone" 
                                className="port-img" 
                            />
                        </a>
                        <h3>
                            Projeto de clone do site Disney Plus feito na Digital House com HTML e CSS.
                            <p>Link no GitHub: 
                                <a href="https://github.com/GuilhermeSant/disneyplus-clone" target="_blank" rel="noopener noreferrer"> 
                                    https://github.com/GuilhermeSant/disneyplus-clone
                                </a>
                            </p>
                            <p>Clique na imagem para visitar o site!</p>
                        </h3>
                    </div>
            </section>
        </>
    );
};
