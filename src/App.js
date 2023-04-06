import './App.css';
import Header from './components/Header/Header.js';

function App() {
    return (
        <div className="App">
            <div
                className="flex flex-col w-screen h-screen overflow-auto text-gray-700 bg-gradient-to-tr from-blue-200 via-indigo-200 to-pink-200">
                <Header/>
                <div className="px-10 mt-6">
                    <h1 className="text-2xl font-bold">Team Project Board</h1>
                </div>
                <div className="flex flex-grow px-10 mt-4 space-x-6 overflow-auto">
                    <div className="flex flex-col flex-shrink-0 w-72">
                        <div className="flex items-center flex-shrink-0 h-10 px-2">
                            <span className="block text-sm font-semibold">Backlog</span>
                            <span
                                className="flex items-center justify-center w-5 h-5 ml-2 text-sm font-semibold text-indigo-500 bg-white rounded bg-opacity-30">6</span>
                            <button
                                className="flex items-center justify-center w-6 h-6 ml-auto text-indigo-500 rounded hover:bg-indigo-500 hover:text-indigo-100">
                                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                          d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
                                </svg>
                            </button>
                        </div>
                        <div className="flex flex-col pb-2 overflow-auto">
                            <div
                                className="relative flex flex-col items-start p-4 mt-3 bg-white rounded-lg cursor-pointer bg-opacity-90 group hover:bg-opacity-100"
                                draggable="true">
                                <button
                                    className="absolute top-0 right-0 flex items-center justify-center hidden w-5 h-5 mt-3 mr-2 text-gray-500 rounded hover:bg-gray-200 hover:text-gray-700 group-hover:flex">
                                    <svg className="w-4 h-4 fill-current" xmlns="http://www.w3.org/2000/svg"
                                         viewBox="0 0 20 20" fill="currentColor">
                                        <path
                                            d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z"/>
                                    </svg>
                                </button>
                                <span
                                    className="flex items-center h-6 px-3 text-xs font-semibold text-pink-500 bg-pink-100 rounded-full">Design</span>
                                <h4 className="mt-3 text-sm font-medium">This is the title of the card for the thing
                                    that needs to be done.</h4>
                                <div className="flex items-center w-full mt-3 text-xs font-medium text-gray-400">
                                    <div className="flex items-center">
                                        <svg className="w-4 h-4 text-gray-300 fill-current"
                                             xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd"
                                                  d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                                                  clipRule="evenodd"/>
                                        </svg>
                                        <span className="ml-1 leading-none">Dec 12</span>
                                    </div>
                                    <div className="relative flex items-center ml-4">
                                        <svg className="relative w-4 h-4 text-gray-300 fill-current"
                                             xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd"
                                                  d="M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zM7 8H5v2h2V8zm2 0h2v2H9V8zm6 0h-2v2h2V8z"
                                                  clipRule="evenodd"/>
                                        </svg>
                                        <span className="ml-1 leading-none">4</span>
                                    </div>
                                    <div className="flex items-center ml-4">
                                        <svg className="w-4 h-4 text-gray-300 fill-current"
                                             xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd"
                                                  d="M8 4a3 3 0 00-3 3v4a5 5 0 0010 0V7a1 1 0 112 0v4a7 7 0 11-14 0V7a5 5 0 0110 0v4a3 3 0 11-6 0V7a1 1 0 012 0v4a1 1 0 102 0V7a3 3 0 00-3-3z"
                                                  clipRule="evenodd"/>
                                        </svg>
                                        <span className="ml-1 leading-none">1</span>
                                    </div>
                                    <img className="w-6 h-6 ml-auto rounded-full"
                                         src='https://randomuser.me/api/portraits/women/26.jpg' alt=""/>
                                </div>
                            </div>
                            <div
                                className="relative flex flex-col items-start p-4 mt-3 bg-white rounded-lg cursor-pointer bg-opacity-90 group hover:bg-opacity-100"
                                draggable="true">
                                <button
                                    className="absolute top-0 right-0 flex items-center justify-center hidden w-5 h-5 mt-3 mr-2 text-gray-500 rounded hover:bg-gray-200 hover:text-gray-700 group-hover:flex">
                                    <svg className="w-4 h-4 fill-current" xmlns="http://www.w3.org/2000/svg"
                                         viewBox="0 0 20 20" fill="currentColor">
                                        <path
                                            d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z"/>
                                    </svg>
                                </button>
                                <span
                                    className="flex items-center h-6 px-3 text-xs font-semibold text-green-500 bg-green-100 rounded-full">Dev</span>
                                <h4 className="mt-3 text-sm font-medium">This is the title of the card for the thing
                                    that needs to be done.</h4>
                                <div className="flex items-center w-full mt-3 text-xs font-medium text-gray-400">
                                    <div className="flex items-center">
                                        <svg className="w-4 h-4 text-gray-300 fill-current"
                                             xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd"
                                                  d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                                                  clipRule="evenodd"/>
                                        </svg>
                                        <span className="ml-1 leading-none">Dec 12</span>
                                    </div>
                                    <div className="relative flex items-center ml-4">
                                        <svg className="relative w-4 h-4 text-gray-300 fill-current"
                                             xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd"
                                                  d="M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zM7 8H5v2h2V8zm2 0h2v2H9V8zm6 0h-2v2h2V8z"
                                                  clipRule="evenodd"/>
                                        </svg>
                                        <span className="ml-1 leading-none">4</span>
                                    </div>
                                    <div className="flex items-center ml-4">
                                        <svg className="w-4 h-4 text-gray-300 fill-current"
                                             xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd"
                                                  d="M8 4a3 3 0 00-3 3v4a5 5 0 0010 0V7a1 1 0 112 0v4a7 7 0 11-14 0V7a5 5 0 0110 0v4a3 3 0 11-6 0V7a1 1 0 012 0v4a1 1 0 102 0V7a3 3 0 00-3-3z"
                                                  clipRule="evenodd"/>
                                        </svg>
                                        <span className="ml-1 leading-none">1</span>
                                    </div>
                                    <img className="w-6 h-6 ml-auto rounded-full"
                                         src='https://randomuser.me/api/portraits/women/44.jpg' alt=""/>
                                </div>
                            </div>
                            <div
                                className="relative flex flex-col items-start p-4 mt-3 bg-white rounded-lg cursor-pointer bg-opacity-90 group hover:bg-opacity-100"
                                draggable="true">
                                <button
                                    className="absolute top-0 right-0 flex items-center justify-center hidden w-5 h-5 mt-3 mr-2 text-gray-500 rounded hover:bg-gray-200 hover:text-gray-700 group-hover:flex">
                                    <svg className="w-4 h-4 fill-current" xmlns="http://www.w3.org/2000/svg"
                                         viewBox="0 0 20 20" fill="currentColor">
                                        <path
                                            d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z"/>
                                    </svg>
                                </button>
                                <span
                                    className="flex items-center h-6 px-3 text-xs font-semibold text-green-500 bg-green-100 rounded-full">Dev</span>
                                <h4 className="mt-3 text-sm font-medium">This is the title of the card for the thing
                                    that needs to be done.</h4>
                                <div className="flex items-center w-full mt-3 text-xs font-medium text-gray-400">
                                    <div className="flex items-center">
                                        <svg className="w-4 h-4 text-gray-300 fill-current"
                                             xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd"
                                                  d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                                                  clipRule="evenodd"/>
                                        </svg>
                                        <span className="ml-1 leading-none">Dec 12</span>
                                    </div>
                                    <div className="relative flex items-center ml-4">
                                        <svg className="relative w-4 h-4 text-gray-300 fill-current"
                                             xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd"
                                                  d="M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zM7 8H5v2h2V8zm2 0h2v2H9V8zm6 0h-2v2h2V8z"
                                                  clipRule="evenodd"/>
                                        </svg>
                                        <span className="ml-1 leading-none">4</span>
                                    </div>
                                    <div className="flex items-center ml-4">
                                        <svg className="w-4 h-4 text-gray-300 fill-current"
                                             xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd"
                                                  d="M8 4a3 3 0 00-3 3v4a5 5 0 0010 0V7a1 1 0 112 0v4a7 7 0 11-14 0V7a5 5 0 0110 0v4a3 3 0 11-6 0V7a1 1 0 012 0v4a1 1 0 102 0V7a3 3 0 00-3-3z"
                                                  clipRule="evenodd"/>
                                        </svg>
                                        <span className="ml-1 leading-none">1</span>
                                    </div>
                                    <img className="w-6 h-6 ml-auto rounded-full"
                                         src='https://randomuser.me/api/portraits/men/46.jpg' alt=""/>
                                </div>
                            </div>
                            <div
                                className="relative flex flex-col items-start p-4 mt-3 bg-white rounded-lg cursor-pointer bg-opacity-90 group hover:bg-opacity-100"
                                draggable="true">
                                <button
                                    className="absolute top-0 right-0 flex items-center justify-center hidden w-5 h-5 mt-3 mr-2 text-gray-500 rounded hover:bg-gray-200 hover:text-gray-700 group-hover:flex">
                                    <svg className="w-4 h-4 fill-current" xmlns="http://www.w3.org/2000/svg"
                                         viewBox="0 0 20 20" fill="currentColor">
                                        <path
                                            d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z"/>
                                    </svg>
                                </button>
                                <span
                                    className="flex items-center h-6 px-3 text-xs font-semibold text-yellow-500 bg-yellow-100 rounded-full">Copywriting</span>
                                <h4 className="mt-3 text-sm font-medium">This is the title of the card for the thing
                                    that needs to be done.</h4>
                                <div className="flex items-center w-full mt-3 text-xs font-medium text-gray-400">
                                    <div className="flex items-center">
                                        <svg className="w-4 h-4 text-gray-300 fill-current"
                                             xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd"
                                                  d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                                                  clipRule="evenodd"/>
                                        </svg>
                                        <span className="ml-1 leading-none">Dec 12</span>
                                    </div>
                                    <div className="relative flex items-center ml-4">
                                        <svg className="relative w-4 h-4 text-gray-300 fill-current"
                                             xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd"
                                                  d="M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zM7 8H5v2h2V8zm2 0h2v2H9V8zm6 0h-2v2h2V8z"
                                                  clipRule="evenodd"/>
                                        </svg>
                                        <span className="ml-1 leading-none">4</span>
                                    </div>
                                    <div className="flex items-center ml-4">
                                        <svg className="w-4 h-4 text-gray-300 fill-current"
                                             xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd"
                                                  d="M8 4a3 3 0 00-3 3v4a5 5 0 0010 0V7a1 1 0 112 0v4a7 7 0 11-14 0V7a5 5 0 0110 0v4a3 3 0 11-6 0V7a1 1 0 012 0v4a1 1 0 102 0V7a3 3 0 00-3-3z"
                                                  clipRule="evenodd"/>
                                        </svg>
                                        <span className="ml-1 leading-none">1</span>
                                    </div>
                                    <img className="w-6 h-6 ml-auto rounded-full"
                                         src='https://uifaces.co/our-content/donated/vIqzOHXj.jpg' alt=""/>
                                </div>
                            </div>
                            <div
                                className="relative flex flex-col items-start p-4 mt-3 bg-white rounded-lg cursor-pointer bg-opacity-90 group hover:bg-opacity-100"
                                draggable="true">
                                <button
                                    className="absolute top-0 right-0 flex items-center justify-center hidden w-5 h-5 mt-3 mr-2 text-gray-500 rounded hover:bg-gray-200 hover:text-gray-700 group-hover:flex">
                                    <svg className="w-4 h-4 fill-current" xmlns="http://www.w3.org/2000/svg"
                                         viewBox="0 0 20 20" fill="currentColor">
                                        <path
                                            d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z"/>
                                    </svg>
                                </button>
                                <span
                                    className="flex items-center h-6 px-3 text-xs font-semibold text-green-500 bg-green-100 rounded-full">Dev</span>
                                <h4 className="mt-3 text-sm font-medium">This is the title of the card for the thing
                                    that needs to be done.</h4>
                                <div className="flex items-center w-full mt-3 text-xs font-medium text-gray-400">
                                    <div className="flex items-center">
                                        <svg className="w-4 h-4 text-gray-300 fill-current"
                                             xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd"
                                                  d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                                                  clipRule="evenodd"/>
                                        </svg>
                                        <span className="ml-1 leading-none">Dec 12</span>
                                    </div>
                                    <div className="relative flex items-center ml-4">
                                        <svg className="relative w-4 h-4 text-gray-300 fill-current"
                                             xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd"
                                                  d="M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zM7 8H5v2h2V8zm2 0h2v2H9V8zm6 0h-2v2h2V8z"
                                                  clipRule="evenodd"/>
                                        </svg>
                                        <span className="ml-1 leading-none">4</span>
                                    </div>
                                    <div className="flex items-center ml-4">
                                        <svg className="w-4 h-4 text-gray-300 fill-current"
                                             xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd"
                                                  d="M8 4a3 3 0 00-3 3v4a5 5 0 0010 0V7a1 1 0 112 0v4a7 7 0 11-14 0V7a5 5 0 0110 0v4a3 3 0 11-6 0V7a1 1 0 012 0v4a1 1 0 102 0V7a3 3 0 00-3-3z"
                                                  clipRule="evenodd"/>
                                        </svg>
                                        <span className="ml-1 leading-none">1</span>
                                    </div>
                                    <img className="w-6 h-6 ml-auto rounded-full"
                                         src='https://randomuser.me/api/portraits/women/48.jpg' alt=""/>
                                </div>
                            </div>
                            <div
                                className="relative flex flex-col items-start p-4 mt-3 bg-white rounded-lg cursor-pointer bg-opacity-90 group hover:bg-opacity-100"
                                draggable="true">
                                <button
                                    className="absolute top-0 right-0 flex items-center justify-center hidden w-5 h-5 mt-3 mr-2 text-gray-500 rounded hover:bg-gray-200 hover:text-gray-700 group-hover:flex">
                                    <svg className="w-4 h-4 fill-current" xmlns="http://www.w3.org/2000/svg"
                                         viewBox="0 0 20 20" fill="currentColor">
                                        <path
                                            d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z"/>
                                    </svg>
                                </button>
                                <span
                                    className="flex items-center h-6 px-3 text-xs font-semibold text-yellow-500 bg-yellow-100 rounded-full">Copywriting</span>
                                <h4 className="mt-3 text-sm font-medium">This is the title of the card for the thing
                                    that needs to be done.</h4>
                                <div className="flex items-center w-full mt-3 text-xs font-medium text-gray-400">
                                    <div className="flex items-center">
                                        <svg className="w-4 h-4 text-gray-300 fill-current"
                                             xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd"
                                                  d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                                                  clipRule="evenodd"/>
                                        </svg>
                                        <span className="ml-1 leading-none">Dec 12</span>
                                    </div>
                                    <div className="relative flex items-center ml-4">
                                        <svg className="relative w-4 h-4 text-gray-300 fill-current"
                                             xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd"
                                                  d="M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zM7 8H5v2h2V8zm2 0h2v2H9V8zm6 0h-2v2h2V8z"
                                                  clipRule="evenodd"/>
                                        </svg>
                                        <span className="ml-1 leading-none">4</span>
                                    </div>
                                    <div className="flex items-center ml-4">
                                        <svg className="w-4 h-4 text-gray-300 fill-current"
                                             xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd"
                                                  d="M8 4a3 3 0 00-3 3v4a5 5 0 0010 0V7a1 1 0 112 0v4a7 7 0 11-14 0V7a5 5 0 0110 0v4a3 3 0 11-6 0V7a1 1 0 012 0v4a1 1 0 102 0V7a3 3 0 00-3-3z"
                                                  clipRule="evenodd"/>
                                        </svg>
                                        <span className="ml-1 leading-none">1</span>
                                    </div>
                                    <img className="w-6 h-6 ml-auto rounded-full"
                                         src='https://randomuser.me/api/portraits/women/26.jpg' alt=""/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col flex-shrink-0 w-72">
                        <div className="flex items-center flex-shrink-0 h-10 px-2">
                            <span className="block text-sm font-semibold">Ready</span>
                            <span
                                className="flex items-center justify-center w-5 h-5 ml-2 text-sm font-semibold text-indigo-500 bg-white rounded bg-opacity-30">3</span>
                            <button
                                className="flex items-center justify-center w-6 h-6 ml-auto text-indigo-500 rounded hover:bg-indigo-500 hover:text-indigo-100">
                                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round"
                                          strokeWidth="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
                                </svg>
                            </button>
                        </div>
                        <div className="flex flex-col pb-2 overflow-auto">
                            <div
                                className="relative flex flex-col items-start p-4 mt-3 bg-white rounded-lg cursor-pointer bg-opacity-90 group hover:bg-opacity-100"
                                draggable="true">
                                <button
                                    className="absolute top-0 right-0 flex items-center justify-center hidden w-5 h-5 mt-3 mr-2 text-gray-500 rounded hover:bg-gray-200 hover:text-gray-700 group-hover:flex">
                                    <svg className="w-4 h-4 fill-current" xmlns="http://www.w3.org/2000/svg"
                                         viewBox="0 0 20 20" fill="currentColor">
                                        <path
                                            d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z"/>
                                    </svg>
                                </button>
                                <span
                                    className="flex items-center h-6 px-3 text-xs font-semibold text-pink-500 bg-pink-100 rounded-full">Design</span>
                                <h4 className="mt-3 text-sm font-medium">This is the title of the card for the thing
                                    that needs to be done.</h4>
                                <div className="flex items-center w-full mt-3 text-xs font-medium text-gray-400">
                                    <div className="flex items-center">
                                        <svg className="w-4 h-4 text-gray-300 fill-current"
                                             xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd"
                                                  d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                                                  clipRule="evenodd"/>
                                        </svg>
                                        <span className="ml-1 leading-none">Dec 12</span>
                                    </div>
                                    <div className="relative flex items-center ml-4">
                                        <svg className="relative w-4 h-4 text-gray-300 fill-current"
                                             xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd"
                                                  d="M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zM7 8H5v2h2V8zm2 0h2v2H9V8zm6 0h-2v2h2V8z"
                                                  clipRule="evenodd"/>
                                        </svg>
                                        <span className="ml-1 leading-none">4</span>
                                    </div>
                                    <div className="flex items-center ml-4">
                                        <svg className="w-4 h-4 text-gray-300 fill-current"
                                             xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd"
                                                  d="M8 4a3 3 0 00-3 3v4a5 5 0 0010 0V7a1 1 0 112 0v4a7 7 0 11-14 0V7a5 5 0 0110 0v4a3 3 0 11-6 0V7a1 1 0 012 0v4a1 1 0 102 0V7a3 3 0 00-3-3z"
                                                  clipRule="evenodd"/>
                                        </svg>
                                        <span className="ml-1 leading-none">1</span>
                                    </div>
                                    <img className="w-6 h-6 ml-auto rounded-full"
                                         src='https://randomuser.me/api/portraits/women/26.jpg' alt=""/>
                                </div>
                            </div>
                            <div
                                className="relative flex flex-col items-start p-4 mt-3 bg-white rounded-lg cursor-pointer bg-opacity-90 group hover:bg-opacity-100"
                                draggable="true">
                                <button
                                    className="absolute top-0 right-0 flex items-center justify-center hidden w-5 h-5 mt-3 mr-2 text-gray-500 rounded hover:bg-gray-200 hover:text-gray-700 group-hover:flex">
                                    <svg className="w-4 h-4 fill-current" xmlns="http://www.w3.org/2000/svg"
                                         viewBox="0 0 20 20" fill="currentColor">
                                        <path
                                            d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z"/>
                                    </svg>
                                </button>
                                <span
                                    className="flex items-center h-6 px-3 text-xs font-semibold text-green-500 bg-green-100 rounded-full">Dev</span>
                                <h4 className="mt-3 text-sm font-medium">This is the title of the card for the thing
                                    that needs to be done.</h4>
                                <div className="flex items-center w-full mt-3 text-xs font-medium text-gray-400">
                                    <div className="flex items-center">
                                        <svg className="w-4 h-4 text-gray-300 fill-current"
                                             xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd"
                                                  d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                                                  clipRule="evenodd"/>
                                        </svg>
                                        <span className="ml-1 leading-none">Dec 12</span>
                                    </div>
                                    <div className="relative flex items-center ml-4">
                                        <svg className="relative w-4 h-4 text-gray-300 fill-current"
                                             xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd"
                                                  d="M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zM7 8H5v2h2V8zm2 0h2v2H9V8zm6 0h-2v2h2V8z"
                                                  clipRule="evenodd"/>
                                        </svg>
                                        <span className="ml-1 leading-none">4</span>
                                    </div>
                                    <div className="flex items-center ml-4">
                                        <svg className="w-4 h-4 text-gray-300 fill-current"
                                             xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd"
                                                  d="M8 4a3 3 0 00-3 3v4a5 5 0 0010 0V7a1 1 0 112 0v4a7 7 0 11-14 0V7a5 5 0 0110 0v4a3 3 0 11-6 0V7a1 1 0 012 0v4a1 1 0 102 0V7a3 3 0 00-3-3z"
                                                  clipRule="evenodd"/>
                                        </svg>
                                        <span className="ml-1 leading-none">1</span>
                                    </div>
                                    <img className="w-6 h-6 ml-auto rounded-full"
                                         src='https://randomuser.me/api/portraits/men/64.jpg' alt=""/>
                                </div>
                            </div>
                            <div
                                className="relative flex flex-col items-start p-4 mt-3 bg-white rounded-lg cursor-pointer bg-opacity-90 group hover:bg-opacity-100"
                                draggable="true">
                                <button
                                    className="absolute top-0 right-0 flex items-center justify-center hidden w-5 h-5 mt-3 mr-2 text-gray-500 rounded hover:bg-gray-200 hover:text-gray-700 group-hover:flex">
                                    <svg className="w-4 h-4 fill-current" xmlns="http://www.w3.org/2000/svg"
                                         viewBox="0 0 20 20" fill="currentColor">
                                        <path
                                            d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z"/>
                                    </svg>
                                </button>
                                <span
                                    className="flex items-center h-6 px-3 text-xs font-semibold text-pink-500 bg-pink-100 rounded-full">Design</span>
                                <h4 className="mt-3 text-sm font-medium">This is the title of the card for the thing
                                    that needs to be done.</h4>
                                <div className="flex items-center w-full mt-3 text-xs font-medium text-gray-400">
                                    <div className="flex items-center">
                                        <svg className="w-4 h-4 text-gray-300 fill-current"
                                             xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd"
                                                  d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                                                  clipRule="evenodd"/>
                                        </svg>
                                        <span className="ml-1 leading-none">Dec 12</span>
                                    </div>
                                    <div className="relative flex items-center ml-4">
                                        <svg className="relative w-4 h-4 text-gray-300 fill-current"
                                             xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd"
                                                  d="M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zM7 8H5v2h2V8zm2 0h2v2H9V8zm6 0h-2v2h2V8z"
                                                  clipRule="evenodd"/>
                                        </svg>
                                        <span className="ml-1 leading-none">4</span>
                                    </div>
                                    <div className="flex items-center ml-4">
                                        <svg className="w-4 h-4 text-gray-300 fill-current"
                                             xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd"
                                                  d="M8 4a3 3 0 00-3 3v4a5 5 0 0010 0V7a1 1 0 112 0v4a7 7 0 11-14 0V7a5 5 0 0110 0v4a3 3 0 11-6 0V7a1 1 0 012 0v4a1 1 0 102 0V7a3 3 0 00-3-3z"
                                                  clipRule="evenodd"/>
                                        </svg>
                                        <span className="ml-1 leading-none">1</span>
                                    </div>
                                    <img className="w-6 h-6 ml-auto rounded-full"
                                         src='https://randomuser.me/api/portraits/women/26.jpg' alt=""/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col flex-shrink-0 w-72">
                        <div className="flex items-center flex-shrink-0 h-10 px-2">
                            <span className="block text-sm font-semibold">Doing</span>
                            <span
                                className="flex items-center justify-center w-5 h-5 ml-2 text-sm font-semibold text-indigo-500 bg-white rounded bg-opacity-30">2</span>
                            <button
                                className="flex items-center justify-center w-6 h-6 ml-auto text-indigo-500 rounded hover:bg-indigo-500 hover:text-indigo-100">
                                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                          d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
                                </svg>
                            </button>
                        </div>
                        <div className="flex flex-col pb-2 overflow-auto">
                            <div
                                className="relative flex flex-col items-start p-4 mt-3 bg-white rounded-lg cursor-pointer bg-opacity-90 group hover:bg-opacity-100"
                                draggable="true">
                                <button
                                    className="absolute top-0 right-0 flex items-center justify-center hidden w-5 h-5 mt-3 mr-2 text-gray-500 rounded hover:bg-gray-200 hover:text-gray-700 group-hover:flex">
                                    <svg className="w-4 h-4 fill-current" xmlns="http://www.w3.org/2000/svg"
                                         viewBox="0 0 20 20" fill="currentColor">
                                        <path
                                            d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z"/>
                                    </svg>
                                </button>
                                <span
                                    className="flex items-center h-6 px-3 text-xs font-semibold text-pink-500 bg-pink-100 rounded-full">Design</span>
                                <h4 className="mt-3 text-sm font-medium">This is the title of the card for the thing
                                    that needs to be done.</h4>
                                <div className="flex items-center w-full mt-3 text-xs font-medium text-gray-400">
                                    <div className="flex items-center">
                                        <svg className="w-4 h-4 text-gray-300 fill-current"
                                             xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd"
                                                  d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                                                  clipRule="evenodd"/>
                                        </svg>
                                        <span className="ml-1 leading-none">Dec 12</span>
                                    </div>
                                    <div className="relative flex items-center ml-4">
                                        <svg className="relative w-4 h-4 text-gray-300 fill-current"
                                             xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd"
                                                  d="M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zM7 8H5v2h2V8zm2 0h2v2H9V8zm6 0h-2v2h2V8z"
                                                  clipRule="evenodd"/>
                                        </svg>
                                        <span className="ml-1 leading-none">4</span>
                                    </div>
                                    <div className="flex items-center ml-4">
                                        <svg className="w-4 h-4 text-gray-300 fill-current"
                                             xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd"
                                                  d="M8 4a3 3 0 00-3 3v4a5 5 0 0010 0V7a1 1 0 112 0v4a7 7 0 11-14 0V7a5 5 0 0110 0v4a3 3 0 11-6 0V7a1 1 0 012 0v4a1 1 0 102 0V7a3 3 0 00-3-3z"
                                                  clipRule="evenodd"/>
                                        </svg>
                                        <span className="ml-1 leading-none">1</span>
                                    </div>
                                    <img className="w-6 h-6 ml-auto rounded-full"
                                         src='https://randomuser.me/api/portraits/women/26.jpg' alt=""/>
                                </div>
                            </div>
                            <div
                                className="relative flex flex-col items-start p-4 mt-3 bg-white rounded-lg cursor-pointer bg-opacity-90 group hover:bg-opacity-100"
                                draggable="true">
                                <button
                                    className="absolute top-0 right-0 flex items-center justify-center hidden w-5 h-5 mt-3 mr-2 text-gray-500 rounded hover:bg-gray-200 hover:text-gray-700 group-hover:flex">
                                    <svg className="w-4 h-4 fill-current" xmlns="http://www.w3.org/2000/svg"
                                         viewBox="0 0 20 20" fill="currentColor">
                                        <path
                                            d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z"/>
                                    </svg>
                                </button>
                                <span
                                    className="flex items-center h-6 px-3 text-xs font-semibold text-green-500 bg-green-100 rounded-full">Dev</span>
                                <h4 className="mt-3 text-sm font-medium">This is the title of the card for the thing
                                    that needs to be done.</h4>
                                <div className="flex items-center w-full mt-3 text-xs font-medium text-gray-400">
                                    <div className="flex items-center">
                                        <svg className="w-4 h-4 text-gray-300 fill-current"
                                             xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd"
                                                  d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                                                  clipRule="evenodd"/>
                                        </svg>
                                        <span className="ml-1 leading-none">Dec 12</span>
                                    </div>
                                    <div className="relative flex items-center ml-4">
                                        <svg className="relative w-4 h-4 text-gray-300 fill-current"
                                             xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd"
                                                  d="M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zM7 8H5v2h2V8zm2 0h2v2H9V8zm6 0h-2v2h2V8z"
                                                  clipRule="evenodd"/>
                                        </svg>
                                        <span className="ml-1 leading-none">4</span>
                                    </div>
                                    <div className="flex items-center ml-4">
                                        <svg className="w-4 h-4 text-gray-300 fill-current"
                                             xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd"
                                                  d="M8 4a3 3 0 00-3 3v4a5 5 0 0010 0V7a1 1 0 112 0v4a7 7 0 11-14 0V7a5 5 0 0110 0v4a3 3 0 11-6 0V7a1 1 0 012 0v4a1 1 0 102 0V7a3 3 0 00-3-3z"
                                                  clipRule="evenodd"/>
                                        </svg>
                                        <span className="ml-1 leading-none">1</span>
                                    </div>
                                    <img className="w-6 h-6 ml-auto rounded-full"
                                         src='https://randomuser.me/api/portraits/men/64.jpg' alt=""/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col flex-shrink-0 w-72">
                        <div className="flex items-center flex-shrink-0 h-10 px-2">
                            <span className="block text-sm font-semibold">Review</span>
                            <span
                                className="flex items-center justify-center w-5 h-5 ml-2 text-sm font-semibold text-indigo-500 bg-white rounded bg-opacity-30">3</span>
                            <button
                                className="flex items-center justify-center w-6 h-6 ml-auto text-indigo-500 rounded hover:bg-indigo-500 hover:text-indigo-100">
                                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                          d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
                                </svg>
                            </button>
                        </div>
                        <div className="flex flex-col pb-2 overflow-auto">
                            <div
                                className="relative flex flex-col items-start p-4 mt-3 bg-white rounded-lg cursor-pointer bg-opacity-90 group hover:bg-opacity-100"
                                draggable="true">
                                <button
                                    className="absolute top-0 right-0 flex items-center justify-center hidden w-5 h-5 mt-3 mr-2 text-gray-500 rounded hover:bg-gray-200 hover:text-gray-700 group-hover:flex">
                                    <svg className="w-4 h-4 fill-current" xmlns="http://www.w3.org/2000/svg"
                                         viewBox="0 0 20 20" fill="currentColor">
                                        <path
                                            d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z"/>
                                    </svg>
                                </button>
                                <span
                                    className="flex items-center h-6 px-3 text-xs font-semibold text-green-500 bg-green-100 rounded-full">Dev</span>
                                <h4 className="mt-3 text-sm font-medium">This is the title of the card for the thing
                                    that needs to be done.</h4>
                                <div className="flex items-center w-full mt-3 text-xs font-medium text-gray-400">
                                    <div className="flex items-center">
                                        <svg className="w-4 h-4 text-gray-300 fill-current"
                                             xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd"
                                                  d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                                                  clipRule="evenodd"/>
                                        </svg>
                                        <span className="ml-1 leading-none">Dec 12</span>
                                    </div>
                                    <div className="relative flex items-center ml-4">
                                        <svg className="relative w-4 h-4 text-gray-300 fill-current"
                                             xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd"
                                                  d="M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zM7 8H5v2h2V8zm2 0h2v2H9V8zm6 0h-2v2h2V8z"
                                                  clipRule="evenodd"/>
                                        </svg>
                                        <span className="ml-1 leading-none">4</span>
                                    </div>
                                    <div className="flex items-center ml-4">
                                        <svg className="w-4 h-4 text-gray-300 fill-current"
                                             xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd"
                                                  d="M8 4a3 3 0 00-3 3v4a5 5 0 0010 0V7a1 1 0 112 0v4a7 7 0 11-14 0V7a5 5 0 0110 0v4a3 3 0 11-6 0V7a1 1 0 012 0v4a1 1 0 102 0V7a3 3 0 00-3-3z"
                                                  clipRule="evenodd"/>
                                        </svg>
                                        <span className="ml-1 leading-none">1</span>
                                    </div>
                                    <img className="w-6 h-6 ml-auto rounded-full"
                                         src='https://randomuser.me/api/portraits/men/64.jpg' alt=""/>
                                </div>
                            </div>
                            <div
                                className="relative flex flex-col items-start p-4 mt-3 bg-white rounded-lg cursor-pointer bg-opacity-90 group hover:bg-opacity-100"
                                draggable="true">
                                <button
                                    className="absolute top-0 right-0 flex items-center justify-center hidden w-5 h-5 mt-3 mr-2 text-gray-500 rounded hover:bg-gray-200 hover:text-gray-700 group-hover:flex">
                                    <svg className="w-4 h-4 fill-current" xmlns="http://www.w3.org/2000/svg"
                                         viewBox="0 0 20 20" fill="currentColor">
                                        <path
                                            d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z"/>
                                    </svg>
                                </button>
                                <span
                                    className="flex items-center h-6 px-3 text-xs font-semibold text-yellow-500 bg-yellow-100 rounded-full">Copywriting</span>
                                <h4 className="mt-3 text-sm font-medium">This is the title of the card for the thing
                                    that needs to be done.</h4>
                                <div className="flex items-center w-full mt-3 text-xs font-medium text-gray-400">
                                    <div className="flex items-center">
                                        <svg className="w-4 h-4 text-gray-300 fill-current"
                                             xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd"
                                                  d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                                                  clipRule="evenodd"/>
                                        </svg>
                                        <span className="ml-1 leading-none">Dec 12</span>
                                    </div>
                                    <div className="relative flex items-center ml-4">
                                        <svg className="relative w-4 h-4 text-gray-300 fill-current"
                                             xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd"
                                                  d="M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zM7 8H5v2h2V8zm2 0h2v2H9V8zm6 0h-2v2h2V8z"
                                                  clipRule="evenodd"/>
                                        </svg>
                                        <span className="ml-1 leading-none">4</span>
                                    </div>
                                    <div className="flex items-center ml-4">
                                        <svg className="w-4 h-4 text-gray-300 fill-current"
                                             xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd"
                                                  d="M8 4a3 3 0 00-3 3v4a5 5 0 0010 0V7a1 1 0 112 0v4a7 7 0 11-14 0V7a5 5 0 0110 0v4a3 3 0 11-6 0V7a1 1 0 012 0v4a1 1 0 102 0V7a3 3 0 00-3-3z"
                                                  clipRule="evenodd"/>
                                        </svg>
                                        <span className="ml-1 leading-none">1</span>
                                    </div>
                                    <img className="w-6 h-6 ml-auto rounded-full"
                                         src='https://randomuser.me/api/portraits/women/44.jpg' alt=""/>
                                </div>
                            </div>
                            <div
                                className="relative flex flex-col items-start p-4 mt-3 bg-white rounded-lg cursor-pointer bg-opacity-90 group hover:bg-opacity-100"
                                draggable="true">
                                <button
                                    className="absolute top-0 right-0 flex items-center justify-center hidden w-5 h-5 mt-3 mr-2 text-gray-500 rounded hover:bg-gray-200 hover:text-gray-700 group-hover:flex">
                                    <svg className="w-4 h-4 fill-current" xmlns="http://www.w3.org/2000/svg"
                                         viewBox="0 0 20 20" fill="currentColor">
                                        <path
                                            d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z"/>
                                    </svg>
                                </button>
                                <span
                                    className="flex items-center h-6 px-3 text-xs font-semibold text-pink-500 bg-pink-100 rounded-full">Design</span>
                                <h4 className="mt-3 text-sm font-medium">This is the title of the card for the thing
                                    that needs to be done.</h4>
                                <div className="flex items-center w-full mt-3 text-xs font-medium text-gray-400">
                                    <div className="flex items-center">
                                        <svg className="w-4 h-4 text-gray-300 fill-current"
                                             xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd"
                                                  d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                                                  clipRule="evenodd"/>
                                        </svg>
                                        <span className="ml-1 leading-none">Dec 12</span>
                                    </div>
                                    <div className="relative flex items-center ml-4">
                                        <svg className="relative w-4 h-4 text-gray-300 fill-current"
                                             xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd"
                                                  d="M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zM7 8H5v2h2V8zm2 0h2v2H9V8zm6 0h-2v2h2V8z"
                                                  clipRule="evenodd"/>
                                        </svg>
                                        <span className="ml-1 leading-none">4</span>
                                    </div>
                                    <div className="flex items-center ml-4">
                                        <svg className="w-4 h-4 text-gray-300 fill-current"
                                             xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd"
                                                  d="M8 4a3 3 0 00-3 3v4a5 5 0 0010 0V7a1 1 0 112 0v4a7 7 0 11-14 0V7a5 5 0 0110 0v4a3 3 0 11-6 0V7a1 1 0 012 0v4a1 1 0 102 0V7a3 3 0 00-3-3z"
                                                  clipRule="evenodd"/>
                                        </svg>
                                        <span className="ml-1 leading-none">1</span>
                                    </div>
                                    <img className="w-6 h-6 ml-auto rounded-full"
                                         src='https://randomuser.me/api/portraits/women/44.jpg' alt=""/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col flex-shrink-0 w-72">
                        <div className="flex items-center flex-shrink-0 h-10 px-2">
                            <span className="block text-sm font-semibold">Blocked</span>
                            <span
                                className="flex items-center justify-center w-5 h-5 ml-2 text-sm font-semibold text-indigo-500 bg-white rounded bg-opacity-30">1</span>
                            <button
                                className="flex items-center justify-center w-6 h-6 ml-auto text-indigo-500 rounded hover:bg-indigo-500 hover:text-indigo-100">
                                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                          d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
                                </svg>
                            </button>
                        </div>
                        <div className="flex flex-col pb-2 overflow-auto">
                            <div
                                className="relative flex flex-col items-start p-4 mt-3 bg-white rounded-lg cursor-pointer bg-opacity-90 group hover:bg-opacity-100"
                                draggable="true">
                                <button
                                    className="absolute top-0 right-0 flex items-center justify-center hidden w-5 h-5 mt-3 mr-2 text-gray-500 rounded hover:bg-gray-200 hover:text-gray-700 group-hover:flex">
                                    <svg className="w-4 h-4 fill-current" xmlns="http://www.w3.org/2000/svg"
                                         viewBox="0 0 20 20" fill="currentColor">
                                        <path
                                            d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z"/>
                                    </svg>
                                </button>
                                <span
                                    className="flex items-center h-6 px-3 text-xs font-semibold text-pink-500 bg-pink-100 rounded-full">Design</span>
                                <h4 className="mt-3 text-sm font-medium">This is the title of the card for the thing
                                    that needs to be done.</h4>
                                <div className="flex items-center w-full mt-3 text-xs font-medium text-gray-400">
                                    <div className="flex items-center">
                                        <svg className="w-4 h-4 text-gray-300 fill-current"
                                             xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd"
                                                  d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                                                  clipRule="evenodd"/>
                                        </svg>
                                        <span className="ml-1 leading-none">Dec 12</span>
                                    </div>
                                    <div className="relative flex items-center ml-4">
                                        <svg className="relative w-4 h-4 text-gray-300 fill-current"
                                             xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd"
                                                  d="M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zM7 8H5v2h2V8zm2 0h2v2H9V8zm6 0h-2v2h2V8z"
                                                  clipRule="evenodd"/>
                                        </svg>
                                        <span className="ml-1 leading-none">4</span>
                                    </div>
                                    <div className="flex items-center ml-4">
                                        <svg className="w-4 h-4 text-gray-300 fill-current"
                                             xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd"
                                                  d="M8 4a3 3 0 00-3 3v4a5 5 0 0010 0V7a1 1 0 112 0v4a7 7 0 11-14 0V7a5 5 0 0110 0v4a3 3 0 11-6 0V7a1 1 0 012 0v4a1 1 0 102 0V7a3 3 0 00-3-3z"
                                                  clipRule="evenodd"/>
                                        </svg>
                                        <span className="ml-1 leading-none">1</span>
                                    </div>
                                    <img className="w-6 h-6 ml-auto rounded-full"
                                         src='https://randomuser.me/api/portraits/women/26.jpg' alt=""/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col flex-shrink-0 w-72">
                        <div className="flex items-center flex-shrink-0 h-10 px-2">
                            <span className="block text-sm font-semibold">Done</span>
                            <span
                                className="flex items-center justify-center w-5 h-5 ml-2 text-sm font-semibold text-indigo-500 bg-white rounded bg-opacity-30">3</span>
                            <button
                                className="flex items-center justify-center w-6 h-6 ml-auto text-indigo-500 rounded hover:bg-indigo-500 hover:text-indigo-100">
                                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                          d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
                                </svg>
                            </button>
                        </div>
                        <div className="flex flex-col pb-2 overflow-auto">
                            <div
                                className="relative flex flex-col items-start p-4 mt-3 bg-white rounded-lg cursor-pointer bg-opacity-90 group hover:bg-opacity-100"
                                draggable="true">
                                <button
                                    className="absolute top-0 right-0 flex items-center justify-center hidden w-5 h-5 mt-3 mr-2 text-gray-500 rounded hover:bg-gray-200 hover:text-gray-700 group-hover:flex">
                                    <svg className="w-4 h-4 fill-current" xmlns="http://www.w3.org/2000/svg"
                                         viewBox="0 0 20 20" fill="currentColor">
                                        <path
                                            d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z"/>
                                    </svg>
                                </button>
                                <span
                                    className="flex items-center h-6 px-3 text-xs font-semibold text-yellow-500 bg-yellow-100 rounded-full">Copywriting</span>
                                <h4 className="mt-3 text-sm font-medium">This is the title of the card for the thing
                                    that needs to be done.</h4>
                                <div className="flex items-center w-full mt-3 text-xs font-medium text-gray-400">
                                    <div className="flex items-center">
                                        <svg className="w-4 h-4 text-gray-300 fill-current"
                                             xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd"
                                                  d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                                                  clipRule="evenodd"/>
                                        </svg>
                                        <span className="ml-1 leading-none">Dec 12</span>
                                    </div>
                                    <div className="relative flex items-center ml-4">
                                        <svg className="relative w-4 h-4 text-gray-300 fill-current"
                                             xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd"
                                                  d="M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zM7 8H5v2h2V8zm2 0h2v2H9V8zm6 0h-2v2h2V8z"
                                                  clipRule="evenodd"/>
                                        </svg>
                                        <span className="ml-1 leading-none">4</span>
                                    </div>
                                    <div className="flex items-center ml-4">
                                        <svg className="w-4 h-4 text-gray-300 fill-current"
                                             xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd"
                                                  d="M8 4a3 3 0 00-3 3v4a5 5 0 0010 0V7a1 1 0 112 0v4a7 7 0 11-14 0V7a5 5 0 0110 0v4a3 3 0 11-6 0V7a1 1 0 012 0v4a1 1 0 102 0V7a3 3 0 00-3-3z"
                                                  clipRule="evenodd"/>
                                        </svg>
                                        <span className="ml-1 leading-none">1</span>
                                    </div>
                                    <img className="w-6 h-6 ml-auto rounded-full"
                                         src='https://randomuser.me/api/portraits/women/26.jpg' alt=""/>
                                </div>
                            </div>
                            <div
                                className="relative flex flex-col items-start p-4 mt-3 bg-white rounded-lg cursor-pointer bg-opacity-90 group hover:bg-opacity-100"
                                draggable="true">
                                <button
                                    className="absolute top-0 right-0 flex items-center justify-center hidden w-5 h-5 mt-3 mr-2 text-gray-500 rounded hover:bg-gray-200 hover:text-gray-700 group-hover:flex">
                                    <svg className="w-4 h-4 fill-current" xmlns="http://www.w3.org/2000/svg"
                                         viewBox="0 0 20 20" fill="currentColor">
                                        <path
                                            d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z"/>
                                    </svg>
                                </button>
                                <span
                                    className="flex items-center h-6 px-3 text-xs font-semibold text-yellow-500 bg-yellow-100 rounded-full">Copywriting</span>
                                <h4 className="mt-3 text-sm font-medium">This is the title of the card for the thing
                                    that needs to be done.</h4>
                                <div className="flex items-center w-full mt-3 text-xs font-medium text-gray-400">
                                    <div className="flex items-center">
                                        <svg className="w-4 h-4 text-gray-300 fill-current"
                                             xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd"
                                                  d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                                                  clipRule="evenodd"/>
                                        </svg>
                                        <span className="ml-1 leading-none">Dec 12</span>
                                    </div>
                                    <div className="relative flex items-center ml-4">
                                        <svg className="relative w-4 h-4 text-gray-300 fill-current"
                                             xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd"
                                                  d="M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zM7 8H5v2h2V8zm2 0h2v2H9V8zm6 0h-2v2h2V8z"
                                                  clipRule="evenodd"/>
                                        </svg>
                                        <span className="ml-1 leading-none">4</span>
                                    </div>
                                    <div className="flex items-center ml-4">
                                        <svg className="w-4 h-4 text-gray-300 fill-current"
                                             xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd"
                                                  d="M8 4a3 3 0 00-3 3v4a5 5 0 0010 0V7a1 1 0 112 0v4a7 7 0 11-14 0V7a5 5 0 0110 0v4a3 3 0 11-6 0V7a1 1 0 012 0v4a1 1 0 102 0V7a3 3 0 00-3-3z"
                                                  clipRule="evenodd"/>
                                        </svg>
                                        <span className="ml-1 leading-none">1</span>
                                    </div>
                                    <img className="w-6 h-6 ml-auto rounded-full"
                                         src='https://randomuser.me/api/portraits/women/44.jpg' alt=""/>
                                </div>
                            </div>
                            <div
                                className="relative flex flex-col items-start p-4 mt-3 bg-white rounded-lg cursor-pointer bg-opacity-90 group hover:bg-opacity-100"
                                draggable="true">
                                <button
                                    className="absolute top-0 right-0 flex items-center justify-center hidden w-5 h-5 mt-3 mr-2 text-gray-500 rounded hover:bg-gray-200 hover:text-gray-700 group-hover:flex">
                                    <svg className="w-4 h-4 fill-current" xmlns="http://www.w3.org/2000/svg"
                                         viewBox="0 0 20 20" fill="currentColor">
                                        <path
                                            d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z"/>
                                    </svg>
                                </button>
                                <span
                                    className="flex items-center h-6 px-3 text-xs font-semibold text-pink-500 bg-pink-100 rounded-full">Design</span>
                                <h4 className="mt-3 text-sm font-medium">This is the title of the card for the thing
                                    that needs to be done.</h4>
                                <div className="flex items-center w-full mt-3 text-xs font-medium text-gray-400">
                                    <div className="flex items-center">
                                        <svg className="w-4 h-4 text-gray-300 fill-current"
                                             xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd"
                                                  d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                                                  clipRule="evenodd"/>
                                        </svg>
                                        <span className="ml-1 leading-none">Dec 12</span>
                                    </div>
                                    <div className="relative flex items-center ml-4">
                                        <svg className="relative w-4 h-4 text-gray-300 fill-current"
                                             xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd"
                                                  d="M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zM7 8H5v2h2V8zm2 0h2v2H9V8zm6 0h-2v2h2V8z"
                                                  clipRule="evenodd"/>
                                        </svg>
                                        <span className="ml-1 leading-none">4</span>
                                    </div>
                                    <div className="flex items-center ml-4">
                                        <svg className="w-4 h-4 text-gray-300 fill-current"
                                             xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd"
                                                  d="M8 4a3 3 0 00-3 3v4a5 5 0 0010 0V7a1 1 0 112 0v4a7 7 0 11-14 0V7a5 5 0 0110 0v4a3 3 0 11-6 0V7a1 1 0 012 0v4a1 1 0 102 0V7a3 3 0 00-3-3z"
                                                  clipRule="evenodd"/>
                                        </svg>
                                        <span className="ml-1 leading-none">1</span>
                                    </div>
                                    <img className="w-6 h-6 ml-auto rounded-full"
                                         src='https://randomuser.me/api/portraits/men/46.jpg' alt=""/>
                                </div>
                            </div>
                            <div
                                className="relative flex flex-col items-start p-4 mt-3 bg-white rounded-lg cursor-pointer bg-opacity-90 group hover:bg-opacity-100"
                                draggable="true">
                                <button
                                    className="absolute top-0 right-0 flex items-center justify-center hidden w-5 h-5 mt-3 mr-2 text-gray-500 rounded hover:bg-gray-200 hover:text-gray-700 group-hover:flex">
                                    <svg className="w-4 h-4 fill-current" xmlns="http://www.w3.org/2000/svg"
                                         viewBox="0 0 20 20" fill="currentColor">
                                        <path
                                            d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z"/>
                                    </svg>
                                </button>
                                <span
                                    className="flex items-center h-6 px-3 text-xs font-semibold text-pink-500 bg-pink-100 rounded-full">Design</span>
                                <h4 className="mt-3 text-sm font-medium">This is the title of the card for the thing
                                    that needs to be done.</h4>
                                <div className="flex items-center w-full mt-3 text-xs font-medium text-gray-400">
                                    <div className="flex items-center">
                                        <svg className="w-4 h-4 text-gray-300 fill-current"
                                             xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd"
                                                  d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                                                  clipRule="evenodd"/>
                                        </svg>
                                        <span className="ml-1 leading-none">Dec 12</span>
                                    </div>
                                    <div className="relative flex items-center ml-4">
                                        <svg className="relative w-4 h-4 text-gray-300 fill-current"
                                             xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd"
                                                  d="M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zM7 8H5v2h2V8zm2 0h2v2H9V8zm6 0h-2v2h2V8z"
                                                  clipRule="evenodd"/>
                                        </svg>
                                        <span className="ml-1 leading-none">4</span>
                                    </div>
                                    <div className="flex items-center ml-4">
                                        <svg className="w-4 h-4 text-gray-300 fill-current"
                                             xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd"
                                                  d="M8 4a3 3 0 00-3 3v4a5 5 0 0010 0V7a1 1 0 112 0v4a7 7 0 11-14 0V7a5 5 0 0110 0v4a3 3 0 11-6 0V7a1 1 0 012 0v4a1 1 0 102 0V7a3 3 0 00-3-3z"
                                                  clipRule="evenodd"/>
                                        </svg>
                                        <span className="ml-1 leading-none">1</span>
                                    </div>
                                    <img className="w-6 h-6 ml-auto rounded-full"
                                         src='https://randomuser.me/api/portraits/men/46.jpg' alt=""/>
                                </div>
                            </div>
                            <div
                                className="relative flex flex-col items-start p-4 mt-3 bg-white rounded-lg cursor-pointer bg-opacity-90 group hover:bg-opacity-100"
                                draggable="true">
                                <button
                                    className="absolute top-0 right-0 flex items-center justify-center hidden w-5 h-5 mt-3 mr-2 text-gray-500 rounded hover:bg-gray-200 hover:text-gray-700 group-hover:flex">
                                    <svg className="w-4 h-4 fill-current" xmlns="http://www.w3.org/2000/svg"
                                         viewBox="0 0 20 20" fill="currentColor">
                                        <path
                                            d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z"/>
                                    </svg>
                                </button>
                                <span
                                    className="flex items-center h-6 px-3 text-xs font-semibold text-green-500 bg-green-100 rounded-full">Dev</span>
                                <h4 className="mt-3 text-sm font-medium">This is the title of the card for the thing
                                    that needs to be done.</h4>
                                <div className="flex items-center w-full mt-3 text-xs font-medium text-gray-400">
                                    <div className="flex items-center">
                                        <svg className="w-4 h-4 text-gray-300 fill-current"
                                             xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd"
                                                  d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                                                  clipRule="evenodd"/>
                                        </svg>
                                        <span className="ml-1 leading-none">Dec 12</span>
                                    </div>
                                    <div className="relative flex items-center ml-4">
                                        <svg className="relative w-4 h-4 text-gray-300 fill-current"
                                             xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd"
                                                  d="M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zM7 8H5v2h2V8zm2 0h2v2H9V8zm6 0h-2v2h2V8z"
                                                  clipRule="evenodd"/>
                                        </svg>
                                        <span className="ml-1 leading-none">4</span>
                                    </div>
                                    <div className="flex items-center ml-4">
                                        <svg className="w-4 h-4 text-gray-300 fill-current"
                                             xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd"
                                                  d="M8 4a3 3 0 00-3 3v4a5 5 0 0010 0V7a1 1 0 112 0v4a7 7 0 11-14 0V7a5 5 0 0110 0v4a3 3 0 11-6 0V7a1 1 0 012 0v4a1 1 0 102 0V7a3 3 0 00-3-3z"
                                                  clipRule="evenodd"/>
                                        </svg>
                                        <span className="ml-1 leading-none">1</span>
                                    </div>
                                    <img className="w-6 h-6 ml-auto rounded-full"
                                         src='https://randomuser.me/api/portraits/women/26.jpg' alt=""/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex-shrink-0 w-6"></div>
                </div>
            </div>
        </div>
    );
}

export default App;
