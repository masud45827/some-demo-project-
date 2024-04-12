import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/TodoSlice";

const TodoForm = () => {
    const [value, setValue] = useState("");
    const [Id, setId] = useState(0);
    const dispatch = useDispatch();

    const onSubmit = (event) => {
        event.preventDefault();
        setId(Id + 1);
        dispatch(addTodo({ id: Id, title: value }));
        setValue("");
    };

    return (
        <div className="flex pt-10 justify-center items-center">
            <form onSubmit={onSubmit} className="bg-gray-100 p-4 rounded-lg shadow-md flex items-center">
                <input
                    type="text"
                    className="border rounded p-2 w-[150px]  sm:w-[200px] md:w-[250px] lg:w-[300px]"
                    placeholder="Write task name"
                    value={value}
                    onChange={(event) => setValue(event.target.value)}
                />
                <button type="submit" className="ml-2 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded">
                    ADD
                </button>
            </form>
        </div>
    );
};

export default TodoForm;
