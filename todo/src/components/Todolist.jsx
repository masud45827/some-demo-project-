import React from 'react';
import { useSelector } from 'react-redux';
import TodoModel from './TodoModel';
const Todolist = () => {
    const allTodo = useSelector((state)=>state.todos);
    console.log('reach')

    return (
        <div>
            {
                allTodo.map((todo)=>(
                    <TodoModel id={todo.id} title={todo.title} completed:false />
                ))
            }
        </div>
    );
};

export default Todolist;