import React from 'react';
import styled from 'styled-components';

export const Container = styled.div`
  background-color: #ffffff;
  color: #333333;
  min-height: 100vh;
  font-family: 'Arial', sans-serif;
`;

export const Section = styled.section`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 4rem;
  
  @media (max-width: 768px) {
    padding: 0 2rem;
  }
`;

export const SectionContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
`;

export const Title = styled.h2`
  font-size: 3rem;
  font-weight: bold;
  margin-bottom: 2rem;
  color: #779D82;
  
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

export const Text = styled.span`
  color: #779D82;
  font-weight: bold;
`;

export const PrimaryButton = styled.button`
  padding: 1rem 2rem;
  background-color: #779D82;
  color: white;
  border: none;
  border-radius: 50px;
  font-weight: 600;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: #2E6747;
    transform: translateY(-2px);
    box-shadow: 0 5px 15px #779D82;
  }
`;

export const SecondaryButton = styled.button`
  padding: 1rem 2rem;
  background-color: transparent;
  color: #779D82;
  border: 2px solid #779D82;
  border-radius: 50px;
  font-weight: 600;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: #2E6747;
    border: 2px solid #2E6747;
    color: white;
    transform: translateY(-2px);
    box-shadow: 0 5px 15px #779D82;
  }
`;