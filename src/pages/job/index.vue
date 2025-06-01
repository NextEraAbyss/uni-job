<route lang="json5" type="page">
{
  // 设置页面的导航栏标题为"招聘职位
  style: { navigationBarTitleText: '招聘职位' },
}
</route>

<template>
  <view class="job-page">
    <!-- 优化后的搜索区域 -->
    <view class="search-container">
      <view class="search-section">
        <view class="search-input-wrapper">
          <view class="search-icon"></view>
          <input
            type="text"
            v-model="searchKeyword"
            placeholder="搜索职位名称、公司名称"
            class="search-input"
            @input="handleSearchInput"
            @confirm="handleSearch"
          />
          <text v-if="searchKeyword" class="clear-icon" @click="clearSearch">✕</text>
        </view>
        <button class="search-btn" @click="handleSearch">搜索</button>
      </view>

      <!-- 还原的筛选区域 -->
      <view class="filter-section">
        <view class="filter-item">
          <wd-picker
            clearable
            v-model="selectedCityValue"
            :columns="cityList"
            title="选择城市"
            @confirm="handleCityConfirm"
            @cancel="showCityPicker = false"
            @clear="handleCityConfirm"
            placeholder="城市"
          />
        </view>
        <view class="filter-item">
          <wd-picker
            clearable
            v-model="selectedEducationValue"
            :columns="educationList"
            title="选择学历"
            @confirm="handleEducationConfirm"
            @cancel="showEducationPicker = false"
            @clear="handleEducationConfirm"
            placeholder="学历"
          />
        </view>
      </view>
    </view>

    <!-- 职位列表区域：展示所有职位信息 -->
    <view class="job-list">
      <!-- 空状态展示 -->
      <view v-if="!loading && jobList.length === 0" class="empty-state">
        <view class="empty-title">暂无相关职位</view>
        <view class="empty-desc">
          <text v-if="searchKeyword || selectedCityValue || selectedEducationValue">
            试试调整搜索条件或清除筛选
          </text>
          <text v-else>暂时没有职位发布，请稍后再试</text>
        </view>
      </view>

      <!-- 职位列表 -->
      <view v-for="(job, index) in jobList" :key="index" class="job-item">
        <!-- 职位标题和薪资信息 -->
        <view class="job-header">
          <text class="job-title">{{ job.title }}</text>
          <text class="job-salary">{{ job.salary }}</text>
        </view>
        <!-- 职位要求信息：工作地点、经验、学历 -->
        <view class="job-info">
          <text class="job-location">{{ job.location }}</text>
          <text class="job-exp">{{ job.experience }}</text>
          <text class="job-edu">{{ job.education }}</text>
        </view>
        <!-- 公司名称 -->
        <view class="job-company">{{ job.company }}</view>
        <button class="apply-btn" @click="handleApply(job)">申请岗位</button>
      </view>
    </view>
  </view>
</template>

<script lang="ts" setup>
import { ref, watchEffect } from 'vue'
import { getJobListAPI, IJobItem } from '@/service/index/job'
import useRequest from '@/hooks/useRequest'

// 搜索关键词
const searchKeyword = ref('')

// 城市选择器的当前值
const selectedCityValue = ref('')
// 学历选择器的当前值
const selectedEducationValue = ref('')

// 控制选择器的显示状态
const showCityPicker = ref(false)
const showEducationPicker = ref(false)

// 城市选项列表
const cityList = ref(['武汉', '北京', '上海', '广州', '深圳', '杭州', '成都', '南京'])
// 学历要求选项列表
const educationList = ref(['大专', '本科', '硕士', '博士'])

// 职位列表数据
const jobList = ref<IJobItem[]>([])

// 获取职位列表数据
const { loading, error, data, run } = useRequest(
  () =>
    getJobListAPI({
      keyword: searchKeyword.value,
      location: selectedCityValue.value,
      education: selectedEducationValue.value,
    }),
  {
    immediate: true,
  },
)

watchEffect(() => {
  if (data.value) {
    jobList.value = data.value.items
  }
})

// 处理搜索输入事件
const handleSearchInput = () => {
  // 可以添加防抖搜索逻辑
}

// 处理搜索按钮点击事件
const handleSearch = () => {
  run()
}

// 清除搜索关键词
const clearSearch = () => {
  searchKeyword.value = ''
  run()
}

// 清除所有筛选条件
const clearAllFilters = () => {
  searchKeyword.value = ''
  selectedCityValue.value = ''
  selectedEducationValue.value = ''
  run()
}

// 处理城市选择确认事件
const handleCityConfirm = (value: any) => {
  showCityPicker.value = false
  run()
}

// 处理学历选择确认事件
const handleEducationConfirm = (value: string) => {
  showEducationPicker.value = false
  run()
}

// 处理申请岗位按钮点击事件
const handleApply = (job: any) => {
  uni.navigateTo({
    url: `/pages/job/detail?id=${job.id}`,
  })
}
</script>

