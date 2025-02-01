import React, { useState } from "react";
import meImage from "../../img/Me.jpg";
import "./Contatos.css";

export const Contatos = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Configuração de envio de e-mail usando `mailto`
    const formData = new FormData(e.target);
    const name = formData.get("name");
    const email = formData.get("email");
    const message = formData.get("message");

    const mailtoLink = `mailto:guilherme_vinicius14@live.com?subject=Mensagem de ${name}&body=${encodeURIComponent(
      `${message}`
    )}`;

    window.location.href = mailtoLink;
  };

  return (
    <section id="contato" className="contato">
      <div className="container">
        <img className="myPic" src={meImage} alt="minha foto" />
        <ul>
          <li>
            <i className="material-icons">phone</i>
            Telefone: <a href="tel:+5541996540366"> +55 41 9965-40366</a>
          </li>
          <li>
            <i className="material-icons">pin_drop</i>Localização: Curitiba,
            Paraná
          </li>
          <li>
            <i className="material-icons">cake</i>Data de Nascimento: 31/05/1991
          </li>
          <li>
            <i className="material-icons">man</i>Estado Civil: Solteiro
          </li>
          <li className="contact-social">
            <a
              href="https://www.linkedin.com/in/guilherme-vinicius-santana"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                width="38"
                height="38"
                src="https://img.icons8.com/color/48/linkedin.png"
                alt="linkedin"
              />
            </a>
            <a
              href="https://github.com/GuilhermeSant"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                width="30"
                height="30"
                src="https://img.icons8.com/external-tal-revivo-shadow-tal-revivo/24/external-github-community-for-software-building-and-testing-online-logo-shadow-tal-revivo.png"
                alt="external-github-community-for-software-building-and-testing-online-logo-shadow-tal-revivo"
              />
            </a>
            <a
              href="https://gamejolt.com/@RazorGuilherme/games"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                width="38"
                height="38"
                src="https://img.icons8.com/plasticine/100/gamejolt.png" 
                alt="gamejolt"
              />
            </a>
          </li>
        </ul>
      </div>
      <div className="contact-container">
      <span className="hover-text">Entre em contato !!!</span>
      <button className="contact-button" onClick={toggleModal}>
        Contato
      </button>
      </div>

      {isModalOpen && (
        <div className="modal-overlay" onClick={toggleModal}>
          <div
            className="modal"
            onClick={(e) => e.stopPropagation()} // Evita fechar ao clicar no modal
          >
            <button className="close-button" onClick={toggleModal}>
              &times;
            </button>
            <h2>Entre em contato</h2>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Nome</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="seu nome"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="seu-email@mail.com"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="message">Mensagem</label>
                <textarea
                  className="message"
                  id="message"
                  name="message"
                  placeholder="Ola Guilherme, gostaria de falar sobre..."
                  rows="5"
                  required
                />
              </div>
              <button type="submit" className="send-button">
                Enviar
              </button>
            </form>
          </div>
        </div>
      )}
    </section>
  );
};
