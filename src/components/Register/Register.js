import './Register.css';
import {Form} from "react-bootstrap";
import {Modal} from "react-bootstrap";


function Register(props) {

    return (
            <Modal
                show={props.show}
                cancel={props.close}
                size="sm"
                centered
            >
                <div
                    className="w-full bg-white rounded-lg shadow">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
                            Create an account
                        </h1>
                        <Form className="space-y-4 md:space-y-6" action="#">
                            <div>
                                <label htmlFor="fullName"
                                       className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Full
                                    Name</label>
                                <input type="name" name="fullName" id="fullName"
                                       className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                                       placeholder="John Doe" required=""/>
                            </div>
                            <div>
                                <label htmlFor="username"
                                       className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Username</label>
                                <input type="username" name="username" id="username"
                                       placeholder="username"
                                       className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                                       required=""/>
                            </div>
                            <div>
                                <label htmlFor="password"
                                       className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                                <input type="password" name="password" id="password"
                                       placeholder="**********"
                                       className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                                       required=""/>
                            </div>
                            <button onClick={props.close} type="submit"
                                    className="signup-btn">Sign
                                Up
                            </button>
                            <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                                Already have an account? <a href="#"
                                                            className="font-medium text-primary-600 hover:underline dark:text-primary-500">Login
                                here</a>
                            </p>
                        </Form>
                    </div>
                </div>
            </Modal>

    );

}

export default Register;