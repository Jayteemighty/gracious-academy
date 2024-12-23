import React from 'react';
import './Campus.css';
import campus_image from '../../assets/campus-image.png'; // Update with the correct path
import email_icon from '../../assets/email-icon.png'; // Update with the correct path
import whatsapp_icon from '../../assets/whatsapp-icon.png'; // Update with the correct path

const Campus = () => {
    return (
        <div className="campus-section">
            <div className="campus-left">
                <h3>Metodologia Gracious Academy</h3>
                <p>
                    A Gracious Academy possui uma das metodologias mais eficientes da atualidade. 
                    Ela consiste no método imersivo, ou seja: você mergulha de cabeça na cultura e no 
                    dia a dia de um país de língua inglesa e aprende do mesmo modo como aprendeu o português.
                </p>
                <h4>“SISTEMA NATURAL DE ENSINO”</h4>
                <ul>
                    <li>Inglês desde a primeira aula</li>
                    <li>Abordagem comunicativa</li>
                    <li>Sala de aula invertida</li>
                    <li>Exames Internacionais: Cambridge, Celta e Toefl</li>
                </ul>
                <p>Receba novidades da Gracious Academy em seu e-mail!</p>
                <div className="contact-options">
                    <button className="email-btn">
                        <img src={email_icon} alt="Email Icon" /> Enviar e-mail
                    </button>
                    <button className="whatsapp-btn">
                        <img src={whatsapp_icon} alt="WhatsApp Icon" /> Enviar WhatsApp
                    </button>
                </div>
            </div>
            <div className="campus-right">
                <img src={campus_image} alt="Campus" />
            </div>
        </div>
    );
};

export default Campus;
