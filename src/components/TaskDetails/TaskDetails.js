import {Modal} from "react-bootstrap";
import './TaskDetails.css';
import Button from "../Button/Button";
import CommentsSection from "../CommentsSection/CommentsSection";
import {useNavigate, useParams} from "react-router-dom";
import {useContext, useEffect} from "react";
import {TaskContext} from "../../contexts/TaskContext";
import {useAuthentication} from "../../contexts/AuthContext";

import * as commentService from '../../services/commentService';
import * as taskService from '../../services/taskService';

function TaskDetails(props) {

    const navigate = useNavigate();
    const {addComment, getTaskDetails, selectTask, deleteTask} = useContext(TaskContext);
    const {user} = useAuthentication();
    const {taskId} = useParams();

    const currentTask = selectTask(taskId);
    const isOwner = currentTask._ownerId === user._id;


    useEffect(() => {
        (async () => {
            const taskDetails = await taskService.getDetails(taskId);
            const taskComments = await commentService.getByTaskId(taskId);
            getTaskDetails(taskId, {...taskDetails, comments: taskComments.map(x => `${x.user.email}: ${x.text}`)});
        })();
    }, []);

    const addCommentHandler = (e) => {
        e.preventDefault();

        const formData = new FormData(e.target);
        const comment = formData.get('comment');

        commentService.addComment(taskId, comment)
            .then(result => {
                addComment(taskId, comment);
            });
    };

    const taskDeleteHandler = () => {
        const confirmation = window.confirm('Are you sure you want to delete this task?');

        if (confirmation) {
            taskService.deleteTask(taskId)
                .then(() => {
                    deleteTask(taskId);
                    navigate('/tasks');
                });
        }
    };


    return (
        <Modal
            show={props.show}
            cancel={props.close}
            size="md"
            centered
            className={"details-box"}
        >

            <div className="relative p-4 bg-white rounded-lg shadow">

                <div
                    className="flex justify-between items-center mb-4 rounded-t border-b sm:mb-5">
                    <h3 className="text-gray-900 font-medium text-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-1">Title
                    </h3>
                    <Button value={"Edit"}/>
                    <button type="button"
                            className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center">
                        <span className="material-icons">close</span>
                    </button>
                </div>
                <div className="relative">
                    <label htmlFor="description"
                           className="block mb-2 text-sm font-medium text-gray-900">Description</label>
                    <p className="desc-box">Standard glass, 3.8GHz 8-core 10th-generation Intel Core i7
                        processor, Turbo Boost up to 5.0GHz, 16GB 2666MHz DDR4 memory, Radeon Pro 5500 XT with 8GB of
                        GDDR6 memory, 256GB SSD storage, Gigabit Ethernet, Magic Mouse 2, Magic Keyboard - US</p>
                </div>
                <div className="flex justify-center mb-4 mt-3">
                    <div className="relative mr-10">
                        <label htmlFor="priority"
                               className="block mb-2 text-decoration-underline text-sm font-medium text-gray-900">Priority:</label>
                        <span><p className="mb-2 text-sm font-medium">Low priority</p></span>
                    </div>
                    <div className="relative mr-4">
                        <label htmlFor="currentCategory"
                               className="block mb-2 text-decoration-underline text-sm font-medium text-gray-900">Category:</label>
                        <span><p className="mb-2 text-sm font-medium">In test</p></span>
                    </div>
                </div>
                <CommentsSection/>
            </div>

        </Modal>

    );
}

export default TaskDetails;