import * as request from "./universalRequests";

const baseUrl = 'http://localhost:3030/data/tasks';

export const getAll = () => request.get(baseUrl);
export const getDetails = (taskId) => request.get(`${baseUrl}/${taskId}`);
export const addNewTask = (taskData) => request.post(baseUrl, taskData);
export const editTask = (taskId, taskData) => request.put(`${baseUrl}/${taskId}`, taskData);

export const deleteTask = (taskId) => request.del(`${baseUrl}/${taskId}`);