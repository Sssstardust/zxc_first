<template>
  <div class="custom-tree-container">
    <div class="block">
      <el-table border style="margin-bottom: 20px;" :data="routes" row-key="path">
        <el-table-column prop="title" label="名称"/>
        <el-table-column label="操作" >
            <template slot-scope="{row,$index}">
              <el-button type="primary" icon="el-icon-plus" size="mini" @click="append(row)"></el-button>
              <el-button type="" icon="el-icon-edit" size="mini"></el-button>
              <el-button type="danger" icon="el-icon-delete" size="mini"></el-button>
            </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
import {getRoutes} from "@/api/role";
import path from "path";


export default {
  name:"functionalMaintenance",
  data() {
    return {
      routes:[],        //功能列表
    }
  },

  methods: {
    //添加
    append(data) {
      const newChild = {label: 'testtest', children: [] };
      if (!data.children) {
        this.$set(data, 'children', []);
      }
      data.children.push(newChild);
    },

    //删除
    remove(node, data) {
      console.log(node, "xxxxxxxxxxxxxxxxxxxxx",data);
      const parent = node.parent;
      const children = parent.data.children || parent.data;
      const index = children.findIndex(d => d.id === data.id);
      children.splice(index, 1);
    },

    //发请求，获取所有路由信息列表
    async getRoutes() {
      const res = await getRoutes()
      this.serviceRoutes = res.data
      this.routes = this.generateRoutes(res.data)
      console.log(this.routes);
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
  },

  mounted() {
    this.getRoutes()
  }
};
</script>

<style>
.custom-tree-node {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 14px;
  padding-right: 8px;
}
</style>
