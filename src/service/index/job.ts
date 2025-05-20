import { http } from '@/utils/http'

export interface IJobItem {
  id: string
  title: string
  salary: string
  location: string
  experience: string
  education: string
  company: string
  description: string
  requirements: string
  created_at: string
  updated_at: string
}

export interface IJobList {
  items: Array<IJobItem>
  total: number
}

/** 获取职位列表 */
export const getJobListAPI = (params?: {
  keyword?: string
  location?: string
  education?: string
  page?: number
  page_size?: number
}) => {
  return http.get<IJobList>('/api/v1/jobs?page=1&page_size=10', {
    keyword: params?.keyword,
    location: params?.location,
    education: params?.education,
  })
}

/** 获取职位详情 */
export const getJobDetailAPI = (id: string) => {
  return http.get<IJobItem>(`/api/v1/jobs/${id}`)
}
