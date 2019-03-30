<template>
  <div class="bolg">
    <h2 style="color:skyblue">欢迎你!{{blog.zuozhe}}</h2>
    <form v-if="submites">
      <div class="bolginfo">
        <div class="title">
          <label class="box">主题:</label>
          <input type="text" class="zhuti" v-model="blog.title">
        </div>
        <div class="content">
          <label class="box">内容:</label>
          <textarea name="" id="" cols="100" rows="10" v-model="blog.content"></textarea>
        </div>
        <div class="fenlei">
          <label>分类:</label>
          <label>科幻</label>
          <input type="checkbox" v-model="blog.kehuan">
          <label>文学</label>
          <input type="checkbox" v-model="blog.wenxue">
          <label>悬疑</label>
          <input type="checkbox" v-model="blog.xuanyi">
          <label>都市</label>
          <input type="checkbox" v-model="blog.dushi">
        </div>
        <div class="zuozhe">
          <label>作者</label>
          <select v-model="blog.zuozhe">
            <option v-for="items in zuozhe">
              {{items}}
            </option>

          </select>
          <!-- <input type="text" v-model="blog.zuozhe">
        -->
        </div>
        <button v-on:click.prevent="post">添加博客</button>
      </div>
    </form>

    <div class="show" v-show="!submites">
      <h3>标题：</h3>
      <p>{{blog.title}}</p>
      <h3>内容：</h3>
      <p>{{blog.content}}</p>
      <h3>分类：</h3>
      <p>{{blog.fenlei}}</p>
      <h2 style="color:#e81224">哇哇哇！你真棒！！！！ 每天都要继续哦</h2>
    </div>

  </div>
</template>

<script>
  export default {
    name: 'Blog',
    data() {
      return {
        blog: {
          title: '',
          content: '',
          fenlei: '',
          zuozhe: ''
        },
        zuozhe: ["燕子", "飞鸾", "胡歌"],
        submites: true
      }
    },
    methods: {
      post: function () {
        this.$http.post("http://jsonplaceholder.typicode.com/posts", {
            title: this.blog.title,
            body: this.blog.content,
            userId: 1
          })
          .then(function (data) {
            console.log(data);
            this.submites = false;
          })
      },


    }
  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  * {
    margin: 0px;
    padding: 0px;
  }

  .bolg {
    /* background-color: pink;/ */
  }

  h2,
  h3 {
    margin: 0px 20px 0px 0px;
  }

  .bolginfo {
    padding: 20px;
  }

  .box {
    display: block;
    margin-top: 10px;
    margin-bottom: 20px;
  }

  .title .zhuti {
    display: block;
    margin-top: 20px;
    width: 100%;
    height: 30px;
  }

  .bolg h2 {
    height: 60px;
    /* background-color: yellowgreen; */
    text-align: center;
    color: rgb(20, 19, 19);
    line-height: 60px;
    ;
  }

  .zuozhe {
    margin-top: 20px;
  }

  button {
    width: 80px;
    height: 50px;
    background-color: #e760bf;
    border-radius: 10%;
    margin-top: 10px;
    color: #fff;
  }

</style>
