import { createSlice, nanoid } from "@reduxjs/toolkit";

/**
 * The initial state of the todo slice.
 * 
 * This is an array of todo objects, each with an id and a text.
 * The initial state contains one todo item with an id of 1 and the text 'Hello World!'.
 */
const initialState = {
    // Array of todo objects
    todos: [
        // A single todo object
        {
            // The id of the todo
            id: 1,
            // The text of the todo
            text: 'Hello World!'
        }
    ]
    // End of array of todo objects
}

export const todoSlice = createSlice({
    /**
     * The name of the todo slice.
     */
    name: 'todo',
    
    /**
     * The initial state of the todo slice.
     * 
     * This is an array of todo objects, each with an id and a text.
     * The initial state contains one todo item with an id of 1 and the text 'Hello World!'.
     */
    initialState,
    
    /**
     * The reducers for the todo slice.
     */
    reducers: {
        /**
         * Adds a todo to the state.
         * 
         * @param {Object} state - The current state.
         * @param {Object} action - The action object.
         * @param {string} action.payload - The text of the todo.
         */
        addTodo: (state, action) => {
            // Create a new todo object
            const todo = {
                id: nanoid(), // Generate a new ID for the todo
                text: action.payload // Set the text of the todo to the payload
            }
            
            // Add the new todo to the state
            state.todos.unshift(todo)
        },
        
        /**
         * Removes a todo from the state.
         * 
         * @param {Object} state - The current state.
         * @param {Object} action - The action object.
         * @param {string} action.payload - The ID of the todo to remove.
         */
        removeTodo: (state, action) => {
            // Filter the todos array to remove the todo with the specified ID
            state.todos = state.todos.filter(todo => todo.id !== action.payload)
        },

        // Edit/Update Todo reducer (HOMEWORK)
    }
    
})

/**
 * Action creators for the todo slice.
 */
export const {
    addTodo, // Adds a todo to the state
    removeTodo // Removes a todo from the state
} = todoSlice.actions

/**
 * The reducer for the todo slice.
 * 
 * This reducer handles the addition and removal of todos.
 * It is the root reducer for the todo slice.
 */
export default todoSlice.reducer
