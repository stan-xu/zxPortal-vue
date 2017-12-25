<template>
  <div id="encyclop-menu">
    <div class="container">
      <el-row>
        <nav class="navbar">
          <a class="navbar-brand" :href="baseUrl+'/'"></a>
          <ul class="navbar-list">
            <li class="col" v-for="(item,index) in navlist" :key="index">
              <a :href="baseUrl+item.url">{{item.name}}</a>
            </li>
          </ul>
        </nav>
      </el-row>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'encyclop-menu',
    data () {
      return {
        navlist: [
          {
            url: '/',
            name: '首页'
          },
          {
            url: '/article-wiki-1.html',
            name: '政策法规'
          },
          {
            url: '/article-news-1.html',
            name: '热点新闻'
          },
          {
            url: '/article-knowall-1.html',
            name: '消防百科'
          },
          {
            url: '/article-savezx-1.html',
            name: '中消救援'
          }
        ]
      }
    }
  }
</script>

<style lang="scss">
  #encyclop-menu {
    font-size: 16px;
    li {
      list-style: none;
    }
    .navbar {
      background-color: $hot-dark;
      height: 41px;
      background-size: 100%;
      width: 100%;
    }
    .navbar-brand {
      float: left;
      margin: -44px 0 0 15px;
      width: 100px;
      height: 85px;
      background-image: url("./images/logo.png");
      background-size: 100%;
      background-repeat: no-repeat;
    }
    .navbar-list {
      overflow: hidden;
     padding: 0 0 0 91px;
    }
    .col {
      float: left;
      text-align: center;
      & > a {
        display: block;
        height: 41px;
        padding: 10px 49px 0 49px;
        color: #fff;
      }
      & > a:hover {
        color: #ddd;
      }
    }
  }
</style>
