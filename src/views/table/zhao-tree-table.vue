<template>
<!--  支持树类型的数据的显示。当 row 中包含 children 字段时，被视为树形数据。渲染树形数据时，必须要指定 row-key。-->
<!--  支持子节点数据异步加载。设置 Table 的 lazy 属性为 true 与加载函数 load 。-->
<!--  通过指定  row 中的 hasChildren 字段来指定哪些行是包含子节点。-->
<!--  children 与 hasChildren 都可以通过 tree-props 配置。-->
<!--  default-expand-all 是否默认展开所有行，当 Table 包含展开行存在或者为树形表格时有效 默认值为false-->
<!--  lazy-->
<!--  :load="load"-->
  <el-table
    :data="tableData1"
    style="width: 100%"
    row-key="id"
    border
    :tree-props="{children: 'children', hasChildren: 'hasChildren'}">
    <el-table-column prop="date" label="日期" width="180" />
    <el-table-column prop="name" label="姓名" width="180" />
    <el-table-column prop="address" label="地址" default-expand-all/>
  </el-table>
</template>
<script>
export default {
  name: 'TreeTable',
  data() {
    return {
      expand: true,
      tableData1: [{
        id: 1,
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄',
        children: [
          {
            id: 6,
            date: '2016-05-02',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1519 弄',
            children: [
              {
                id: 7,
                date: '2016-05-02',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1520 弄'
              }
            ]
          }
        ]
      }, {
        id: 2,
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1517 弄',
        hasChildren: true
      }, {
        id: 3,
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1515  弄',
        hasChildren: true
      }, {
        id: 4,
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄'
      }]
    }
  }

}

</script>

<style scoped>

</style>
