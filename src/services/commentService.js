import * as request from "./universalRequests";


const baseUrl = 'http://localhost:3030/data/comments';

export const addComment = (taskId, comment) =>
    request.post(baseUrl, {taskId, text: comment});

export const getByTaskId = (taskId) => {
    const relations = encodeURIComponent('user=_ownerId:users');
    const search = encodeURIComponent(`taskId="${taskId}"`);

    return request.get(`${baseUrl}?where=${search}&load=${relations}`);

};