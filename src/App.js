import './App.css';
import Header from './components/Header/Header.js';
import Main from "./components/Main/Main";

function App() {
    return (
        <body
            className="flex flex-col w-screen h-screen overflow-auto text-gray-700 bg-gradient-to-tr from-blue-200 via-indigo-200 to-pink-200">
        <Header/>
        <Main/>
        </body>
    )
}

export default App;
