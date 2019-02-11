<template>
  <div>
    <div style="text-align: center;margin-top: 15px">
      <img style="border: 2px solid #989898" src="../../static/imgs/index/index01.jpg" alt="图片加载失败">
    </div>
    <div class="main-distance font_2">
      <div class="line-div"></div>
      <h2 class="main-words font_2">We are not just simply selling,but winning together!</h2>
      <h2 class="main-words font_2">我们不是单纯的买卖，而是双赢!</h2>
      <h2 class="main-words font_2">Honesty Service and Common Development!</h2>
      <h2 class="main-words font_2">诚信服务、共同发展!</h2>
      <div class="line-div"></div>
   </div>
    <div class="main-distance" style="display: flex;width: 939px;margin: 0 auto">
      <div class="small-size">
        <router-link to="/about">
        <img src="../../static/imgs/index/index02.jpg" alt="图片加载失败" class="img-shadow">
        <p class="mg3imageItem" >公司简介</p>
        <span style="font-size: 12px" class="font-style">
          广州安腾达化工科技有限公司成立于2012年，专注于创新材料、特殊树脂、高性能添加剂。
        </span>
        </router-link>
      </div>
      <div class="small-size">
        <router-link to="/products">
        <img src="../../static/imgs/index/index03.jpg" alt="图片加载失败" class="img-shadow">
        <p class="mg3imageItem">产品与服务</p>
        <span  style="font-size: 12px" class="font-style">
          安腾达化工提供国内外先进化工材料与添加剂。以及提供投资咨询、技术开发、新材料技术转让服务。
        </span>
        </router-link>
      </div>
      <div class="small-size">
        <router-link to="/contact">
        <img src="../../static/imgs/index/index04.jpg" alt="图片加载失败" class="img-shadow">
        <p class="mg3imageItem">联系我们</p>
        <span  style="font-size: 12px;" class="font-style">
          <p>电话：+86-20-8417 2256</p>
          <p>邮箱：gz.att@aliyun.com</p>
        </span>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {

      };
    },
    methods: {
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .line-div{
    border-top:3px solid black;
    border-bottom:1px solid black;
    height: 5px;
    width: 35%;
    margin: 0 auto
  }
  .main-words{
    text-align: center;
  }
  .main-distance{
    margin-top: 30px;
  }

  .small-size{
    width: 313px;
    height: 367px;
    margin: 50px 10px;
  }

  p{
    margin: 0;
  }

  .font_2 {
    font: normal normal normal 30px/1.4em 'times new roman',times,serif;
    line-height: 1.4em;
    color: #441C08;
  }

  .mg3imageItem {
    font: normal normal normal 18px/1.4em 'times new roman',times,serif;
    color: #441C08;
    display: block;
    white-space: nowrap;
    font-size: 17px;
    font-weight: bold;
  }

  .font-style{
    font: normal normal normal 18px/1.4em 'times new roman',times,serif;
    color: #441C08;
  }

  .img-shadow{
    border:2px solid #efefef;
    box-shadow: 0px 3px 4px rgba(0,0,0,0.27)
  }

  a {
    text-decoration: none;
  }

  .router-link-active {
    text-decoration: none;
  }
</style>
