import { defineUniPages } from '@uni-helper/vite-plugin-uni-pages'

export default defineUniPages({
  globalStyle: {
    navigationStyle: 'default',
    navigationBarTitleText: 'UniAppJob',
    navigationBarBackgroundColor: '#f8f8f8',
    navigationBarTextStyle: 'black',
    backgroundColor: '#FFFFFF',
  },
  easycom: {
    autoscan: true,
    custom: {
      '^wd-(.*)': 'wot-design-uni/components/wd-$1/wd-$1.vue',
      '^(?!z-paging-refresh|z-paging-load-more)z-paging(.*)':
        'z-paging/components/z-paging$1/z-paging$1.vue',
    },
  },
  tabBar: {
    color: '#999999',
    selectedColor: '#018d71',
    backgroundColor: '#F8F8F8',
    borderStyle: 'black',
    height: '50px',
    fontSize: '10px',
    iconWidth: '24px',
    spacing: '3px',
    list: [
      {
        iconPath: 'static/tabbar/company.png',
        selectedIconPath: 'static/tabbar/companyHL.png',
        pagePath: 'pages/company/index',
        text: '企业介绍',
      },
      {
        iconPath: 'static/tabbar/job.png',
        selectedIconPath: 'static/tabbar/jobHL.png',
        pagePath: 'pages/job/index',
        text: '招聘职位',
      },
      {
        iconPath: 'static/tabbar/qa.png',
        selectedIconPath: 'static/tabbar/qaHL.png',
        pagePath: 'pages/qa/index',
        text: 'Q&A',
      },
      {
        iconPath: 'static/tabbar/news.png',
        selectedIconPath: 'static/tabbar/newsHL.png',
        pagePath: 'pages/news/index',
        text: '最新资讯',
      },
    ],
  },
})
