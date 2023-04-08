import './CardsWrapper.css';
import {Collapse} from "react-bootstrap";
import {useState} from "react";
import AddCard from "../AddCard/AddCard";

function CardsWrapperFooter() {
    const [open, setOpen] = useState(false);

    return (
        <>
            <footer className="cards-wrapper-footer">
                <a className="add-card-composer text-sm font-semibold after:content-none"
                   href="#"
                   onClick={() => setOpen(!open)}
                   aria-controls="add-card"
                   aria-expanded={open}>
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                              d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
                    </svg>
                    <span className="add-a-card">Add a card</span>
                </a>
            </footer>
            <Collapse in={open}>
                <div className="add-card">
                    <AddCard/>
                </div>
            </Collapse>
        </>
    );
}

export default CardsWrapperFooter;