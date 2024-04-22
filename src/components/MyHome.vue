<template>
  <el-container id="container">
    <el-header style="width: 100%" height="120px">
      <Header :items="headerItems" @:selected="changeSelected">
      </Header>
    </el-header>
    <el-main>
      <Body :items="bodyItems" :topic="headerItems[currentTopicIndex].title"></Body>
    </el-main>
    <el-footer>
      <div id="footer">{{ desc }}</div>
    </el-footer>
  </el-container>
</template>
<script>
import Header from "./MyHeader.vue";
import Body from "./MyBody.vue";
import FM from '../tools/FileManager.js'
export default {
  name: 'Home',
  components: {
    Header: Header,
    Body: Body,
  },
  data() {
    return {
      headerItems: FM.getAllTopic().map((item, ind) => {
        return {
          index: ind,
          title: item
        }
      }),
      desc: "版权所有，仅限学习使用，禁止传播！",
      currentTopicIndex: 0
    };
  },
  methods: {
    changeSelected(index) {
      this.currentTopicIndex = index
    }
  },
  computed: {
    bodyItems() {
      return FM.getPosts(this.currentTopicIndex).map((item, ind) => {
        return {
          index: ind,
          title: item
        }
      })
    }
  }
}
</script>
<style>
#container {
  height: 800px;
  margin: 30px, 100px, 0, 100px;
}

#footer {
  text-align: center;
  background-color: #9a9a9a;
  color: #fff;
  height: 35px;
  line-height: 35px;
}
</style>