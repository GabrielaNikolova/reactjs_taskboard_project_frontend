import './ProjectsList.css';
import {Accordion} from "react-bootstrap";
import Button from "../Button/Button";


function ProjectsList() {
    return (

        <Accordion defaultActiveKey="0" className={"projects-wrapper"}>
            <Accordion.Item eventKey="0">
                <Accordion.Header>
                    <label className="mb-2 text-md font-medium text-gray-900">Project 1</label>
                </Accordion.Header>
                <Accordion.Body>
                    <textarea id="description" rows="4" disabled=""
                              className="desc-box"
                              placeholder="Write a description...">Standard glass, 3.8GHz 8-core 10th-generation Intel Core i7 processor, Turbo Boost up to 5.0GHz, 16GB 2666MHz DDR4 memory, Radeon Pro 5500 XT with 8GB of GDDR6 memory, 256GB SSD storage, Gigabit Ethernet, Magic Mouse 2, Magic Keyboard - US</textarea>
                    <Button
                        value={"Update"}
                    />
                    <Button
                        className={"delete-card-btn hover:text-white hover:bg-red-600"}
                        value={"Delete"}
                    />
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
                <Accordion.Header>
                    <label className="mb-2 text-md font-medium text-gray-900">Project 1</label>
                </Accordion.Header>
                <Accordion.Body>
                    <textarea id="description" rows="4" disabled=""
                              className="desc-box"
                              placeholder="Write a description...">Standard glass, 3.8GHz 8-core 10th-generation Intel Core i7 processor, Turbo Boost up to 5.0GHz, 16GB 2666MHz DDR4 memory, Radeon Pro 5500 XT with 8GB of GDDR6 memory, 256GB SSD storage, Gigabit Ethernet, Magic Mouse 2, Magic Keyboard - US</textarea>
                    <Button
                        value={"Update"}
                    />
                    <Button
                        className={"delete-card-btn hover:text-white hover:bg-red-600"}
                        value={"Delete"}
                    />
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
    );
}

export default ProjectsList;
