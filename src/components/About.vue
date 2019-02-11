<template>
  <div style="margin-bottom: 100px">
    <div style="width: 100%">
      <el-carousel :interval="4000" type="card" height="200px" >
        <el-carousel-item v-for="img in imgs" :key="item" class="el-carousel__item">
          <img class="carousel-image" :src="img" alt="图片无法加载"  >
          <!--<img src="../../static/imgs/about/001.jpg" alt="图片无法加载">-->
        </el-carousel-item>
      </el-carousel>
    </div>
    <div class="middle middle-div">
      <h6 class="font_6" style="font-size:30px; margin: 20px 0">
        <span style="font-size:30px;">
          <span>公司简介</span>
        </span>
      </h6>
      <p class="font_6 line-height">
        广州安腾达化工科技有限公司，隶属于香港阿尔达有限公司（Aldia Co., Limited），是致力于前沿高新材料和增材制造方案的研究开发和制造营销的高新企业。公司由具有跨国外企资深经验和海外背景的工程师和管理人员创建。公司成立于2012年，并先后获得“广州市科技创新基金”奖励，和被授予为“广州市科技创新小巨人”和“广州市高新技术企业”。
      </p>
      <p class="font_6 line-height">
        安腾达化工与全球知名化工企业紧密合作，致力于引进国外先进的化工材料，发掘国内优秀材料，为广大客户提供优质产品与服务。公司拥有多名从事橡塑行业十余年的技术工程师和技术顾问，可为客人提供专业的技术服务和解决方案，并可以提供定制化的产品。
      </p>
      <span class="font_6 line-height" > 业务单元：</span>
      <ul class="font_6 line-height" style="margin: 0 0">
        <li>
          <h4>前沿材料和解决方案</h4>
          <p>
            增材制造（3D打印）解决方案
          </p>
          <p>
            前沿耐磨材料（耐磨高分子材料，耐磨弹性体，有机硅弹性体和耐磨纳米陶瓷）
          </p>
          <p>
            生物降解材料 （PLA复合材料，低熔点Storflex）
          </p>
        </li>
        <li>
          <h4>贸易和供应链管理</h4>
          <p>
            特种工程塑料（PPS，POK，PA46，PA610和PA612等）
          </p>
          <p>
            医用和食品高分子材料（TIPP，TPE，TPU等）
          </p>
          <p>
            特殊精细化工和添加剂（CHDM单体，扩链剂和特种抗氧化剂等）
          </p>
        </li>
        <li>
          <h4>化学品产业链咨询服务</h4>
          <p>
            技术引进和转让服务
          </p>
          <p>
            市场咨询
          </p>
          <p>
            投资和并购咨询
          </p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
    export default {
      data() {
        return {
          imgs:[
            require('../../static/imgs/about/001.jpg'),
            require('../../static/imgs/about/002.jpg'),
            require('../../static/imgs/about/003.jpg'),
            require('../../static/imgs/about/004.jpg'),
            require('../../static/imgs/about/005.jpg'),
            require('../../static/imgs/about/006.jpg'),
            require('../../static/imgs/about/007.jpg')
          ],
        }
      }
    }
</script>

<style scoped>
  p {
    text-indent: 2em;
    margin: 0 0;
  }
  h4{
    margin: 0 0;
  }
  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
    /*width: 200px;*/
  }
  .el-carousel {
    overflow-x: hidden;
    position: relative;
    width: 50%;
  margin: 60px auto;
  /*border: 1px solid #989898;*/
  }
  .el-carousel__item:nth-child(2n) {
    /*background-color: #99a9bf;*/
    background-color: white;
  }

  .el-carousel__item:nth-child(2n+1) {
       background-color: white;
     }

  .carousel-image {
    max-width: 150%;
    max-height: 130%;
  }

  .line-height{
    line-height: 2em;
  }
</style>
