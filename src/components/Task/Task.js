import './Task.css';
import {Link} from "react-router-dom";

function Task({task}) {

    return (
        <div className="card-ticket bg-opacity-90 group hover:bg-opacity-100" draggable="true">
            <header className="card-header flex items-center">
                    <span>
                <h3 className="card-priority-low">{task.priority} priority</h3></span>
                <>
                    <Link to={`/tasks/${task._id}`}
                          className="absolute top-0 right-0 flex items-center justify-center w-5 h-5 mt-3 mr-2 text-gray-500 rounded hover:bg-gray-200 hover:text-gray-700 group-hover:flex">
                        <span className="material-icons">edit</span>
                    </Link>
                </>
            </header>
            <h4 className="card-title mt-3 text-sm font-medium">{task.title}</h4>
            <footer className="card-footer">
                <div className="comments-counter relative flex items-center ml-4">
                    {task.comments.length > 0
                        ? <span className="material-icons text-gray-300">textsms</span>
                        : <div></div>}
                </div>
            </footer>
        </div>
    );
}

export default Task;