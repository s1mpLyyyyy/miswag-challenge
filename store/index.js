import Vuex from 'vuex'
import Block from './Block/index'

const createStore = () => {
  return new Vuex.Store({
    modules: {
      Block,
    },
  })
}

export default createStore
