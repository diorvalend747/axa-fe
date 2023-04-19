import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk'

import reducer from './reducer'

const middlewares = applyMiddleware(ReduxThunk)

const store = createStore(reducer, middlewares);

export default store;