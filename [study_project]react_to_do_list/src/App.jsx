import {useState} from 'react';

import NoSideProject from './components/noSideProject';
import SideProject from "./components/sideProject";
import AddList from "./components/addList";
import SelectedProject from './components/SelectedProject';

function App() {

  const[stateProject, setStateProject] = useState({
    selectedProjectId: undefined,
    projects: [],
    tasks: [],
  });

  function handleAddTask(text){
    setStateProject((prevState) => {
      const taskId = Math.random();
      const newTask = {
        text: text,
        projectId: prevState.selectedProjectId,
        id: taskId,
      };

      return {
        ...prevState,
        tasks: [newTask, ...prevState.tasks]
      };
    });
  }

  function handleDeleteTask(id) {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        tasks: prevState.tasks.filter((task) => task.id !== id),
      };
    });
  }




  function handleSelectProject(id) {
    setStateProject((prevState) => {
      return {
        ...prevState,
        selectedProjectId: id,
      };
    });
  }

  function addingNewProjectHandler() {
    setStateProject((prevState) => {
      return {
        ...prevState,
        selectedProjectId: null,
      };
    });
  }

  function handleCancelAddProject() {
    setStateProject((prevState) => {
      return{
        ...prevState,
        selectedProjectId: undefined,
      };
    });
  }

  function handleAddProject(projectData){
    setStateProject((prevState) => {
      const projectId = Math.random();
      const AddList = {
        ...projectData,
        id: projectId,
      };

      return {
        ...prevState,
        selectedProjectId: undefined,
        projects: [...prevState.projects, AddList],
      };
    });
  }

  function handleDeleteProject(){
    setStateProject((prevState) =>{
      return {
        ...prevState,
        selectedProjectId: undefined,
        project : prevState.projects.filter(
          (project) => project.id !== prevState.selectedProjectId
        ),
      };
    });
  }


  const selectedProject = stateProject.projects.find(
    (project) => project.id === stateProject.selectedProjectId
  );

  let content = (
    <SelectedProject 
      project= {selectedProject} 
      onDelete = {handleDeleteProject}
      onAddTask={handleAddTask}
      onDeleteTask={handleDeleteTask}
      tasks={stateProject.tasks}
    />);

  if(stateProject.selectedProjectId === null){
    content = <AddList onAdd={handleAddProject} onCancel={handleCancelAddProject}/>;
  }
  else if(stateProject.selectedProjectId === undefined) {
    content = <NoSideProject onStartAddProject={addingNewProjectHandler} />;
  }


  return (
    <>
      <p className="px-4 py-8 uppercase font-bold md:text-4xl"> andy's to do list</p>
      <main className="h-screen flex gap-8">
        <SideProject startAddProject = {addingNewProjectHandler}
        projects={stateProject.projects}
        onSelectProject = {handleSelectProject}/>
        {content}
      </main>
    </>
  );
}

export default App;
