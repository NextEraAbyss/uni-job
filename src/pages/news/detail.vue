<route lang="json5" type="page">
{
  style: { navigationBarTitleText: '新闻详情' },
}
</route>

<template>
  <view class="news-detail">
    <view class="news-header">
      <text class="news-title">{{ newsDetail.title }}</text>
      <text class="news-time">{{ newsDetail.created_at }}</text>
    </view>
    <image :src="newsDetail.image" mode="widthFix" class="news-image" />
    <view class="news-content">
      <text class="news-description">{{ newsDetail.content }}</text>
    </view>
  </view>
</template>

<script lang="ts" setup>
import { onLoad } from '@dcloudio/uni-app'
import { ref, watchEffect } from 'vue'
import { getNewsDetailAPI, INewsItem } from '@/service/index/news'
import { useQuery } from '@tanstack/vue-query'

const newsDetail = ref<INewsItem>({} as INewsItem)

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
  const { data } = useQuery({
    queryKey: ['newsDetail', newsId],
    queryFn: () => getNewsDetailAPI(newsId),
  })

  watchEffect(() => {
    if (data.value) {
      // 替换为随机本地图片
      newsDetail.value = {
        ...data.value.data,
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
}
</style>
