// REDUX CORE
// import { createStore } from 'redux';
// import { composeWithDevTools } from 'redux-devtools-extension';
// import rootReducer from './reducer/rootReducer';

// const composeEnhancers = composeWithDevTools(); // Kết nối với redux dev tool trên máy tính

// const store = createStore(rootReducer, composeEnhancers);

// export default store;

// -----------------------------------------------------------------------------------------------------------------------

// REDUX TOOLKIT
import { configureStore } from '@reduxjs/toolkit';
import filtersReducer from '../redux/reducer/filtersReducer';
import todoListReducer from '../redux/reducer/todoListReducer';

const store = configureStore({
    reducer: {
        filters: filtersReducer.reducer,
        todoList: todoListReducer.reducer
    }
})

export default store;