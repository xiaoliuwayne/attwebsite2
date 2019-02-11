<template>
  <div style="width: 70%;margin: 30px auto;display: flex">
    <!--side-->
    <div style="width: 40%;margin: 50px 0 20px 0;">
      <h6 class="font_6" style="line-height:1.4em;text-align: center">
        <span style="line-height:1.4em;letter-spacing:2px;font-size: 18px">本周推荐</span>
      </h6>
      <el-carousel :interval="4000" height="310px" style="margin: 0 auto">
        <el-carousel-item v-for="img in imgs">
          <router-link :to="{name:'NewsDetail',params: {'keyword':img.keyword}}">
          <img :src="img.url" alt="图片无法加载" class="carousel-image" @click="goDetail(img)">
          <p style="margin: 0" class="font_7" @click="goDetail(img)">{{img.subtitle}}</p>
          <p style="margin: 0" class="font_10" @click="goDetail(img)">{{img.date}}</p>
          </router-link>
          <!--<img src="../../static/imgs/about/001.jpg" alt="图片无法加载">-->
        </el-carousel-item>
      </el-carousel>
      <div style="width: 53%;margin: 0 auto;">
        <p class="font_6" style="margin-top: 30px">最新发布</p>
        <div style="display: flex;margin: 50px 0" v-for="img in smallList" @click="goDetail(img)">
          <router-link :to="{name:'NewsDetail',params: {'keyword':img.keyword}}">
          <div>
            <img style="width: 70px" :src="img.url" alt="">
          </div>
          <!--<div style="width: 135px;position:relative;">-->
          <div style="width: 135px;">
            <p class="font_8" style="margin-left: 3px;top:2px;">{{img.subtitle}}</p>
            <p class="font_10" style="margin-left: 3px;">{{img.date}}</p>
          </div>
          </router-link>
        </div>
      </div>
    </div>
    <!--main-->
    <div style="width: 70%;">
      <el-tag class="font_2 img-border bord-rad" style="font-size: 30px;height: 45px;background: white">新闻中心</el-tag>
      <div>
        <el-row >
          <el-col :span="8" style="width: 100%" v-for=" img in smallList">
            <el-card class="font_5" style="font-size: 28px;margin: 15px 0;" :body-style="{ padding: '0px' }" :header="img.subtitle"  shadow="always">
              <router-link :to="{name:'NewsDetail',params: {'keyword':img.keyword}}">
              <p  class="font_9" style="font-size: 11px;margin-left: 22px;" @click="goDetail(img)" >{{img.date}} | {{img.source}}</p>
              <img :src="img.url" alt="" class="image" style="width: 300px;float: left;margin: 10px 10px 0 22px" @click="goDetail(img)">
              <div style="padding: 14px;" @click="goDetail(img)">
                <span class="font_8" style="font-size: 13px;margin-left: 22px" >{{img.text}}
                </span>
                <div class="bottom clearfix" style="margin: 40px 0 0 0">
                  <el-button type="text" class="button" @click="goDetail(img)">阅读更多</el-button>
                </div>
              </div>
              </router-link>
            </el-card>
          </el-col>
        </el-row>
      </div>
    </div>
  </div>


</template>

