import './Login.css';
import {Form} from "react-bootstrap";
import {Modal} from "react-bootstrap";
import Register from "../Register/Register";
import {useState} from "react";
import Button from "../Button/Button";


function Login(props) {

    const [showRegister, setShowRegister] = useState(false);
    return (

        <Modal
            show={props.show}
            cancel={props.close}
            size="sm"
            centered
        >
            <div
                className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0">
                <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                    <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
                        Sign in to your account
                    </h1>
                    <Form className="space-y-4 md:space-y-6" action="#">
                        <div>
                            <label htmlFor="username"
                                   className="input-field-label">Username</label>
                            <input type="username" name="username" id="username"
                                   className="input-field"                                   required=""/>
                        </div>
                        <div>
                            <label htmlFor="password"
                                   className="input-field-label">Password</label>
                            <input type="password" name="password" id="password" placeholder="••••••••"
                                   className="input-field"                                   required=""/>
                        </div>
                        <Button
                            onClick={props.close}
                            value={"Sign in"}
                        />
                        <p className="text-sm font-light text-gray-500">
                            Don’t have an account yet? <a onClick={()=> setShowRegister(true)} href="#"
                                                          className="font-medium text-primary-600 hover:underline ">Register</a>
                            <Register show={showRegister} close={() => setShowRegister(false)}/>
                        </p>
                    </Form>
                </div>
            </div>
        </Modal>

    );
}

export default Login;