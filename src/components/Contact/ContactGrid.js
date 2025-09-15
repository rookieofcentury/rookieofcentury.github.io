import React from 'react';
import styled from 'styled-components';
import ContactCard from './ContactCard';
import { FaGithub, FaEnvelope } from 'react-icons/fa';
import { SiNotion } from 'react-icons/si';

const GridWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin: 2rem 0;
`;

const iconMap = {
  github: FaGithub,
  email: FaEnvelope,
  notion: SiNotion,
};

const contacts = [
  { 
    title: '이메일', 
    info: 'youminenet@gmail.com',
    icon: 'email',
    url: 'mailto:youminenet@gmail.com'
  },
  { 
    title: 'Github', 
    info: 'github.com/rookieofcentury',
    icon: 'github',
    url: 'https://github.com/rookieofcentury'
  },
  { 
    title: 'Notion', 
    info: 'https://constsong.notion.site/Song-Hye-Eun-2ff064cf73b94d3dae7aaa08084ebf51',
    icon: 'notion',
    url: 'https://constsong.notion.site/Song-Hye-Eun-2ff064cf73b94d3dae7aaa08084ebf51'
  },
];

const ContactGrid = () => (
  <GridWrapper>
    {contacts.map(( contact, index ) => (
      <ContactCard key={index} contact={contact} IconComponent={iconMap[contact.icon]} />
    ))}
  </GridWrapper>
);

export default ContactGrid;