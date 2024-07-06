import { render } from "@testing-library/react";
import { Provider } from 'react-redux';
import { configureStore } from "@reduxjs/toolkit";
import TaskItem from './TaskItem';


const mockReducer = (state = {}, action) => state;

describe('TaskItem', () => {
    const task = {
        _id: '6685c88356a9ae939edd3a57',
        text: 'test text',
        createdAt: '2024-07-03T21:54:11.114+00:00',
    };

    const store = configureStore({
        reducer: {
            mock: mockReducer
        }
    });

    test('renders task details correctly', () => {
        const { getByText } = render(
            <Provider store={store}>
                <TaskItem task={task} />
            </Provider>
        );

        expect(getByText(task.text)).toBeInTheDocument();
        expect(getByText(new Date(task.createdAt).toLocaleString('en-GB'))).toBeInTheDocument();

    })
})