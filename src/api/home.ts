import request from '@/utils/request'

export type BannerResponse = { img: string }[]
export type CategoryResponse = { icon: string; name: string }[]
export type ListRequest = { pageSize: number; pageNo: number }
export type ListResponse = {
  desc: string
  img: string
  oldPrice: number
  price: number
  productId: string
  title: string
}[]

export function getBanner() {
  return {}
  return request<BannerResponse>({
    url: '/home/banner',
    method: 'get'
  })
}

export function getCategory() {
  return {}
  return request<CategoryResponse>({
    url: '/home/category',
    method: 'get'
  })
}

export function getList(data: ListRequest) {
  return {}
  return request<ListResponse>({
    url: '/home/list',
    method: 'post',
    data
  })
}
