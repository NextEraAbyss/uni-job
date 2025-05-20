<route lang="json5" type="page">
{
  // 设置页面的导航栏标题为"招聘职位
  style: { navigationBarTitleText: '招聘职位' },
}
</route>

<template>
  <view class="job-page">
    <view class="search-section">
      <input
        type="text"
        v-model="searchKeyword"
        placeholder="请输入关键字搜索"
        class="search-input"
      />
      <button class="search-btn" @click="handleSearch">搜索</button>
    </view>

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

    <!-- 职位列表区域：展示所有职位信息 -->
    <view class="job-list">
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
// 控制城市选择器的显示状态
const showCityPicker = ref(false)
// 控制学历选择器的显示状态
const showEducationPicker = ref(false)

// 城市选项列表
const cityList = ref(['武汉', '北京', '上海', '广州', '深圳'])
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

// 处理搜索按钮点击事件
const handleSearch = () => {
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
  padding: 20rpx;
  background-color: #f5f5f5;
}

.search-section {
  display: flex;
  gap: 20rpx;
  margin-bottom: 20rpx;

  .search-input {
    flex: 1;
    height: 72rpx;
    padding: 0 20rpx;
    font-size: 28rpx;
    background-color: #fff;
    border-radius: 8rpx;
  }

  .search-btn {
    width: 120rpx;
    height: 72rpx;
    font-size: 28rpx;
    color: #fff;
    background-color: #018d71;
    border-radius: 8rpx;
  }
}

.filter-section {
  display: flex;
  gap: 20rpx;
  padding: 20rpx;
  margin-bottom: 20rpx;
  background-color: #fff;

  .filter-item {
    flex: 1;

    :deep(.wd-picker) {
      width: 100%;
      height: 72rpx;
      padding: 0 20rpx;
      font-size: 28rpx;
      line-height: 72rpx;
      color: #333;
      background-color: #f5f5f5;
      border-radius: 8rpx;
    }
  }
}
/* 职位列表区域样式 */
.job-list {
  .job-item {
    padding: 20rpx;
    margin-bottom: 20rpx;
    background-color: #fff;
    border-radius: 8rpx;

    .job-header {
      display: flex;
      justify-content: space-between;
      margin-bottom: 16rpx;

      .job-title {
        font-size: 32rpx;
        font-weight: 600;
        color: #333;
      }

      .job-salary {
        font-size: 30rpx;
        font-weight: 600;
        color: #018d71;
      }
    }

    .job-info {
      display: flex;
      flex-wrap: wrap;
      gap: 10rpx;
      margin-bottom: 16rpx;

      text {
        padding: 6rpx 16rpx;
        font-size: 24rpx;
        color: #666;
        background-color: #f5f5f5;
        border-radius: 4rpx;
      }
    }

    .job-company {
      margin-bottom: 16rpx;
      font-size: 26rpx;
      color: #999;
    }

    .apply-btn {
      width: 100%;
      height: 70rpx;
      font-size: 28rpx;
      color: #fff;
      background-color: #018d71;
      border-radius: 6rpx;
    }
  }
}
</style>
