// รวม
import { combineReducers } from 'redux';

import {useReducer} from './userReducer'

const rootReducer = combineReducers({
    user : useReducer,

    // ถ้ามีข้อมูลอืนๆก้ใสต่ือเรื่อยๆ
    // user1 : userReducer1,
    // udasser : userdfReducer,
});

export default rootReducer
