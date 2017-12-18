<template>
  <nav class="navbar navbar-static-top">
    <div class="container">
      <a class="navbar-brand" href="#"></a>
      <el-row>
        <el-col :span="2" class="col">
          <a href="http://www.zxzx119.com/article-news-1.html">热点新闻</a>
        </el-col>
        <el-col :span="2" class="col">
          <a href="http://www.zxzx119.com/article-wiki-1.html">政策法规</a>
        </el-col>
        <el-col :span="2" class="col">
          <a href="http://www.zxzx119.com/article-knowall-1.html">消防百科</a>
        </el-col>
        <el-col :span="2" class="col">
            <a href="http://d.zxzx119.com/">企业名录</a>
        </el-col>
        <el-col :span="2" class="col">
          <a href="http://www.zxzx119.com/article-onlineEdu-1.html">教育培训</a>
        </el-col>
        <el-col :span="2" class="col">
          <a href="http://e.zxzx119.com/">前沿技术</a>
        </el-col>
        <el-col :span="2" class="col">
          <a href="http://www.zxzx119.com/article-savezx-1.html">中消救援</a>
        </el-col>
        <el-col :span="2" class="col">
          <a href="http://www.zxzx119.com/119">紧急呼叫119</a>
        </el-col>
        <el-col :span="3" class="col col-input">
          <form method="GET" action="http://www.zxzx119.com/s">
            <el-input id="js-input-search" placeholder="搜索">
              <el-button id="js-btn-search" slot="append" icon="el-icon-search" native-type="submit"></el-button>
            </el-input>
          </form>
        </el-col>
        <el-col :span="2" class="col navbar-translate">
          <span><a href="">En</a></span>
          <span>/</span>
          <span><a href="">中</a></span>
        </el-col>
      </el-row>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'myHeader',
  mounted () {
    this.setSearchInputBorderRadius()
  },
  methods: {
    setSearchInputBorderRadius () {
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
.col {
  //height: px;
  line-height: 80px;
  & > a {
    display: block;
    color: #fff;
  }
  & > a:hover {
    color: #ddd;
  }
}
.col-input{
  margin: 0 15px;
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
