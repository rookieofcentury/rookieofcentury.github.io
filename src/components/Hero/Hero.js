import React from 'react';
import styled from 'styled-components';
import { Section, SectionContent, PrimaryButton, SecondaryButton } from '../../styles/CommonStyles';
import { LogoContainer, ThreeJSLogo } from '../../styles/ThreeJS';
import Download from '../../components/Download/Download';
import Typewriter from './TypeWriter';

const HeroSection = styled(Section)`
  text-align: center;
  background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
`;

const HeroTitle = styled.h2`
  font-size: 3rem;
  font-weight: bold;
  margin: 0;
  color: #333333;
  position: relative;
  display: inline-block;
  z-index: 1;
  
  &::after {
    content: '';
    position: absolute;
    bottom: 18px;
    left: 0;
    width: 100%;
    height: 20px;
    background-color: #779D82;
    z-index: -1;
    filter: blur(1px);
  }
  
  @media (max-width: 768px) {
    font-size: 3rem;
  }
`;

const HeroSubtitle = styled.p`
  font-size: 1.5rem;
  color: #666666;
  margin-bottom: 2rem;
  
  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-top: 2rem;
  
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const Hero = ({ onSectionClick }) => {
  return (
    <HeroSection id="hero">
      <SectionContent>
        {/* <ThreeJSLogo /> */}
        <HeroTitle>안녕하세요</HeroTitle>
        <HeroSubtitle>사용자가 우선인 <Typewriter /> 개발자, 송혜은입니다</HeroSubtitle>
        <Download resumeUrl='' fileName='Resume.pdf' buttonText='이력서 다운로드'/>
      </SectionContent>
    </HeroSection>
  );
};

export default Hero;