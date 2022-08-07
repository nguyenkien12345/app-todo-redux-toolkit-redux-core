// REDUX - CORE
// const initialState = [
//     { id: 1, name: 'Learn React', completed: true, priority: 'High' },
//     { id: 2, name: 'Learn Ruby', completed: false, priority: 'Low' },
//     { id: 3, name: 'Learn C#', completed: true, priority: 'Medium' },
//     { id: 4, name: 'Learn Angular', completed: false, priority: 'Medium' },
//     { id: 5, name: 'Learn NodeJs', completed: false, priority: 'High' },
// ];

// const todoListReducer = (state = initialState, action) => {
//     const { type, payload } = action;
//     switch (type) {
//         case 'todoList/addTodo':
//             return [...state, payload]
//         case 'todoList/toggleStatusTodo':
//             return state.map((todo) => todo.id === payload ? { ...todo, completed: !todo.completed } : todo);
//         default:
//             return state;
//     }
// }

// export default todoListReducer;

// -----------------------------------------------------------------------------------------------------------------------

// REDUX TOOLKIT
import { createSlice } from '@reduxjs/toolkit';

const initialState = [
    { id: 1, name: 'Learn React', completed: true, priority: 'High' },
    { id: 2, name: 'Learn Ruby', completed: false, priority: 'Low' },
    { id: 3, name: 'Learn C#', completed: true, priority: 'Medium' },
    { id: 4, name: 'Learn Angular', completed: false, priority: 'Medium' },
    { id: 5, name: 'Learn NodeJs', completed: false, priority: 'High' },
];

const todoListReducer = createSlice({
    name: 'todoList',
    initialState: initialState,
    reducers: {
        // Lúc này type chính là name + / + function => todoList/addTodo
        addTodo: (state, action) => {
            state.push(action.payload);
        },
        // Lúc này type chính là name + / + function => todoList/toggleStatusTodo
        toggleStatusTodo: (state, action) => {
            const currentTodo = state.find(todo => todo.id === action.payload);
            if (currentTodo) {
                currentTodo.completed = !currentTodo.completed
            }
        }
    }
});

export default todoListReducer;
// Đối với redux toolkit nên đặt là todoListSlice mới đúng chuẩn (tên đối tượng + Slice)
