import React, { useEffect, useState, memo } from 'react';
import styled from 'styled-components';
import { Title, Section, SectionContent } from '../../styles/CommonStyles';
import ProjectModal from './ProjectModal';
import { AnimatePresence } from 'framer-motion';

const ProjectsSection = styled(Section)`
  background-color: white;
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
`;

const ProjectCard = styled.div`
  background-color: white;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 5px 25px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 35px rgba(0, 0, 0, 0.15);
  }
`;

const ProjectImage = styled.div`
  height: 200px;
  background: linear-gradient(135deg, #779D82 0%, #2E6747 100%);
`;

const StyledImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const ProjectContent = styled.div`
  padding: 1.5rem;
`;

const ProjectTitle = styled.h3`
  font-size: 1.3rem;
  font-weight: bold;
  color: #779D82;
  margin-bottom: 0.5rem;
`;

const ProjectDescription = styled.p`
  color: #666666;
  line-height: 1.6;
  margin-bottom: 1rem;
`;

const ProjectTags = styled.div`
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
`;

const ProjectTag = styled.span`
  padding: 0.3rem 0.8rem;
  background-color: #779D82;
  color: #ffffff;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 500;
`;

// const Projects = () => {

//   const [projects, setProjects] = useState([]);
//   const [selectedProject, setSelectedProject] = useState(null);
//   const [isLoading, setIsLoading] = useState(true);

//   console.log('projects');

//   useEffect(() => {
//     fetch('/projects.json')
//       .then((res) => {
//         if (!res.ok) {
//           throw new Error('Failed to fetch projects');
//         }
//         return res.json();
//       })
//       .then((data) => {
//         setProjects(data);
//         setIsLoading(false);
//       })
//       .catch((error) => {
//         console.error('Error fetching projects:', error);
//         setIsLoading(false);
//       });
//   }, []);

//   console.log('==> ' + projects);

//   if(isLoading) {
//     return <div>Loading...</div>;
//   }

//   if(!projects || projects.length === 0) {
//     return <div>프로젝트가 없습니다.</div>;
//   }
  
//   return (
//     <ProjectsSection id="projects">
//       <SectionContent>
//         <Title>Projects</Title>
//         <ProjectsGrid>
//           {projects.map((data, index) => (
//             <ProjectCard key={index} onClick={() => setSelectedProject(data)} style={{ cursor: 'pointer' }}>
//               <ProjectImage />
//               <ProjectContent>
//                 <ProjectTitle>프로젝트 {data.title}</ProjectTitle>
//                 <ProjectDescription>
//                   {data.summary}
//                 </ProjectDescription>
//                 <ProjectTags>
//                   <ProjectTag>React</ProjectTag>
//                   <ProjectTag>Three.js</ProjectTag>
//                   <ProjectTag>JavaScript</ProjectTag>
//                 </ProjectTags>
//               </ProjectContent>
//             </ProjectCard>
//           ))}
//         </ProjectsGrid>
//       </SectionContent>
//       <ProjectModal
//         project={selectedProject}
//         onClose={() => setSelectedProject(null)}
//       />
//     </ProjectsSection>
//   );
// };

const Projects = memo(({ isModalOpen, setIsModalOpen }) => {
  const [projects, setProjects] = useState([]);
  const [selectedProject, setSelectedProject] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  // 모든 Hook은 항상 같은 순서로 호출되어야 합니다
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch('/projects.json');
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        setProjects(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProjects();
  }, []);

  // 렌더링 내용 결정
  let content;

  console.log('🔵 Projects 렌더링 시작');

  console.log('🔵 현재 상태들:', { 
    projectsLength: projects.length, 
    selectedProject: selectedProject?.title,
    isLoading, 
    error 
  });

  const handleProjectClick = (data) => {
    console.log('🟡 프로젝트 클릭됨:', data.title);
    console.log('🟡 setSelectedProject 호출 전:', selectedProject);
    setSelectedProject(data);
    setIsModalOpen(true);
    console.log('🟡 setSelectedProject 호출 후'); // 이건 바로 반영 안됨
  };

  const handleCloseModal = () => {
    console.log('🟠 모달 닫기 호출됨');
    setSelectedProject(null);
    setIsModalOpen(false);
  };

  console.log('🔵 Projects 렌더링 끝, selectedProject:', selectedProject?.title);
  
  if (isLoading) {
    content = (
      <div style={{ padding: '2rem', textAlign: 'center' }}>
        <p>프로젝트를 불러오는 중...</p>
      </div>
    );
  } else if (error) {
    content = (
      <div style={{ padding: '2rem', textAlign: 'center' }}>
        <p>에러가 발생했습니다: {error}</p>
        <p>public/projects.json 파일이 존재하는지 확인해주세요.</p>
      </div>
    );
  } else if (!projects || projects.length === 0) {
    content = (
      <div style={{ padding: '2rem', textAlign: 'center' }}>
        <p>표시할 프로젝트가 없습니다.</p>
      </div>
    );
  } else {
    content = (
      <>
        <ProjectsSection id="projects">
          <SectionContent>
            <Title>Projects</Title>
            <ProjectsGrid>
              {projects.map((data, index) => (
                <ProjectCard 
                  key={data.id || index} 
                  onClick={() => handleProjectClick(data)} 
                  style={{ cursor: 'pointer' }}
                >
                  <ProjectImage>
                    {data.images?.length > 0 && (
                      <StyledImage src={data.images[0]} alt="프로젝트 이미지" />
                    )}
                  </ProjectImage>
                  <ProjectContent>
                    <ProjectTitle>프로젝트 {data.title}</ProjectTitle>
                    <ProjectDescription>
                      {data.summary}
                    </ProjectDescription>
                    <ProjectTags>
                      {data.skills && data.skills.length > 0 ? (
                        data.skills.map((tech, index) => (
                          <ProjectTag key={index}>{tech}</ProjectTag>
                        ))
                      ) : (
                        <ProjectTag>기술스택 정보 없음</ProjectTag>
                      )}
                    </ProjectTags>
                  </ProjectContent>
                </ProjectCard>
              ))}
            </ProjectsGrid>
          </SectionContent>
          <ProjectModal 
            isOpen={isModalOpen}
            onClose={handleCloseModal}
            project={selectedProject}
          />
        </ProjectsSection>
      </>
    );
  }

  return content;
});

export default Projects;