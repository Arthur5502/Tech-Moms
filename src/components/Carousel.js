import React from 'react';
import { motion } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';
import '../styles/Carousel.css';

const Caroussel = [
    { title: 'Serviço 1', description: 'Descrição 1', icon: '🔧' },
    { title: 'Serviço 2', description: 'Descrição 2', icon: '💻' },
    { title: 'Serviço 3', description: 'Descrição 3', icon: '🚀' },
];

const Carousel = () => {
    const carousel = useRef();
    const[width, setWidth] = useState(0);
    useEffect(() => {
    setWidth(carousel.current?.scrollWidth - carousel.current?.offsetWidth);
    }, [])
    return (
        <div className="teste">
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
                <p>{item.description}</p>
                </motion.div>
            ))}
             </motion.div>  
            </motion.div>
            </div>
    );
};
export default Carousel;