<route lang="json5" type="page">
{
  style: { navigationBarTitleText: '新闻详情' },
}
</route>

<template>
  <view class="news-detail">
    <!-- 骨架屏 -->
    <template v-if="isLoading">
      <view class="skeleton-detail">
        <view class="skeleton-header">
          <view class="skeleton-title"></view>
          <view class="skeleton-time"></view>
        </view>
        <view class="skeleton-image"></view>
        <view class="skeleton-content">
          <view class="skeleton-paragraph"></view>
          <view class="skeleton-paragraph"></view>
          <view class="skeleton-paragraph short"></view>
        </view>
      </view>
    </template>

    <!-- 实际内容 -->
    <template v-else>
      <view class="news-header">
        <text class="news-title">{{ newsDetail.title }}</text>
        <text class="news-time">{{ newsDetail.created_at }}</text>
      </view>
      <image :src="newsDetail.image" mode="widthFix" class="news-image" />
      <view class="news-content">
        <text class="news-description">{{ newsDetail.content }}</text>
      </view>
    </template>
  </view>
</template>

<script lang="ts" setup>
import { onLoad } from '@dcloudio/uni-app'
import { ref, watchEffect } from 'vue'
import { getNewsDetailAPI, INewsItem } from '@/service/index/news'
import useRequest from '@/hooks/useRequest'

const newsDetail = ref<INewsItem>({} as INewsItem)
const isLoading = ref(true)

// 本地图片列表
const localImages = [
  '/static/images/news1.jpg',
  '/static/images/news2.jpg',
  '/static/images/news3.jpg',
  '/static/images/news4.jpg',
  '/static/images/news5.jpg',
  '/static/images/company-banner1.jpg',
  '/static/images/company-banner2.jpg',
  '/static/images/company-banner3.jpg',
]

// 随机获取本地图片函数
const getRandomLocalImage = (): string => {
  const randomIndex = Math.floor(Math.random() * localImages.length)
  return localImages[randomIndex]
}

onLoad((options: any) => {
  const newsId = options.id

  const { data, loading: requestLoading } = useRequest(() => getNewsDetailAPI(newsId), {
    immediate: true,
  })

  // 监听加载状态和数据
  watchEffect(() => {
    isLoading.value = requestLoading.value

    if (data.value) {
      // 替换为随机本地图片
      newsDetail.value = {
        ...data.value,
        image: getRandomLocalImage(),
      }
    }
  })
})
</script>

<style lang="scss" scoped>
.news-detail {
  padding: 32rpx;
  background-color: #fff;

  .news-header {
    margin-bottom: 32rpx;

    .news-title {
      display: block;
      margin-bottom: 16rpx;
      font-size: 40rpx;
      font-weight: 600;
      line-height: 1.4;
      color: #2c3e50;
    }

    .news-time {
      font-size: 28rpx;
      color: #8c9bab;
    }
  }

  .news-image {
    width: 100%;
    margin: 32rpx 0;
    border-radius: 16rpx;
  }

  .news-content {
    .news-description {
      font-size: 32rpx;
      line-height: 1.8;
      color: #3c4a5a;
    }
  }
  /* 骨架屏样式 */
  .skeleton-detail {
    .skeleton-header {
      margin-bottom: 32rpx;

      .skeleton-title {
        display: block;
        height: 80rpx;
        margin-bottom: 16rpx;
        background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
        background-size: 200% 100%;
        border-radius: 8rpx;
        animation: shimmer 1.5s infinite;
      }

      .skeleton-time {
        width: 200rpx;
        height: 36rpx;
        background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
        background-size: 200% 100%;
        border-radius: 6rpx;
        animation: shimmer 1.5s infinite;
      }
    }

    .skeleton-image {
      width: 100%;
      height: 400rpx;
      margin: 32rpx 0;
      background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
      background-size: 200% 100%;
      border-radius: 16rpx;
      animation: shimmer 1.5s infinite;
    }

    .skeleton-content {
      .skeleton-paragraph {
        height: 48rpx;
        margin-bottom: 24rpx;
        background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
        background-size: 200% 100%;
        border-radius: 6rpx;
        animation: shimmer 1.5s infinite;

        &.short {
          width: 60%;
        }
      }
    }
  }
}
/* 骨架屏动画 */
@keyframes shimmer {
  0% {
    background-position: -200% 0;
  }
  100% {
    background-position: 200% 0;
  }
}
</style>
