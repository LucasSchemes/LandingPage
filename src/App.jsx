import React from 'react'
import './App.css'   // mantém só esse CSS
import './buttons.css' // importa o CSS dos botões
import './header.css'  // importa o CSS do header
import './footer.css'  // importa o CSS do footer
import { FaPhone, FaInstagram, FaEnvelope } from "react-icons/fa";


function App() {
    return (
        <>
            <header className="header">
                <h1 className="logo">Minha landing page</h1>
                <nav>
                    <ul className="nav-links">
                        <li><a href="#home">Home</a></li>
                        <li><a href="#sobre">Sobre</a></li>
                    </ul>
                </nav>
            </header>

            <main id="home" className="home">
                <div className="hero">
                    <img
                        src="fotominha.jpg"   // <-- coloca tua foto aqui dentro de /public
                        alt="Foto de perfil"
                        className="foto-perfil"
                    />
                    <h2>Lucas Saft Schemes</h2>
                    <p> Estudante de Engenharia de Computação | Desenvolvedor Front-End </p>
                    <div className="hero-buttons">
                        <a href="https://github.com/LucasSchemes" className="btn" target='_blank'>GitHub</a>
                        <a href="https://www.linkedin.com/in/lucas-schemes-55a6692b1/" target='_blank' className="btn">Linkedin</a>
                    </div>
                </div>

            </main >
            <div style={{ height: '50px' }}></div> {/* Espaço entre seções */}
            <section id="sobre" className="sobre">

                <h2>Sobre mim</h2>
                <p>
                    Olá! Meu nome é Lucas, tenho 20 anos e estudo Engenharia de Computação na Universidade Federal de Santa Catarina. Essa é uma landing page simples que criei para colocar em prática meus conhecimentos de HTML, CSS e JavaScript/React. </p>
                <p>
                    Tenho interesse em criar projetos que unam design moderno com funcionalidade, entregando experiências
                    simples e objetivas, para assim me tornar um ótimo desenvolvedor front-end.
                </p>
                <p>
                    Estou sempre buscando aprender novas tecnologias e aprimorar minhas habilidades, então sinta-se à vontade para
                    entrar em contato comigo tanto no Linkedin e GitHub quanto por e-mail ou telefone.
                </p>


            </section >
            <footer id="contato" className="footer">
                <h2>Contato</h2>
                <p>Entre em contato comigo pelos canais abaixo:</p>

                <ul className="footer-links">
                    <li>
                        <FaEnvelope className="icon" />
                        <a href="mailto:lucas.schemes04@gmail.com"> lucas.schemes04@gmail.com
                        </a>
                    </li>
                    <li>
                        <FaPhone className="icon" />
                        <a href="tel:+5551999862557"> (51) 99986-2557</a>
                    </li>
                    <li>
                        <FaInstagram className="icon" />
                        <a href="https://instagram.com/lucas_schemes" target="_blank">  lucas_schemes

                        </a>
                    </li>
                </ul>

                <p className="copy">
                    © {new Date().getFullYear()} Lucas — Todos os direitos reservados
                </p>
            </footer>

        </>
    )
}

export default App;
