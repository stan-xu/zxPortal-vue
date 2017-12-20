<template>
  <section id="company-introduction">
    <el-row>
      <el-col :span="12">
        <img src="./images/company-introduction.png" alt="" class="img-responsive">
      </el-col>
      <el-col :span="12" class="introduction-text v-outter-table">
        <div class="v-table-cell">
          <h1>中消在线<br>互联网+安全平台</h1>
          <p>中消在线成立于2016年，是中国首家以“互联网+”的思维模式打造的业内资源整合性消防综合服务平台。致力于消防安全宣传，为企业提供一站式消防服务：技术咨询、解决方案及培训课程。2017年，中消在线杭州技术部成立，主要从事中消平台、中消APP以及智慧消防、物联网等高新科技开发及研究，对接及引入国内外先进消防技术和产品。</p>
          <p>中消在线以服务社会、服务大众为宗旨，普及消防常识，增强全民消防意识，提高自防自救能力，未来我们将实现中消救援、全民救援的新模式，我们汇集行业大数据，融合产业链优势资源，做一个真正意义上的生命安全的保障平台!</p>
        </div>
      </el-col>
    </el-row>
  </section>
</template>

<script>
  export default {
    name: 'company-introduction'
  }
</script>

<style lang="scss">
  #company-introduction {
    background-color: #f5f4f5;
    height: 540px;
    img {
      padding: 0;
      height: 540px;
    }
    .introduction-text {
      height: 540px;
      h1 {
        margin-top: 0;
        font-size: 30px;
        line-height: 50px;
      }
      p {
        padding-right: 70px;
        font-size: 18px;
        line-height: 30px;
      }
    }
  }
</style>
