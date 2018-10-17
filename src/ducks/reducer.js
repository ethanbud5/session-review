// initial state
const initialState = {
    name:""
}

// constants

const UPDATE_NAME = "UPDATE_NAME";

// action creators

function updateName(name){
    return{
        type:UPDATE_NAME,
        payload:name
    }
}

// reducer

function reducer(state=initialState,action){
    switch (action.type) {
        case UPDATE_NAME:
            return {
                ...state,
                name:action.payload
            };
        default:
            return state;
    }
}

export default reducer;