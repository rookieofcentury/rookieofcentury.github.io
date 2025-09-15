import React, { useState, useEffect } from 'react';
import { Text } from '../../styles/CommonStyles';
import styled, { keyframes } from 'styled-components';

const blink = keyframes`
  0%, 50% { 
    opacity: 1; 
  }
  51%, 100% { 
    opacity: 0; 
  }
`;

const Cursor = styled.span`
  color: #333333;
  margin-left: 4px;
  font-weight: normal;
  animation: ${blink} 1s infinite;
`;

const Typewriter = () => {
  const words = ['Web', 'FrontEnd', 'BackEnd', 'Java', 'React', 'JavaScript', 'Salesforce'];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150);

  useEffect(() => {
    const currentWord = words[currentWordIndex];
    
    const timer = setTimeout(() => {
      if (!isDeleting) {
        if (currentText.length < currentWord.length) {
          setCurrentText(currentWord.slice(0, currentText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 1500);
        }
      } else {
        if (currentText.length > 0) {
          setCurrentText(currentText.slice(0, -1));
          setTypingSpeed(75);
        } else {
          setIsDeleting(false);
          setCurrentWordIndex((prev) => (prev + 1) % words.length);
          setTypingSpeed(150);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentWordIndex, words, typingSpeed]);

  return (
    <Text> {currentText}<Cursor>|</Cursor> </Text>
  );
};

export default Typewriter;