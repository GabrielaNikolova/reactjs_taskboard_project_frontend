import './TasksCatalog.css';
import TasksWrapper from "./TasksWrapper/TasksWrapper";

function TasksCatalog() {

    return (

        <main className="main-container">
            <div className="px-10 mt-6">
                <h1 className="text-2xl font-bold">Team Project Board</h1>
            </div>
            <div className="wrappers-container space-x-6">
                <TasksWrapper wrapperTitle="To Do"/>
                <TasksWrapper wrapperTitle="In Progress"/>
                <TasksWrapper wrapperTitle="Testing"/>
                <TasksWrapper wrapperTitle="Done"/>
            </div>
        </main>
    );
}

export default TasksCatalog;