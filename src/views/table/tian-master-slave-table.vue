<template>
  <div>
    <span style="font-size: 34px; margin: 20px">部门表</span>
      <el-table :data="table1" :row-style="{height: '50px'}" border>

        <el-table-column prop="class" label="部门" />
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button type="primary" size="mini" @click="showAllMember(scope.row)">查看员工</el-button>
          </template>
        </el-table-column>
      </el-table>

    <el-dialog title="部门人员" :visible.sync="dialogVisible" width="30%">
      <span>人员信息表</span>
      <span slot="footer" class="dialog-footer">
          <el-table :data="table3" :row-style="{height: '50px'}" border>
             <el-table-column prop="class" label="部门" />
              <el-table-column prop="name" label="姓名" />
          </el-table>
          <el-button @click="dialogVisible = false">取 消</el-button>
          <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
        </span>
    </el-dialog>

  </div>
</template>

<script>
export default {
  name: 'MasterSlaveTable',
  data() {
    return {
      dialogVisible:false,
      table1: [
        { class: '销售部' },
        { class: '采购部' },
        { class: '营销部' },
        { class: '后勤部' }
      ],
      table2: [
        { class: '销售部', name: 'tccc' },
        { class: '销售部', name: 'a' },
        { class: '销售部', name: 'b' },
        { class: '采购部', name: 'aa' },
        { class: '采购部', name: 'bb' },
        { class: '采购部', name: 'cc' },
        { class: '营销部', name: 'aaa' },
        { class: '营销部', name: 'bbb' },
        { class: '后勤部', name: 'aaaaaaatc' }
      ],
      table3: [{ class: '请选择', name: '请选择' }]
    }
  },
  created() {
  },
  methods: {
    showAllMember(row) {
      this.dialogVisible = true
      const chosenClass = row.class
      console.log('选择的部门', chosenClass)

      const obj = this.table2.filter(item => item.class === chosenClass)
      this.table3 = obj
    }
  }
}
</script>

<style scoped>

</style>
