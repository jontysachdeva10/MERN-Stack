import { GET_NGO, NGO_ERROR } from '../actions/constants';

const initialState = {
    ngos: [],
    ngo: null,
    loading: true,
    error: {}
}

export default function(state = initialState, action) {
    const { type, payload } = action;

    switch(type) {
        case GET_NGO:
            return {
                ...state,
                ngos: payload,
                loading: false
            };
        case NGO_ERROR:
            return {
                ...state,
                error: payload,
                loading: false,
            };
        default:
            return state;        
    }
}