export function useReducer(state=null, action){
    switch(action.type){
        case "LOGIN":
            return action.payload;
        case "LOGOUT":
            localStorage.clear()
            return action.payload;
        default:
            return state;

    }
}

// จะเป็น storeเอาไวเก็บข้อมูล