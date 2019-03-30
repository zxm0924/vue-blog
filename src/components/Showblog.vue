<template>
  <div class="show">
    <input type="text" class="search" v-model="search" placeholder="搜索">
    <h2>记录展示</h2>
    <div class="bolgshow" v-for="list in filter">
      <router-link v-bind:to="'/Delete/' + list.id ">
        <h3 v-pcolor>{{list.title|Daxie}}</h3>
      </router-link>
      <p>{{list.body|sinpy}}</p>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Showblog',
    data() {
      return {
        blogs: [

        ],
        search: ''
      }
    },
    methods: {
      getlist() {
        this.$http.get("http://jsonplaceholder.typicode.com/posts")
          .then(function (response) {
            console.log(response);
            this.blogs = response.body.slice(0, 10);
          })
      }
    },
    computed: {
      filter: function () {
        return this.blogs.filter((list) => {
          return list.title.match(this.search)
        })
      }
    },
    filters: {
      Daxie(value) {
        return value.toUpperCase()
      }
    },
    created() {
      console.log('哈哈哈');
      this.getlist();
      var id = this.$route.id;
      console.log('你找到了吗？' + id);
    }
  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  * {
    margin: 0px;
    padding: 0px;
  }

  .search {
    width: 100%;
    height: 30px;
    padding-left:5px;
    margin-top:20px;
  }

  .show {
    width: 800px;
    margin: 0 auto;
  }

  .bolgshow {
    margin-top: 40px;
    height: 100px;
    background-color: rgb(229, 248, 229);
    padding: 10px;
    display: flex;
    flex-direction: column;
  }

  h3 {
    height: 50px;
  }

  p {
    flex: 1;
    height: 250px;
    /* border:1px solid #666; */
  }

</style>
