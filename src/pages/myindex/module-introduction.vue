<template>
  <section id="module-introduction">
    <div class="container v-outter-table">
      <div class="v-table-cell">
        <div class="module" v-for="(item,index) in moduleList">
          <div class="module-icon">
            <img :src="item.icon" alt="module-icon" class="icon">
            <div class="icon-hover">
              <a :href="baseUrl+item.link"><img :src="item.hoverIcon" alt="" class="icon">
                <div class="icon-hover-text center-block" :style="(index==1)?'margin-top:-31px':''"
                     v-html="item.hoverText"></div>
              </a>
            </div>
          </div>
          <div class="module-text">{{item.name}}</div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    name: 'module-introduction',
    data: function () {
      return {
        moduleList: [
          {
            name: '解决方案',
            icon: require('./images/solve-icon.png'),
            hoverIcon: require('./images/solve-icon-hover.png'),
            hoverText: '专家团队指导<br>消防安全管家式服务',
            link: '/article-solve-1.html'
          },
          {
            name: '教育培训',
            icon: require('./images/edu-icon.png'),
            hoverIcon: require('./images/edu-icon-hover.png'),
            hoverText: '一站式教育平<br>台，为建立专业<br>人才库提供保障',
            link: '/article-onlineEdu-1.html'
          },
          {
            name: '中消百科',
            icon: require('./images/know-icon.png'),
            hoverIcon: require('./images/know-icon-hover.png'),
            hoverText: '传递政策法规<br>科普消防安全知识',
            link: '/article-knowall-1.html'
          },
          {
            name: '紧急呼叫119',
            icon: require('./images/119-icon.png'),
            hoverIcon: require('./images/119-icon-hover.png'),
            hoverText: '消防急救实验<br>观察类真人秀节目',
            link: '/119'
          }]
      }
    }
  }
</script>

<style lang="scss">
  #module-introduction {
    .v-outter-table {
      height: 450px;
    }
    .module {
      width: 15%;
      float: left;
      &:not(:last-child) {
        margin-right: 13%;
      }
      padding: 0;
      overflow: hidden;
      margin: 0 auto;
      &:hover {
        .module-icon {
          margin-left: -100%;
        }
      }
      .module-icon {
        margin-left: 0px;
        width: 200%;
        transition: all 1s;
        overflow: hidden;
        .icon {
          width: 50%;
          float: left;
        }
        .icon-hover {
          position: relative;
          width: 50%;
          img {
            width: 100%;
          }
          float: left;
        }
        .icon-hover-text {
          width: 160px;
          color: #fff;
          font-size: 16px;
          text-align: center;
          position: absolute;
          top: 50%;
          left: 50%;
          margin-left: -80px;
          margin-top: -20px;
          @media (max-width: 991px) {
            font-size: 12px;
          }
        }
      }
      .module-text {
        text-align: center;
        font-size: 24px;
        margin-top: 50px;
        font-weight: bold;
        @media (max-width: 991px) {
          font-size: 18px;
        }
      }
    }
  }
</style>
