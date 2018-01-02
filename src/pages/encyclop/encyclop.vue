<template>
  <div id="encyclop">
    <my-header :selected="4"></my-header>
    <div class="container">
      <router-link to="/"><img src="./images/en-banner.jpg" class="img-responsive center-block banner"></router-link>
    </div>
    <Encyclop-menu></Encyclop-menu>
    <router-view/>
    <my-footer></my-footer>
  </div>
</template>

<script>
  import MyHeader from '../../components/myHeader'
  import MyFooter from '../../components/myFooter'
  import EncyclopMenu from './encyclop-menu'

  export default {
    components: {
      MyFooter,
      MyHeader,
      EncyclopMenu
    },
    name: 'encyclop'
  }
</script>

<style lang="scss">
</style>
