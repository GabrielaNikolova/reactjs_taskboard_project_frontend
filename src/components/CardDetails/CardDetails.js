import {Modal} from "react-bootstrap";
import {Form} from "react-bootstrap";
import './CardDetails.css';

function CardDetails(props) {
    return (
        <Modal
            show={props.show}
            cancel={props.close}
            size="md"
            centered
        >

            <div className="relative p-4 bg-white rounded-lg shadow">
                <Form>
                    <div
                        className="flex justify-between items-center mb-4 rounded-t border-b sm:mb-5 dark:border-gray-600">
                        <input type="text" name="title" id="title" value="title"
                               className="text-gray-900 font-medium text-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-1"
                               placeholder="Title"/>
                        <button onClick={props.close}
                                type="button"
                                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
                                data-modal-toggle="updateProductModal">
                            <span className="material-icons">close</span>
                        </button>
                    </div>
                    <div className="relative">
                        <label htmlFor="description"
                               className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Description</label>
                        <textarea id="description" rows="5"
                                  className="block p-1 w-full text-sm text-gray-900 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                  placeholder="Write a description...">Standard glass, 3.8GHz 8-core 10th-generation Intel Core i7 processor, Turbo Boost up to 5.0GHz, 16GB 2666MHz DDR4 memory, Radeon Pro 5500 XT with 8GB of GDDR6 memory, 256GB SSD storage, Gigabit Ethernet, Magic Mouse 2, Magic Keyboard - US</textarea>
                    </div>
                    <div className="flex justify-start mb-4">
                        <div className="relative mr-4">
                            <label htmlFor="category"
                                   className="block mb-2 text-sm font-medium text-gray-900">Priority</label>
                            <select id="category"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 ">
                                <option selected="">Electronics</option>
                                <option value="TV">TV/Monitors</option>
                                <option value="PC">PC</option>
                                <option value="GA">Gaming/Console</option>
                                <option value="PH">Phones</option>
                            </select>
                        </div>
                        <div className="relative mr-4">
                            <label htmlFor="category"
                                   className="block mb-2 text-sm font-medium text-gray-900">Move
                                to</label>
                            <select id="category"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 ">
                                <option selected="">Electronics</option>
                                <option value="TV">TV/Monitors</option>
                                <option value="PC">PC</option>
                                <option value="GA">Gaming/Console</option>
                                <option value="PH">Phones</option>
                            </select>
                        </div>
                    </div>

                    <div className="flex items-center space-x-4">
                        <button type="submit"
                                className="update-card-btn">
                            Update Task
                        </button>
                        <button type="button"
                                className="delete-card-btn hover:text-white hover:bg-red-600">
                            Delete
                        </button>
                    </div>
                </Form>
            </div>

        </Modal>

    );
}

export default CardDetails;