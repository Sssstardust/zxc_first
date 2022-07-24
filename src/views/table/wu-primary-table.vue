<template>
  <el-table
    :data="data"
    style="width: 100%;"
    border
  >
    <el-table-column label="学号" prop="sno" />
    <el-table-column label="姓名" prop="name" />
    <el-table-column label="专业" prop="major" />
    <el-table-column label="系别" prop="department" />
  </el-table>
</template>

<script>
export default {
  name: 'PrimaryTable',
  data() {
    return {
      data: [
        { sno: '01123111', name: '张三', major: '计算机科学与技术', department: '人工智能学院' },
        { sno: '01123112', name: '李四', major: '物联网工程', department: '人工智能学院' },
        { sno: '01123113', name: '王五', major: '软件工程', department: '人工智能学院' }
      ]
    }
  }
}
</script>

<style scoped>

</style>
