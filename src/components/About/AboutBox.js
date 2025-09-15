import React from 'react';
import styled from 'styled-components';

const CardContainer = styled.div`
  background: white;
  border-radius: 12px;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  padding: 24px;
  max-width: 320px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const IconWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 16px;
  
  svg {
    width: 48px;
    height: 48px;
    color: ${props => props.iconColor || '#3b82f6'};
  }
`;

const Title = styled.h3`
  font-size: 18px;
  font-weight: bold;
  color: #1f2937;
  text-align: center;
  margin-bottom: 16px;
  line-height: 1.4;
`;

const Description = styled.p`
  font-size: 14px;
  color: #6b7280;
  text-align: center;
  line-height: 1.6;
`;

const Highlight = styled.span`
  color: #779D82;
  font-weight: 600;
`;

const AboutBox = ({ icon, iconColor, title, description }) => {
  // *텍스트* 형태를 파싱해서 Highlight 컴포넌트로 감싸기
  const parseDescription = (text) => {
    if (!text) return '';
    const parts = text.split(/(\*[^*]+\*)/g);
    return parts.map((part, index) => {
      if (part.startsWith('*') && part.endsWith('*')) {
        return <Highlight key={index}>{part.slice(1, -1)}</Highlight>;
      }
      return part;
    });
  };

  return (
    <CardContainer>
      <IconWrapper iconColor={iconColor}>
        {icon}
      </IconWrapper>
      
      <Title>{title}</Title>
      
      <Description>
        {parseDescription(description)}
      </Description>
    </CardContainer>
  );
};

export default AboutBox;