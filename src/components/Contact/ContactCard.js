import React from 'react';
import styled from 'styled-components';

const CardWrapper = styled.div`
  background-color: white;
  padding: 2rem;
  border-radius: 30px;
  box-shadow: 0 5px 25px rgba(0, 0, 0, 0.1);
  max-width: 10%;
`;

const ContactTitle = styled.h3`
  color: #007bff;
  font-weight: bold;
  margin-bottom: 0.5rem;
`;

const ContactInfo = styled.p`
  color: #666666;
`;

const ContactCard = ({ contact, IconComponent }) => {
  return (
    <CardWrapper>
      <a href={contact.url} target="_blank" rel="noopener noreferrer">
        <IconComponent size={24} color="#779D82" />
      </a>
    </CardWrapper>
  );
};

export default ContactCard;