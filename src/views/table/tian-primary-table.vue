<template>
  <div class="app-container">
    <el-button type="primary" @click="handleAddRole">添加角色</el-button>

    <el-row>
      <el-col :span="12">
        <el-form :model="role" label-width="80px" label-position="left">
          <el-form-item label="名称">
            <el-input v-model="role.name" placeholder="Role Name" />
          </el-form-item>
          <el-form-item label="描述">
            <el-input
              v-model="role.description"
              :autosize="{ minRows: 2, maxRows: 4}"
              type="textarea"
              placeholder="Role Description"
            />
          </el-form-item>
          <el-form-item label="权限">
            <el-tree
              ref="tree"
              :check-strictly="checkStrictly"
              :data="routesData"
              :props="defaultProps"
              show-checkbox
              node-key="path"
              class="permission-tree"
            />
          </el-form-item>
        </el-form>
        <el-button type="primary" @click="confirmRole">确认</el-button>
      </el-col>
      <el-col :span="12">
        <el-table :data="rolesList" style="width: 100%;margin-top:30px;" border>
          <el-table-column align="center" label="角色键" width="220" prop="key"></el-table-column>
          <el-table-column align="center" label="角色名称" width="220" prop="name"></el-table-column>
          <el-table-column align="header-center" label="描述" prop="description"></el-table-column>
          <el-table-column align="center" label="操作">
            <template slot-scope="scope" @click.native="showRole(scope)">
              <el-button type="primary" size="small" @click="handleEdit(scope)">编辑</el-button>
              <el-button type="danger" size="small" @click="handleDelete(scope)">删除</el-button>
            </template>
          </el-table-column>
        </el-table>
      </el-col>
    </el-row>

    <el-dialog :visible.sync="dialogVisible" :title="dialogType==='edit'?'编辑角色':'添加角色'">
      <el-form :model="role" label-width="80px" label-position="left">
        <el-form-item label="名称">
          <el-input v-model="role.name" placeholder="Role Name" />
        </el-form-item>
        <el-form-item label="描述">
          <el-input
            v-model="role.description"
            :autosize="{ minRows: 2, maxRows: 4}"
            type="textarea"
            placeholder="Role Description"
          />
        </el-form-item>
        <el-form-item label="权限">
          <el-tree
            ref="tree2"
            :check-strictly="checkStrictly"
            :data="routesData"
            :props="defaultProps"
            show-checkbox
            node-key="path"
            class="permission-tree"
          />
        </el-form-item>
      </el-form>
      <div style="text-align:right;">
        <el-button type="danger" @click="dialogVisible=false">取消</el-button>
        <el-button type="primary" @click="confirmRole">确认</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import path from 'path'
import { deepClone } from '@/utils'
import { getRoutes, getRoles, addRole, deleteRole, updateRole } from '@/api/role'

//配置角色的默认属性
const defaultRole = {
  key: '',                  //角色键
  name: '',                 //角色名称
  description: '',          //角色描述
  routes: []                //路由规则
}

