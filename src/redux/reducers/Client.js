import {
    FETCH_CLIENTS_REQUEST,
    FETCH_CLIENTS_SUCCESS,
    REMOVE_CLIENTS_REQUEST,
    SET_SELECTED_CLIENT,
    UPDATE_SELECTED_CLIENT,
    CLEAR_SELECTED_CLIENT
} from '../constants/Client';

const initState = {
    loading: false,
    selectedClient: {},
    clients: [],
}

const client = (state = initState, action) => {
    switch (action.type) {
        case FETCH_CLIENTS_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case FETCH_CLIENTS_SUCCESS:
            return {
                ...state,
                loading: false,
                clients: action.payload
            };
        case REMOVE_CLIENTS_REQUEST:
            return {
                ...state,
                clients: [...state.clients.filter(client => client.id !== action.payload)]
            };
        case SET_SELECTED_CLIENT:
            return {
                ...state,
                selectedClient: action.payload
            }
        case UPDATE_SELECTED_CLIENT:
            return {
                ...state,
                clients: [...state.clients.map(client => client.id === action.payload.id ? action.payload : client)]
            }
        case CLEAR_SELECTED_CLIENT:
            return {
                ...state,
                selectedClient: {}
            }
        default:
            return state;
    }
}

export default client