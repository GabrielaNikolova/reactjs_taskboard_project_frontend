import './TaskDetails.css';
import Button from "../common/Button/Button";
import {useContext, useEffect} from "react";
import {Link, useNavigate, useParams} from "react-router-dom";
import {TaskContext} from "../../contexts/TaskContext";
import {useAuthentication} from "../../contexts/AuthContext";

import * as taskService from '../../services/taskService';
import * as commentService from '../../services/commentService';

const TaskDetails = () => {

    const navigate = useNavigate();
    const {addComment, getTaskDetails, selectTask, deleteTask} = useContext(TaskContext);
    const {user} = useAuthentication();
    const {taskId} = useParams();

    const currentTask = selectTask(taskId);

    const isOwner = currentTask._ownerId === user._id;


    useEffect(() => {
        (async () => {
            const taskDetails = await taskService.getDetails(taskId);
            console.log(taskDetails);
            const taskComments = await commentService.getByTaskId(taskId);
            getTaskDetails(taskId, {...taskDetails, comments: taskComments.map(x => `${x.user.username}: ${x.text}`)});
        })();
    }, [])

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
            {/*{isOwner &&*/}
                <div className="mb-2">
                    <Link to={`/tasks/${taskId}/edit`} className="mr-2">
                        <Button value={"Edit"}/>
                    </Link>
                    <Button className="delete-card-btn hover:text-white hover:bg-red-600" onClick={taskDeleteHandler}
                            value={"Delete"}/>
                </div>
            {/*}*/}
            <div className="comments-section">
                <article className="add-comment">
                    <form onSubmit={addCommentHandler}>
                        <label htmlFor="comment"
                               className="block mb-2 text-sm font-medium text-gray-900">Comments</label>
                        <textarea id="comment"
                                  name="comment"
                                  rows="1"
                                  className="comment-text"
                                  placeholder="Write a comment"></textarea>
                        <Button type="submit"
                                value={"Publish comment"}
                        />
                    </form>
                </article>

                <ul className="comments-list">
                    {currentTask.comments?.map(x =>
                        <li key={x} className="single-comment">
                            <p className="comment-text text-gray-900 text-sm mb-2 rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 ">{x}</p>
                        </li>
                    )}

                    {!currentTask.comments &&
                        <p className="no-comment">No comments.</p>
                    }
                </ul>
            </div>
        </div>


    );
}

export default TaskDetails;