<template>
    <div class="delete">
        <h2 style="color:red">{{blog.title}}</h2>
        <article>{{blog.body}}</article>
    </div>
</template>
<script>
export default {
    name:'Delete',
    data(){
        return{
            
              id:this.$route.params.id,
              blog:{}
        }
    },
    created(){
         this.$http.get("http://jsonplaceholder.typicode.com/posts/"+this.id)
          .then(function (response) {
            // console.log(response);
            this.blog=response.body;
          })
         
    }
}
</script>
<style>
 .delete{
     /* margin-top:60px; */
     width:800px;
     height:100%;
 }
</style>

