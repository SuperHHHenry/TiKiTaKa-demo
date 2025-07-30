module.exports = {
  name: '淘宝',
  desc: '淘宝电商系统',
  homePage: '/schema?projectKey=taobao&key=product',
  menu: [
    {
      key: 'order',
      menuType: 'module',
      moduleType: 'iframe',
      iframeConfig: {
        path: 'http://www.baidu.com',
      },
    },
    {
      key: 'operating',
      name: '运营活动',
      menuType: 'module',
      moduleType: 'sider',
      siderConfig: {
        menu: [
          {
            key: 'coupon',
            name: '优惠券',
            menuType: 'module',
            moduleType: 'custom',
            customConfig: {
              path: '/todo',
            },
          },
          {
            key: 'promotion',
            name: '限量购',
            menuType: 'module',
            moduleType: 'custom',
            customConfig: {
              path: '/todo',
            },
          },
          {
            key: 'festival',
            name: '节日活动',
            menuType: 'module',
            moduleType: 'custom',
            customConfig: {
              path: '/todo',
            },
          },
        ],
      },
    },
  ],
}