<style lang="scss" scoped>
.job-page {
  height: 100%;
  min-height: 100vh;
  /* #ifdef MP-WEIXIN */ /* 小程序中搜索区域高度 */
  /* #endif */
  /* #ifdef APP-PLUS */ /* App端状态栏高度 + 搜索区域高度 */
  /* #endif */
  /* #ifdef H5 */
  padding-top: 250rpx; /* H5中包含导航栏的高度 */
  /* #endif */
  padding-bottom: 20rpx; /* 为底部tabbar留出空间 */
  background-color: #f5f5f5;
}
/* 搜索容器 */
.search-container {
  position: fixed;
  /* #ifdef MP-WEIXIN */ /* 小程序中直接从顶部开始 */
  /* #endif */
  /* #ifdef APP-PLUS */ /* App端状态栏高度，约22-44px */
  /* #endif */
  /* #ifdef H5 */
  top: 0; /* H5中考虑导航栏高度 */
  /* #endif */
  right: 0;
  left: 0;
  z-index: 100;
  padding: 24rpx 20rpx;
  background-color: #fff;
  box-shadow: 0 2rpx 8rpx rgba(0, 0, 0, 0.06);
}
/* 搜索区域 */
.search-section {
  display: flex;
  gap: 16rpx;
  margin-bottom: 24rpx;

  .search-input-wrapper {
    position: relative;
    display: flex;
    flex: 1;
    align-items: center;
    height: 80rpx;
    padding: 0 20rpx;
    background-color: #f8f9fa;
    border: 2rpx solid transparent;
    border-radius: 12rpx;
    transition: all 0.3s ease;

    &:focus-within {
      background-color: #fff;
      border-color: #018d71;
      box-shadow: 0 0 0 4rpx rgba(1, 141, 113, 0.1);
    }

    .search-icon {
      position: relative;
      width: 32rpx;
      height: 32rpx;
      margin-right: 12rpx;

      &::before {
        position: absolute;
        top: 4rpx;
        left: 4rpx;
        box-sizing: border-box;
        width: 20rpx;
        height: 20rpx;
        content: '';
        border: 3rpx solid #8c9bab;
        border-radius: 50%;
      }

      &::after {
        position: absolute;
        top: 20rpx;
        left: 20rpx;
        width: 8rpx;
        height: 3rpx;
        content: '';
        background-color: #8c9bab;
        border-radius: 2rpx;
        transform: rotate(45deg);
      }
    }

    .search-input {
      flex: 1;
      height: 100%;
      font-size: 30rpx;
      color: #333;
      background-color: transparent;
      border: none;

      &::placeholder {
        color: #8c9bab;
      }
    }

    .clear-icon {
      padding: 8rpx;
      font-size: 28rpx;
      color: #8c9bab;
      cursor: pointer;

      &:active {
        opacity: 0.6;
      }
    }
  }

  .search-btn {
    width: 120rpx;
    height: 80rpx;
    font-size: 30rpx;
    font-weight: 600;
    color: #fff;
    background: linear-gradient(135deg, #018d71, #02a085);
    border-radius: 12rpx;
    box-shadow: 0 4rpx 12rpx rgba(1, 141, 113, 0.3);
    transition: all 0.3s ease;

    &:active {
      box-shadow: 0 2rpx 8rpx rgba(1, 141, 113, 0.3);
      transform: translateY(2rpx);
    }
  }
}
/* 筛选区域 */
.filter-section {
  display: flex;
  gap: 16rpx;

  .filter-item {
    flex: 1;

    :deep(.wd-picker) {
      width: 100%;
      height: 72rpx;
      padding: 0 20rpx;
      font-size: 28rpx;
      line-height: 72rpx;
      color: #333;
      background-color: #f8f9fa;
      border: 2rpx solid transparent;
      border-radius: 10rpx;
      transition: all 0.3s ease;

      &:focus {
        background-color: #fff;
        border-color: #018d71;
      }
    }
  }
}
/* 职位列表区域样式 */
.job-list {
  padding: 0 20rpx;
  /* 空状态样式 */
  .empty-state {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 120rpx 40rpx 80rpx;
    text-align: center;

    .empty-icon {
      margin-bottom: 32rpx;
      font-size: 120rpx;
      opacity: 0.6;
    }

    .empty-title {
      margin-bottom: 16rpx;
      font-size: 36rpx;
      font-weight: 600;
      color: #333;
    }

    .empty-desc {
      margin-bottom: 40rpx;
      font-size: 28rpx;
      line-height: 1.5;
      color: #666;
    }

    .clear-all-btn {
      padding: 16rpx 40rpx;
      font-size: 28rpx;
      color: #018d71;
      background-color: #e8f5f3;
      border-radius: 50rpx;
      transition: all 0.3s ease;

      &:active {
        opacity: 0.7;
        transform: scale(0.95);
      }
    }
  }

  .job-item {
    padding: 24rpx;
    margin-bottom: 20rpx;
    background-color: #fff;
    border-radius: 16rpx;
    box-shadow: 0 2rpx 12rpx rgba(0, 0, 0, 0.08);
    transition: all 0.3s ease;

    &:active {
      transform: scale(0.98);
    }

    .job-header {
      display: flex;
      justify-content: space-between;
      margin-bottom: 16rpx;

      .job-title {
        font-size: 34rpx;
        font-weight: 600;
        line-height: 1.3;
        color: #333;
      }

      .job-salary {
        font-size: 32rpx;
        font-weight: 600;
        color: #018d71;
      }
    }

    .job-info {
      display: flex;
      flex-wrap: wrap;
      gap: 12rpx;
      margin-bottom: 16rpx;

      text {
        padding: 8rpx 16rpx;
        font-size: 24rpx;
        color: #666;
        background-color: #f8f9fa;
        border-radius: 6rpx;
      }
    }

    .job-company {
      margin-bottom: 16rpx;
      font-size: 26rpx;
      color: #999;
    }

    .apply-btn {
      width: 100%;
      height: 76rpx;
      font-size: 30rpx;
      font-weight: 600;
      color: #fff;
      background: linear-gradient(135deg, #018d71, #02a085);
      border-radius: 50rpx;
      box-shadow: 0 4rpx 12rpx rgba(1, 141, 113, 0.2);
      transition: all 0.3s ease;

      &:active {
        box-shadow: 0 2rpx 8rpx rgba(1, 141, 113, 0.2);
        transform: translateY(2rpx);
      }
    }
  }
}
</style>
