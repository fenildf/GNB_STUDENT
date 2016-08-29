import {
  GET_MESSAGE_SUCCESS,
  GET_MESSAGE_ERROR
} from '../mutationTypes'

const state = {
  messageCode: ''
}

const mutations = {
  [GET_MESSAGE_SUCCESS](state, data){
    state.messageCode = data
  },
  [GET_MESSAGE_ERROR](state, err){
    console.log(err)
  }
}

export default {
  state,
  mutations
}