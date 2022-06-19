import Vuex from 'vuex'

import Item from './Item/index'

const createStore = () => {
  return new Vuex.Store({
    modules: {
      Item,
    },
  })
}

export default createStore
