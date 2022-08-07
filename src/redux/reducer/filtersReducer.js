// + Ta sẽ có các chức năng như Search, Filter By Status (Bao gồm: All, Completed, To do), Filter By Priority (Bao gồm: Low, Medium, High)
// Ta sẽ có các state như search, status, priority. Trong đó khi Filter By Status ta chỉ cho phép filter duy nhất 1 status, còn
// khi Filter By Priority ta cho phép filter theo 1 hoặc nhiều priority
// + Lưu ý: Khi state là object hoặc array thì phải luôn luôn clone ra

// REDUX - CORE
// const initialState = {
//     search: '',
//     status: 'All',
//     priority: []
// };

// const filtersReducer = (state = initialState, action) => {
//     const { type, payload } = action;
//     switch (type) {
//         case 'filters/searchFilterChange':
//             return {
//                 ...state,
//                 search: payload // Ta chỉ muốn cập nhật trường search
//             }
//         case 'filters/statusFilterChange':
//             return {
//                 ...state,
//                 status: payload // Ta chỉ muốn cập nhật trường status
//             }
//         case 'filters/priorityFilterChange':
//             return {
//                 ...state,
//                 priority: payload // Ta chỉ muốn cập nhật trường priority
//             }
//         default:
//             return state;
//     }
// }

// export default filtersReducer;

// -----------------------------------------------------------------------------------------------------------------------

// REDUX TOOLKIT
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    search: '',
    status: 'All',
    priority: []
};

const filtersReducer = createSlice({
    name: 'filters',
    initialState: initialState,
    reducers: {
        // Lúc này type chính là name + / + function => filters/searchFilterChange
        searchFilterChange: (state, action) => {
            state.search = action.payload;
        },
        // Lúc này type chính là name + / + function => filters/statusFilterChange
        statusFilterChange: (state, action) => {
            state.status = action.payload;
        },
        // Lúc này type chính là name + / + function => filters/priorityFilterChange
        priorityFilterChange: (state, action) => {
            state.priority = action.payload;
        },
    }
});

export default filtersReducer;
// Đối với redux toolkit nên đặt là filtersSlice mới đúng chuẩn (tên đối tượng + Slice)