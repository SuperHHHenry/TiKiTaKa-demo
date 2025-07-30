module.exports = {
  model: 'dashboard',
  name: '电商系统',
  menu: [
    {
      key: 'product',
      name: '商品管理',
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
              editFormOption: {
                comType: 'input',
                disabled: true,
              },
              detailPanelOption: {},
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
                allowClear: true,
                asyncApi: '/api/proj/product/enumList',
              },
              createFormOption: {
                comType: 'input',
                default: '新商品',
                allowClear: true,
              },
              editFormOption: {
                comType: 'input',
                visible: false,
              },
              detailPanelOption: {
                readonly: true,
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
              editFormOption: {
                comType: 'inputNumber',
              },
              createFormOption: {
                comType: 'inputNumber',
              },
              detailPanelOption: {},
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
              createFormOption: {
                comType: 'select',
                enumList: [
                  {
                    label: '100',
                    value: 100,
                  },
                  {
                    label: '200',
                    value: 200,
                  },
                  {
                    label: '300',
                    value: 300,
                  },
                ],
              },
              editFormOption: {
                comType: 'select',
                enumList: [
                  {
                    label: '100',
                    value: 100,
                  },
                  {
                    label: '200',
                    value: 200,
                  },
                  {
                    label: '300',
                    value: 300,
                  },
                ],
              },
              detailPanelOption: {},
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
              detailPanelOption: {},
            },

          },
          required: [
            'productName',
          ],
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
              eventOption: {
                comName: 'editForm',
              },
            },
            {
              label: '查看详情',
              eventKey: 'showComponent',
              type: 'primary',
              eventOption: {
                comName: 'detailPanel',
              },
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
          editForm: {
            mainKey: 'productId', // 主键字段 key
            title: '修改商品',
            saveBtnText: '保存',
          },
          detailPanel: {
            mainKey: 'productId', // 主键字段 key
            title: '商品详情',
            saveBtnText: '确定',
          },
        },
      },
    },
    {
      key: 'order',
      name: '订单管理',
      menuType: 'module',
      moduleType: 'custom',
      customConfig: {
        path: '/todo',
      },
    },
    {
      key: 'client',
      name: '客户管理',
      menuType: 'module',
      moduleType: 'custom',
      customConfig: {
        path: '/view/my-todo',
      },
    },
  ],
}