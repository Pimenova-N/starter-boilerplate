import { all, takeEvery, put, fork, call } from 'redux-saga/effects';
import {
    FETCH_CLIENTS_REQUEST
} from '../constants/Client';
import ClientService from 'services/ClientService'
import { fetchClientsSuccess } from '../actions/Client'

export function* fetchClientsWorker() {
    yield takeEvery(FETCH_CLIENTS_REQUEST, function* () {
        try {
            const response = (yield call(ClientService.getClients));
            yield put(fetchClientsSuccess(response));
        } catch (err) {
            // yield put(showAuthMessage(err));
        }
    });
}

export default function* rootSaga() {
    yield all([
        fork(fetchClientsWorker),
    ]);
}
