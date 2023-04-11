import './Main.css';
import CardsWrapper from "../CardsWrapper/CardsWrapper";
import ProjectsList from "../ProjectsList/ProjectsList";

function Main() {
    return (

        <main className="main-container">
            {/*<ProjectsList/>*/}
            <div className="px-10 mt-6">
                <h1 className="text-2xl font-bold">Team Project Board</h1>
            </div>
            <div className="wrappers-container space-x-6">
                <CardsWrapper/>
                <CardsWrapper/>
                <CardsWrapper/>
                <CardsWrapper/>
                <CardsWrapper/>
            </div>
        </main>
    );
}

export default Main;