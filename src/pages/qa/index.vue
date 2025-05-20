<route lang="json5" type="page">
{
  style: { navigationBarTitleText: 'Q&A' },
}
</route>

<template>
  <view class="qa-page">
    <view class="qa-list">
      <view v-for="(item, index) in qaList" :key="index" class="qa-item">
        <view class="qa-question">
          <text class="question-icon">Q</text>
          <text class="question-text">{{ item.question }}</text>
        </view>
        <view class="qa-answer">
          <text class="answer-icon">A</text>
          <view class="answer-content">{{ formatAnswer(item.answer) }}</view>
        </view>
      </view>
    </view>
  </view>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { getQAListAPI, IQAItem, IQA } from '@/service/index/qa'
import useRequest from '@/hooks/useRequest'

const qaList = ref<IQAItem[]>([])

// 格式化答案内容，将换行符转换为文本换行
const formatAnswer = (answer: string) => {
  if (!answer) return ''
  return answer.replace(/\\n/g, '\n')
}

// 获取问答列表数据
const { loading, error, data, run } = useRequest<IQA>(() => getQAListAPI(), {
  immediate: true,
})

watchEffect(() => {
  if (data.value) {
    qaList.value = data.value.items
  }
})
</script>

<style lang="scss" scoped>
.qa-page {
  min-height: 100vh;
  padding: 20rpx;
  background-color: #f5f5f5;
}

.qa-list {
  .qa-item {
    padding: 30rpx;
    margin-bottom: 20rpx;
    background-color: #fff;
    border-radius: 12rpx;
    box-shadow: 0 2rpx 10rpx rgba(0, 0, 0, 0.05);

    .qa-question {
      display: flex;
      align-items: flex-start;
      margin-bottom: 20rpx;

      .question-icon {
        width: 40rpx;
        height: 40rpx;
        margin-right: 20rpx;
        font-size: 32rpx;
        font-weight: bold;
        color: #018d71;
      }

      .question-text {
        flex: 1;
        font-size: 32rpx;
        font-weight: bold;
        line-height: 1.4;
        color: #333;
      }
    }

    .qa-answer {
      display: flex;
      align-items: flex-start;

      .answer-icon {
        width: 40rpx;
        height: 40rpx;
        margin-right: 20rpx;
        font-size: 32rpx;
        font-weight: bold;
        color: #ff4d4f;
      }

      .answer-content {
        flex: 1;
        font-size: 28rpx;
        line-height: 1.6;
        color: #666;
        white-space: pre-wrap; // 启用此样式以正确显示换行符

        view {
          margin-bottom: 10rpx;

          &:last-child {
            margin-bottom: 0;
          }
        }
      }
    }
  }
}
</style>
