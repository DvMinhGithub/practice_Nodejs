import { all } from 'redux-saga/effects';
import studentSaga from "./studentSaga";

function* rootSaga() {
    yield all([
        studentSaga()
    ]);
}
export default rootSaga;