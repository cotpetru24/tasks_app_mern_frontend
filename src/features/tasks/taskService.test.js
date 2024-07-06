import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import testService from './taskService';
import taskService from "./taskService";

const mock = new MockAdapter(axios);

describe('taskService', () => {
    afterEach(() => {
        mock.reset();
    });


    test('fetches task successfully', async () => {
        const token = 'mock_token';
        const tasks = [
            {
                _id: '6685c88356a9ae939edd3a57',
                text: 'test text',
                user: '668096a359caa21a628450dd',
                createdAt: '2024-07-03T21:54:11.114+00:00',
                updatedAt: '2024-07-03T21:54:11.114+00:00',
                __v: 0
            }
        ];

        mock.onGet('/api/tasks/', { headers: { Authorization: `Bearer ${token}` } }).reply(200, tasks);
        const response = await taskService.getTasks(token);
        expect(response).toEqual(tasks)
    })
})