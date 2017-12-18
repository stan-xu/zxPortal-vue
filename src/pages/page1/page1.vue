<template>
  <div id="app" class="page1">
    <my-header/>
  </div>
</template>

<script>
  import MyHeader from '../../components/myHeader'

  export default {
    name: 'example',
    components: {
      MyHeader
    },
    mounted: function () {
      this.$api.get(
        '/api',
        {method: 'querywaterfall', page: 1, pagesize: 50, taxonomyid: 5},
        resj => {
          console.log(resj)
        }
      )
    }
  }
</script>

<style lang="scss">
  .page1 {
    background-color: $hot-dark;
    display: flex;
    background-image: url("../../images/logo.png");
  }
</style>
