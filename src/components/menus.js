const menus = [
  {id: '0', label: '控制面板', path: '/', icon: 'fa fa-dashboard'},
  {
    id: 'general',
    label: '网站设置',
    submenu: [
      ['通用', [
        {id: 'c1', label: '网站设置'},
        {id: 'c2', label: '上传设置'},
        {id: 'c3', label: '文件存储'}
      ]],
      {
        id: 'c4',
        label: '模板管理',
        submenu: [
          {
            id: 'c4-1',
            label: '所有模板'
          },
          {
            id: 'c4-2',
            label: '安装模板'
          }
        ]
      },
      {
        id: 'c5',
        label: '导航管理',
        submenu: [
          {
            id: 'c5-1',
            label: '所有导航'
          },
          {
            id: 'c5-2',
            label: '添加导航'
          }
        ]
      },
      {
        id: 'c6',
        label: '幻灯片管理',
        submenu: [
          {
            id: 'c6-1',
            label: '所有幻灯片'
          },
          {
            id: 'c6-2',
            label: '添加幻灯片'
          }
        ]
      },
      {
        id: 'c7',
        label: '友情链接',
        submenu: [
          {
            id: 'c7-1',
            label: '所有友情链接'
          },
          {
            id: 'c7-2',
            label: '添加友情链接'
          }
        ]
      }
    ]
  },
  {
    id: 'user-center',
    label: '用户管理',
    submenu: [
      {
        id: 'd1',
        label: '管理组',
        submenu: [
          {
            id: 'd1-1',
            label: '角色管理'
          },
          {
            id: 'd1-2',
            label: '管理员'
          }
        ]
      },
      {
        id: 'd2',
        label: '用户组',
        submenu: [
          {
            id: 'd2-1',
            label: '本站用户'
          }
        ]
      }
    ]
  },
  {
    id: 'post-center',
    label: '门户管理',
    submenu: [
      {id: 'e1', label: '文章管理'},
      {id: 'e2', label: '分类管理'},
      {id: 'e3', label: '页面管理'},
      {id: 'e4', label: '文章标签'}
    ]
  }
  // {
  //   id: 'components',
  //   icon: 'fa fa-microchip',
  //   label: '组件',
  //   submenu: [
  //     {
  //       id: 'test',
  //       label: '二级测试',
  //       icon: 'fa fa-hand-o-up',
  //       submenu: [
  //         {
  //           id: 'test',
  //           label: '二级测试',
  //           icon: 'fa fa-hand-o-up'
  //         }
  //       ]
  //     },
  //     ['Form 表单', [
  //       {id: 'f1', name: 'c-button', label: 'Button 按钮', icon: 'fa fa-hand-o-up'},
  //       {id: 'f2', name: 'c-switch', label: 'Switch 开关', icon: 'fa fa-square-o'},
  //       {id: 'f3', name: 'c-checkbox', label: 'Checkbox 多选框', icon: 'fa fa-check-square'},
  //       // {id: 'f4', label: 'Radio 单选框', icon: 'fa fa-dot-circle-o'},
  //       {id: 'f5', name: 'c-input', label: 'Input 输入框', icon: 'fa fa-pencil'},
  //       {id: 'f6', name: 'c-keyboard', label: '虚拟键盘', icon: 'fa fa-keyboard-o'}
  //     ]],
  //     ['Notice', [
  //       {id: 'n1', name: 'c-alert', label: 'Alert 警告', icon: 'fa fa-info'},
  //       {id: 'n2', name: 'c-loading', label: 'Loading 加载', icon: 'fa fa-circle-o-notch'}
  //     ]],
  //     ['Other', [
  //       {id: 'c-dropdown', name: 'c-dropdown', label: 'Dropdown'},
  //       {id: 'c-navbar', name: 'c-navbar', label: 'Navbar'},
  //       {id: 'c-container', name: 'c-container', label: '栅格布局'}
  //     ]]
  //   ]
  // },
  // {
  //   id: 'pages',
  //   icon: 'fa fa-circle-o',
  //   label: 'Pages 页面',
  //   submenu: [
  //     {id: 'p-data-table', name: 'p-data-table', label: 'Table 表格数据'},
  //     {id: 'cnode', name: 'cnode', label: 'Cnode社区'},
  //     {id: 'p1', name: 'login', label: 'Login 登录'},
  //     {id: 'p2', name: 'p-login', label: 'Login 登录2'},
  //     {id: 'p3', name: 'p-register', label: 'Register 注册'},
  //     {id: '400', path: '/404', label: '404'},
  //     {id: '500', path: '/500', label: '500'}
  //   ]
  // },
  // {
  //   id: 'examples',
  //   icon: 'fa fa-paper-plane',
  //   label: 'Examples',
  //   submenu: [
  //     {id: 'e1', path: '/500', label: 'Vuex 例子'}
  //   ]
  // },
  // {
  //   id: 'version',
  //   icon: 'fa fa-meetup',
  //   label: '应用'
  // }
]
export default menus
