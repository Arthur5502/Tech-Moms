import React, { useState } from 'react';
import '../../styles/CommunitySection.css';

const testimonials = [
  {
    name: 'Usuário Nome',
    role: 'Desenvolvimento',
    feedback: 'Texto Exemplo Texto Exemplo Texto Exemplo Texto Exemplo Texto Exemplo Texto Exemplo Texto Exemplo Texto Exemplo Texto Exemplo Texto Exemplo.',
    rating: 5,
  },
  {
    name: 'Usuário Nome',
    role: 'Designer',
    feedback: 'Texto Exemplo Texto Exemplo Texto Exemplo Texto Exemplo Texto Exemplo Texto Exemplo Texto Exemplo Texto Exemplo Texto Exemplo Texto Exemplo.',
    rating: 5,
  },
  {
    name: 'Usuário Nome',
    role: 'Software Engineer',
    feedback: 'Texto Exemplo Texto Exemplo Texto Exemplo Texto Exemplo Texto Exemplo Texto Exemplo Texto Exemplo Texto Exemplo Texto Exemplo Texto Exemplo.',
    rating: 5,
  },
  {
    name: 'Usuário Nome',
    role: 'Empresa',
    feedback: 'Texto Exemplo Texto Exemplo Texto Exemplo Texto Exemplo Texto Exemplo Texto Exemplo Texto Exemplo Texto Exemplo Texto Exemplo Texto Exemplo.',
    rating: 5,
  },
  {
    name: 'Usuário Nome',
    role: 'Contratante',
    feedback: 'Texto Exemplo Texto Exemplo Texto Exemplo Texto Exemplo Texto Exemplo Texto Exemplo Texto Exemplo Texto Exemplo Texto Exemplo Texto Exemplo.',
    rating: 5,
  },
];

const CommunitySection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="community-section">
      <h2>Faça parte <br /><strong>Da Nossa Comunidade</strong></h2>
      <div className="testimonial-wrapper">
        <button onClick={prevTestimonial} className="arrow-left">←</button>
        
        <div className="testimonial-content">
          <p className="feedback">“{testimonials[currentIndex].feedback}”</p>
         
        </div>
        
        <button onClick={nextTestimonial} className="arrow-right">→</button>
      </div>
      <div className="user-thumbnails">
        {testimonials.map((testimonial, index) => (
          <div key={index} className={`thumbnail ${index === currentIndex ? 'active' : ''}`}>
            <div className={`user-circle ${index === currentIndex ? 'active' : ''}`}></div>
            <div className="stars">
              {'★'.repeat(testimonial.rating)}
              {'☆'.repeat(5 - testimonial.rating)}
            </div>
            <p className={`name ${index === currentIndex ? 'active' : ''}`}>{testimonial.name}</p>
            <p className="role">{testimonial.role}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CommunitySection;