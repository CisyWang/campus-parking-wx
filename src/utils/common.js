
import { tokenUtils } from './storage'
const commonUtils = {
  checkLogin() {
    const token = tokenUtils.getToken()
    if (!token) {
      // 未登录返回到登录页面

      return false
    }
  }
}

export { commonUtils }
