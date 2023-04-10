import './Card.css';
import CardDetails from "../CardDetails/CardDetails";
import { useState } from 'react';

function Card() {

    const [showDetails, setShowDetails] = useState(false);

    return (
        <div className="card-ticket bg-opacity-90 group hover:bg-opacity-100" draggable="true">
            <header className="card-header flex items-center">
                    <span>
                <h3 className="card-priority-low">low priority</h3></span>
                <>
                <button onClick={()=> setShowDetails(true)}
                    className="absolute top-0 right-0 flex items-center justify-center hidden w-5 h-5 mt-3 mr-2 text-gray-500 rounded hover:bg-gray-200 hover:text-gray-700 group-hover:flex">
                    <span className="material-icons">edit</span>
                </button>
                    <CardDetails show={showDetails} close={()=> setShowDetails(false)}/>
                </>
            </header>
            <h4 className="card-title mt-3 text-sm font-medium">This is the title of the card for the thing
                that needs to be done.</h4>
            <footer className="card-footer">
                <div className="due-date flex items-center">
                    <span className="material-icons text-gray-300 fill-current">calendar_today</span>
                    <span className="ml-1 leading-none">Dec 12</span>
                </div>
                <div className="description relative flex items-center ml-4">
                    <span className="material-icons text-gray-300 fill-current">text_snippet</span>
                </div>
                <div className="comments-counter relative flex items-center ml-4">
                    <span className="material-icons text-gray-300">textsms</span>
                    <span className="ml-1 leading-none">4</span>
                </div>
            </footer>
        </div>
    );
}

export default Card;