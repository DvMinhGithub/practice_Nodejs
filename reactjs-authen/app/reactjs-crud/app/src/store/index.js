import { configureStore } from '@reduxjs/toolkit'
import createSagaMiddleware from '@redux-saga/core'
import rootReducer from '../reducer'
import rootSaga from '../saga'
import logger from 'redux-logger';
const sagaMiddleware = createSagaMiddleware()
const store = configureStore({
    reducer: rootReducer,
    middleware: [sagaMiddleware, logger],
})
sagaMiddleware.run(rootSaga)
export default store;