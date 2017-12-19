<template>
  <nav class="navbar navbar-static-top">
    <div class="container">
      <a class="navbar-brand" href="#"></a>
      <ul class="navbar-list">
        <li class="col" v-for="(item,index) in navlist" :key="index">
          <a :href="item.url" :class="{'selected':selected==index}">{{item.name}}</a>
        </li>
        <li class="col col-input">
          <form method="GET" action="http://www.zxzx119.com/s">
            <el-input id="js-input-search" placeholder="搜索">
              <el-button id="js-btn-search" slot="append" icon="el-icon-search" native-type="submit"></el-button>
            </el-input>
          </form>
        </li>
        <li class="col navbar-translate">
          <span><a href="">En</a></span>
          <span>/</span>
          <span><a href="">中</a></span>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'myHeader',
  props: ['selected'],
  data () {
    return {
      navlist: [
        {
          url: 'http://www.zxzx119.com/article-news-1.html',
          name: '热点新闻'
        },
        {
          url: 'http://www.zxzx119.com/article-wiki-1.html',
          name: '政策法规'
        },
        {
          url: 'http://www.zxzx119.com/article-knowall-1.html',
          name: '消防百科'
        },
        {
          url: 'http://d.zxzx119.com/',
          name: '企业名录'
        },
        {
          url: 'http://www.zxzx119.com/article-onlineEdu-1.html',
          name: '教育培训'
        },
        {
          url: 'http://e.zxzx119.com/',
          name: '前沿技术'
        },
        {
          url: 'http://www.zxzx119.com/article-savezx-1.html',
          name: '中消救援'
        },
        {
          url: 'http://www.zxzx119.com/119',
          name: '紧急呼叫119'
        }
      ]
    }
  },
  mounted () {
    this.setSearchInputBorderRadius()
  },
  methods: {
    setSearchInputBorderRadius () { // 给搜索输入框和按钮设置圆角
      let inputSearch = document.getElementById('js-input-search')
      let btnSearch = document.getElementById('js-btn-search')
      inputSearch.style.borderRadius = '20px 0 0 20px'
      btnSearch.parentNode.style.borderRadius = '0 20px 20px 0'
    }
  }
}
</script>

<style lang="scss" scoped>
$header-bgcolor: #c41335;
li{
  list-style: none;
}
.container {
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
}
.navbar {
  position: fixed;
  top: 0;
  margin-bottom: 20px;
  background-color: $header-bgcolor;
  width: 100%;
  height: 75px;
  background-size: 100%;
}
.navbar-static-top {
  z-index: 1000;
  border-width: 0 0 1px;
}
.navbar-img {
  padding-left: 20px;
}
.navbar-brand {
  float: left;
  margin: 10px 10px 0 0;
  width: 100px;
  height: 85px;
  background-image: url("../images/logo.png");
  background-size: 100%;
  background-repeat: no-repeat;
}
.navbar-list{
  overflow: hidden;
}
.col {
  //height: px;
  float: left;
  line-height: 80px;
  text-align: center;
  & > a {
    display: block;
    height: 75px;
    padding: 0 8px;
    color: #fff;
  }
  & > a:hover {
    color: #ddd;
  }
}
.selected{
  background-color: #82051d;
}
.col-input{
  margin: 0 7px;
  width: 200px;
}
.navbar-translate{
    color: #fff;
    a{
      color: #fff;
    }
    a:hover{
      text-decoration: underline;
    }
}
</style>
