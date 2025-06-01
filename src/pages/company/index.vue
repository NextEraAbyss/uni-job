<route lang="json5" type="page">
{
  style: {
    navigationBarTitleText: '企业介绍',
    enablePullDownRefresh: false,
  },
}
</route>

<template>
  <view class="company-page">
    <!-- 轮播图部分 -->
    <swiper
      class="swiper"
      circular
      :indicator-dots="true"
      :autoplay="true"
      :interval="3000"
      :duration="500"
    >
      <swiper-item v-for="(item, index) in swiperList" :key="index">
        <image :src="item.image" mode="aspectFill" class="swiper-image" />
      </swiper-item>
    </swiper>

    <!-- 公司简介展示区 -->
    <view class="content-section">
      <view class="section-title">公司简介</view>
      <view class="company-intro">
        <view class="intro-text">
          绿境中苏泽于2024年创立，致力于前沿研究技术开发和应用制造，实现全球化运营。是国务院120家试点企业集团，国家双创示范基地，国家产教融合试点企业，创中国世名品牌，获中国工业大奖等。
        </view>
        <view class="intro-text">
          改革开放初期第一个产品出口、配套国际主流品牌，现已成为全球知名的高科技企业。
        </view>
      </view>
    </view>

    <!-- 公司地址展示区 -->
    <view class="content-section">
      <view class="section-title">公司地址</view>
      <view class="address-info">
        <view class="address-text">湖北省武汉市自由贸易试验区临港新片区江山路00001号</view>
      </view>
    </view>
  </view>
</template>

<script lang="ts" setup>
const swiperList = ref([
  { image: '/static/images/company-banner1.jpg' },
  { image: '/static/images/company-banner2.jpg' },
  { image: '/static/images/company-banner3.jpg' },
])
</script>

<style lang="scss" scoped>
.company-page {
  width: 100%;
  min-height: 100vh;
  background-color: #f5f5f5;
}

.swiper {
  width: 100%;
  height: 400rpx;

  .swiper-image {
    width: 100%;
    height: 100%;
  }
}

.content-section {
  padding: 30rpx;
  margin: 20rpx;
  background-color: #fff;
  border-radius: 12rpx;
  box-shadow: 0 2rpx 10rpx rgba(0, 0, 0, 0.05);

  .section-title {
    padding-left: 20rpx;
    margin-bottom: 20rpx;
    font-size: 32rpx;
    font-weight: bold;
    color: #333;
    border-left: 8rpx solid #018d71;
  }
}

.company-intro {
  .intro-text {
    margin-bottom: 20rpx;
    font-size: 28rpx;
    line-height: 1.6;
    color: #666;
    text-align: justify;
  }
}

.address-info {
  .address-text {
    font-size: 28rpx;
    line-height: 1.6;
    color: #666;
  }
}
</style>
