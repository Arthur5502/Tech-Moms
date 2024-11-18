import React, { useState, useRef } from 'react';
import '../../styles/DashboardUsuario/UserProfile.css';

const UserProfile = () => {
  const [selectedSkills, setSelectedSkills] = useState([]);
  const [textFormat, setTextFormat] = useState({ bold: false, italic: false, underline: false, fontFamily: 'Arial' });
  const [daysAvailable, setDaysAvailable] = useState([]);
  const [availableCount, setAvailableCount] = useState(0);
  const [userName] = useState("Nome Sobrenome");
  const textAreaRef = useRef(null);

  const skills = [
    "JavaScript", "Python", "Java", "C++", "SQL", "HTML", "CSS", "React", "Node.js", 
    "Ruby", "Go", "Swift", "Kotlin", "PHP", "TypeScript", "C#", "Rust", "Scala", 
    "Communication", "Problem-solving", "Teamwork", "Leadership", "Time Management", 
    "Critical Thinking", "Adaptability", "Creativity", "Attention to Detail", 
    "Project Management", "Data Analysis", "Machine Learning", "Cloud Computing", 
    "Cybersecurity", "DevOps", "Agile Methodologies", "UI/UX Design", "Graphic Design", 
    "Digital Marketing", "SEO", "Content Creation", "Public Speaking", "Negotiation", 
    "Conflict Resolution", "Customer Service", "Sales", "Financial Analysis", 
    "Accounting", "Business Strategy", "Product Management", "Software Development", 
    "Network Administration", "Database Management", "Technical Writing", "Research", 
    "Teaching", "Training", "Coaching", "Mentoring", "Event Planning", "Human Resources", 
    "Legal Compliance", "Risk Management", "Supply Chain Management", "Operations Management"
  ];

  const toggleSkill = (skill) => {
    setSelectedSkills(prev => prev.includes(skill) ? prev.filter(s => s !== skill) : [...prev, skill]);
  };

  const toggleFormat = (type) => {
    setTextFormat(prev => ({ ...prev, [type]: !prev[type] }));
    applyTextFormat(type);
  };

  const applyTextFormat = (type) => {
    const textarea = textAreaRef.current;
    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const selectedText = textarea.value.substring(start, end);
    let formattedText;

    switch (type) {
      case 'bold':
        formattedText = `<b>${selectedText}</b>`;
        break;
      case 'italic':
        formattedText = `<i>${selectedText}</i>`;
        break;
      case 'underline':
        formattedText = `<u>${selectedText}</u>`;
        break;
      default:
        formattedText = selectedText;
    }

    textarea.setRangeText(formattedText, start, end, 'end');
  };

  const handleFontChange = (e) => {
    setTextFormat({ ...textFormat, fontFamily: e.target.value });
  };

  const handleDaySelect = (day) => {
    setDaysAvailable(prev => prev.includes(day) ? prev.filter(d => d !== day) : [...prev, day]);
    setAvailableCount(prev => daysAvailable.includes(day) ? prev - 1 : prev + 1);
  };

  return (
    <div className="perfil-container">
      <div className="perfil-header">
        <h1>Seu perfil</h1>
        <button className="salvar-button">Salvar</button>
      </div>
      <div className="perfil-content">
        <div className="resumo-container">
          <h2>Resumo</h2>
          <div className="habilidades-section">
            <h3>Habilidades</h3>
            <div className="habilidades-list">
              {skills.map((skill, index) => (
                <div
                  key={index}
                  className={`habilidade ${selectedSkills.includes(skill) ? 'habilidade-active' : ''}`}
                  onClick={() => toggleSkill(skill)}
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>
          <div className="resumo-profissional">
            <h3>Resumo Profissional</h3>
            <div className="editor-toolbar">
              <select onChange={handleFontChange}>
                <option value="Arial">Arial</option>
                <option value="Times New Roman">Times New Roman</option>
                <option value="Courier New">Courier New</option>
                <option value="Georgia">Georgia</option>
                <option value="Verdana">Verdana</option>
              </select>
              <button onClick={() => toggleFormat('bold')} className={textFormat.bold ? 'active' : ''}>B</button>
              <button onClick={() => toggleFormat('italic')} className={textFormat.italic ? 'active' : ''}>I</button>
              <button onClick={() => toggleFormat('underline')} className={textFormat.underline ? 'active' : ''}>U</button>
            </div>
            <textarea
              ref={textAreaRef}
              className="editor-textarea"
              style={{
                fontFamily: textFormat.fontFamily,
                fontWeight: textFormat.bold ? 'bold' : 'normal',
                fontStyle: textFormat.italic ? 'italic' : 'normal',
                textDecoration: textFormat.underline ? 'underline' : 'none',
              }}
              placeholder="Escreva seu resumo profissional"
            />
          </div>
        </div>
        <div className="perfil-visualizacao">
          <h3>Visualização do seu Perfil</h3>
          <div className="perfil-info">
            <div className="perfil-nome">{userName}</div>
            <input type="file" accept="image/png" className="escolher-img" />
          </div>
          <div className="horarios-disponiveis">
            <h3>Horários Disponíveis</h3>
            <p>Disponível em {availableCount} de 7</p>
            <div className="dias-semana">
              {['seg', 'ter', 'qua', 'qui', 'sex', 'sab', 'dom'].map((dia, index) => (
                <div
                  key={index}
                  className={`dia ${daysAvailable.includes(dia) ? 'dia-active' : ''}`}
                  onClick={() => handleDaySelect(dia)}
                >
                  {dia}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;