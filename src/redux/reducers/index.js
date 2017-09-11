import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import store from '../store'


// 同步Reducers（初始化）
const syncReducers = {
  router: routerReducer
}

// 异步Reducers
const asyncReducers = {}

export function createRootReducer() {
  return combineReducers({
    ...syncReducers,
    ...asyncReducers
  })
}

//代码分离
export function injectReducer(key, reducer) {
  asyncReducers[key] = reducer;
  store.replaceReducer(createRootReducer())
}

//reducer help
export function createReducer(initialState, handlers) {
   return function reducer(state = initialState, action) {
     if (handlers.hasOwnProperty(action.type)) {
       return handlers[action.type](state, action);
     } else {
       return state;
     }
   }
 }