export default {
  data() {
    return {
      role: Object.assign({}, defaultRole), //一个角色的默认属性
      routes: [],                                 //路由信息列表
      rolesList: [],                              //角色列表
      dialogVisible: false,                       //对话框是否显示
      dialogType: 'new',                          //弹出对话框的类型，new：添加角色；    edit：编辑角色
      checkStrictly: false,
      defaultProps: {
        children: 'children',
        label: 'title'
      }
    }
  },
  computed: {
    routesData() {
      return this.routes
    }
  },
  created() {
    // Mock: 获取所有路由列表与所有角色列表
    this.getRoutes()
    this.getRoles()
  },
  methods: {
    //发请求，获取所有路由信息列表
    async getRoutes() {
      const res = await getRoutes()
      this.serviceRoutes = res.data
      this.routes = this.generateRoutes(res.data)
    },

    // 发请求，获取所有角色列表
    async getRoles() {
      const res = await getRoles()
      this.rolesList = res.data
    },

    // 重塑路线结构，使其看起来与侧边栏相同
    generateRoutes(routes, basePath = '/') {
      const res = []

      for (let route of routes) {
        // 跳过一些路线
        if (route.hidden) { continue }

        const onlyOneShowingChild = this.onlyOneShowingChild(route.children, route)

        if (route.children && onlyOneShowingChild && !route.alwaysShow) {
          route = onlyOneShowingChild
        }

        const data = {
          path: path.resolve(basePath, route.path),
          title: route.meta && route.meta.title

        }

        // recursive child routes
        if (route.children) {
          data.children = this.generateRoutes(route.children, data.path)
        }
        res.push(data)
      }
      return res
    },
    generateArr(routes) {
      let data = []
      routes.forEach(route => {
        data.push(route)
        if (route.children) {
          const temp = this.generateArr(route.children)
          if (temp.length > 0) {
            data = [...data, ...temp]
          }
        }
      })
      return data
    },

    //添加角色
    handleAddRole() {
      this.role = Object.assign({}, defaultRole)        //初始化角色属性
      if (this.$refs.tree) {
        this.$refs.tree.setCheckedNodes([])
      }
      this.dialogType = 'new'                                 //配置对话框title
      this.dialogVisible = true                               //显示对话框
    },

    //编辑角色
    handleEdit(scope) {
      this.dialogType = 'edit'                                  //配置对话框title
      // this.dialogVisible = true                               //显示对话框
      this.checkStrictly = true
      this.role = deepClone(scope.row)
      this.$nextTick(() => {
        const routes = this.generateRoutes(this.role.routes)
        this.$refs.tree.setCheckedNodes(this.generateArr(routes))
        // set checked state of a node not affects its father and child nodes
        this.checkStrictly = false
      })
    },

    // 删除按钮
    handleDelete({ $index, row }) {
      this.$confirm('是否要删除此角色?', '删除提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      })
        .then(async() => {
          await deleteRole(row.key)
          this.rolesList.splice($index, 1)
          this.$message({
            type: 'success',
            message: '删除成功!'
          })
        })
        .catch(err => { console.error(err) })
    },

    generateTree(routes, basePath = '/', checkedKeys) {
      const res = []

      for (const route of routes) {
        const routePath = path.resolve(basePath, route.path)

        // recursive child routes
        if (route.children) {
          route.children = this.generateTree(route.children, routePath, checkedKeys)
        }

        if (checkedKeys.includes(routePath) || (route.children && route.children.length >= 1)) {
          res.push(route)
        }
      }
      return res
    },
    //对话框确认按钮，添加/编辑角色
    async confirmRole() {
      const isEdit = this.dialogType === 'edit'               //是不是编辑角色

      const checkedKeys = this.$refs.tree.getCheckedKeys()    //获取树表所有选中项
      this.role.routes = this.generateTree(deepClone(this.serviceRoutes), '/', checkedKeys)

      if (isEdit) {               //编辑角色
        await updateRole(this.role.key, this.role)
        for (let index = 0; index < this.rolesList.length; index++) {
          if (this.rolesList[index].key === this.role.key) {
            this.rolesList.splice(index, 1, Object.assign({}, this.role))
            break
          }
        }
      } else {                    //添加角色
        const { data } = await addRole(this.role)
        this.role.key = data.key
        this.rolesList.push(this.role)
      }

      const { description, key, name } = this.role
      this.dialogVisible = false
      this.$notify({
        title: 'Success',
        dangerouslyUseHTMLString: true,
        message: `
            <div>Role Key: ${key}</div>
            <div>Role Name: ${name}</div>
            <div>Description: ${description}</div>
          `,
        type: 'success'
      })
    },
    // reference: src/view/layout/components/Sidebar/SidebarItem.vue
    onlyOneShowingChild(children = [], parent) {
      let onlyOneChild = null
      const showingChildren = children.filter(item => !item.hidden)

      // When there is only one child route, the child route is displayed by default
      if (showingChildren.length === 1) {
        onlyOneChild = showingChildren[0]
        onlyOneChild.path = path.resolve(parent.path, onlyOneChild.path)
        return onlyOneChild
      }

      // Show parent if there are no child route to display
      if (showingChildren.length === 0) {
        onlyOneChild = { ... parent, path: '', noShowingChildren: true }
        return onlyOneChild
      }

      return false
    }
  }
}
</script>

<style lang="scss" scoped>
.app-container {
  .roles-table {
    margin-top: 30px;
  }
  .permission-tree {
    margin-bottom: 30px;
  }
}
</style>
