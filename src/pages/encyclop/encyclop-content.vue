<template>
  <div id="encyclop-content">
    <div class="container">
      <el-row>
        <el-col :span="12">
          <a :href="baseUrl+ navlist.ruleurl">
            <img src="./images/rule1.jpg" class="img-responsive center-block"></a>
        </el-col>
        <el-col :span="12" class="v-outter-table content">
          <a :href="baseUrl+ navlist.ruleurl" class="text-more">更多>></a>
          <ul class="list v-table-cell" v-if="lists">
            <li v-for="item in lists" class="item">
              <a :href="item.link_to" class="item-title">{{item.title}}</a>
              <span class="item-date">{{item.created.substring(0,11)}}</span>
            </li>
          </ul>
        </el-col>
        <el-col :span="12" class="v-outter-table content">
          <a :href="baseUrl+ navlist.newsurl" class="text-more">更多>></a>
          <ul class="list v-table-cell" v-if="newslists">
            <li v-for="item in newslists" class="item">
              <a :href="item.link_to" class="item-title">{{item.title}}</a>
              <span class="item-date">{{item.created.substring(0,11)}}</span>
            </li>
          </ul>
        </el-col>
        <el-col :span="12">
          <a :href="baseUrl+ navlist.newsurl"><img src="./images/news.jpg" class="img-responsive center-block"></a>
        </el-col>
        <el-col :span="12">
          <a :href="baseUrl+ navlist.encyurl"><img src="./images/ency.jpg" class="img-responsive center-block"></a>
        </el-col>
        <el-col :span="12" class="v-outter-table content">
          <a :href="baseUrl+ navlist.encyurl" class="text-more">更多>></a>
          <ul class="list v-table-cell" v-if="encylists">
            <li v-for="item in encylists" class="item">
              <a :href="item.link_to" class="item-title">{{item.title}}</a>
              <span class="item-date">{{item.created.substring(0,11)}}</span>
            </li>
          </ul>
        </el-col>
        <el-col :span="12" class="v-outter-table content">
          <div class="v-table-cell">
            <h2><a :href="baseUrl+navlist.helpurl">中消救援</a></h2>
            <div class="list">
              <p>
                中消救援以服务社会、服务大众为宗旨，联结全国多支专业紧急救援队，涵盖生命救援、人道救助、灾害预防、应急反应、灾后恢复和减灾等各个领域。收集并反映有关紧急救援信息和情况，配合有关重大紧急救援事项的处置以及国内国际紧急救援事业的合作与交流等。通过协调救援资源，研究救援产业，促进中国紧急救援体系及相关产业的建设。依靠整合国内外救援技术、资讯及相关服务，促进中国紧急救援事业产业化、市场化、国际化。
              </p>
            </div>
          </div>
        </el-col>
        <el-col :span="12">
          <a :href="baseUrl+navlist.helpurl"><img src="./images/help.jpg" class="img-responsive center-block"></a>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'encyclop-content',
    data: function () {
      return {
        lists: '',
        newslists: '',
        encylists: '',
        navlist: {
          ruleurl: '/article-wiki-1.html',
          newsurl: '/article-news-1.html',
          encyurl: '/article-knowall-1.html',
          helpurl: '/article-savezx-1.html'
        }
      }
    },
    mounted () {
      this.get_data()
    },
    methods: {
      get_data: function () {
        this.$api.get('/api', {method: 'querywaterfall', page: 1, pagesize: 7, taxonomyid: 11}, (r) => {
          this.lists = r.data.list
        })
        this.$api.get('/api', {method: 'querywaterfall', page: 1, pagesize: 7, taxonomyid: 5}, (r) => {
          this.newslists = r.data.list
        })
        this.$api.get('/api', {method: 'querywaterfall', page: 1, pagesize: 7, taxonomyid: 14}, (r) => {
          this.encylists = r.data.list
        })
      }
    }
  }
</script>

<style lang="scss">
  #encyclop-content {
    a:hover span {
      text-decoration: underline;
    }
    .content {
      position: relative;
      padding: 0 50px;
      height: 318px;
      a:hover{
        text-decoration: underline;
        color: $hot-dark;
      }
      .text-more {
        position: absolute;
        top: 8px;
        right: 10px;
      }
      ul.list {
        list-style: none;
        & > li.item {
          &:not(:last-child) {
            margin-bottom: 12px;
          }
          .item-title {
            display: inline-block;
            width: 70%;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
          }
          .item-date {
            display: inline-block;
            overflow: hidden;
            float: right;
          }
        }
      }
    }
  }
</style>
