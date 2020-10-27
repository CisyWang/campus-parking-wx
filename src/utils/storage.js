
const TOKEN_KEY = 'user-token'
const USER_KEY = 'user-info'
const TOKEN_REFRESH_TRIGGER = 15 * 1000 * 60

const storageUtils = {
  set: (key, value, expireTime) => {
    if(typeof(value) === 'object') {
      value = JSON.stringify(value)
    }
    uni.setStorageSync(key, value)
    if(expireTime) {
      uni.setStorageSync(key + '__et', expireTime)
    }
  },
  get: (key) => {
    let value = uni.getStorageSync(key)
    if(!value) {
      return null
    }
    let expireTime = uni.getStorageSync(key + '__et')
    if(!expireTime) {
      return value
    }

    let curTime = (new Date()).getTime()
    if(curTime > expireTime) {
      this.remove(key)
      return null
    } else {
      return value
    }
  },
  getExpireTime: (key) => {
    return uni.getStorageSync(key + '__et')
  },
  remove: (key) => {
    uni.removeStorageSync(key)
    uni.removeStorageSync(key + '__et')
  }
}

const tokenUtils = {
  setToken: (token, expireTime) => {
    storageUtils.set(TOKEN_KEY, token, expireTime)
  },
  getToken: () => {
    let token = storageUtils.get(TOKEN_KEY)
    if(!token) {
      return null
    }

    let tokenExpireTime = localStorageUtils.getExpireTime(TOKEN_KEY)
    if(!tokenExpireTime) {
      return token
    }
    let curTime = (new Date()).getTime()
    if(tokenExpireTime <= curTime) {
      return null
    }
    if((tokenExpireTime - curTime) <= TOKEN_REFRESH_TRIGGER) {
      // token刷新
    }
    return token
  },
  removeToken: () => {
    storageUtils.remove(TOKEN_KEY)
  }
}

const userUtils = {
  setUser: (userInfo) => {
    if(userInfo) {
      storageUtils.set(USER_KEY, userInfo)
    }
  },
  getUser: () => {
    const userInfo = storageUtils.get(USER_KEY)
    if(userInfo) {
      return JSON.parse(userInfo)
    }
    return null
  },
  removeUser: () => {
    storageUtils.remove(USER_KEY)
  }
}

export { storageUtils, tokenUtils, userUtils }
