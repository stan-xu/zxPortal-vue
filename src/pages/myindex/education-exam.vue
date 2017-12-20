<template>
  <div id="education-exam">
    <div class="container">
    <el-row>     
    <el-col :span="24" class="education-title text-center">
      <span class="text-h1">报考指南</span>
    </el-col>
    <hr>
    <el-col :span="24">
       <div v-for="(item,index) in moduleList">
           <el-col :span="3" v-bind:class="{ offert: item.isActive }">
          <div class="module-icon">
            <img :src="item.icon" alt="module-icon" class="img-responsive center-block">
          </div>
          <div class="module-name">{{item.name}}</div>
          <div class="module-text" v-html="item.text"></div>
           </el-col>
           <el-col :span="3" v-if="item.name!='申报资料'">
           <div class="red-line"></div>
           </el-col>
          </div>
    </el-col>  
      <el-col :span="4" :offset="8"> <button class="btn"><a href="http://zxzx119.com/attachment/file/baoming.zip">报名资料包下载</a></button></el-col>
    <el-col :span="4"> <button><a href="http://zxzx119.com/attachment/file/baokao.docx">报考须知</a></button></el-col>
    </el-row>
    </div>
  </div>
</template>

<script>
export default {
  name: 'education-exam',
  data: function () {
    return {
      moduleList: [
        {
          name: '报名手续',
          icon: require('./images/enroll-icon.png'),
          text: '考生报名时须持本人身份证原件及复印件、毕业证书原件及复印件',
          isActive: true
        },
        {
          name: '拍照手续',
          icon: require('./images/photo-icon.png'),
          text: '须携带身份证和学历证书，毕业证书原件及复印件、参训学院照片统一到校拍摄'

        },
        {
          name: '填写手续',
          icon: require('./images/write-icon.png'),
          text: '须填写《学院报名信息表》和《培训期间承诺书》'
        },
        {
          name: '申报资料',
          icon: require('./images/declare-icon.png'),
          text: '初中以上学历复印件一份，' + '<br />' + '学历证书遗失的学员应有所在单位出具的从事不少于2年消防工作的证明'
        }]
    }
  }
}
</script>

<style lang="scss">
  #education-exam {
    .education-title{
      margin-top: 139px;
      margin-bottom: 32px;
      .text-h1{
        font-size:30px;
        border-bottom: 5px solid #c41335;
        padding-bottom: 27px;
      }
    }
    hr{
      margin-bottom:73px;
      border:1.5px solid #e3e3e3;
    }
    .offert{
      margin-left:6%;
    }
     .red-line{
        display: block;
        margin-top:45px;
        border:1px solid #e60012;
        width:100%;
      }
      .module-name {
        text-align: center;
        font-size: 16px;
        margin-top: 45px;
      }
      .module-text {
        font-size: 12px;
        margin-top: 22px;
        margin-bottom: 22px;
        color:#6d6d6d;
        margin-left: -36px;
        margin-right: -36px;
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
      .btn{
         padding: 0px 27px;
      }

  }
</style>
