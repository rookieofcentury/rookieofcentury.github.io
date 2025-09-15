import React from 'react';
import styled from 'styled-components';
import { MdFileDownload } from 'react-icons/md';

const FileDownload = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 12px 24px;
  background-color: #d1d5db;
  color: #333333;
  font-weight: 500;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  
  &:hover {
    background-color: #9ca3af;
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
    transform: scale(1.05);
  }
  
  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(156, 163, 175, 0.5);
  }
`;

const Download = ({ 
  resumeUrl, 
  fileName,
  buttonText
}) => {
  const handleDownload = () => {
    try {
      const link = document.createElement('a');
      link.href = resumeUrl;
      link.download = fileName;
      link.target = '_blank';
      
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      
      console.log('다운로드 시작');
    } catch (error) {
      console.error('다운로드 중 오류 발생:', error);
      alert('다운로드에 실패했습니다. 다시 시도해 주세요.');
    }
  };

  return (
    <FileDownload onClick={handleDownload}>
      <MdFileDownload iconSize="24"/>
      {buttonText}
    </FileDownload>
  );
};

export default Download;