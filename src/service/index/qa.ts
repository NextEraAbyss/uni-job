import { http } from '@/utils/http'

export interface IQAItem {
  question: string
  answer: string
}

export interface IQA {
  items: Array<IQAItem>
  total: number
}

/** 获取问答列表 */
export const getQAListAPI = () => {
  return http.get<IQA>('/api/v1/qa?page=1&page_size=10')
}
