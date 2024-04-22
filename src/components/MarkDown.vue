<template>
  <p v-html="data"></p>
</template>
<script>
import  {marked}  from "marked" ;
export default {
  name: 'Markdown',
  // 提供外部属性来设置内容
  props:["content"],
  computed:{
    data(){
      // 将外部设置的文章markdown内容转换为html
      return marked(this.content)
    }
  }
}
</script>
<style>
</style>