import { storageUtils } from './storage'

const API_BASE_URL = 'http://www.insongzhao.cn/'

const request = (url, data, method = 'get', hasLoading = true) => {
  return new Promise((resolve, reject) => {
    if (hasLoading) {
      uni.showLoading({
        title: '加载中'
      })
    }
    const API_TOKEN = storageUtils.get('token')
    uni.request({
      url: API_BASE_URL + url,
      method: method,
      data: data,
      header: {
        "accept": "application/json",
        "Authorization": 'Parking ' + API_TOKEN
      },
      success(res) {
        uni.hideLoading()
        if (res.statusCode !== 200) {
          if (res.statusCode === 401) {
            uni.showToast({
              title: '登录过期',
              icon: 'none',
              duration: 2000
            })
            storageUtils.remove('tokenExpireTime')
            setTimeout(() => {
              uni.reLaunch({
                // 登录页面
                url: '/pages/login'

              })
            }, 1000)
            return
          }
          uni.showToast({
            title: '请求异常',
            icon: 'none',
            duration: 3000
          })
        } else {
          if (res.data.resultCode && res.data.resultCode !== '0') {
            uni.showToast({
              title: res.data.resultMsg,
              icon: 'none',
              duration: 3000
            })
          }
        }
        resolve(res)
      },
      fail(error) {
        uni.hideLoading()
        uni.showToast({
          title: '请求异常',
          icon: 'none',
          duration: 3000
        })
        reject(error)
      },
      complete() {
      }
    })
  })
}

export default request
