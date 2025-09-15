import React from 'react';
import styled from 'styled-components';
import { Title, Section, SectionContent, PrimaryButton } from '../../styles/CommonStyles';
import ContactGrid from './ContactGrid';

const ContactSection = styled(Section)`
  background-color: #f8f9fa;
  text-align: center;
`;

const ContactDescription = styled.p`
  font-size: 1.2rem;
  color: #666666;
  margin-bottom: 2rem;
`;

const Contact = () => {
  return (
    <ContactSection id="contact">
      <SectionContent>
        <Title>Contact</Title>
        <ContactDescription>
          새로운 프로젝트나 협업 기회에 관심이 있으시다면 언제든 연락주세요!
        </ContactDescription>
        <ContactGrid />
      </SectionContent>
    </ContactSection>
  );
};

export default Contact;