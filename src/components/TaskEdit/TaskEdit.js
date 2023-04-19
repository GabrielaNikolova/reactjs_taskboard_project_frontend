import './TaskEdit.css';
import Button from "../common/Button/Button";

import {useContext, useEffect, useState} from "react";
import * as taskService from '../../services/taskService';
import {TaskContext} from "../../contexts/TaskContext";
import {Link, useNavigate, useParams} from "react-router-dom";


const priorityTypes = [
    {value: "Low", text: "Low priority"},
    {value: "Medium", text: "Medium priority"},
    {value: "High", text: "High priority"}
]
const categories = [
    {value: "To Do", text: "To Do"},
    {value: "In Progress", text: "In Progress"},
    {value: "Testing", text: "Testing"},
    {value: "Done", text: "Done"}
]

function TaskEdit() {
    const [currentTask, setCurrentTask] = useState({});
    const {editTask} = useContext(TaskContext);
    const {taskId} = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        taskService.getDetails(taskId)
            .then(taskData => {
                setCurrentTask(taskData);
            })
    }, []);


    const onSubmit = (e) => {
        e.preventDefault();

        const taskData = Object.fromEntries(new FormData(e.target));

        taskService.editTask(taskId, taskData)
            .then(result => {
                editTask(taskId, result);
                navigate(`/tasks`)
            });
    };


    return (
        <div className="edit-box p-4 bg-white rounded-lg shadow">
            <form onSubmit={onSubmit}>
                <div className="flex justify-between items-center mb-4 rounded-t border-b sm:mb-5">
                    <input type="text" name="title" id="title" defaultValue={currentTask.title}
                           className="text-gray-900 font-medium text-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-1"/>
                    <Link to='/tasks' type="button"
                          className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center">
                        <span className="material-icons">close</span>
                    </Link>
                </div>
                <div className="relative">
                    <label htmlFor="description"
                           className="block mb-2 text-sm font-medium text-gray-900">Description</label>
                    <textarea id="description" name="description" rows="4"
                              className="desc-box"
                              placeholder="Write a description..." defaultValue={currentTask.description}/>
                </div>
                <div className="flex justify-start mb-4 mt-3">
                    <div className="relative mr-4">
                        <label htmlFor="priority"
                               className="block mb-2 text-sm font-medium text-gray-900">Priority</label>
                        <select id="priorityType" name="priorityType" value={currentTask.priority} onChange={(e) => setCurrentTask(x => ({...x, priority: e.target.value}))}>
                            {priorityTypes.map(x => <option key={x.value} value={x.value}>{x.text}</option>)}
                        </select>


                        {/*<select id="priority" defaultValue={currentTask.priority}*/}
                        {/*        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-1 ">*/}
                        {/*    <option value="Low">Low priority</option>*/}
                        {/*    <option value="Medium">Medium priority</option>*/}
                        {/*    <option value="High">High priority</option>*/}
                        {/*</select>*/}
                    </div>
                    <div className="relative mr-4">
                        <label htmlFor="category"
                               className="block mb-2 text-sm font-medium text-gray-900">Move
                            to</label>
                        <select id="categories" name="categories" value={currentTask.category} onChange={(e) => setCurrentTask(x => ({...x, category: e.target.value}))}>
                            {categories.map(x => <option key={x.value} value={x.value}>{x.text}</option>)}
                        </select>


                        {/*<select id="category" defaultValue={currentTask.category}*/}
                        {/*        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-1 ">*/}
                        {/*    <option value="To do">To Do</option>*/}
                        {/*    <option value="In Progress">In Progress</option>*/}
                        {/*    <option value="Testing">Testing</option>*/}
                        {/*    <option value="Done">Done</option>*/}
                        {/*</select>*/}
                    </div>
                </div>
                <div className="flex items-center space-x-1 mt-2">
                    <Button type="submit"
                            value={"Update Task"}
                    />
                </div>
            </form>
        </div>

    );
}

export default TaskEdit;