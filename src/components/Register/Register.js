import './Register.css';
import {Form} from "react-bootstrap";
import {Modal} from "react-bootstrap";
import Button from "../Button/Button";


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
                                   className="input-field-label">Full
                                Name</label>
                            <input type="name" name="fullName" id="fullName"
                                   className="input-field"                                   placeholder="John Doe" required=""/>
                        </div>
                        <div>
                            <label htmlFor="username"
                                   className="input-field-label">Username</label>
                            <input type="username" name="username" id="username"
                                   placeholder="username"
                                   className="input-field"                                   required=""/>
                        </div>
                        <div>
                            <label htmlFor="password"
                                   className="input-field-label">Password</label>
                            <input type="password" name="password" id="password"
                                   placeholder="**********"
                                   className="input-field"
                                   required=""/>
                        </div>
                            <Button
                                onClick={props.close}
                                value={"Sign up"}
                            />
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