import {Link} from "react-router-dom";
import './Header.css';
import Logo from "./Logo/Logo";
import Dropdown from "react-bootstrap/Dropdown";
import {useAuthentication} from "../../contexts/AuthContext";

function Header() {
    const {user} = useAuthentication();
    return (
        <header className="header">
            <Logo/>
            <div className="navigation">
                <Link className="mx-2 text-md font-semibold text-gray-600 hover:text-indigo-700" to="/tasks">Tasks
                    Board</Link>
            </div>
            <div className="user-navigation">
                {user.email
                    ? <>
                        <Dropdown>
                            <Dropdown.Toggle className="toggle-button">Hello, {user.username}!</Dropdown.Toggle>
                            <Dropdown.Menu className="dropdown-menu">
                                {/*<Dropdown.Item className="mx-2 text-md font-semibold text-indigo-700" href="#/action-1">Your*/}
                                {/*    Profile</Dropdown.Item>*/}
                                <Dropdown.Item className="mx-2 text-md font-semibold text-indigo-700">
                                    <Link to="/logout">Sign out</Link>
                                </Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                        <Link type="button" to="/create-task"
                              className="nav-button mx-2 text-md font-semibold">Add Task</Link>

                    </>
                    : <>
                        <Link type="button" to="/login"
                              className="nav-button mx-2 text-md font-semibold">Login</Link>

                        <Link type="button" to="/register"
                              className="nav-button text-md font-semibold">Register</Link>
                    </>
                }
            </div>
        </header>

    );

};

export default Header;