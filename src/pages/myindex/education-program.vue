<template>
  <div id="education-program">
  <div class="container">
    <el-row>     
    <el-col :span="24" class="education-title text-center">
      <span class="text-h1">鉴定项目</span>
    </el-col>
    <hr>
    <div class="education-row">
      <el-col :span="13" class="education-text">    
          <span class="text-h2">建（构）筑物消防员</span>
          <p>职业等级：建（构）筑物消防员职业共设五个等级，分别为：初级建（构）筑物消防员（国家职业资格五级）、中级建（构）筑物消防员（国家职业资格四级）、高级建（构）筑物消防员（国家职业资格三级）、建（构）筑物消防技师（国家职业资格二级）、建（构）筑物消防高级技师（国家职业资格一级）。</p>
          <p>职业环境：室内、外，常温。</p>
          <p>职业能力特征：具有一定的表达、学习、分析判断能力；视觉、嗅觉、听觉正常，动作协调、反应迅捷。</p>
          <button><a href="http://baike.baidu.com/view/5392004.htm">百科详情</a></button>
      </el-col>
      <el-col :span="11" class="education-text">
         <img src="./images/education-program.png" alt="" class="img-responsive">     
      </el-col>
      </div>
    </el-row>
    </div>
  </div>
</template>

<script>

export default {
  name: 'education-program'
}
</script>

<style lang="scss">
  #education-program {
    .education-title{
      margin-top: 42px;
      margin-bottom: 32px;
      .text-h1{
        font-size:30px;
        border-bottom: 5px solid #c41335;
        padding-bottom: 27px;
      }
    }
    hr{
      margin-bottom:30px;
       border:1.5px solid #e3e3e3;
    }
     .education-row{
      padding-left:20px;
      padding-right:20px;
      .education-text {
     .text-h2 {
        margin-top: 0;
        font-size: 24px;
        line-height:60px;
        border-left: 5px solid #c41335;
        padding-left: 10px;
      }
      button{
        background-color:#c41335;
        border-radius: 10px;
        border:0px;
        line-height: 43px; 
        padding: 0px 45px;
        font-size:12px;
        margin-top:43px;
        outline:none;
         a{
           color: #ffffff;
        }
      }
      p {
        padding-right: 35px;
        font-size: 12px;
      }
    }
    img{
      margin-left: 12px;
    }
    }
    
  }
</style>
