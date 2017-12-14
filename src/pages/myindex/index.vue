<template>
  <div id="index">
    <el-carousel :interval="4000" height="450px" type="card">
      <el-carousel-item v-for="item in list" :key="item">
        <img :src="item" alt="" class="img-responsive">
      </el-carousel-item>
    </el-carousel>
    <module-introduction></module-introduction>
    <company-introduction></company-introduction>
    <div class="">
      <a href="zxzx"></a>
    </div>
  </div>
</template>

<script>
  import MyHeader from '../../components/myHeader'
  import CompanyIntroduction from './company-introduction'
  import ModuleIntroduction from './module-introduction'

  export default {
    name: 'index',
    components: {
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

<style lang="scss">
  .el-carousel {

    width: 100%;
    img {
      height: 100%;
      max-width: 100%;
    }
  }
</style>
