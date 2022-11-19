import { SET_ALERT, REMOVE_ALERT, Fix_Me_Later } from '../actions/constants';

const initialState: Array<Fix_Me_Later> = [];

export default function(state = initialState, action: Fix_Me_Later) {

    const { type, payload } = action;
    
    switch(type) {
        case SET_ALERT:
            return [...state, payload];
        case REMOVE_ALERT:
            return state.filter(alert => alert.id != payload);
        default:
            return state;
    }
}