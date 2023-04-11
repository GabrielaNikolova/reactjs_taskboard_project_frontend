import {Modal} from "react-bootstrap";
import {Form} from "react-bootstrap";
import './CardDetails.css';
import Button from "../Button/Button";
import CommentsSection from "../CommentsSection/CommentsSection";

function CardDetails(props) {
    return (
        <Modal
            show={props.show}
            cancel={props.close}
            size="md"
            centered
            className={"details-box"}
        >

            <div className="relative p-4 bg-white rounded-lg shadow">

                <Form>
                    <div
                        className="flex justify-between items-center mb-4 rounded-t border-b sm:mb-5">
                        <input type="text" name="title" id="title" value="title"
                               className="text-gray-900 font-medium text-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-1"
                               placeholder="Title"/>
                        <button onClick={props.close}
                                type="button"
                                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center">
                            <span className="material-icons">close</span>
                        </button>
                    </div>
                    <div className="relative">
                        <label htmlFor="description"
                               className="block mb-2 text-md font-medium text-gray-900">Description</label>
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
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-1 ">
                                <option selected="">Electronics</option>
                                <option value="TV">TV/Monitors</option>
                                <option value="PC">PC</option>
                                <option value="GA">Gaming/Console</option>
                                <option value="PH">Phones</option>
                            </select>
                        </div>
                    </div>
                    <CommentsSection/>
                    <div onClick={props.close} className="flex items-center space-x-1 mt-2">
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

        </Modal>

    );
}

export default CardDetails;