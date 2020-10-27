const state = {
  userInfo: {
    nickName: '',
    avatarUrl: ''
  }
}

const getters = {

}

const mutations = {
  user_m_nickName (state, nickName) {
    state.userInfo.nickName = nickName
  },
  user_m_avatarUrl (state, avatarUrl) {
    state.userInfo.avatarUrl = avatarUrl
  }
}
export default{ state, getters, mutations }

