import React from 'react'
import './Programs.css'

const coursesData = [
    {
        category: "Cursos de Inglês",
        courses: [
            { name: "TOP SUMMIT", description: "Para adolescentes e adultos com nível intermediário ou avançado." },
            { name: "DYNAMIC", description: "Para iniciantes com ênfase em conversação, leitura e escrita." },
            { name: "GOLD", description: "Curso intensivo para quem já tem noção do idioma." },
            { name: "GRACIOUS KIDS", description: "Curso de inglês divertido para crianças." }
        ]
    },
    {
        category: "TI / Tecnologia da Informação",
        courses: [
            { name: "AutoCAD", description: "Ferramenta para projetos mecânicos e plantas." },
            { name: "Construct", description: "Criação de jogos usando programação visual." },
            { name: "Robótica", description: "Curso multidisciplinar de programação e eletrônica." },
            { name: "Informática Kids", description: "Curso para crianças de 8 a 11 anos, focado em tecnologia." },
            { name: "Informática Avançado", description: "Curso avançado para otimizar produtividade digital." }
        ]
    },
    {
        category: "Gestão Empresarial e RH",
        courses: [
            { name: "Recursos Humanos", description: "Treinamento para gestão e desenvolvimento de talentos." }
        ]
    },
    {
        category: "Aulas Complementares",
        courses: [
            { name: "SONG", description: "Aulas de conversação através de músicas." },
            { name: "MOVIE", description: "Aulas de interação baseadas em filmes." },
            { name: "AULA ESPECIAL", description: "Aulas especiais para integração de alunos." }
        ]
    },
    {
        category: "Espanhol",
        courses: [
            { name: "Curso de Espanhol", description: "Desenvolva habilidades e técnicas de leitura e gramática." }
        ]
    }
];

const Programs = () => {
    return (
        <div className='programs'>
            {coursesData.map((category, index) => (
                <div key={index} className="course-category">
                    <h2>{category.category}</h2>
                    <div className="course-list">
                        {category.courses.map((course, idx) => (
                            <div key={idx} className="program">
                                <div className="caption">
                                    <h3>{course.name}</h3>
                                    <p>{course.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Programs;
