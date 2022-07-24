<template>
  <div>
    <div class="left">
      <el-table
        :data="tableData1"
        style="width: 100% ; height: 500px">
        <el-table-column
          label="姓名"
          width="250"
          prop="name">
        </el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button
              size="mini"
              @click="handleEdit(scope.row)">编辑</el-button>
            <el-button
              size="mini"
              type="primary"
              @click="handleView(scope.row)">查看</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <div class="right">
      <el-table
        :data="tableData3"
        style="width: 100%">
        <el-table-column
          prop="name"
          label="姓名"
          width="120">
        </el-table-column>
        <el-table-column
          prop="age"
          label="年龄"
          width="120">
        </el-table-column>
        <el-table-column
          prop="address"
          label="地址"
          width="120">
        </el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button
              size="mini"
              @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
            <el-button
              size="mini"
              type="danger"
              @click="handleDelete(scope.$index, scope.row)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MyMasterSlaveTable',
  data() {
    return {
      tableData1: [
        { name: '张三' },
        { name: '李四' },
        { name: '王五' },
        { name: '哈哈' }
      ],
      tableData2: [
        { name: '张三', age: 18, address: '河南省' },
        { name: '李四', age: 18, address: '河南省' },
        { name: '王五', age: 18, address: '河北' },
        { name: '哈哈', age: 18, address: '北京市' }
      ],
      tableData3: [{ name: '', age: '', address: '' }]
    }
  },
  methods: {
    handleView(row) {
      console.log(row)
      const chosenName = row.name
      console.log(chosenName)
      const chosenObj = this.tableData2.filter(item => item.name === chosenName)
      console.log('hahah', chosenObj)
      this.tableData3 = chosenObj
    }
  }
}
</script>

<style scoped>
.left{
  float: left;
  width: 50%;
  border-right: 1px #eee solid;
}
.right{
  float: left;
  width: 50%;
}
</style>
