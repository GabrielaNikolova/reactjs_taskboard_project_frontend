import './CardsWrapper.css';
import Card from "../Card/Card";
import AddCard from "../AddCard/AddCard";
import CardsWrapperFooter from "./CardsWrapperFooter";


function CardsWrapper() {

    return (
        <div className="cards-wrapper">
            <header className="cards-wrapper-header">
                <span className="cards-wrapper-title">Backlog</span>
                <span
                    className="cards-counter">6</span>
            </header>
            <div className="cards-container">
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <CardsWrapperFooter/>
            </div>
        </div>
    )
}

export default CardsWrapper;

//
// <button
//     className="add-card-button text-indigo-500 hover:bg-indigo-500 hover:text-indigo-100">
//     <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
//               d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
//     </svg>
// </button>