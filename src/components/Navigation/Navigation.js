import React from 'react';
import styled from 'styled-components';

const NavigationBar = styled.div`
  position: fixed;
  right: 2rem;
  top: 50%;
  transform: translateY(-50%);
  z-index: 50;
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(10px);
  border-radius: 50px;
  padding: 1.5rem 1rem;
  border: 1px solid #E0E0E0;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
`;

const NavButton = styled.button`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  border: none;
  margin: 0.5rem 0;
  display: block;
  transition: all 0.3s ease;
  background-color: ${props => props.active ? '#2E6747' : '#CCCCCC'};
  transform: ${props => props.active ? 'scale(1.3)' : 'scale(1)'};
  box-shadow: ${props => props.active ? '0 0 10px #779D82' : 'none'};
  cursor: pointer;
  
  &:hover {
    background-color: #2E6747;
    transform: scale(1.2);
  }
`;

const Navigation = ({ activeSection, onSectionClick }) => {
  const sections = [
    { id: 'hero', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <NavigationBar>
      <nav style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
        {sections.map((section) => (
          <NavButton
            key={section.id}
            active={activeSection === section.id}
            onClick={() => onSectionClick(section.id)}
            title={section.label}
          />
        ))}
      </nav>
    </NavigationBar>
  );
};

export default Navigation;