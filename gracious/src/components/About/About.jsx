import React from 'react'
import './About.css'
import about_img from '../../assets/about2.png'
import play_icon from '../../assets/play-icon.png'

const About = ({setPlayState}) => {
  return (
    <div className='about'>
        <div className="about-left">
            <img src={about_img} alt="" className='about-img'/>
            <img src={play_icon} alt="" className='play-icon' onClick={()=>{setPlayState(true)}}/>
        </div>
        <div className="about-right">
            <h3>SOBRE A GRACIOUS ACADEMY</h3>
            <h2>Preparando os Líderes de Amanhã Hoje</h2>
            <p>Embarque em uma jornada educacional transformadora com os programas abrangentes de nossa universidade. Nosso currículo inovador foi projetado para capacitar os alunos com o conhecimento, as habilidades e as experiências necessárias para se destacarem no dinâmico campo da educação.</p>
            <p>Com foco em inovação, aprendizado prático e mentoria personalizada, nossos programas preparam futuros educadores para causar um impacto significativo nas salas de aula, nas escolas e nas comunidades.</p>
            <p>Se você deseja se tornar professor, administrador, orientador ou líder educacional, nossa ampla gama de programas oferece o caminho ideal para alcançar seus objetivos e liberar todo o seu potencial na formação do futuro da educação.</p>
        </div>
      
    </div>
  )
}

export default About
