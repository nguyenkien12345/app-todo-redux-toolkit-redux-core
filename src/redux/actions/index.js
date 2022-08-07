export const addTodo = (data) => {
    return {
        type: 'todoList/addTodo',
        payload: data
    }
}

export const toggleStatusTodo = (data) => {
    return {
        type: 'todoList/toggleStatusTodo',
        payload: data
    }
}

export const searchFilterChange = (data) => {
    return {
        type: 'filters/searchFilterChange',
        payload: data
    }
}

export const statusFilterChange = (data) => {
    return {
        type: 'filters/statusFilterChange',
        payload: data
    }
}

export const priorityFilterChange = (data) => {
    return {
        type: 'filters/priorityFilterChange',
        payload: data
    }
}