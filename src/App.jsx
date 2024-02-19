import { useState } from 'react';

import Sidebar from './components/Sidebar/Sidebar';
import NewProject from './components/NewProject/NewProject';
import NoProject from './components/NoProject/NoProject';
import SelectedProject from './components/SelectedProject/SelectedProject';

function App() {
  const [projectsState, setProjectsState ] = useState({
    selectedProjectId: undefined,
    projects: []
  });
  
  function handleSelectProject(projectId){
    setProjectsState(prevState => { 
      return {
        ...prevState,
        selectedProjectId: projectId
      } 
    });
  }

  function handleStartAddProject(){
    console.log("Add project clicked");
    setProjectsState(prevState => { 
      return {
        ...prevState,
        selectedProjectId: null
      } 
    });
  }

  function handleCancelProject(){
    setProjectsState(prevState => { 
      return {
        ...prevState,
        selectedProjectId: undefined
      } 
    });
  }

  function handleAddProject(projectData){
    setProjectsState( prevState => {
      const projectId = Math.random();
      const newProject = {
        ...projectData,
        id: projectId
      };
      return {
        ...prevState,
        selectedProjectId: undefined,
        projects: [...prevState.projects, newProject],
      };
    });
  }

  const selectedProject = projectsState.projects.find(project => project.id === projectsState.selectedProjectId);

  let content = <SelectedProject project={selectedProject} />;

  // null means the user has clicked the "Add Project" button
  if (projectsState.selectedProjectId === null) {
    content = <NewProject onAddProject={handleAddProject} onCancel={handleCancelProject} />;
  } else if (projectsState.selectedProjectId === undefined) {
    content = <NoProject onStartAddProject={handleStartAddProject} />
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <Sidebar 
        onStartAddProject={handleStartAddProject}
        projects={projectsState.projects}
        onSelectProject={handleSelectProject}
      />
      { content }
    </main>
  );
}

export default App;
