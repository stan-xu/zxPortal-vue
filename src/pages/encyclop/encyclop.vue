<template>
  <div id="encyclop">
    <my-header :selected="2"></my-header>
    <div class="container"><img src="./images/en-banner.jpg" class="img-responsive center-block banner"></div>
    <Encyclop-menu></Encyclop-menu>
    <Encyclop-content></Encyclop-content>
    <my-footer></my-footer>
  </div>
</template>

<script>
  import MyHeader from '../../components/myHeader'
  import MyFooter from '../../components/myFooter'
  import EncyclopMenu from './encyclop-menu'
  import EncyclopContent from './encyclop-content'

  export default {
    components: {
      MyFooter,
      MyHeader,
      EncyclopMenu,
      EncyclopContent
    },
    name: 'encyclop'
  }
</script>

<style lang="scss">
</style>
