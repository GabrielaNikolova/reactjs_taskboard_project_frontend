import './Home.css';
import Button from "../Button/Button";
import {Link} from "react-router-dom";

function Home() {
    return (
        <div className="home">
            <h1 className="mb-4 text-3xl font-bold leading-none tracking-tight text-indigo-900 md:text-4xl lg:text-5xl ">TaskBoard
                brings all your tasks and teammates together</h1>
            <p className="mb-6 text-lg font-semibold text-indigo-500 lg:text-xl sm:px-16 xl:px-48">
                Keep everything in the same place — even if your team isn’t.
            </p>
            <Link to="/register">
                <Button value={"Register"}/>
            </Link>

        </div>
    )
}

export default Home;