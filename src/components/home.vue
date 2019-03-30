<template>
    <div class="home">
        <ul>
            <li>
                <router-link to="/blog">写博客</router-link>
            </li>
            <li>
                 <router-link to="/">搜博客</router-link>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    name:'home',
    data(){
        return{

        }
    }
}
</script>
<style >
 .home{
     margin: 0 auto;
     width: 800px;
 }
 a{
     text-decoration: none;
 }
 ul{
    display: -webkit-flex;
    display: flex;
    width: 100%;
    height: 50px;
    background-color: lightgrey;
    justify-content: space-between;
    list-style: none;
     
  }
  ul li{
    width: 400px;
    height: 50px;
    background-color: rgb(250, 169, 232);
    color:#fff;
    line-height: 50px;
    text-align: center;
  }
</style>

