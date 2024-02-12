import { useState } from 'react';

import Sidebar from './components/Sidebar/Sidebar';
import NewProject from './components/NewProject/NewProject';
import NoProject from './components/NoProject/NoProject';

function App() {
  const [projectsState, setProjectsState ] = useState({
    selectedProjectId: undefined,
    projects: []
  });

  function handleStartAddProject(){
    console.log("Add project clicked");
    setProjectsState(prevState => { 
      return {
        ...prevState,
        selectedProjectId: null
      } 
    });
  }

  function handleAddProject(projectData){
    setProjectsState( prevState => {
      const newProject = {
        ...projectData,
        id: Math.random().toString()
      };
      return {
        ...prevState,
        projects: [...prevState.projects, newProject],
      };
    });
  }

  console.log(projectsState);

  let content;

  // null means the user has clicked the "Add Project" button
  if (projectsState.selectedProjectId === null) {
    content = <NewProject onAddProject={handleAddProject} />;
  } else if (projectsState.selectedProjectId === undefined) {
    content = <NoProject onStartAddProject={handleStartAddProject} />
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <Sidebar onStartAddProject={handleStartAddProject} />
      { content }
    </main>
  );
}

export default App;
