<template>
  <el-table :data="tableData.filter(data => !search || data.name.toLowerCase().includes(search.toLowerCase()))" style="width: 100%" row-key="id" :tree-props="{children: 'children', hasChildren: 'hasChildren'}">
    <el-table-column
      prop="date"
      label="日期"
      width="300">
    </el-table-column>
    <el-table-column
      prop="name"
      label="姓名"
      width="300">
    </el-table-column>
    <el-table-column
      prop="address"
      label="地址">
    </el-table-column>
    <el-table-column
      align="right">
      <template slot="header" slot-scope="scope">
        <el-input
          v-model="search"
          size="mini"
          placeholder="输入关键字搜索"/>
      </template>
      <template slot-scope="scope">
        <el-button
          size="mini"
          @click="handleEdit(scope.row)">编辑</el-button>
        <el-button
          size="mini"
          type="danger"
          @click="handleDelete(scope.row)">删除</el-button>
      </template>
    </el-table-column>
  </el-table>

</template>

<script>
export default {
  name: 'MyTreeTable',
  data() {
    return {
      tableData: [{
        id: 1,
        date: '2016-05-02',
        name: '王一',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        id: 2,
        date: '2016-05-04',
        name: '王二',
        address: '上海市普陀区金沙江路 1517 弄'
      }, {
        id: 3,
        date: '2016-05-01',
        name: '王三',
        address: '上海市普陀区金沙江路 1519 弄',
        children: [{
          id: 31,
          date: '2016-05-01',
          name: '王三一',
          address: '上海市普陀区金沙江路 1519 弄',
          children: [
            {
              id: 35,
              date: '2016-05-01',
              name: '王三一一',
              address: '上海市普陀区金沙江路 1519 弄'
            }
          ]
        }, {
          id: 32,
          date: '2016-05-01',
          name: '王三二',
          address: '上海市普陀区金沙江路 1519 弄'
        }]
      }, {
        id: 4,
        date: '2016-05-03',
        name: '王五',
        address: '上海市普陀区金沙江路 1516 弄'
      }],
      search: ''
    }
  },
  methods: {
    handleEdit(row) {
      console.log(row)
    },
    handleDelete(row) {
      console.log(row)
    }
  }
}
</script>

<style scoped>

</style>
