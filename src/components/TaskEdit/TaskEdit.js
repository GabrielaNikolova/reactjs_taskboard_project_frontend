import {Form} from "react-bootstrap";
import './TaskEdit.css';
import Button from "../Button/Button";

function TaskEdit() {
    return (
        <div className="edit-box p-4 bg-white rounded-lg shadow">

            <Form>
                <div
                    className="flex justify-between items-center mb-4 rounded-t border-b sm:mb-5">
                    <input type="text" name="title" id="title" value="title"
                           className="text-gray-900 font-medium text-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-1"
                           placeholder="Title"/>
                    <button
                        type="button"
                        className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center">
                        <span className="material-icons">close</span>
                    </button>
                </div>
                <div className="relative">
                    <label htmlFor="description"
                           className="block mb-2 text-sm font-medium text-gray-900">Description</label>
                    <textarea id="description" rows="4" disabled=""
                              className="desc-box"
                              placeholder="Write a description...">Standard glass, 3.8GHz 8-core 10th-generation Intel Core i7 processor, Turbo Boost up to 5.0GHz, 16GB 2666MHz DDR4 memory, Radeon Pro 5500 XT with 8GB of GDDR6 memory, 256GB SSD storage, Gigabit Ethernet, Magic Mouse 2, Magic Keyboard - US</textarea>
                </div>
                <div className="flex justify-start mb-4 mt-3">
                    <div className="relative mr-4">
                        <label htmlFor="category"
                               className="block mb-2 text-sm font-medium text-gray-900">Priority</label>
                        <select id="category"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-1 ">
                            <option selected=""></option>
                            <option value="Low">Low priority</option>
                            <option value="Medium">Medium priority</option>
                            <option value="High">High priority</option>
                        </select>
                    </div>
                    <div className="relative mr-4">
                        <label htmlFor="category"
                               className="block mb-2 text-sm font-medium text-gray-900">Move
                            to</label>
                        <select id="category"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-1 ">
                            <option selected="">selected</option>
                            <option value="To do">To Do</option>
                            <option value="In Progress">In Progress</option>
                            <option value="Testing">Testing</option>
                            <option value="Done">Done</option>
                        </select>
                    </div>
                </div>
                <div className="flex items-center space-x-1 mt-2">
                    <Button
                        value={"Update Task"}
                    />
                    <Button
                        className={"delete-card-btn hover:text-white hover:bg-red-600"}
                        value={"Delete Task"}
                    />
                </div>
            </Form>
        </div>

    );
}

export default TaskEdit;