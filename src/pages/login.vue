<template>
  <view>
    <view>
      <view>
        <view class="login-header">
          <image src='../static/images/wx-logo.png'></image>
        </view>
        <view class="login-content">
          <view>申请获取以下权限</view>
          <text>获得你的公开信息(昵称，头像、地区等)</text>
        </view>

        <button class="login-bottom" type="warn" plain="true" open-type="getUserInfo" withCredentials="true" lang="zh_CN" @getuserinfo="wxGetUserInfo">
          授权登录
        </button>
      </view>
    </view>
    </view>
</template>
<script>
import { mapMutations } from 'vuex'
export default {
  data() {
    return {}
  },
  computed: {
    
  },
  methods: {
    ...mapMutations(['user_m_nickName', 'user_m_avatarUrl']),
    wxGetUserInfo () {
      let _this = this
      // 获取用户信息
      uni.getUserInfo({
        provider: 'weixin',
        success: function(res) {
          console.log(res)
          let { nickName, avatarUrl } = res.userInfo
          _this.user_m_nickName(nickName)
          _this.user_m_avatarUrl(avatarUrl)
          // 授权成功后返回上一页
          uni.navigateBack()
          // try {
          //     uni.setStorageSync('isCanUse', false);//记录是否第一次授权  false:表示不是第一次授权
          //     _this.updateUserInfo();
          // } catch (e) {}
        },
        fail(err) {
          console.log(err)
        }
      })
    }
  }
}
</script>
<style lang='scss' scoped>
  .login-header {
    margin: 90rpx 0 90rpx 50rpx;
    border-bottom: 1px solid #ccc;
    text-align: center;
    width: 650rpx;
    height: 300rpx;
    line-height: 450rpx;
    image {
      width: 200rpx;
      height: 200rpx;
    }
  }

  .login-content {
    margin-left: 50rpx;
    margin-bottom: 90rpx;
    text {
      display: block;
      color: #9d9d9d;
      margin-top: 40rpx;
    }
  }

  .login-bottom {
    border-radius: 80rpx;
    margin: 70rpx 50rpx;
    font-size: 35rpx;
  }
</style>