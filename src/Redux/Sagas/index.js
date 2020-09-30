import {put, takeLatest} from 'redux-saga/effects';
import {SELECTED_ID_SAGA, SELECTED_ID} from '../../Constant';

function* putIdTechData(action) {
  yield put({type: SELECTED_ID_SAGA, payload: action.payload});
}

export function* watcherSelector() {
  yield takeLatest(SELECTED_ID, putIdTechData);
}
