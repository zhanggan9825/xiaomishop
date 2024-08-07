<template>
  <div class="footer">
    <div class="footer-logo">
      <img src="/imgs/logo-footer.png" alt="">
      <p>小米商城</p>
    </div>             
    <div class="footer-link">
      <a href="https://www.imooc.com/u/1343480" target="_blank">河畔一角主页</a><span>|</span>
      <a href="https://coding.imooc.com/class/644.html" target="_blank">React18+TS开发通用后台（新课）</a><span>|</span>
      <a href="https://coding.imooc.com/class/502.html" target="_blank">Vue3全栈后台</a><span>|</span>
      <a href="https://coding.imooc.com/class/397.html" target="_blank">Vue全家桶开发小米商城项目</a>
    </div>
    <div class="copyright">Copyright ©2023 <span class="domain">http://mi.marsview.cc</span> All Rights Reserved.</div>
  </div>
</template>
<script>
  export default{
    name:'nav-footer'
  }
</script>
<style lang="scss" scoped>
  .footer{
    height:234px;
    border-top:4px solid #FF6600;
    background-color:#333333;
    color:#999999;
    font-size:16px;
    text-align:center;
    .footer-logo{
      margin-top:46px;
      margin-bottom:31px;
      img{
        width:53px;
        height:36px;
        margin-bottom:13px;
      }
    }
    .footer-link{
      a{
        color:#999999;
        display:inline-block;
      }
      span{
        margin:0 10px;
      }
      margin-bottom:13px;
    }
    .copyright{
      .domain{
        color:#FF6600;
      }
    }
  }
</style>