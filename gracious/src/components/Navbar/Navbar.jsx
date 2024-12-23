import React,{useEffect, useState} from 'react'
import './Navbar.css'
import {Link} from 'react-scroll'
{/*import logo from '../../assets/logo.png'*/}
import menu_icon from '../../assets/menu-icon.png'
const Navbar = () => {
    const [sticky, setSticky] = useState(false);

    useEffect(()=>{
        window.addEventListener('scroll', ()=>{
            window.scrollY > 50 ? setSticky(true) : setSticky(false);
        })
    },[]);

    const [mobileMenu, setMobileMenu] = useState(false)
    const toggleMenu = () =>{
        mobileMenu ? setMobileMenu(false) : setMobileMenu(true);
    }

    return (
        <nav className= {`container ${sticky ? 'dark-nav': ''}`}>
            <img src='' alt="" className='logo' />
            <h1 className='name'>Gracious Academy</h1>
            <ul className={mobileMenu ? '' : 'hide-mobile-menu'}>
                <li><Link to='hero' smooth={true} offset={0} duration={500}>Início</Link></li>
                <li><Link to='program' smooth={true} offset={-260} duration={500}>Cursos</Link></li>
                <li><Link to='about' smooth={true} offset={-150} duration={500}>Sobre</Link></li>
                {/*<li><Link to='campus' smooth={true} offset={-260} duration={500}>Campus</Link></li>*/}
                <li><Link to='testimonials' smooth={true} offset={-260} duration={500}>Testimonials</Link></li>
                <li><Link to='contact' smooth={true} offset={-260} duration={500} className='btn'>Contate-nos</Link></li>
            </ul>
            <img src={menu_icon} alt="" className='menu-icon' onClick={toggleMenu}/>
        </nav>
    )
}

export default Navbar
