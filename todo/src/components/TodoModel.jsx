import React from 'react';
import { useDispatch } from 'react-redux';
import { isComplete, deleteTodo } from '../redux/TodoSlice';

const TodoModel = ({ id, title, completed }) => {
    const dispatch = useDispatch();

    const handleCheckboxClick = () => {
        dispatch(isComplete({ id, completed: !completed }));
    };

    const handleDeleteClick = () => {
        dispatch(deleteTodo({ id: id }));
    };

    return (
        <div className="flex justify-center items-center mt-5">
            <div className="flex flex-row items-center bg-gray-100 rounded p-3 shadow-md w-3/4 sm:w-3/4 md:w-3/4 lg:w-2/4">
                <input
                    type="checkbox"
                    checked={completed}
                    onChange={handleCheckboxClick}
                    className="mr-3"
                />
                <p className={`flex-grow ${completed ? 'line-through text-gray-500' : ''}`}>{title}</p>
                <button onClick={handleDeleteClick} className="ml-3 text-red-500 hover:text-red-700 focus:outline-none">
                    Delete
                </button>
            </div>
        </div>
    );
};

export default TodoModel;
