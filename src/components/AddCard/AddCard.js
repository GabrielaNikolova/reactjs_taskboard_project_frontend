import './AddCard.css';

function AddCard() {
    return (
        <form className="add-card-form">
            <header className="add-card-form-header">
                <span className="priority-button form-low-pr">
                    <input className="form-checkbox" type="radio" name="priority"
                           alt="Low Priority" value="card-color-low"/>
                    <label className="form-label text-md font-medium" htmlFor="Low Priority">Low Priority</label></span>
                <span className="priority-button form-med-pr"><input className="form-checkbox" type="radio"
                                                                     name="priority"
                                                                     alt="Med Priority" value="card-color-med"/><label
                    className="form-label text-md font-medium" htmlFor="Med Priority">Med Priority</label></span>
                <span className="priority-button form-high-pr"><input className="form-checkbox" type="radio"
                                                                      name="priority"
                                                                      alt="High Priority"
                                                                      value="card-color-high"/><label
                    className="form-label text-md font-medium" htmlFor="High Priority">High Priority</label>
                </span>
            </header>
            <textarea className="add-card-textarea text-gray-700 text-sm font-medium" typeof='text'
                      placeholder="Enter a title for this card…"
                      spellCheck="false"></textarea>
            <footer className="add-card-form-footer">
                <input className="form-add-btn" type="submit" disabled="" value="Add"/>
            </footer>
        </form>
    );
}

export default AddCard;