<template>
  <el-table
    :data="data"
    style="width: 100%;"
    border
  >
    <el-table-column label="姓名" prop="name" />
    <el-table-column label="年龄" prop="age" />
    <el-table-column label="性别" prop="sex" />
  </el-table>
</template>

<script>
export default {
  name: 'PrimaryTable',
  data() {
    return {
      data: [
        { name: '张三', age: '20', sex: '男' },
        { name: '李四', age: '21', sex: '男' },
        { name: '王五', age: '22', sex: '女' },
        { name: '陈六', age: '23', sex: '女' },
        { name: '小胖', age: '18', sex: '男' }
      ]
    }
  }
}
</script>

<style scoped>

</style>
