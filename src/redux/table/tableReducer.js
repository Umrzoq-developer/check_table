import {ADD_KORZINKA_TABLE, ADD_OBIDINET_TABLE, REMOVE_TABLE} from "./tableAction";

const initialState = {
    obidinet: [],
    korzinka: []
};


export default (state=initialState, action) => {
    switch (action.type) {
        case ADD_OBIDINET_TABLE:
            return{
                ...state,
                obidinet: [...state.obidinet, action.payload]
            };
        case ADD_KORZINKA_TABLE:
            return {
                ...state,
                korzinka: [...state.korzinka, action.payload]
            };
        case REMOVE_TABLE:
            return {
                ...state,
                obidinet: state.obidinet.slice(0, state.obidinet.length),
                korzinka: state.korzinka.slice(0, state.korzinka.length)
            };
        default:
            return state
    }
}
