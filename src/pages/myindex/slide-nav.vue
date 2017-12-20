<template>
  <ul id="slide-nav">
    <li>
      <a href="javascript:void(0)" title="400-1919-119"><i class="fa fa-headphones"></i><br>在线客服</a>
    </li>
    <!--    <li>
          <a href=""><i class="fa fa-user"></i><br>帮助中心</a>
        </li>-->
    <li>
      <a class="open-video" @click.prevent="openPlayer"><i class="fa fa-play-circle-o"></i><br>宣传视频</a>
    </li>
    <!--    <li>
          <a href=""><i class="fa fa-map"></i><br>网站导航</a>
        </li>-->
  </ul>
</template>

<script>
  import { EventBus } from '../../util/eventBus'

  export default {
    name: 'slide-nav',
    methods: {
      openPlayer: function () {
        EventBus.$emit('openPlayer', true)
      }
    }
  }
</script>

<style lang="scss" scoped>
  #slide-nav {
    list-style: none;
    position: fixed;
    right: 0;
    top: 50%;
    border: 2px solid $hot-dark;
    border-right: 0;
    border-radius: 8px;
    font-size: 12px;
    padding: 10px;
    padding-bottom: 0;
    background-color: $white-max;
    z-index: 999;
    li {
      margin-bottom: 10px;
      a {
        display: inline-block;
        text-align: center;
        color: #a1a1a1;
        text-decoration: none;
        &:hover {
          color: $hot-dark;
        }
        i {
          font-size: 18px;
        }
      }
    }

  }
</style>