<script>
    export default {
        name: "News",
      data() {
        return {
          currentDate: new Date(),
          activeName: '1',
          imgs:[
            {'keyword':'Diaprene','url':require('../../static/imgs/news/new01.jpg'),'subtitle':'本公司合作开发出工程热塑性弹性体Diaprene','date':'May 6, 2015'},
            {'keyword':'碳纳米管','url':require('../../static/imgs/news/new02.jpg'),'subtitle':'碳纳米管造就超级蛛丝','date':'May 7, 2015'}
          ],
          smallList:[
            {'keyword':'石墨烯','url':'','subtitle':'德国碳纳米管及石墨烯的发展概况','date':'May 22, 2015','source':'鹰from复材在线','text':'' +
                '随着行业对于材料性能的要求越来越高，传统材料的发展占空间逐渐走向萎缩，' +
                '而高新科技材料将会取而代之成为行业选择的未 来之路。众所周知，碳纳米管（CNTs）和石墨烯及其复合材料因其卓越的电气及机械特性，' +
                '已经在诸多领域，如光电，传感器，半导体器件，显示器，指挥，智 能纺织品和能量转换装置（例如，燃料电池，收割机和电池）等，' +
                '显示出巨大的应用潜能......'},
            {'keyword':'Ultrason','url':require('../../static/imgs/news/new03.jpg'),'subtitle':'巴斯夫将展示Ultrason®制造的全球最轻的飞机餐车','date':'May 13, 2015','source':'慧聪塑料网：车世新','text':'2015国际橡塑展巴斯夫展位：' +
                '“设计X创新”，' +
                '广州琶洲中国进出口商品交易会展馆B区13.2馆A21及9.3馆外观景台，2015年5月20日至23日。中国广州—2015年5月11日—在2015国际橡塑展上，' +
                '巴斯夫将展示由NorduynInc生产的全球最轻的飞机餐车——QuantumTrolley。该产品的车门锁扣和侧壁型材采用了巴斯夫Ultrason®非晶态热塑性塑料。发泡Ultrason®制成侧壁的密度仅为40公斤/立方米。' +
                '与采用传统金属材料制造的手推餐车相比，采用Ultrason®的手推餐车重量减轻40%(约10公斤)......' },
            {'keyword':'碳纳米管','url':require('../../static/imgs/news/new02.jpg'),'subtitle':'碳纳米管造就超级蛛丝','date':'May 7, 2015','source':'徐徐','text':'蜘蛛侠一定会很嫉妒。蜘蛛能织出加入了碳纳米管甚至是石墨烯的网，从而使具有打破纪录特性的新材料拥有更加光明的应用前景......'},
            {'keyword':'Diaprene','url':require('../../static/imgs/news/new01.jpg'),'subtitle':'本公司合作开发出工程热塑性弹性体Diaprene','date':'May 6, 2015','source':'James Lau','text':'本公司合作开发出工程热塑性弹性体Diaprene。' +
             'Diaprene是一种高性能的改性材料，它具有宽广的性能，是一种“超级性能”和“记忆性”的工程热塑性弹性体（E-TPE）......'},
          ],
        };
      },
      methods:{
        goDetail(img){
          // alert(img.subtitle)
        },
      },
      created(){
      }
    }
</script>

<style scoped>

  .text {
    font-size: 14px;
  }

  .item {
    margin-bottom: 18px;
  }

  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }
  .clearfix:after {
    clear: both
  }

  .box-card {
    width: 480px;
  }

  p{
    margin: 0;
  }


  .bottom {
    margin-top: 13px;
    line-height: 12px;
  }


  .image {
    width: 100%;
    display: block;
  }

  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }

  .clearfix:after {
    clear: both
  }

  .el-carousel {
    overflow-x: hidden;
    position: relative;
    width: 50%;
    margin: 60px auto;
    /*border: 1px solid #989898;*/
  }

  .carousel-image {
    /*max-width: 150%;*/
    /*max-height: 100%;*/
    width: 300px;
    height: 250px;
  }

  .font_2{
    font:normal normal normal 30px/1.4em 'times new roman',times,serif;
    line-height: 1.4em;
    color: #441C08;
    font-size: 12px;
  }

  .font_5{
    font:normal normal normal 28px/1.4em 'times new roman',times,serif;
    line-height: 1.4em;
    color: #441C08;
    font-size: 12px;
  }

  .font_7{
    font:normal normal normal 15px/1.4em 'times new roman',times,serif;
    line-height: 1.4em;
    color: #441C08;
    font-size: 12px;
  }
  .font_8{
    font:normal normal normal 13px/1.4em 'times new roman',times,serif;
    line-height: 1.4em;
    color: #441C08;
    font-size: 12px;
  }
  .font_9{
    font:normal normal normal 11px/1.4em 'times new roman',times,serif;
    line-height: 1.4em;
    color: #441C08;
    font-size: 12px;
  }

  .font_10{
    font:normal normal normal 10px/1.4em 'times new roman',times,serif;
    line-height: 1.4em;
    color: #441C08;
    font-size: 12px;
  }
</style>
