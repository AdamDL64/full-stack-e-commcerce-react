export function useReducer(state=null, action){
    switch(action.type){
        case "LOGIN":
            return action.payload;
        case "LOGOUT":
            return "LOGOUT 55";
        default:
            return state;

    }
}

// จะเป็น storeเอาไวเก็บข้อมูล