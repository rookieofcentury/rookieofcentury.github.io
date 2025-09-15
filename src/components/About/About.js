import React from 'react';
import styled from 'styled-components';
import AboutBox from './AboutBox';
import { FaUser, FaTools, FaSeedling } from 'react-icons/fa';
import { Title, Section, SectionContent } from '../../styles/CommonStyles';

const AboutSection = styled(Section)`
  background-color: #f8f9fa;
`;

const AboutGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 3rem;
  align-items: center;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const AboutFlex = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 32px;
  flex-wrap: wrap;
`;

const AboutText = styled.p`
  font-size: 1.1rem;
  line-height: 1.8;
  color: #555555;
  margin-bottom: 1.5rem;
`;

const cardsData = [
  {
    icon: <FaUser />,
    iconColor: "#779D82",
    title: "사용자에게 가치를 전하는 개발자",
    description: "웹은 물리적 제약 없이 정보를 전달할 수 있는 가장 열린 공간이라고 생각합니다. 저는 *HTML, CSS, JavaScript*, 그리고 *Salesforce* 기반 개발에 익숙하며, 웹 접근성과 사용자 중심 개발 철학을 중요하게 여깁니다."
  },
  {
    icon: <FaTools />,
    iconColor: "#779D82", 
    title: "실무에서 다져진 문제 해결력",
    description: "CJ Freshway CRM 고도화 프로젝트 등에서 *대량 데이터 처리, 서버 이관, 승인 프로세스* 개발을 경험했습니다. 기능 구현에 그치지 않고, 비즈니스 흐름을 이해하며 실용적인 해결책을 만드는 데 집중합니다."
  },
  {
    icon: <FaSeedling />,
    iconColor: "#779D82",
    title: "꾸준히 배우고 성장하는 개발자", 
    description: "변화하는 기술을 즐기며, 효율적인 협업과 코드 품질 개선을 위해 노력합니다. 사용자 경험을 세심히 고려하고, 더 나은 웹 환경을 만드는 데 기여하는 개발자가 되고자 합니다."
  }
];

const About = () => {
  return (
    <AboutSection id="about">
      <SectionContent>
        <Title>About Me</Title>
        <AboutGrid>
          <div>
            <AboutText>
              최신 웹 트렌드를 반영한 모던 프론트엔드 개발에 관심이 많으며,
              React 기반의 컴포넌트 설계와 사용자 경험 중심의 UI 구현에 집중하고 있습니다.
            </AboutText>
          </div>
          <AboutFlex>
            {cardsData.map((card, index) => (
              <AboutBox key={index} {...card} />
            ))}
          </AboutFlex>
        </AboutGrid>
      </SectionContent>
    </AboutSection>
  );
};

export default About;