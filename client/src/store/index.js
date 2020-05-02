import { applyMiddleware, compose, createStore } from 'redux';
import createRootReducer  from './reducer';
import createRootSaga from './saga';
import createSagaMiddleWare from 'redux-saga';

const sagaMiddleWare = createSagaMiddleWare();

export const middleware = [sagaMiddleWare];

export default function configureStore(preloadedState) {
    const store = createStore(
        createRootReducer(),
        preloadedState,
        compose(applyMiddleware(...middleware))
    );

    sagaMiddleWare.run(createRootSaga);

    return store;
}