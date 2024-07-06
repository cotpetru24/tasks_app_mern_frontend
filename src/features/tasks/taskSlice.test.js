import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import MockAdapter from "axios-mock-adapter";
import axios from "axios";
import { getTasks } from "./taskSlice";
import taskService from "./taskService";

const mockStore = configureMockStore([thunk])
const mock = new MockAdapter(axios)

describe('taskSlice', () => {
    let store;
    beforeEach(() => {
        store = mockStore({
            task: {
                tasks: [],
                isError: false,
                isSuccess: false,
                isLoading: false,
                message: '',
            },
            auth: {
                user: { token: 'mock_token' },
            },
        })
    }),
        afterEach(() => {
            mock.reset();
            store.clearActions();
        })

    test("calls the taskService to fetch tasks", async () => {
        const token = 'mock_token';
        const tasks = [
            {
                _id: '6685c88356a9ae939edd3a57',
                test: 'test text',
                user: '668096a359caa21a628450dd',
                createdAt: '2024-07-03T21:54:11.114+00:00',
                updatedAt: '2024-07-03T21:54:11.114+00:00',
                __v: 0
            }
        ];

        const getTasksSpy = jest.spyOn(taskService, 'getTasks').mockResolvedValue(tasks);
        await store.dispatch(getTasks());
        expect(getTasksSpy).toHaveBeenCalledWith(token);
    })

})

