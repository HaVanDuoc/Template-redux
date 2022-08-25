import {createSlice} from '@reduxjs/toolkit';

const counterSlice = createSlice({
    name: 'counter', // tên chuỗi xác định slice
    initialState: 0, // giá trị khởi tạo ban đầu
    reducers: { // tạo các actions
        increase(state, action) { //action increase
            return state + 1;
        },
        decrease(state, action) { //action decrease
            return state - 1;
        },
    }
})

const { actions, reducer } = counterSlice
export const {increase, decrease} = actions // export action
export default reducer //ngầm hiểu chúng ta đang export counterSlice
