import './AddTask.css';
import Button from "../Button/Button";

function AddTask() {

    return (
        <form className="add-card-form">
            <header className="add-card-form-header">
                <span className="priority-button form-low-pr">
                    <input className="form-checkbox" type="radio" name="priority" alt="Low Priority" value=""/>
                    <label className="form-label card-color-low" htmlFor="Low Priority">Low Priority</label></span>
                <span className="priority-button form-med-pr">
                    <input className="form-checkbox" type="radio" name="priority" alt="Med Priority" value=""/>
                    <label className="form-label card-color-medium" htmlFor="Med Priority">Med Priority</label></span>
                <span className="priority-button form-high-pr">
                    <input className="form-checkbox" type="radio" name="priority" alt="High Priority" value=""/>
                    <label className="form-label card-color-high" htmlFor="High Priority">High Priority</label>
                </span>
            </header>
            <textarea className="add-card-textarea text-gray-600 text-sm font-medium" typeof='text'
                      placeholder="Enter a title for this task…"
                      spellCheck="false">Enter a title for this task…</textarea>
            <footer className="add-card-form-footer">
                <Button
                    value={"Add"}
                />
            </footer>
        </form>
    );
}

export default AddTask;