<template>
  <div class="common-layout">
    <el-container style="margin: 0; padding: 0;">
      <el-header style="margin: 0; padding: 0;">
        <div id="title">Vue学习笔记</div>
      </el-header>
        <el-main style="margin: 0; padding: 0;">
          <!-- default-active 页面加载时默认激活菜单的 index -->
          <el-menu :default-active="activeIndex" mode="horizontal" background-color="rgb(166, 166, 166)" @select="selectItem">
            <el-menu-item :index="item.index" :key="item.index" v-for="item in items">
              <div id="menu">{{ item.title }}</div>
            </el-menu-item>
          </el-menu>
        </el-main>
    </el-container>
  </div>
</template>
<script>
import { ref } from 'vue'
const activeIndex = ref('1')

export default {
  name: 'Header',
  props: ["items"],
  selectItem(){
    this.$emit('selected',index)
  }
}
</script>
<style scoped>
#title {
  color: brown;
  font-size: 40px;
  /* 定义粗体字符 */
  font-weight: bold;
}

#menu {
  font-size: 20px;
}
</style>