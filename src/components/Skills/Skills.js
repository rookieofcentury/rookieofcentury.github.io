import React, { useState, useEffect } from 'react';
import styled, { keyframes, createGlobalStyle } from 'styled-components';
import { 
  FaReact, 
  FaJs, 
  FaNodeJs, 
  FaHtml5, 
  FaCss3Alt, 
  FaFigma,
  FaGithub,
  FaBootstrap,
  FaSalesforce,
  FaJava,
  FaPython
} from 'react-icons/fa';
import { 
  SiJquery,
  SiSpring, 
  SiOracle,
  SiMongodb, 
  SiAdobe,
  SiSpringboot,
  SiTailwindcss
} from 'react-icons/si';
import { 
  GrMysql 
} from 'react-icons/gr';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  body {
    font-family: 'Arial', sans-serif;
    background: #779D82;
    overflow-x: hidden;
  }
`;

const float = keyframes`
  0%, 100% { transform: translate(0, 0) rotate(0deg); }
  25% { transform: translate(10px, -15px) rotate(2deg); }
  50% { transform: translate(-5px, -10px) rotate(-1deg); }
  75% { transform: translate(-10px, 5px) rotate(1deg); }
`;

const Container = styled.div`
  height: 100vh;
  max-height: 100vh;
  background: linear-gradient(135deg, #779D82 0%, #6B8E73 100%);
  position: relative;
  overflow: hidden;
`;

const FilterContainer = styled.div`
  position: relative;
  z-index: 1000;
  display: flex;
  justify-content: center;
  gap: 15px;
  padding: 30px 0 20px 0;
`;

const FilterButton = styled.button`
  background: ${props => props.active ? 'rgba(255, 255, 255, 0.9)' : 'rgba(255, 255, 255, 0.2)'};
  color: ${props => props.active ? '#779D82' : '#fff'};
  border: 2px solid rgba(255, 255, 255, 0.3);
  padding: 12px 20px;
  border-radius: 30px;
  cursor: pointer;
  transition: all 0.3s ease;
  font-size: 14px;
  font-weight: 500;
  backdrop-filter: blur(10px);
  min-width: 100px;
  
  &:hover {
    background: rgba(255, 255, 255, 0.8);
    color: #779D82;
    border-color: rgba(255, 255, 255, 0.5);
    transform: translateX(5px);
  }
`;

const MainContent = styled.main`
  position: relative;
  min-height: 100vh;
  padding: 40px;
`;

const BackgroundOrbs = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 1;
`;

const BackgroundOrb = styled.div`
  position: absolute;
  width: ${props => props.size}px;
  height: ${props => props.size}px;
  background: rgba(255, 255, 255, 0.15);
  border-radius: 50%;
  animation: ${float} ${props => props.duration}s infinite linear;
  animation-delay: ${props => props.delay}s;
  backdrop-filter: blur(5px);
`;

const SkillsContainer = styled.div`
  position: relative;
  z-index: 10;
  width: 100%;
  height: calc(100vh - 80px);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 40px;
  transform: translateY(-80px);
`;

const SkillOrb = styled.div`
  position: absolute;
  width: ${props => props.size}px;
  height: ${props => props.size}px;
  background: ${props => props.color};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.5s ease;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
  transform: translate(${props => props.x}px, ${props => props.y}px) ${props => props.visible ? 'scale(1)' : 'scale(0.7)'};
  opacity: ${props => props.visible ? 1 : 0.2};
  filter: ${props => props.visible ? 'blur(0px)' : 'blur(3px)'};
  
  &:hover {
    transform: translate(${props => props.x}px, ${props => props.y}px) scale(${props => props.visible ? 1.15 : 0.75});
    box-shadow: 0 15px 40px rgba(0, 0, 0, 0.4);
    z-index: 100;
  }
  
  svg {
    font-size: ${props => props.size * 0.4}px;
    color: white;
    filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.3));
  }
`;

const SkillLabel = styled.div`
  position: absolute;
  bottom: -20px;
  left: 50%;
  transform: translateX(-50%);
  color: white;
  font-size: 12px;
  font-weight: 500;
  white-space: nowrap;
  opacity: 0;
  transition: opacity 0.3s ease;
  
  ${SkillOrb}:hover & {
    opacity: 1;
  }
`;

const skills = [
  // Frontend
  { name: 'React', icon: FaReact, color: '#61DAFB', category: 'frontend', size: 80, x: 0, y: -50 },
  { name: 'JavaScript', icon: FaJs, color: '#F7DF1E', category: 'frontend', size: 70, x: -120, y: 20 },
  { name: 'Salesforce', icon: FaSalesforce, color: '#3178C6', category: 'frontend', size: 60, x: 120, y: 30 },
  { name: 'Bootstrap', icon: FaBootstrap, color: '#4FC08D', category: 'frontend', size: 65, x: -80, y: -120 },
  { name: 'Jquery', icon: SiJquery, color: '#DD0031', category: 'frontend', size: 55, x: 80, y: -100 },
  { name: 'HTML5', icon: FaHtml5, color: '#E34F26', category: 'frontend', size: 50, x: -200, y: -20 },
  { name: 'CSS3', icon: FaCss3Alt, color: '#1572B6', category: 'frontend', size: 50, x: 200, y: -10 },
  { name: 'Tailwind', icon: SiTailwindcss, color: '#06B6D4', category: 'frontend', size: 45, x: -150, y: 80 },
  
  // Backend
  { name: 'Node.js', icon: FaNodeJs, color: '#339933', category: 'backend', size: 75, x: 0, y: 80 },
  { name: 'Java', icon: FaJava, color: '#3776AB', category: 'backend', size: 70, x: -60, y: 150 },
  { name: 'Python', icon: FaPython, color: '#4CAF50', category: 'backend', size: 55, x: 180, y: -80 },
  { name: 'Spring Framework', icon: SiSpring, color: '#4CAF50', category: 'backend', size: 60, x: 60, y: 140 },
  { name: 'Springboot', icon: SiSpringboot, color: '#336791', category: 'backend', size: 50, x: 120, y: 120 },
  
  // Database
  { name: 'Oracle', icon: SiOracle, color: '#F7B500', category: 'database', size: 60, x: 200, y: 50 },
  { name: 'MongoDB', icon: SiMongodb, color: '#47A248', category: 'database', size: 50, x: -120, y: 120 },
  { name: 'Mysql', icon: GrMysql, color: '#336791', category: 'database', size: 50, x: 120, y: -50 },
  
  // tools
  { name: 'Github', icon: FaGithub, color: '#F24E1E', category: 'tools', size: 50, x: 170, y: 100 },
  { name: 'Figma', icon: FaFigma, color: '#F24E1E', category: 'tools', size: 65, x: -180, y: 40 },
  { name: 'Adobe', icon: SiAdobe, color: '#FF0000', category: 'tools', size: 55, x: -140, y: -80 },
];

const Skills = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [backgroundOrbs, setBackgroundOrbs] = useState([]);

  useEffect(() => {
    const orbs = [];
    for (let i = 0; i < 25; i++) {
      orbs.push({
        id: i,
        size: Math.random() * 80 + 100,
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        duration: Math.random() * 25 + 15,
        delay: Math.random() * 8,
      });
    }
    setBackgroundOrbs(orbs);
  }, []);

  const filteredSkills = activeFilter === 'all' 
    ? skills 
    : skills.filter(skill => skill.category === activeFilter);

  const filters = [
    { key: 'all', label: '전체' },
    { key: 'frontend', label: 'Frontend' },
    { key: 'backend', label: 'Backend' },
    { key: 'database', label: 'Database' },
    { key: 'tools', label: 'Tools' },
  ];

  return (
    <>
      <GlobalStyle />
      <Container id="skills">
        <FilterContainer>
          {filters.map(filter => (
            <FilterButton
              key={filter.key}
              active={activeFilter === filter.key}
              onClick={() => setActiveFilter(filter.key)}
            >
              {filter.label}
            </FilterButton>
          ))}
        </FilterContainer>

        <MainContent>
          <BackgroundOrbs>
            {backgroundOrbs.map(orb => (
              <BackgroundOrb
                key={orb.id}
                size={orb.size}
                style={{ left: orb.x, top: orb.y }}
                duration={orb.duration}
                delay={orb.delay}
              />
            ))}
          </BackgroundOrbs>

          <SkillsContainer>
            {skills.map((skill, index) => {
              const Icon = skill.icon;
              const isVisible = activeFilter === 'all' || skill.category === activeFilter;
              
              return (
                <SkillOrb
                  key={skill.name}
                  size={skill.size}
                  color="#2E6747"
                  x={skill.x}
                  y={skill.y}
                  visible={isVisible}
                >
                  <Icon />
                  <SkillLabel>{skill.name}</SkillLabel>
                </SkillOrb>
              );
            })}
          </SkillsContainer>
        </MainContent>
      </Container>
    </>
  );
};

export default Skills;