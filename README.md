
```javascript
// 文件目录

TiKiTaKaDemo
├── app # 应用目录
│ ├── controller // 路由处理
│ ├── extend # 扩展
│ ├── middleware # 中间件
│ ├── pages # 页面
│ ├── public # 静态资源
│ │ ├── dist # 编译输出目录
│ │ └── static # 静态资源
│ ├── router # 路由
│ ├── router-schema 
│ ├── service  
│ ├── middleware.js # 全局中间件
│ └── webpack.config.js # webpack 配置
├── config # 配置文件
│ ├── config.beta.js # 测试环境配置
│ ├── config.default.js # 默认配置
│ ├── config.local.js # 本地配置
│ └── config.pord.js # 生产环境配置
├── model # 模型层
│ ├── buiness # 业务模型
│ └── course # 课程模型
├── .gitignore # git 忽略配置
├── build.js # 构建脚本
├── package.json # 项目配置
└── server.js # 服务启动脚本
```

## model配置

```javascript
/**
 * 很重要，一个这样的 json 结构，就是一个完整的站点（系统），整个站点都是围绕这个 json 结构来构建的。
 */

{
  mode: 'dashboard' // 模板类型，不同模板类型对应不同的模板数据结构
  name: '' // 名称
  desc: ''
  icon: ''
  homePage: ''

  // 头部菜单
  menu: [
    {
      key: '', // 菜单key
      name: '', // 菜单名称
      menuType: '', // 枚举值 group module
      subMenu: [ // menuType 为 group 时才有 subMenu
        // 可递归 menuItem
        {},
      ],
      // menuType == module 时，有效
      moduleType: '', // 枚举值 sider （侧边栏菜单）| iframe （第三方页面） | custom （自定义页面）| schema （普通页面，共性较多）
      // moduleType == sider 时
      siderConfig: {
        // 可递归 menuItem（除 moduleType == sider ）
        menu: [],
      },
      // moduleType == iframe 时
      iframeConfig: {
        path: '',
      },
      // moduleType == custom 时
      customConfig: {
        path: '', // 自定义路由
      },
      // moduleType == schema 时
      schemaConfig: {
        api: '/api/user',  // 数据源 API （遵循 RESTFUL 规范）
        schema: {
          type: 'object',
          properties: {
            key: { // 字段 key
              ...schema, // 标准 schema 配置
              type: '', // 字段类型
              label: '', // 字段中文名,

              // 字段在 table 中展示的配置
              tableOption: {
                ...elTableColumnConfig, // 标准 el-table-column 配置
                // 自定义配置
                toFixed: 0, // 小数点后保留几位
                visible: true, // 默认为 true，（false 时，不在表单中显示）
              },

              // 字段在 search-bar 中展示的配置
              searchOption: {
                ...elTableColumnConfig, // 标准 el-table-column 配置
                comType: '', // 组件类型 
                default: '', // 默认值

                // comType == select 时
                enumList: [], // 枚举列表 

                // comType == asyncSelect 时
                asyncApi: '', // 异步 API （遵循 RESTFUL 规范）
              },

              // 字段在不同 component 中展示的配置，前缀对应 componentConfig 中的键值
              // 如 componentConfig.createForm, 这里对应 createFormOption
              createFormOption: {
                ...elTableColumnConfig, // 标准 el-component 配置
                comType: "", // 组件类型 input select
                visible: true, // 是否显示，默认为 true 显示
                disabled: false, //  是否禁用，默认为 false 不禁用
                default: "", // 默认值

                // comType === select 时，可选项
                enumList: [], // 枚举列表

                // 自定义配置
                rules: [], // 验证规则
              },

              editFormOption: {
                ...elTableColumnConfig, // 标准 el-component 配置
                comType: "", // 组件类型 input select
                visible: true, // 是否显示，默认为 true 显示
                disabled: false, //  是否禁用，默认为 false 不禁用
                default: "", // 默认值
              },
              detailPanelOption: {
                ...elTableColumnConfig, // 标准 el-component 配置
              },

            },
          },
          required: [], // 标记哪些字段是必填项， properties 中的 key
        },
        // table 相关配置
        tableConfig: {
          // 表格右上方按钮
          headerButtons: [{
            label: '', // 按钮名称
            eventKey: '', // 按钮事件名
            // 按钮事件具体配置
            eventOption: {
              // 当 eventKey === showComponent
              comName: '', // 组件名称

            },
            // 按钮具体配置
            ...elButtonConfig, // 标准 el-button 配置
          }],
          // 行按钮（表格中的操作按钮）
          rowButtons: [{
            label: '', // 按钮名称
            eventKey: '', // 按钮事件名
            eventOption: {
              // 当 eventKey === showComponent
              comName: '', // 组件名称

              // 当 eventKey 为 remove 时，有效
              params: {
                // paramKey 参数的键名
                // rowValueKey 参数的值 （当格式为 schema:: tableKey 时，表示到行数据中找相应的字段）
                paramKey: rowValueKey, // 
                // userId: 'schema:: tableKey', // 当格式为 schema:: tableKey 时，表示到行数据中找相应的字段
              },
            },// 按钮具体配置
            ...elButtonConfig, // 标准 el-button 配置
          }],
        },

        // search-bar 相关配置
        searchConfig: {},
        // 动态组件相关配置
        componentConfig: {
          // create-form 相关配置
          createForm: {
            title: '', // 表单标题
            saveBtnText: '', // 保存按钮名称
          },
          editForm: {
            mainKey: '', // 主键
            title: '', // 表单标题
            saveBtnText: '', // 保存按钮名称
          },
          detailPanel: {
            mainKey: '', // 主键
            title: '', // 表单标题
            saveBtnText: '', // 保存按钮名称
          },

          // 支持用户动态扩展
        },
      },
    },
  ]
}

```
