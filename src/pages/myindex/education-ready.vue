<template>
  <div id="education-ready">
    <div class="container">
      <el-row :gutter="20">
        <el-col :span="24" class="education-title text-center">
          <span class="text-h1">备考指南</span>
        </el-col>
        <hr>
        <div class="ready-bg">
          <el-col :span="24" class="text-h2 text-center">建（构）筑物消防员（五级）</el-col>
          <el-row class="ready-png">
          
            <el-col :span="12" class="red">
              <el-row>
                <div class="text-bottom">
                  <el-col :span="6" class="text-right">基础知识部分</el-col>
                  <el-col :span="15" :offset="3">
                    <div class="text-left">电工学基础</div>
                    <div class="text-left">建筑学基础</div>
                  </el-col>
                </div>
                <div class="text-line">
                  <el-col :span="6" class="text-right">专业课部分</el-col>
                  <el-col :span="15" :offset="3">
                    <div class="text-left">建筑防火</div>
                    <div class="text-left">消防安全检查与火宅事故处置</div>
                    <div class="text-left">消防给水系统和自动喷水灭火系统</div>
                  </el-col>
                </div>
              </el-row>
            </el-col>
            <el-col :span="12" class="white">
              <el-row>
                <div class="text-bottom">
                  <el-col :span="6" class="text-right">基础知识部分</el-col>
                  <el-col :span="15" :offset="3">
                    <div class="text-left">水力学基础</div>
                    <div class="text-left">有机化学学基础</div>
                  </el-col>
                </div>
                <div class="text-line" :offset="3">
                  <el-col :span="6" class="text-right">专业课部分</el-col>
                  <el-col :span="15" :offset="3">
                    <div class="text-left">气体灭火系统</div>
                    <div class="text-left">消防法规与燃烧学基础</div>
                    <div class="text-left">消防控制室管理和火灾自动报警系统</div>
                  </el-col>
                </div>
              </el-row>
            </el-col>
            <el-col :span="4" :offset="8"><button class="btn"><a href="http://zxzx119.com/attachment/file/kaoshi.docx">考试资料包下载</a></button></el-col>
            <el-col :span="4"><button><a href="http://zscx.osta.org.cn/">成绩查询</a></button></el-col>
             <img src="./images/education-ready-bg.png" class="img-responsive">
          </el-row>
        </div>
      </el-row>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'education-ready'
  }
</script>

<style lang="scss">
  #education-ready {
    .education-title {
      margin-top: 154px;
      margin-bottom: 32px;
      .text-h1 {
        font-size: 30px;
        border-bottom: 5px solid #c41335;
        padding-bottom: 27px;
      }
    }
    hr {
      margin-bottom: 30px;
      border: 1.5px solid #e3e3e3;
    }
    .text-h2 {
      margin-top: 37px;
      font-size: 24px;
      margin-bottom: 34px;
    }
    .ready-bg {
      width: 100%;
      height: 527px;
      font-size:16px;
      background-color: #e4e3e3;
      margin-bottom: 57px;
      z-index:-9;
      .ready-png {
        padding-left:36px;
        padding-right:36px;
      .red {
        background-color: #c41335;
        color: #ffffff;
        padding-bottom: 41px;
        padding-top: 41px;
        text-align: center; 
        z-index:1;
        position:relative;
        width:48.7%;
        .text-bottom {
          margin-bottom: 135px;
          line-height: 35px;
        }
        .text-line {
          line-height: 35px;
        }
        .text-right {
          text-align: right;
          margin-top: 20px;
        }
        .text-left {
          text-align: left;
        }
      }
      .white {
        background-color: #ffffff;
        padding-bottom: 41px;
        padding-top: 41px;
        text-align: center;
        position:relative;
        z-index:1;
        width:51.2%;
        .text-bottom {
          margin-bottom: 135px;
          line-height: 35px;
        }
        .text-line {
          line-height: 35px;
        }
        .text-right {
          text-align: right;
          margin-top: 20px;
        }
        .text-left {
          text-align: left;
        }
      }
      button {
        background-color: #c41335;
        border-radius: 10px;
        border: 0px;
        line-height: 43px;
        padding: 0px 45px;
        font-size: 12px;
        margin-top: 35px;
        outline: none;
        a{
           color: #ffffff;
        }
      }
      .btn {
        padding: 0px 27px;
      }
      img{
          position:relative;
          bottom: 253px;
          z-index:999;
       } 
    }
      
    }
  }
</style>