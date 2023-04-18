import {Modal} from "react-bootstrap";
import './TaskDetails.css';
import Button from "../Button/Button";
import CommentsSection from "../CommentsSection/CommentsSection";
import {Link, useNavigate, useParams} from "react-router-dom";
import {useContext, useEffect} from "react";
import {TaskContext} from "../../contexts/TaskContext";
import {useAuthentication} from "../../contexts/AuthContext";

import * as commentService from '../../services/commentService';
import * as taskService from '../../services/taskService';

function TaskDetails() {

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
        // <Modal
        //     show={props.show}
        //     cancel={props.close}
        //     size="md"
        //     centered
        //     className={"details-box"}
        // >

        <div className="details-box relative p-4 bg-white rounded-lg shadow">

            <div
                className="flex justify-between items-center mb-4 rounded-t border-b sm:mb-5">
                <h3 className="text-gray-900 font-medium text-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-1">{currentTask.title}</h3>
                <Link to='/tasks' type="button"
                      className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center">
                    <span className="material-icons">close</span>
                </Link>
            </div>
            <div className="relative">
                <label htmlFor="description"
                       className="block mb-2 text-sm font-medium text-gray-900">Description</label>
                <p className="desc-box">{currentTask.description}</p>
            </div>
            <div className="flex justify-center mb-4 mt-3">
                <div className="relative mr-10">
                    <label htmlFor="priority"
                           className="block mb-2 text-decoration-underline text-sm font-medium text-gray-900">Priority:</label>
                    <span><p className="mb-2 text-sm font-medium">{currentTask.priority}</p></span>
                </div>
                <div className="relative mr-4">
                    <label htmlFor="currentCategory"
                           className="block mb-2 text-decoration-underline text-sm font-medium text-gray-900">Category:</label>
                    <span><p className="mb-2 text-sm font-medium">{currentTask.category}</p></span>
                </div>
            </div>
            <div className="mb-2">
                <Link to={`/tasks/${taskId}/edit`} className="mr-2">
                    <Button value={"Edit"}/>
                </Link>
                <Button className="delete-card-btn hover:text-white hover:bg-red-600" onClick={taskDeleteHandler} value={"Delete"}/>
            </div>
            <CommentsSection/>
        </div>


        // </Modal>

    );
}

export default TaskDetails;