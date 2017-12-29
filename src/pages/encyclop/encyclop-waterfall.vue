<template>
  <div id="encyclop-waterfall" class="container">
    <el-row :gutter="20">
      <el-col :span="6" tag="ul" v-for="(ul,index) in ulList" ref="ul" :id="'ul'+index" class="grid"
              :key="index">
        <li v-for="item in ulList[index]" class="grid-item" >
          <img :src="item.thumbnail" alt="" v-if="item.style!=='min'" class="img-responsive center-block">
          <div>{{item.title}}</div>
        </li>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  export default {
    name: 'encyclop-waterfall',
    data: function () {
      return {
        baseList: [],
        ulList: [[], [], [], []]
      }
    },
    mounted: function () {
      this.getItems(this.$route.params.id)
    },
    methods: {
      getItems: function (id) {
        this.$api.get('/api', {method: 'querywaterfall', page: 1, pagesize: 50, taxonomyid: id}, (r) => {
          this.baseList = r.data.list
          this.ulList[0].push(this.baseList.shift())
          this.ulList[1].push(this.baseList.shift())
          this.ulList[2].push(this.baseList.shift())
          this.ulList[3].push(this.baseList.shift())
          this.updateWaterfall()
          /* baseList.map((value, index) => {
            if (index < 4) {
              this.ulList[index].push(value)
            } else {
              let heightList = document.querySelectorAll('#ul0')[0].offsetHeight
              let heightList1 = document.querySelectorAll('#ul1')[0].offsetHeight
              let heightList2 = document.querySelectorAll('#ul2')[0].offsetHeight
              let heightList3 = document.querySelectorAll('#ul3')[0].offsetHeight
              console.log(heightList)
              console.log(heightList1)
              console.log(heightList2)
              console.log(heightList3)
              // let pushIndex = heightList.indexOf(Math.min(...heightList))
              // this.ulList[pushIndex].push(value)
            }
          }) */
        })
      },
      updateWaterfall () {
        let heightList = this.$refs.ul.map(value => {
          return value.$el.offsetHeight
        })
        let index = heightList.indexOf(Math.min(...heightList))
        console.log(heightList)
        let item = this.baseList.shift()
        if (item == null) {
          return
        } else {
          this.ulList[index].push(item)
        }
        this.$nextTick(function () {
          this.updateWaterfall()
        })
      }
    }
  }
</script>

<style lang="scss" scoped>
  #encyclop-waterfall {
    background-color: #f7f6f5;
    ul.grid {
      list-style: none;
      li.grid-item {
        border: 1px solid #000;
      }
    }
  }
</style>
