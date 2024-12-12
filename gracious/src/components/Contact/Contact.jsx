
import React from 'react';
import './Contact.css';
import msg_icon from '../../assets/msg-icon.png';
import mail_icon from '../../assets/mail-icon.png';
import phone_icon from '../../assets/phone-icon.png';
import location_icon from '../../assets/location-icon.png';
import white_arrow from '../../assets/white-arrow.png';

const Contact = () => {
    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);

        formData.append("access_key", "39585d4b-75be-4eef-8574-89f980365de0");

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (data.success) {
            setResult("Form Submitted Successfully");
            event.target.reset();
        } else {
            console.log("Error", data);
            setResult(data.message);
        }
    };

    
    return (
        <div className='contact'>
            <div className="contact-col">
                <h3>Envie-nos uma mensagem <img src={msg_icon} alt="" /></h3>
                <p>Sinta-se à vontade para entrar em contato através do formulário ou encontrar nossas informações de contato abaixo. Seus comentários, perguntas e sugestões são importantes para nós, enquanto nos esforçamos para fornecer um serviço excepcional à nossa comunidade universitária.</p>
                <ul>
                    <li><img src={mail_icon} alt="" />admin@graciousacademy.com.br</li>
                    <li><img src={phone_icon} alt="" />(11) 5835-2596</li>
                    {/*<li><img src={location_icon} alt="" />77 Massachusetts Ave, Cambridge<br /> MA 02139, United States</li>*/}
                </ul>
            </div>
            
            <div className="contact-col">
                <h3>Connect with us</h3>
                <div className="social-icons">
                    <a href="https://facebook.com/yourpage" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-facebook-f"></i>
                    </a>
                    <a href="https://instagram.com/yourpage" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-instagram"></i>
                    </a>
                    <a href="https://wa.me/yourwhatsapplink" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-whatsapp"></i>
                    </a>
                    <a href="https://youtube.com/yourchannel" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-youtube"></i>
                    </a>
                    <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-linkedin-in"></i>
                    </a>
                </div>
            </div>



            {/*<div className="contact-col">
                <form onSubmit={onSubmit}>
                    <label>Your name</label>
                    <input type="text" name='name' placeholder='Enter your name' required />
                    <label>Phone Number</label>
                    <input type="tel" name='phone' placeholder='Enter your mobile number' required />
                    <label>Write your messages here</label>
                    <textarea name="message" rows="6" placeholder='enter your message' required></textarea>
                    <button type='submit' className='btn dark-btn'>Submit now <img src={white_arrow} alt="" /></button>
                </form>
                <span>{result}</span>
            </div>*/}
            
        </div>
    )
}

export default Contact;
