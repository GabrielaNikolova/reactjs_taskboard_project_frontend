import {Routes, Route} from "react-router-dom";
import './App.css';
import Header from './components/Header/Header.js';
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import TasksCatalog from "./components/TasksCatalog/TasksCatalog";
import ProjectsCatalog from "./components/ProjectsCatalog/ProjectsCatalog";


function App() {
    return (
        <div className="page">
            <Header/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/register" element={<Register/>}/>
                <Route path="/dashboard" element={<TasksCatalog/>}/>
                <Route path="/projects" element={<ProjectsCatalog/>}/>


            </Routes>
            {/*<Home/>*/}
            {/*<Register/>*/}
            {/*<Login/>*/}
            {/*<TasksCatalog/>*/}
        </div>


    )
}

export default App;
