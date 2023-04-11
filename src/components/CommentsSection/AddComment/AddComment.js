import './AddComment.css';
import Button from "../../Button/Button";


function AddComment(){
    return(

        <div className="add-comment">
            <label htmlFor="comment"
                   className="block mb-2 text-md font-medium text-gray-900">Comments</label>
            <textarea id="editor" rows="1"
                      className="comment-text"
                      placeholder="Write a comment"></textarea>
            <Button
                value={"Publish comment"}
            />
        </div>
    );
}

export default AddComment;