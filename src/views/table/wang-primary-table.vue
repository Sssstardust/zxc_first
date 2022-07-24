<template>
  <div class="app-container">
    <div class="filter-container">
      <el-input placeholder="请输入设备信息"  style="width: 300px;" clearable></el-input>
      <el-button type="primary" icon="el-icon-search">搜索</el-button>
      <el-button type="primary" @click="deviceInput">设备入库</el-button>
    </div>
<!--    表格内容-->
    <el-table :data="tableData" style="width: 100%">
      <el-table-column label="序号" width="180">
        <template slot-scope="scope">
          <span style="margin-left: 10px">{{ scope.row.id }}</span>
        </template>
      </el-table-column>
      <el-table-column prop="deviceId" label="设备序号" width="200"></el-table-column>
      <el-table-column prop="deviceName" label="设备名称" width="300"></el-table-column>
      <el-table-column prop="deviceType" label="设备类型" width="200"></el-table-column>
      <el-table-column prop="warehouseManagerName" label="入库员姓名" width="100"></el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button size="mini" @click="handleEdit(scope.row)">编辑</el-button>
          <el-button size="mini" type="danger" @click="handleDelete(scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
<!--    设备入库对话框-->
    <el-dialog title="设备入库" :visible.sync="dialogFormVisible" width="40%">
      <el-form :model="ruleForm" :rules="rules" ref="ruleForm" >
        <el-form-item label="设备序号" :label-width="formLabelWidth" required>
          <el-input v-model="ruleForm.deviceId" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="设备名称" :label-width="formLabelWidth" required>
          <el-input v-model="ruleForm.deviceName" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="设备类型" :label-width="formLabelWidth" required>
          <el-select v-model="ruleForm.type" placeholder="请选择设备类型" style="width: 475px">
            <el-option label="主机" value="zhuji"></el-option>
            <el-option label="耗材" value="haocai"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="入库员姓名" :label-width="formLabelWidth" required>
          <el-input v-model="ruleForm.managerName" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
      </div>
    </el-dialog>
<!--    编辑对话框-->
    <el-dialog title="提示" :visible.sync="dialogEditVisible" width="40%">
      <span>这是一段信息</span>
      <span slot="footer" class="dialog-footer">
    <el-button @click="dialogEditVisible = false">取 消</el-button>
    <el-button type="primary" @click="dialogEditVisible = false">确 定</el-button>
  </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: 'WarehouseInputTable',
  data() {
    return {
      tableData: [{
        id: '01',
        deviceId: '10265',
        deviceName: '物联网设备',
        deviceType: '主机',
        warehouseManagerName: '张三'
      }, {
        id: '02',
        deviceId: '10255',
        deviceName: '物联网设备',
        deviceType: '主机',
        warehouseManagerName: '张三'
      }, {
        id: '03',
        deviceId: '10245',
        deviceName: '物联网设备',
        deviceType: '耗材',
        warehouseManagerName: '张三'
      }, {
        id: '04',
        deviceId: '10865',
        deviceName: '物联网设备',
        deviceType: '耗材',
        warehouseManagerName: '张三'
      }],
      dialogFormVisible: false,
      formLabelWidth: '100px',
      dialogEditVisible: false,
      ruleForm: {
        deviceId: '',
        deviceName: '',
        type: '',
        managerName: ''
      },
      rules: {
        deviceId: [
          { required: true, message: '请输入设备序号', trigger: 'blur' },
          { type: 'number', message: '设备序号必须为数字' }
        ],
        deviceName: [
          { required: true, message: '请输入设备名称', trigger: 'blur' }
        ],
        type: [
          { required: true, message: '请选择设备类型', trigger: 'change' }
        ],
        managerName: [
          { required: true, message: '请输入入库员姓名', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    deviceInput() {
      this.dialogFormVisible = true
    },
    handleEdit(row) {
      console.log(row)
      this.dialogEditVisible = true
    },
    handleDelete(row) {
      console.log(row)
    }
  }
}
</script>

<style scoped>

</style>
