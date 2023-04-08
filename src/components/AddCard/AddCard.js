import './AddCard.css';

function AddCard() {
    return (
        <form className="add-card-form">
            <header className="add-card-form-header">
                <span className="priority-button form-low-pr">
                    <input className="form-checkbox" type="radio" name="priority"
                           alt="Low Priority" value="card-color-low"/>
                    <label className="form-label justify-center" htmlFor="Low Priority">Low Priority</label></span>
                <span className="priority-button form-med-pr"><input className="form-checkbox" type="radio"
                                                                     name="priority"
                                                                     alt="Med Priority" value="card-color-med"/><label
                    className="form-label" htmlFor="Med Priority">Med Priority</label></span>
                <span className="priority-button form-high-pr"><input className="form-checkbox" type="radio"
                                                                      name="priority"
                                                                      alt="High Priority"
                                                                      value="card-color-high"/><label
                    className="form-label" htmlFor="High Priority">High Priority</label>
                </span>
            </header>
            <textarea className="add-card-textarea text-gray-700" typeof='text'
                      placeholder="Enter a title for this card…"
                      spellCheck="false">Enter a title for this card…</textarea>
            <footer className="add-card-form-footer">
                <input className="form-add-btn" type="submit" disabled="" value="Add"/>
            </footer>
        </form>
    );
}

export default AddCard;