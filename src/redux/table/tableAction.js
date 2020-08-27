export const ADD_OBIDINET_TABLE = 'ADD_OBIDINET_TABLE';
export const ADD_KORZINKA_TABLE = 'ADD_KORZINKA_TABLE';
export const REMOVE_TABLE = 'REMOVE_TABLE';


export const addObidinet = (item) => {
    return{
        type: ADD_OBIDINET_TABLE,
        payload: item
    }
};

export const addKorzinka = (item) => {
    return{
        type: ADD_KORZINKA_TABLE,
        payload: item
    }
};

export const removeTable = () => {
    return{
        type: REMOVE_TABLE
    }
};
