<template>
  <view>


    <view class="user_info_wrap">
      <view class="user_image_wrap">
        <image class="user_bg" :src="avatarUrl"></image>
        <view class="user_info">
          <image v-if="avatarUrl" class="user_icon" :src="avatarUrl"></image>
          <image v-else class="user_icon" @click="handleImgTap" src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1596533419378&di=3e7226fc97cf72e6c51def2853974468&imgtype=0&src=http%3A%2F%2Fimg3.doubanio.com%2Flpic%2Fo493916.jpg"></image>
          <view class="user_name">
            {{nickName}}</view>
        </view>
      </view>
    </view>
    <view class="user_content">
      <view class="user_main">
        <!-- 我的足迹 -->
        <!-- <view class="history_wrap">
          <navigator>
            <view class="his_num">0</view>
            <view class="his_name">收藏的店铺</view>
          </navigator>
          <navigator url="">
            <view class="his_num">{{collect.length}}</view>
            <view class="his_name">收藏的商品</view>
          </navigator>
          <navigator>
            <view class="his_num">0</view>
            <view class="his_name">关注的商品</view>
          </navigator>
          <navigator>
            <view class="his_num">0</view>
            <view class="his_name">我的足迹</view>
          </navigator>
        </view> -->
        <!-- 我的订单 -->
        <!-- <view class="orders_wrap">
          <view class="orders_title">我的订单</view>
          <view class="orders_content">
            <navigator url="/pages/order/index?type=1">
              <image mode="widthFix" src="../../icons/order.png"></image>
              <view class="order_name">全部订单</view>
            </navigator>
            <navigator url="/pages/order/index?type=2">
              <image mode="widthFix" src="../../icons/pay.png"></image>
              <view class="order_name">待付款</view>
            </navigator>
            <navigator url="/pages/order/index?type=3">
              <image mode="widthFix" src="../../icons/accept.png"></image>
              <view class="order_name">待收货</view>
            </navigator>
            <navigator url="/pages/order/index?type=4">
              <image mode="widthFix" src="../../icons/back.png"></image>
              <view class="order_name">退款/退货</view>
            </navigator>
          </view>
        </view> -->

        <!-- 收货地址管理 -->
        <view class="address_wrap">
          收货地址管理
        </view>
        <!-- 应用相关信息 -->
        <view class="app_info_wrap">
          <view class="app_info_item app_info_contact">
            <text>联系客服</text>
            <text>400-618-4000</text>
          </view>
          <view class="app_info_item feedback" @click="feedback()">意见反馈</view>
          <view class="app_info_item">关于我们</view>
        </view>
        <!-- 推荐 -->
        <view class="recommend_wrap">
          把应用推荐给其他人
        </view>
      </view>
    </view>
  </view>
</template>
<script>
import { mapState } from 'vuex'
export default {
  data() {
    return {
    }
  },
  computed: {
    ...mapState({
      nickName: state => state.user.userInfo.nickName,
      avatarUrl: state => state.user.userInfo.avatarUrl
    })
  },
  methods: {
    handleImgTap() {
      uni.navigateTo({
        url: '/pages/login'
      })
    },
    feedback () {
      console.log('jump')
      uni.navigateTo({
        url: '/pages/user/feedback'
      })
    }
  }
}
</script>
<style lang='scss'>
page {
  background-color: #edece8;
}
.user_info_wrap {
  height: 45vh;
  overflow: hidden;
  background-color: var(--themeColor);
  .user_image_wrap {
    position: relative;
    .user_bg{
      width: 100%;
      height: 50vh;
      filter: blur(10rpx);
    }
    .user_info{
      position: absolute;
      top: 20%;
      left: 50%;
      transform: translateX(-50%);
      text-align: center;
      .user_icon{
        width: 150rpx;
        height: 150rpx;
        border-radius: 50%;
      }
      .user_name{
        margin-top: 40rpx;
        font-size: 36rpx;
        color: #ffffff;
      }
    }
  }
}
.user_content {
  position: relative;
  .user_main {
    position: absolute;
    width: 95%;
    left: 50%;
    transform: translateX(-50%);
    top: -40rpx;
    padding-bottom: 100rpx;
    color: #666666;
    .history_wrap{
      display: flex;
      text-align: center;
      .feedback {
        flex: 1;
        padding: 10rpx 0;
        background-color: #fff;
        .his_num {
          color: var(--themeColor);
        }
      }
    }
    .orders_wrap {
      background-color: #fff;
      margin-top: 20rpx;
      .orders_title {
        padding: 15rpx;
        border-bottom: 1rpx solid #cccccc;
      }
      .orders_content {
        display: flex;
        navigator {
          flex: 1;
          text-align: center;
          padding: 10rpx;
          image {
            width: 30%;
          }
        }
      }
    }
    .address_wrap,
    .recommend_wrap {
      margin-top: 20rpx;
      padding: 20rpx;
      background-color: #fff;
    }
    .app_info_wrap {
      margin-top: 20rpx;
      background-color: #fff;
      .app_info_contact {
        display: flex;
        justify-content: space-between;
      }
      .app_info_item {
        padding: 20rpx;
        border-bottom: 1rpx solid #cccccc;
      }
    }
  }
}
</style>