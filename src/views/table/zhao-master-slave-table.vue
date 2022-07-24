<template>
  <div>
    <div style="float:left;width:50%;height: 650px;border: 1px solid #0a76a4">
      <el-table :data="table1" :row-style="{height: '50px'}" border>
        <el-table-column prop="class" label="班级" />
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button type="text" size="mini" @click="showAllMember(scope.row)">查看成员</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <div style="float:left;width:50%;border: 1px solid #0a76a4">
      <el-table :data="table3" :row-style="{height: '50px'}" border>
        <el-table-column prop="class" label="班级" />
        <el-table-column prop="name" label="名字" />
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
        { class: '一班' },
        { class: '二班' },
        { class: '三班' },
        { class: '四班' }
      ],
      table2: [
        { class: '一班', name: '一班老大' },
        { class: '一班', name: '一班老二' },
        { class: '一班', name: '一班老三' },
        { class: '二班', name: '二班老大' },
        { class: '二班', name: '二班老二' },
        { class: '三班', name: '三班老大' },
        { class: '三班', name: '三班老二' },
        { class: '三班', name: '三班老大' },
        { class: '四班', name: '四班老大' }
      ],
      table3: [{ class: '请选择', name: '请选择' }]
    }
  },
  created() {
  },
  methods: {
    showAllMember(row) {
      const chosenClass = row.class
      console.log('选择的班级', chosenClass)

      const obj = this.table2.filter(item => item.class === chosenClass)
      console.log('筛选', obj)
      this.table3 = obj
    }
  }
}
</script>

<style scoped>

</style>
