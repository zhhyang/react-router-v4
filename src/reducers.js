/**
 * Created by Freeman on 2017/3/22.
 */
import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

import {
  LOADING_SHOW, LOADING_HIDE,
} from './constants/ActionTypes'

function home (state = 'Home', action = {}) {
  switch (action.type) {
    default :
      return state
  }
}
function about (state = 'About', action = {}) {
  switch (action.type) {
    default :
      return state
  }
}

const rootReducer = combineReducers({
  home,
  about,
  router: routerReducer
})

export default rootReducer