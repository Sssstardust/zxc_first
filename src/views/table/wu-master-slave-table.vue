<template>
  <div>
    <div style="float:left;width:50%;height: 650px;border: 1px solid #0a76a4">
      <el-table :data="table1" :row-style="{height: '50px'}" border>
        <el-table-column prop="major" label="专业" />
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button type="text" size="mini" @click="showAllMember(scope.row)">查看</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <div style="float:left;width:50%;border: 1px solid #0a76a4">
      <el-table :data="table3" :row-style="{height: '50px'}" border>
        <el-table-column prop="sno" label="学号" />
        <el-table-column prop="name" label="姓名" />
        <el-table-column prop="sex" label="性别" />
        <el-table-column prop="major" label="专业" />
      </el-table>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MasterSlaveTable',
  data() {
    return {
      table1: [
        { major: '计算机科学与技术' },
        { major: '物联网工程' },
        { major: '软件工程' }
      ],
      table2: [
        { sno: '01123111', name: '张三', sex: '男', major: '计算机科学与技术' },
        { sno: '01123114', name: '张四', sex: '女', major: '计算机科学与技术' },
        { sno: '01123115', name: '张五', sex: '男', major: '计算机科学与技术' },
        { sno: '01123112', name: '李四', sex: '女', major: '物联网工程' },
        { sno: '01123116', name: '李五', sex: '男', major: '物联网工程' },
        { sno: '01123113', name: '王五', sex: '男', major: '软件工程' }
      ],
      table3: [{ sno: '请选择', name: '请选择', sex: '请选择', major: '请选择' }]
    }
  },
  created() {
  },
  methods: {
    showAllMember(row) {
      const chosenMajor = row.major
      console.log('所选专业', chosenMajor)
      const obj = this.table2.filter(item => item.major === chosenMajor)
      this.table3 = obj
    }
  }
}
</script>

<style scoped>

</style>
