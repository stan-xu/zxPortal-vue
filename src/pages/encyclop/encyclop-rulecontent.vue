<template>
  <div id="encyclop-rulecontent">
    <div class="container">
      <el-row>
        <el-col :span="18">
          <div class="bottom-line-black">
            <el-row>
              <el-col :span="6" class="item-title">
                <div class="block-hot"><h1>国家政策</h1></div>
              </el-col>
             <a :href="baseUrl+navlist.countryurl" class="item-more">更多>></a>
            </el-row>
          </div>
          <div class="itemlist">
            <ul class="list"  v-if="lists">
              <li v-for="item in lists">
                <a :href="item.link_to" class="item-title">{{item.title}}</a>
              </li>
            </ul>
          </div>
          <div class="bottom-line-black">
            <el-row>
              <el-col :span="6" class="item-title">
                <div class="block-hot"><h1>地方法规</h1></div>
              </el-col>
              <a :href="baseUrl+navlist.rulesurl" class="item-more">更多>></a>
            </el-row>
          </div>
          <div class="itemlist">
            <ul class="list"  v-if="rules">
              <li v-for="item in rules">
                <a :href="item.link_to" class="item-title">{{item.title}}</a>
              </li>
            </ul>
          </div>
        </el-col clclc>
        <el-col :span="6" class="item">
          <div class="bottom-line-black">
            <div class="prefix-hot"><h1>相关热点</h1></div>
          </div>
          <div v-if="news" class="news">
            <div v-for="item in news">
              <a :href="item.link_to"><h2>{{item.title}}</h2></a>
              <img :src="item.thumbnail" class="img-responsive"/>
            </div>
          </div>
          <div class="bottom-line-black">
            <div class="prefix-hot"><h1>企业展示</h1></div>
          </div>
          <a href="http://d.zxzx119.com"><h2>企业名录</h2></a>
          <img src="./images/rule-pro.jpg" class="img-responsive">
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
    export default {
      name: 'encyclop-rulecontent',
      data: function () {
        return {
          lists: '',
          rules: '',
          news: '',
          navlist: {
            countryurl: '/article-globe-1.html',
            rulesurl: '/article-local-1.html'
          }
        }
      },
      mounted () {
        this.get_data()
      },
      methods: {
        get_data: function () {
          this.$api.get('/api', {method: 'querywaterfall', page: 1, pagesize: 10, taxonomyid: 12}, (r) => {
            this.lists = r.data.list
          })
          this.$api.get('/api', {method: 'querywaterfall', page: 1, pagesize: 10, taxonomyid: 13}, (r) => {
            this.rules = r.data.list
          })
          this.$api.get('/api', {method: 'querywaterfall', page: 1, pagesize: 1, taxonomyid: 5}, (r) => {
            this.news = r.data.list
          })
        }
      }
    }
</script>

<style lang="scss">
  #encyclop-rulecontent {
    h1{
      font-size: 21px;
      font-weight: bolder;
      margin: 20px 0;
    }
    h2{
      font-size: 18px;
      font-weight: bold;
      margin: 20px 0 10px 0;
    }
    .bottom-line-black {
      border-bottom: 1px solid #333;
      .item-title{
        text-align: center;
        .block-hot {
          padding: 0px 20px;
          color: #f5f5f5 !important;
          background-color: #c41335;
          border: none;
          line-height: 30px;
        }
      }
      .prefix-hot {
        border-left: 5px solid #c41335;
        padding-left: 10px;
      }
      .item-more{
        position: absolute;
        top: 40px;
        right: 0px;
      }
  }
    .itemlist{
      font-size: 17px;
      line-height: 33.5px;
      .list{
        margin-bottom: 10px;
      }
    }
    .item{
      padding-left:10px;
      margin-top: 3px;
      .news{
        margin:40px 0 55px 0;
      }
    }
    a:hover {
      color: $hot-dark;
    }
  }

</style>
