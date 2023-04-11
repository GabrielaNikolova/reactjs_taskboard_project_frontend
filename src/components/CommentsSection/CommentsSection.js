import './CommentsSection.css';
import AddComment from "./AddComment/AddComment";
import Comment from "./Comment/Comment";
import {ListGroup} from "react-bootstrap";

function CommentsSection() {
    return (
        <div className="comments-section">
            <AddComment/>
            <ListGroup className={"comments-list"}>
                <Comment/>
                <Comment/>
                <Comment/>
                <Comment/>
            </ListGroup>
        </div>

    );
}

export default CommentsSection;