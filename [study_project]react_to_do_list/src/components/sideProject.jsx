import Button from './buttons';

export default function SideProject({
    startAddProject, 
    projects,
    onSelectProject,
    selectedProjectId,}){
    return(
        <aside className =
        "w-1/3 px-16 py-16 bg-stone-900 text-stone-50 md:w-80 rounded-r-xl"
        >
            <h2 className="mb-8 font-bold uppercase md:text-xl text-stone-200">
                your project
            </h2>
            <div>
                <Button onClick={startAddProject}>add new project</Button>
            </div>
            <ul className="mt-8">
                {projects.map((project) => {
                    let cssClasses = "w-full text-left px-2 rounded-sm my-1 hover:text-stone-200 hohover:bg-stone-800";

                    if(project.id === selectedProjectId){
                        cssClasses += "bg-stone-800 text-stone-200"
                    }
                    else{
                        cssClasses += "text-stone-400"
                    }

                    return (
                        <li key = {project.id}>
                            <button
                                className= {cssClasses}
                                onClick= {() => onSelectProject(project.id)}>
                                    {project.title}
                            </button>
                        </li>
                    )
                })}
            </ul>
        </aside>
    );
}