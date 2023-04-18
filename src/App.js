import {Routes, Route} from "react-router-dom";
import './App.css';
import Header from './components/Header/Header.js';
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import TasksCatalog from "./components/TasksCatalog/TasksCatalog";
import {AuthProvider} from "./contexts/AuthContext";
import TaskDetails from "./components/TaskDetails/TaskDetails";
import Logout from "./components/Logout/Logout";
import {TaskProvider} from "./contexts/TaskContext";
import PrivateRoute from "./components/common/PrivateRoute";
import AddTask from "./components/AddTask/AddTask";
import TaskEdit from "./components/TaskEdit/TaskEdit";
import TaskOwner from "./components/common/TaskOwner";

// const RegisterUser = lazy(() => import("./components/Register/Register"));

function App() {
    return (
        <AuthProvider>
            <div className="page">
                <Header/>
                <TaskProvider>
                    <Routes>
                        <Route path="/" element={<Home/>}/>
                        <Route path="/login" element={<Login/>}/>
                        <Route path="/register" element={<Register/>}/>
                        <Route path="/logout" element={<Logout/>}/>
                        {/*<Route path="/projects" element={<ProjectsCatalog/>}/>*/}

                        <Route path="/tasks" element={<TasksCatalog/>}/>
                        <Route path="/tasks/:taskId" element={<TaskDetails/>}/>

                        <Route path="crete-task" element={(
                            <PrivateRoute>
                                <AddTask/>
                            </PrivateRoute>
                        )}/>

                        <Route element={<TaskOwner/>}>
                            <Route path="tasks/:taskId/edit" element={<TaskEdit/>}/>
                        </Route>

                    </Routes>
                </TaskProvider>
            </div>

        </AuthProvider>
    )
}

export default App;
