module.exports = {
  name: 'B站课堂',
  desc: 'B站课程管理',
  homePage: '/todo?projectKey=bilibili&key=video',
  menu: [
    {
      key: 'video',
      name: '视频管理(B站)',
      menuType: 'module',
    },
    {
      key: 'user',
      name: '用户管理(B站)',
      menuType: 'module',
    },
    {
      key: 'resource',
      name: '课程资料',
      menuType: 'module',
      moduleType: 'sider',
      siderConfig: {
        menu: [
          {
            key: 'pdf',
            name: 'PDF',
            menuType: 'module',
            moduleType: 'custom',
            customConfig: {
              path: '/todo',
            },
          },
          {
            key: 'excel',
            name: 'EXCEl',
            menuType: 'module',
            moduleType: 'custom',
            customConfig: {
              path: '/todo',
            },
          },
          {
            key: 'ppt',
            name: 'PPT',
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