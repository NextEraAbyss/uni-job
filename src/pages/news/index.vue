<route lang="json5" type="page">
{
  style: { navigationBarTitleText: '最新资讯' },
}
</route>

<template>
  <view class="news-page">
    <!-- 新闻列表区域 -->
    <view class="news-list">
      <view
        v-for="(item, index) in newsList"
        :key="index"
        class="news-item"
        @click="handleNewsClick(item)"
      >
        <image :src="item.image" mode="aspectFill" class="news-image" />
        <view class="news-content">
          <view class="news-title">{{ item.title }}</view>
          <view class="news-desc">{{ item.description }}</view>
          <view class="news-info">
            <text class="news-time">{{ item.updated_at }}</text>
          </view>
        </view>
      </view>
    </view>
  </view>
</template>

<script lang="ts" setup>
import { ref, watchEffect } from 'vue'
import { getNewsListAPI, INewsItem, INews } from '@/service/index/news'
import useRequest from '@/hooks/useRequest'

const newsList = ref<INewsItem[]>([])

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

// 处理新闻点击事件
const handleNewsClick = (item: INewsItem) => {
  uni.navigateTo({
    url: `/pages/news/detail?id=${item.id}`,
  })
}

// 获取新闻列表数据
const { loading, error, data, run } = useRequest<INews>(() => getNewsListAPI(), {
  immediate: true,
})

watchEffect(() => {
  if (data.value) {
    // 为每条新闻分配随机本地图片
    newsList.value = data.value.items.map((item) => ({
      ...item,
      image: getRandomLocalImage(),
    }))
  }
})
</script>

<style lang="scss" scoped>
.news-page {
  min-height: 100vh;
  padding: 20rpx;
  background-color: #f5f5f5;
}

.news-list {
  .news-item {
    display: flex;
    padding: 24rpx;
    margin-bottom: 24rpx;
    background-color: #fff;
    border-radius: 16rpx;
    box-shadow: 0 2rpx 12rpx rgba(0, 0, 0, 0.08);

    .news-image {
      width: 220rpx;
      height: 160rpx;
      margin-right: 24rpx;
      border-radius: 12rpx;
    }

    .news-content {
      display: flex;
      flex: 1;
      flex-direction: column;
      justify-content: space-between;

      .news-title {
        font-size: 34rpx;
        font-weight: 600;
        line-height: 1.5;
        color: #2c3e50;
      }

      .news-desc {
        display: -webkit-box;
        margin: 12rpx 0;
        overflow: hidden;
        font-size: 28rpx;
        line-height: 1.5;
        color: #5c6b7c;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
      }

      .news-info {
        .news-time {
          font-size: 26rpx;
          color: #8c9bab;
        }
      }
    }
  }
}
</style>
