import React, { useEffect } from 'react';
import styled, { keyframes, css } from 'styled-components';
import ProjectSwiper from '../common/Swiper.js';

// 애니메이션 정의
const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const slideUp = keyframes`
  from {
    transform: translateY(50px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`;

const fadeOut = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`;

const slideDown = keyframes`
  from {
    transform: translateY(0);
    opacity: 1;
  }
  to {
    transform: translateY(50px);
    opacity: 0;
  }
`;

// 스타일 컴포넌트
const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  animation: ${props => props.closing ? fadeOut : fadeIn} 0.3s ease;
`;

const ModalContent = styled.div`
  background: white;
  border-radius: 16px;
  max-width: 800px;
  width: 90%;
  max-height: 80vh;
  overflow-y: auto;
  animation: ${props => props.closing ? slideDown : slideUp} 0.3s ease;
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
`;

const ModalHeader = styled.div`
  padding: 2rem;
  border-bottom: 1px solid #e5e7eb;
`;

const ModalTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 600;
  color: #1f2937;
  margin: 1rem 0 0.5rem 0;
`;

const ModalSubtitle = styled.p`
  color: #6b7280;
  margin: 0;
  font-size: 0.875rem;
`;

const ModalBody = styled.div`
  padding: 2rem;
`;

const TechStack = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin: 1rem 0;
`;

const TechTag = styled.span`
  background: #779D82;
  color: #ffffff;
  padding: 0.25rem 0.75rem;
  border-radius: 20px;
  font-size: 0.875rem;
  font-weight: 500;
`;

const Description = styled.p`
  color: #4b5563;
  line-height: 1.6;
  margin-bottom: 2rem;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  color: #6b7280;
  padding: 0.5rem;
  border-radius: 50%;
  transition: all 0.2s ease;
  z-index: 99999;
  
  &:hover {
    background: #f3f4f6;
    color: #1f2937;
  }
`;

const ProjectImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 8px;
  margin: 1rem 0;
`;

const LinkButton = styled.a`
  display: inline-block;
  background: #6b9080;
  color: white;
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  text-decoration: none;
  font-weight: 500;
  transition: background 0.2s ease;
  margin-right: 1rem;
  margin-top: 1rem;
  cursor: pointer;
  
  &:hover {
    background: #5a7c6f;
  }
`;

const Modal = ({ isOpen, onClose, project }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <ModalOverlay onClick={onClose}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <CloseButton onClick={onClose}>×</CloseButton>
        
        <ModalHeader>
          <ProjectSwiper images={project?.images} title={project?.title} />
          <ModalTitle>
            {project?.title || '프로젝트 제목'}
          </ModalTitle>
          <ModalSubtitle>
            {project?.summary || '프로젝트 설명'}
          </ModalSubtitle>
        </ModalHeader>

        <ModalBody>
          {project?.image && (
            <ProjectImage src={project.image} alt={project.title} />
          )}
          
          <Description>
            {project?.note || '프로젝트에 대한 자세한 설명이 여기에 들어갑니다.'}
          </Description>

          {project?.skills && project.skills.length > 0 && (
            <>
              <h3 style={{ color: '#1f2937', fontSize: '1.1rem', marginBottom: '0.5rem' }}>
                기술 스택
              </h3>
              <TechStack>
                {project.skills.map((tech, index) => (
                  <TechTag key={index}>{tech}</TechTag>
                ))}
              </TechStack>
            </>
          )}

          {project?.links && (
            <LinkButton href={project.links.github} target="_blank" rel="noopener noreferrer">
              GitHub 보기
            </LinkButton>
          )}
        </ModalBody>
      </ModalContent>
    </ModalOverlay>
  );
};

export default Modal;