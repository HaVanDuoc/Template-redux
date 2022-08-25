import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increase, decrease } from './counterSlice.js';

function CounterFeature(props) {
    //lấy counter ở rootReducer
    const counter = useSelector(state => state.counter) // useSelector là một hook giúp lấy 1 cái state trong root của mình
    const dispatch = useDispatch(); // sử dụng dispatch để gửi action

    const handleIncreaseClick = () => {
        const action = increase();
        dispatch(action);
    }

    const handleDecreaseClick = () => {
        const action = decrease();
        dispatch(action);
    }

    return (
        <div>
            <h1>Counter</h1>
            <p>Counter {counter}</p>
            <button onClick={() => handleIncreaseClick()} >increase</button>
            <button onClick={() => handleDecreaseClick()}>decrease</button>
        </div>
    );
}

export default CounterFeature;
