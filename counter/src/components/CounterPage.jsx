import React from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { decrement, increment } from '../state/CounterSlice';
const CounterPage = () => {
    const val = useSelector((state)=>state.counter.value);
    const dispatch = useDispatch();
    return (
        <div className=''>
        <h1>Counter page</h1>
        <h1>{val}</h1>
        <button onClick={()=>{dispatch(increment())}} >Increment</button>
        <button onClick={()=>{dispatch(decrement())}}>Decrement</button>
    </div>
    );
};

export default CounterPage;