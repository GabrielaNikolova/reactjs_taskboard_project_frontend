import './AddTask.css';
import Button from "../common/Button/Button";

import {Link} from "react-router-dom";
import {useContext} from "react";
import {TaskContext} from '../../contexts/TaskContext';
import * as taskService from '../../services/taskService';

function AddTask() {
    const {addTask} = useContext(TaskContext);

    const onSubmit = (e) => {
        e.preventDefault();

        const taskData = Object.fromEntries(new FormData(e.target));

        taskService.addNewTask(taskData)
            .then(result => {
                addTask(result)
            });
    };

    return (

        <div className="add-card-box p-4 bg-white rounded-lg shadow">
            <form onSubmit={onSubmit}>
                <div
                    className="flex justify-between items-center mb-4 rounded-t border-b sm:mb-5">
                    <input
                        type="text"
                        name="title"
                        id="title"
                        className="text-gray-900 font-medium text-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-1"
                        placeholder="Title"/>
                    <Link to='/tasks'
                          type="button"
                          className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center">
                        <span className="material-icons">close</span>
                    </Link>
                </div>
                <div className="relative">
                    <label htmlFor="description"
                           className="block mb-2 text-sm font-medium text-gray-900">Description</label>
                    <textarea
                        id="description"
                        name="description"
                        defaultValue={""}
                        rows="4"
                        className="desc-box"
                        placeholder="Write a description..."/>
                </div>
                <div className="flex justify-start mb-4 mt-3">
                    <div className="relative mr-4">
                        <label htmlFor="category"
                               className="block mb-2 text-sm font-medium text-gray-900">Priority</label>
                        <select id="priority"
                                name="priority"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-1 ">
                            <option selected=""/>
                            <option value="Low">Low priority</option>
                            <option value="Medium">Medium priority</option>
                            <option value="High">High priority</option>
                        </select>
                    </div>
                    <div className="relative mr-4">
                        <label htmlFor="category"
                               className="block mb-2 text-sm font-medium text-gray-900">Category</label>
                        <select id="category"
                                name="category"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-1 ">
                            <option selected=""/>
                            <option value="To do">To Do</option>
                            <option value="In Progress">In Progress</option>
                            <option value="Testing">Testing</option>
                            <option value="Done">Done</option>
                        </select>
                    </div>
                </div>
                <div className="flex items-center space-x-1 mt-2">
                    <Button type="submit"
                            value={"Create New Task"}
                    />
                </div>
            </form>
        </div>

    );
}

// <form className="add-card-form">
//     <header className="add-card-form-header">
//         <span className="priority-button form-low-pr">
//             <input className="form-checkbox" type="radio" name="priority" alt="Low Priority" value=""/>
//             <label className="form-label card-color-low" htmlFor="Low Priority">Low Priority</label></span>
//         <span className="priority-button form-med-pr">
//             <input className="form-checkbox" type="radio" name="priority" alt="Med Priority" value=""/>
//             <label className="form-label card-color-medium" htmlFor="Med Priority">Med Priority</label></span>
//         <span className="priority-button form-high-pr">
//             <input className="form-checkbox" type="radio" name="priority" alt="High Priority" value=""/>
//             <label className="form-label card-color-high" htmlFor="High Priority">High Priority</label>
//         </span>
//     </header>
//     <textarea className="add-card-textarea text-gray-600 text-sm font-medium" typeof='text'
//               placeholder="Enter a title for this task…"
//               spellCheck="false">Enter a title for this task…</textarea>
//     <footer className="add-card-form-footer">
//         <Button
//             value={"Add"}
//         />
//     </footer>
// </form>
export default AddTask;