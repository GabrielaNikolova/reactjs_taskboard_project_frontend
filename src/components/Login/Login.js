import './Login.css';
import {Form} from "react-bootstrap";
import {Modal} from "react-bootstrap";
import Register from "../Register/Register";
import {useState} from "react";


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
                                   className="block mb-2 text-sm font-medium text-gray-900">Username</label>
                            <input type="username" name="username" id="username"
                                   className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                                   placeholder="username" required=""/>
                        </div>
                        <div>
                            <label htmlFor="password"
                                   className="block mb-2 text-sm font-medium text-gray-900">Password</label>
                            <input type="password" name="password" id="password" placeholder="••••••••"
                                   className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                                   required=""/>
                        </div>
                        <button onClick={props.close} type="submit"
                                className="signin-btn">Sign in
                        </button>
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