// Nếu như chúng ta không viết 1 cái function riêng cho Selector thì cứ ở mỗi một component mà muốn sử dụng state ta cứ phải gọi đi gọi lại đến lúc 
// ta thay đổi state thì ta phải vào từng component để thay đổi => Không tối ưu code, phải cập nhật ở nhiều nơi, tốn thời gian, khó bảo trì

// Thư viện reselect: Giúp cho chúng ta viết lồng các selector rất là tiện, code sẽ rất là dễ nhìn
// import { createSelector } from 'reselect';       // Khi chưa cài redux-toolkit
import { createSelector } from '@reduxjs/toolkit';  // Khi đã cài redux-toolkit

export const todoListSelector = (state) => state.todoList;
export const searchFilterSelector = (state) => state.filters.search;
export const statusFilterSelector = (state) => state.filters.status;
export const priorityFilterSelector = (state) => state.filters.priority;

// searchTodoListSelector sẽ phụ thuộc vào 4 selector là todoListSelector, searchFilterSelector, statusFilterSelector, priorityFilterSelector. createSelector 
// sẽ nhận vào 4 thằng selector phụ thuộc này và tham số cuối cùng sẽ là callback. Trong callback này sẽ nhận về các tham số do selector trả về. 
// todoListSelector sẽ trả về todoList, searchFilterSelector sẽ trả về searchFilter, statusFilterSelector sẽ trả về statusFilter, priorityFilterSelector
// sẽ trả về priorityFilter
export const searchTodoListSelector = createSelector(todoListSelector, searchFilterSelector, statusFilterSelector, priorityFilterSelector,
  (todoList, searchFilter, statusFilter, priorityFilter) => {
    return todoList.filter((todo) => {
      if (statusFilter === 'All') {
        return priorityFilter.length > 0
          ? (todo.name.toLowerCase().includes(searchFilter.toLowerCase()) && priorityFilter.includes(todo.priority))
          : todo.name.toLowerCase().includes(searchFilter.toLowerCase())
      }
      else {
        return todo.name.toLowerCase().includes(searchFilter.toLowerCase()) &&
          (statusFilter === 'Completed' ? todo.completed : !todo.completed) &&
          (priorityFilter.length > 0 ? priorityFilter.includes(todo.priority) : true) // Ngược lại luôn luôn đúng có nghĩa là không làm gì cả
      }
    });
  })