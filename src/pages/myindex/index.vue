<template>
  <div id="myIndex">
    <my-header></my-header>
    <el-carousel :interval="4000" height="450px">
      <el-carousel-item v-for="item in list" :key="item">
        <img :src="item" alt="" class="img-responsive">
      </el-carousel-item>
    </el-carousel>
    <module-introduction></module-introduction>
    <company-introduction></company-introduction>
    <my-footer></my-footer>
  </div>
</template>

<script>
  import MyHeader from '../../components/myHeader'
  import CompanyIntroduction from './company-introduction'
  import ModuleIntroduction from './module-introduction'
  import MyFooter from '../../components/myFooter'

  export default {
    name: 'index',
    components: {
      MyFooter,
      ModuleIntroduction,
      CompanyIntroduction,
      MyHeader
    },
    data: function () {
      return {
        list: [require('./images/index-banner1.jpg'),
          require('./images/index-banner2.jpg'),
          require('./images/index-banner3.jpg'),
          require('./images/index-banner4.jpg'),
          require('./images/index-banner5.jpg')]
      }
    },
    mounted: function () {}
  }
</script>

<style lang="scss" scoped>
  #myIndex{
    .el-carousel {
      margin-top: 75px;
      width: 100%;
      img {
        height: 100%;
        max-width: 100%;
      }
    }
  }
</style>
