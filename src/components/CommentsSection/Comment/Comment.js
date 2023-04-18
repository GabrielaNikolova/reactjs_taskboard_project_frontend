import './Comment.css';


function Comment() {

    return (
        <article className="single-comment">
            <div className="comment-header">
                <p className="inline-flex items-center mr-3 text-sm font-medium text-gray-900">Gaby<span>
                    <time className="text-sm font-thin text-gray-400 ml-3" dateTime="2022-02-08"
                          title="date">Feb. 8, 2022
                    </time></span>
                </p>
                <button type="button"
                        className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center">
                    <span className="material-icons">close</span>
                </button>
            </div>
            <div className="relative flex-flow">
                <p className="text-gray-900 text-sm mb-2 rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 ">AddComment section</p>
            </div>
        </article>

    );
}

export default Comment;