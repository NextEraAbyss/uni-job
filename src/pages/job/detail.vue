<route lang="json5" type="page">
{
  style: { navigationBarTitleText: '职位详情' },
}
</route>

<template>
  <view class="job-detail">
    <!-- 骨架屏 -->
    <template v-if="loading">
      <view class="skeleton-detail">
        <!-- 职位头部骨架 -->
        <view class="skeleton-header">
          <view class="skeleton-title"></view>
          <view class="skeleton-salary"></view>
        </view>

        <!-- 职位信息骨架 -->
        <view class="skeleton-info">
          <view v-for="n in 3" :key="n" class="skeleton-info-item">
            <view class="skeleton-label"></view>
            <view class="skeleton-value"></view>
          </view>
        </view>

        <!-- 职位内容骨架 -->
        <view class="skeleton-content">
          <view v-for="n in 2" :key="n" class="skeleton-section">
            <view class="skeleton-section-title"></view>
            <view class="skeleton-section-content">
              <view class="skeleton-line"></view>
              <view class="skeleton-line"></view>
              <view class="skeleton-line short"></view>
            </view>
          </view>
        </view>

        <!-- 申请按钮骨架 -->
        <view class="skeleton-btn"></view>
      </view>
    </template>

    <!-- 实际内容 -->
    <template v-else>
      <view class="job-header">
        <text class="job-title">{{ jobDetail.title }}</text>
        <text class="job-salary">{{ jobDetail.salary }}</text>
      </view>
      <view class="job-info">
        <view class="info-item">
          <text class="label">工作地点：</text>
          <text class="value">{{ jobDetail.location }}</text>
        </view>
        <view class="info-item">
          <text class="label">工作经验：</text>
          <text class="value">{{ jobDetail.experience }}</text>
        </view>
        <view class="info-item">
          <text class="label">学历要求：</text>
          <text class="value">{{ jobDetail.education }}</text>
        </view>
      </view>
      <view class="job-content">
        <view class="section">
          <text class="section-title">职位描述</text>
          <text class="section-content">{{ jobDetail.description }}</text>
        </view>
        <view class="section">
          <text class="section-title">任职要求</text>
          <text class="section-content">{{ jobDetail.requirements }}</text>
        </view>
      </view>
      <button class="apply-btn" @click="handleApply">立即申请</button>
    </template>
  </view>
</template>

<script lang="ts" setup>
import { onLoad } from '@dcloudio/uni-app'
import { ref, watchEffect } from 'vue'
import { getJobDetailAPI, IJobItem } from '@/service/index/job'
import useRequest from '@/hooks/useRequest'

const jobDetail = ref<IJobItem>({} as IJobItem)
const loading = ref(true)

onLoad((options: any) => {
  const jobId = options.id

  const {
    data,
    loading: requestLoading,
    run,
  } = useRequest(() => getJobDetailAPI(jobId), {
    immediate: true,
  })

  // 监听加载状态
  watchEffect(() => {
    loading.value = requestLoading.value

    if (data.value) {
      jobDetail.value = data.value
    }
  })
})

const handleApply = () => {
  // 处理申请逻辑
  uni.showToast({
    title: '申请成功',
    icon: 'success',
  })
}
</script>

<style lang="scss" scoped>
.job-detail {
  padding: 32rpx;
  background-color: #fff;

  .job-header {
    margin-bottom: 32rpx;

    .job-title {
      display: block;
      margin-bottom: 16rpx;
      font-size: 40rpx;
      font-weight: 600;
      line-height: 1.4;
      color: #2c3e50;
    }

    .job-salary {
      font-size: 36rpx;
      font-weight: 600;
      color: #018d71;
    }
  }

  .job-info {
    padding: 24rpx;
    margin-bottom: 32rpx;
    background-color: #f8f9fa;
    border-radius: 12rpx;

    .info-item {
      display: flex;
      margin-bottom: 16rpx;

      &:last-child {
        margin-bottom: 0;
      }

      .label {
        width: 160rpx;
        font-size: 28rpx;
        color: #8c9bab;
      }

      .value {
        flex: 1;
        font-size: 28rpx;
        color: #2c3e50;
      }
    }
  }

  .job-content {
    .section {
      margin-bottom: 32rpx;

      .section-title {
        display: block;
        margin-bottom: 16rpx;
        font-size: 32rpx;
        font-weight: 600;
        color: #2c3e50;
      }

      .section-content {
        font-size: 28rpx;
        line-height: 1.8;
        color: #3c4a5a;
      }
    }
  }

  .apply-btn {
    width: 100%;
    height: 88rpx;
    margin-top: 48rpx;
    font-size: 32rpx;
    color: #fff;
    background-color: #018d71;
    border-radius: 44rpx;

    &:active {
      opacity: 0.8;
    }
  }
  /* 骨架屏样式 */
  .skeleton-detail {
    .skeleton-header {
      margin-bottom: 32rpx;

      .skeleton-title {
        display: block;
        height: 56rpx;
        margin-bottom: 16rpx;
        background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
        background-size: 200% 100%;
        border-radius: 8rpx;
        animation: shimmer 1.5s infinite;
      }

      .skeleton-salary {
        width: 200rpx;
        height: 42rpx;
        background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
        background-size: 200% 100%;
        border-radius: 6rpx;
        animation: shimmer 1.5s infinite;
      }
    }

    .skeleton-info {
      padding: 24rpx;
      margin-bottom: 32rpx;
      background-color: #f8f9fa;
      border-radius: 12rpx;

      .skeleton-info-item {
        display: flex;
        margin-bottom: 16rpx;

        &:last-child {
          margin-bottom: 0;
        }

        .skeleton-label {
          width: 160rpx;
          height: 32rpx;
          background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
          background-size: 200% 100%;
          border-radius: 4rpx;
          animation: shimmer 1.5s infinite;
        }

        .skeleton-value {
          flex: 1;
          height: 32rpx;
          margin-left: 16rpx;
          background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
          background-size: 200% 100%;
          border-radius: 4rpx;
          animation: shimmer 1.5s infinite;
        }
      }
    }

    .skeleton-content {
      .skeleton-section {
        margin-bottom: 32rpx;

        .skeleton-section-title {
          display: block;
          height: 48rpx;
          margin-bottom: 16rpx;
          background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
          background-size: 200% 100%;
          border-radius: 6rpx;
          animation: shimmer 1.5s infinite;
        }

        .skeleton-section-content {
          .skeleton-line {
            height: 36rpx;
            margin-bottom: 12rpx;
            background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
            background-size: 200% 100%;
            border-radius: 4rpx;
            animation: shimmer 1.5s infinite;

            &:last-child {
              margin-bottom: 0;
            }

            &.short {
              width: 65%;
            }
          }
        }
      }
    }

    .skeleton-btn {
      width: 100%;
      height: 88rpx;
      margin-top: 48rpx;
      background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
      background-size: 200% 100%;
      border-radius: 44rpx;
      animation: shimmer 1.5s infinite;
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
