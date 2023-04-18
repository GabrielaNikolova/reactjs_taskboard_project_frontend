import {createContext, useEffect, useReducer} from "react";
import {useNavigate} from "react-router-dom";
import * as taskService from '../services/taskService';


export const TaskContext = createContext();

const taskReducer = (state, action) => {

    switch (action.type) {
        case 'GET_ALL_TASKS':
            return action.payload.map(x => ({...x, comments: []}));
        case 'ADD_TASK':
            return [...state, action.payload];
        case 'GET_TASK_DETAILS':
        case 'EDIT_TASK':
            return state.map(x => x._id === action.taskId ? action.payload : x);
        case 'ADD_COMMENT':
            return state.map(x => x._id === action.taskId ? {...x, comments: [...x.comments, action.payload]} : x);
        case
        'DELETE_TASK':
            return state.filter(x => x._id !== action.taskId);
        default:
            return state;
    }
};

export const TaskProvider = ({children}) => {
    const navigate = useNavigate();
    const [tasks, dispatch] = useReducer(taskReducer, []);

    useEffect(() => {
        taskService.getAll()
            .then(result => {
                const action = {
                    type: 'GET_ALL_TASKS',
                    payload: result
                };
                dispatch(action);

            });
    }, []);

    const selectTask = (taskId) => {
        return tasks.find(x => x._id === taskId || {});
    };

    const getTaskDetails = (taskId, taskDetails) => {
        dispatch({
            type: 'GET_TASK_DETAILS',
            payload: taskDetails,
            taskId
        });
    };

    const addComment = (taskId, comment) => {
        dispatch({
            type: 'ADD_COMMENT',
            payload: comment,
            taskId
        });
    };

    const addTask = (taskData) => {
        dispatch({
            type: 'ADD_TASK',
            payload: taskData
        });
        navigate('/taskcatalog');
    };

    const editTask = (taskId, taskData) => {
        dispatch({
            type: 'EDIT_TASK',
            payload: taskData,
            taskId
        });
    };

    const deleteTask = (taskId) => {
        dispatch({
            type: 'DELETE_TASK',
            taskId
        });
    };


    return (
        <TaskContext.Provider value={
            {
                tasks,
                addTask,
                editTask,
                addComment,
                getTaskDetails,
                selectTask,
                deleteTask
            }
        }>
            {children}
        </TaskContext.Provider>
    );
}