import './CardsWrapper.css';
import Card from "../Card/Card";

function CardsWrapper() {
    return (
        <div className="card-wrapper">
            <header className="card-wrapper-header">
                <span className="card-wrapper-title">Backlog</span>
                <span
                    className="cards-counter">6</span>
                <button
                    className="add-card-button text-indigo-500 hover:bg-indigo-500 hover:text-indigo-100">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                              d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
                    </svg>
                </button>
            </header>
            <div className="cards-container">
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            </div>
            <footer className="card-wrapper-footer">
                <a className="add-card-composer text-sm font-semibold" href="#">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                              d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
                    </svg>
                    <span className="js-add-a-card">Add a card</span>
                </a>
            </footer>
        </div>
    )
}

export default CardsWrapper;