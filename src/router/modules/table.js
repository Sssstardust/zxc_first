/** When your routing table is too long, you can split it into small modules **/

import Layout from '@/layout'

const tableRouter = {
  path: '/table',
  component: Layout,
  redirect: '/table/complex-table',
  name: 'Table',
  meta: {
    title: '表单',
    icon: 'table'
  },
  children: [
    // {
    //   path: 'dynamic-table',
    //   component: () => import('@/views/table/dynamic-table/index'),
    //   name: 'DynamicTable',
    //   meta: { title: 'Dynamic Table' }
    // },
    // {
    //   path: 'drag-table',
    //   component: () => import('@/views/table/drag-table'),
    //   name: 'DragTable',
    //   meta: { title: 'Drag Table' }
    // },
    // {
    //   path: 'inline-edit-table',
    //   component: () => import('@/views/table/inline-edit-table'),
    //   name: 'InlineEditTable',
    //   meta: { title: 'Inline Edit' }
    // },
    // {
    //   path: 'complex-table',
    //   component: () => import('@/views/table/complex-table'),
    //   name: 'ComplexTable',
    //   meta: { title: 'Complex Table' }
    // },
    // {
    //   path: 'test-table',
    //   component: () => import('@/views/table/test-table'),
    //   name: 'TestTable',
    //   meta: { title: 'Test Table' }
    // },
    {
      path: 'primary-table1',
      component: () => import('@/views/table/zhao-primary-table'),
      name: 'PrimaryTable1',
      meta: { title: '单表 赵兴宸' }
    },
    {
      path: 'primary-table2',
      component: () => import('@/views/table/wang-primary-table'),
      name: 'PrimaryTable2',
      meta: { title: '单表 王淑丽' }
    },
    {
      path: 'primary-table3',
      component: () => import('@/views/table/tian-primary-table'),
      name: 'PrimaryTable3',
      meta: { title: '单表 田聪' }
    },
    {
      path: 'primary-table4',
      component: () => import('@/views/table/wu-primary-table'),
      name: 'PrimaryTable4',
      meta: { title: '单表 吴崧霖' }
    },
    {
      path: 'tree-table1',
      component: () => import('@/views/table/zhao-tree-table'),
      name: 'TreeTable1',
      meta: { title: '树表 赵兴宸' }
    },
    {
      path: 'tree-table2',
      component: () => import('@/views/table/wang-tree-table'),
      name: 'TreeTable2',
      meta: { title: '树表 王淑丽' }
    },
    {
      path: 'tree-table3',
      component: () => import('@/views/table/tian-tree-table'),
      name: 'TreeTable3',
      meta: { title: '树表 田聪' }
    },
    {
      path: 'tree-table4',
      component: () => import('@/views/table/wu-tree-table'),
      name: 'TreeTable4',
      meta: { title: '树表 吴崧霖' }
    },
    {
      path: 'master-slave-table1',
      component: () => import('@/views/table/zhao-master-slave-table'),
      name: 'MasterSlaveTable1',
      meta: { title: '主从表 赵兴宸' }
    },
    {
      path: 'master-slave-table2',
      component: () => import('@/views/table/wang-master-slave-table'),
      name: 'MasterSlaveTable2',
      meta: { title: '主从表 王淑丽' }
    },
    {
      path: 'master-slave-table3',
      component: () => import('@/views/table/tian-master-slave-table'),
      name: 'MasterSlaveTable3',
      meta: { title: '主从表 田聪' }
    },
    {
      path: 'master-slave-table4',
      component: () => import('@/views/table/wu-master-slave-table'),
      name: 'MasterSlaveTable4',
      meta: { title: '主从表 吴崧霖' }
    }
  ]
}
export default tableRouter
