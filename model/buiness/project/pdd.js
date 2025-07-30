module.exports = {
  name: '拼多多',
  desc: '拼多多系统',
  homePage: '/schema?projectKey=pdd&key=product',
  menu: [
    {
      key: 'product',
      name: '商品管理（拼多多）',
    },
    {
      key: 'client',
      name: '客户管理（拼多多）',
      moduleType: 'custom',
      customConfig: {
        path: '/todo',
      },
    },
    {
      key: 'data',
      name: '数据分析',
      menuType: 'module',
      moduleType: 'sider',
      siderConfig: {
        menu: [
          {
            key: 'analysis',
            name: '电商罗盘',
            menuType: 'module',
            moduleType: 'custom',
            customConfig: {
              path: '/todo',
            },
          },
          {
            key: 'sider-search',
            name: '信息查询',
            menuType: 'module',
            moduleType: 'iframe',
            iframeConfig: {
              path: 'https://element-plus.org/zh-CN/component/overview.html',
            },
          },
          {
            key: 'categories',
            name: '数据分类',
            menuType: 'group',
            subMenu: [
              {
                key: 'category-1',
                name: '一级分类',
                menuType: 'module',
                moduleType: 'schema',
                schemaConfig: {
                  api: '/api/proj/product',  // 数据源 API （遵循 RESTFUL 规范）
                  schema: {
                    type: 'object',
                    properties: {
                      productId: {
                        type: 'string',
                        label: '商品ID',
                        tableOption: {
                          width: 300,
                          'show-overflow-tooltip': true,
                        },
                      },
                      productName: {
                        type: 'string',
                        label: '商品名称',
                        tableOption: {
                          width: 200,
                        },
                        searchOption: {
                          comType: 'asyncSelect',
                          default: '',
                          asyncApi: '/api/proj/product/enumList',
                        },
                      },
                      price: {
                        type: 'number',
                        label: '商品价格',
                        tableOption: {
                          width: 200,
                        },
                        searchOption: {
                          comType: 'select',
                          default: 100,
                          enumList: [
                            {
                              label: '$100',
                              value: 100,
                            },
                            {
                              label: '$200',
                              value: 200,
                            },
                            {
                              label: '$300',
                              value: 300,
                            },
                            {
                              label: '$400',
                              value: 400,
                            },
                          ],
                        },
                      },
                      inventory: {
                        type: 'number',
                        label: '库存',
                        tableOption: {
                          width: 200,
                        },
                        searchOption: {
                          comType: 'input',
                          default: '',
                        },
                      },
                      createTime: {
                        type: 'string',
                        label: '创建时间',
                        tableOption: {
                        },
                        searchOption: {
                          comType: 'dateRange',
                          default: '',
                        },
                      },
                    },
                  },
                  tableConfig: {
                    headerButtons: [
                      {
                        label: '新增商品',
                        eventKey: 'showComponent',
                        type: 'primary',
                        eventOption: {
                          comName: 'createForm',
                        },
                      },
                    ],
                    rowButtons: [
                      {
                        label: '修改',
                        eventKey: 'showComponent',
                        type: 'primary',
                      },
                      {
                        label: '删除',
                        eventKey: 'remove',
                        type: 'danger',
                        eventOption: {
                          params: {
                            productId: 'schema::productId',
                          },
                        },
                      },
                    ],
                  },
                  componentConfig: {
                    createForm: {
                      title: '新增商品', // 表单标题
                      saveBtnText: '保存', // 保存按钮名称
                    },
                  },
                },
              },
              {
                key: 'category-2',
                name: '二级分类',
                menuType: 'module',
                moduleType: 'custom',
                customConfig: {
                  path: '/todo',
                },
              },
              {
                key: 'tags',
                name: '标签',
                menuType: 'module',
                moduleType: 'schema',
                schemaConfig: {
                  api: '/api/client',
                  schema: {
                    type: 'object',
                    properties: {},
                  },
                },
              },
            ],
          },
        ],
      },
    },
    {
      key: 'search',
      name: '信息查询',
      moduleType: 'iframe',
      menuType: 'module',
      iframeConfig: {
        path: 'https://element-plus.org/zh-CN/component/overview.html',
      },
    },
  ],
}