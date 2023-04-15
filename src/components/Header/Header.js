import {Link} from "react-router-dom";
import './Header.css';
import Logo from "./Logo/Logo";
import Dropdown from "react-bootstrap/Dropdown";

function Header() {
    return (
        <header className="header">
            <Logo/>
            <div className="navigation">
                <Dropdown>
                    <Dropdown.Toggle className="toggle-button">Projects</Dropdown.Toggle>
                    <Dropdown.Menu className="dropdown-menu">
                        <Dropdown.Item>
                            <Link className="mx-2 text-md font-semibold text-indigo-700" to="/projects">All
                                Projects</Link>
                        </Dropdown.Item>
                        <Dropdown.Item>
                            <Link className="mx-2 text-md font-semibold text-indigo-700" to="/add-project">Add New
                                Project</Link>
                        </Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
                <Link className="mx-2 text-md font-semibold text-gray-600 hover:text-indigo-700" to="/dashboard">Dashboard</Link>
            </div>
            <div className="user-navigation">
                <Dropdown>
                    <Dropdown.Toggle className="toggle-button">Hello, User!</Dropdown.Toggle>
                    <Dropdown.Menu className="dropdown-menu">
                        {/*<Dropdown.Item className="mx-2 text-md font-semibold text-indigo-700" href="#/action-1">Your*/}
                        {/*    Profile</Dropdown.Item>*/}
                        <Dropdown.Item className="mx-2 text-md font-semibold text-indigo-700" href="#/action-3">Sign
                            out</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
                <>
                    <Link type="button" to="/login"
                       className="nav-button mx-2 text-md font-semibold">Login</Link>

                    <Link type="button" to="/register"
                       className="nav-button text-md font-semibold">Register</Link>


                </>
            </div>
        </header>

    );

}

export default Header;