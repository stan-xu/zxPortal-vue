<template>
  <div id="encyclop-menu">
    <div class="container">
      <el-row tag="ul" class="navbar">
        <el-col :span="6" v-for="(item,index) in navlist" :key="index" tag="li">
          <a :href="baseUrl+item.url">{{item.name}}</a>
        </el-col>
        <!--        <nav class="navbar">
                  <ul class="navbar-list">
                    <li class="col" v-for="(item,index) in navlist" :key="index">
                      <a :href="baseUrl+item.url">{{item.name}}</a>
                    </li>
                  </ul>
                </nav>-->
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
    ul.navbar {
      background-color: $hot-dark;
      height: 40px;
      padding: 0 90px;
      li {
        text-align: center;
        list-style: none;
        line-height: 40px;
        & > a {
          color: $white-max;
        }
        & > a:hover {
          color: #ddd;
        }
      }
    }
  }
</style>
