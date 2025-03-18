import {
    FETCH_CLIENTS_REQUEST,
    FETCH_CLIENTS_SUCCESS,
    REMOVE_CLIENTS_REQUEST,
    SET_SELECTED_CLIENT,
    CLEAR_SELECTED_CLIENT,
    UPDATE_SELECTED_CLIENT
} from '../constants/Client';

export const fetchClients = () => {
    return {
        type: FETCH_CLIENTS_REQUEST
    };
};

export const fetchClientsSuccess = (clients) => {
    return {
        type: FETCH_CLIENTS_SUCCESS,
        payload: clients
    }
};

export const removeClient = (id) => {
    return {
        type: REMOVE_CLIENTS_REQUEST,
        payload: id
    };
};

export const setSelectedClient = (client) => {
    return {
        type: SET_SELECTED_CLIENT,
        payload: client
    };
};

export const updateClients = (clients) => {
    return {
        type: UPDATE_SELECTED_CLIENT,
        payload: clients
    }
};

export const clearSelectedClient = () => {
    return {
        type: CLEAR_SELECTED_CLIENT
    };
};

