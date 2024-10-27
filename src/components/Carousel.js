import React from 'react';
import {motion} from 'framer-motion';
import { useState, useEffect, useRef } from 'react';
import '../styles/Carousel.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers, faBookOpen, faStar, faEye, faComments, faAward } from '@fortawesome/free-solid-svg-icons';
const Caroussel = [
    { title: 'Networking e Comunidade', description: 'Uma plataforma para mães freelancers se conectarem, trocarem experiências e colaborarem em projetos.',
    icon: <FontAwesomeIcon icon={faUsers} />},
    { title: 'Tutoriais e Materiais', description: 'Fornecimento de recursos educativos, como modelos de portfólio e currículo, para ajudar mães iniciantes ou que estão retornando ao mercado.',
     icon: <FontAwesomeIcon icon={faBookOpen}/> },
    { title: 'Sistema de Pontos', description: 'Um sistema que recompensa mães por tarefas e projetos completados, aumentando sua visibilidade e nota avaliativa.',
    icon: <FontAwesomeIcon icon={faStar}/> },
    { title: 'Visibilidade de Portfólio', description: 'Oportunidades para mães demonstrarem suas habilidades através de tarefas práticas, facilitando a conexão com clientes.',
    icon: <FontAwesomeIcon icon={faEye}/> },
    { title: 'Feedback de Empresas', description: 'Implementação de um sistema que fornece feedback detalhado e métricas de desempenho, contribuindo para o sistema de pontos.', 
    icon: <FontAwesomeIcon icon={faComments}/> },
    { title: 'Reconhecimento Público', description: 'Destaque mensal para as mães mais ativas ou bem-sucedidas, aumentando sua visibilidade no mercado.',
    icon: <FontAwesomeIcon icon={faAward}/> },
];
const Carousel = () => {
    const carousel = useRef();
    const[width, setWidth] = useState(0);
    useEffect(() => {
    setWidth(carousel.current?.scrollWidth - carousel.current?.offsetWidth);
    }, [])
    return (
        <div className="teste">
            <h1 className="titulo">Serviços</h1>
            <motion.div ref={carousel} className="carousel" whileTap={{cursor: "grabbing"}}>
            <motion.div 
            className="inner" 
            drag="x"
            dragConstraints = {{right: 0, left: -width}}
            initial = {{x: 100}}
            animate = {{x: 0}}
            transition = {{duration: 0.8}}
            >
            {Caroussel.map((item, index) => (
                <motion.div className="item" key={index}>
                <span className="icon">
                {item.icon} 
                </span>
                <h1>{item.title}</h1>
                <p className="description">{item.description}</p>
                </motion.div>
            ))}
             </motion.div>  
            </motion.div>
            </div>
    ); 
};
export default Carousel;