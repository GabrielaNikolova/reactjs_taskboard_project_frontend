import './AddProject.css';
import {Form, Modal} from "react-bootstrap";
import Button from "../Button/Button";

function AddProject(props) {
    return (
        <Modal
            show={props.show}
            cancel={props.close}
            size="md"
            centered
            className={"details-box"}
        >

            <Form className={"add-project-form"}>
                <div
                    className="flex justify-between items-center mb-4 rounded-t border-b sm:mb-5">
                    <input type="text" name="title" id="title"
                           className="text-gray-900 font-medium text-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-1"
                           placeholder="Title"/>
                    <button onClick={props.close}
                            type="button"
                            className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center">
                        <span className="material-icons">close</span>
                    </button>
                </div>
                <div className="relative">
                <textarea id="description" rows="4" disabled=""
                          className="desc-box"
                          placeholder="Write a description...">Standard glass, 3.8GHz 8-core 10th-generation Intel Core i7 processor, Turbo Boost up to 5.0GHz, 16GB 2666MHz DDR4 memory, Radeon Pro 5500 XT with 8GB of GDDR6 memory, 256GB SSD storage, Gigabit Ethernet, Magic Mouse 2, Magic Keyboard - US</textarea>
                </div>
                <Button
                    value={"Save"}
                />
            </Form>
        </Modal>
    );
}

export default AddProject;