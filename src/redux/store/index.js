import {
  applyMiddleware,
  compose,
  createStore
} from 'redux'
import { createRootReducer } from '../reducers'
import createSagaMiddleware from 'redux-saga'
import initState from './initState'
import rootSaga from '../sagas'
import createHistory from 'history/createBrowserHistory'
import {routerMiddleware} from 'react-router-redux'

//创建一个 Redux 中间件，将 Sagas 与 Redux Store 建立连接
const sagaMiddleware = createSagaMiddleware();

//创建一个 Redux 中间件，将 router 与 Redux Store 建立连接
export const history = createHistory();
const historyMiddleware = routerMiddleware(history);

//整合 Redux 中间件
const middlewares = [historyMiddleware, sagaMiddleware];

const store = createStore(
  createRootReducer(),
  window.__INITIAL_STATE__ || initState, // 前后端同构（服务端渲染）数据同步
  compose(
    applyMiddleware(...middlewares),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
)

//在 applyMiddleware 阶段之后执行 Sagas
sagaMiddleware.run(rootSaga);

export default store;
