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
    <el-table-column prop="sno" label="学号" />
    <el-table-column prop="name" label="姓名" />
    <el-table-column prop="major" label="专业" />
    <el-table-column prop="department" label="系别" />
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
        sno: '01123111',
        name: '张三',
        major: '计算机科学与技术',
        department: '人工智能学院',
        children: [
          {
            id: 4,
            sno: '01123111',
            name: '张三',
            major: '计算机科学与技术',
            department: '人工智能学院',
            children: [
              {
                id: 5,
                sno: '01123111',
                name: '张三',
                major: '计算机科学与技术',
                department: '人工智能学院'
              }
            ]
          }
        ]
      }, {
        id: 2,
        sno: '01123112',
        name: '李四',
        major: '物联网工程',
        department: '人工智能学院',
        hasChildren: true
      }, {
        id: 3,
        sno: '01123113',
        name: '王五',
        major: '软件工程',
        department: '人工智能学院',
        hasChildren: true
      }]
    }
  }

}

</script>

<style scoped>

</style>
