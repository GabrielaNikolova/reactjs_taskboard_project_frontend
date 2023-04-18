import {useContext} from "react";
import {TaskContext} from "../../contexts/TaskContext";
import {useAuthentication} from "../../contexts/AuthContext";
import {Navigate, Outlet, useParams} from "react-router-dom";


const TaskOwner = ({children}) => {
    const {selectTask} = useContext(TaskContext);
    const {user, isAuthenticated} = useAuthentication();
    const {taskId} = useParams();

    const currentTask = selectTask(taskId);

    if (isAuthenticated && user._id !== currentTask._ownerId) {
        return <Navigate to='/tasks' replace/>
    }

    return children ? children : <Outlet/>;

};

export default TaskOwner;