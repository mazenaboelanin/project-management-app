import { useState } from 'react';

import Sidebar from './components/Sidebar/Sidebar';
import NewProject from './components/NewProject/NewProject';
import NoProject from './components/NoProject/NoProject';

function App() {
  const [projectsState, setProjectsState ] = useState({
    selectedProjectId: undefined,
    projects: []
  });

  function handleAddProject(){
    console.log("Add project clicked");
    setProjectsState(prevState => { 
      return {
        ...prevState,
        selectedProjectId: null
      } 
    });
  }

  let content;

  // null means the user has clicked the "Add Project" button
  if (projectsState.selectedProjectId === null) {
    content = <NewProject />;
  } else if (projectsState.selectedProjectId === undefined) {
    content = <NoProject onStartAddProject={handleAddProject} />
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <Sidebar onStartAddProject={handleAddProject} />
      { content }
    </main>
  );
}

export default App;
