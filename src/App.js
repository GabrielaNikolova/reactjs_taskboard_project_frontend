import {Routes, Route} from "react-router-dom";
import './App.css';
import Header from './components/Header/Header.js';
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import TasksCatalog from "./components/TasksCatalog/TasksCatalog";
import ProjectsCatalog from "./components/ProjectsCatalog/ProjectsCatalog";
import {AuthProvider} from "./contexts/AuthContext";
import TaskDetails from "./components/TaskDetails/TaskDetails";
import Logout from "./components/Logout/Logout";

// const RegisterUser = lazy(() => import("./components/Register/Register"));

function App() {
    return (
        <AuthProvider>
            <div className="page">
                <Header/>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/login" element={<Login/>}/>
                    <Route path="/register" element={<Register/>}/>
                    <Route path="/projects" element={<ProjectsCatalog/>}/>

                    <Route path="/taskcatalog" element={<TasksCatalog/>}/>
                    <Route path="/taskcatalog/:taskid" element={<TaskDetails/>}/>
                    <Route path="/logout" element={<Logout/>}/>

                </Routes>
            </div>

        </AuthProvider>
    )
}

export default App;
