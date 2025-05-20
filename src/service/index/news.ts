import { http } from '@/utils/http'

export interface INewsItem {
  author: string
  content: string
  created_at: string
  id: string
  image: string
  title: string
  updated_at: string
}

export interface INews {
  items: Array<INewsItem>
  total: number
}

/** 获取新闻列表 */
export const getNewsListAPI = () => {
  return http.get<INews>('/api/v1/news?page=1&page_size=10')
}

/** 获取新闻详情 */
export const getNewsDetailAPI = (id: string) => {
  return http.get<INewsItem>(`/api/v1/news/${id}`)
}
