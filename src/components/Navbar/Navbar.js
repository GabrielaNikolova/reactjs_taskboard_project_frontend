import Dropdown from 'react-bootstrap/Dropdown';
import {useState} from "react";
import './Navbar.css';
import Register from "../Register/Register";
import Login from "../Login/Login";

function Navbar() {
    const [showRegister, setShowRegister] = useState(false);
    const [showLogin, setShowLogin] = useState(false);

    return (
        <>
            <div className="navigation">
                <Dropdown>
                    <Dropdown.Toggle className="toggle-button">Projects</Dropdown.Toggle>
                    <Dropdown.Menu className="dropdown-menu">
                        <Dropdown.Item className="mx-2 text-md font-semibold text-indigo-700" href="#/action-1">All
                            Projects</Dropdown.Item>
                        <Dropdown.Item className="mx-2 text-md font-semibold text-indigo-700" href="#/action-2">Add New
                            Project</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
                <a className="mx-2 text-md font-semibold text-gray-600 hover:text-indigo-700" href="#">Team</a>
            </div>
            <div className="user-navigation">
                <Dropdown>
                    <Dropdown.Toggle className="toggle-button">Hello, User!</Dropdown.Toggle>
                    <Dropdown.Menu className="dropdown-menu">
                        <Dropdown.Item className="mx-2 text-md font-semibold text-indigo-700" href="#/action-1">Your
                            Profile</Dropdown.Item>
                        <Dropdown.Item className="mx-2 text-md font-semibold text-indigo-700" href="#/action-3">Sign
                            out</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
                <>
                    <a onClick={() => setShowLogin(true)} type="button" href="#"
                       className="nav-button mx-2 text-md font-semibold">Login</a>
                    <Login show={showLogin} close={() => setShowLogin(false)}/>

                    <a onClick={() => setShowRegister(true)} type="button" href="#"
                       className="nav-button text-md font-semibold">Register</a>
                    <Register show={showRegister} close={() => setShowRegister(false)}/>
                </>
            </div>
        </>
    );
}

export default Navbar;