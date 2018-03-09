<template>
  <div class="out">
    <div id="myIndex">
      <my-header :selected="0"></my-header>
      <my-carousel :list="list" :height="450"></my-carousel>
      <module-introduction></module-introduction>
      <company-introduction></company-introduction>
      <my-footer></my-footer>
      <slide-nav></slide-nav>
      <video-player></video-player>
    </div>
  </div>

</template>

<script>
  import MyHeader from '../../components/myHeader'
  import CompanyIntroduction from './company-introduction'
  import ModuleIntroduction from './module-introduction'
  import MyFooter from '../../components/myFooter'
  import MyCarousel from '../../components/myCarousel'
  import SlideNav from './slide-nav'
  import VideoPlayer from './video-player'

  export default {
    name: 'index',
    components: {
      VideoPlayer,
      SlideNav,
      MyCarousel,
      MyFooter,
      ModuleIntroduction,
      CompanyIntroduction,
      MyHeader
    },
    data: function () {
      return {
        list: [
          {
            img: require('./images/index-banner1.jpg'),
            link: '//d.zxzx119.com/register'
          },
          {
            img: require('./images/index-banner2.jpg'),
            link: '/article-expert-1.html'
          },
          {
            img: require('./images/index-banner3.jpg'),
            link: '//www.zxzx119.com/20171206/1135.html'
          },
          {
            img: require('./images/index-banner4.jpg'),
            link: '//android.myapp.com/myapp/detail.htm?apkName=com.zxzx119&amp;ADTAG=mobile'
          },
          {
            img: require('./images/index-banner5.jpg'),
            link: this.baseUrl + '/119'
          }]
      }
    },
    mounted: function () {}
  }
</script>

<style lang="scss" scoped>

</style>
