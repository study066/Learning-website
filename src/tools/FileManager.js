import axios from "axios";
const FileManager = {
  // 项目public文件下的post文件夹路径
  path: process.env.BASE_URL + "post/",
  // 获取所有主题的栏目，
  getAllTopic: function () {
    return [
      "HTML专题",
      "JavaScript专题"
    ]
  },
  // 获取所有主题的文章
  getPosts: function (topic) {
    switch (topic) {
      case 0:
        return ['文本标签', 'HTML基础元素'];
      case 1:
        return ['方法和属性', '语句与数据类型']
    }
  },
  // 获取文章的详细内容
  getPostContent: function (topicName, postName) {
    let url = this.path + topicName + '/' + postName + '.md';
    // console.log(url);
    // console.log(123);
    return new Promise((res, rej) => {
      axios.get(url).then((response) => {
        // console.log(response.data)
        res(response)
      }, rej)
    })
  }
}
export default FileManager;

