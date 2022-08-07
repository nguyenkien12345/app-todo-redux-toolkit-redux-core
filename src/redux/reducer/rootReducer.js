import { combineReducers } from "redux";
import filtersReducer from "./filtersReducer";
import todoListReducer from "./todoListReducer";

const rootReducer = combineReducers({
    filters: filtersReducer,
    todoList: todoListReducer
})

export default rootReducer;

// Nếu không dùng combineReducers thì ta sẽ code như sau:
// const rootReducer = (state = {}, action) => {
//     return {
//         filters: filtersReducer(state.filters, action),
//         todoList: todoListReducer(state.todoList, action),
//     };
// };