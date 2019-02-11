<template>
  <div>
    <div style="width: 50%;margin: 20px auto;display: flex">
      <el-tag class="font_2 subtitle img-border bord-rad" style="width: 145px;" >产品系列</el-tag>
        <div class="img-border bord-rad" style="margin: 80px 20px 20px 20px;width: 250px;" v-for="item in mainClass" @click="goSerial(item)">
          <p class="font_7 item-p">{{item.nameCN}}</p>
          <p class="font_7 item-p">{{item.nameEN}}</p>
          <hr>
          <div style="margin-top: -15px">
            <span class="font_4" style="margin: 0 10px 20px 10px;">
              <span style="color: rgb(255, 204, 0);font-size: 40px;">+</span><span style="margin: 0 0 20px 10px;display: inline-block">详细介绍</span>
            </span>
          </div>
        </div>
    </div>
    <div style="width: 50%;margin: 30px auto;">
      <p style="text-indent:2em;" class="font_6 font_6-size">安腾达化工与全球知名化工企业紧密合作，致力于引进国外先进的化工材料，发掘国内优秀材料，为广大客户提供优质产品与服务。
        公司拥有多名从事橡塑行业十余年的技术工程师和技术顾问，可为客人提供专业的技术服务和解决方案，并可以提供定制化的产品。
      </p>
      <p  class="font_6 font_6-size">服务范围:</p>
      <ol  class="font_6 font_6-size">
        <li>提供优质化工产品及使用指导服务。</li>
        <li>提供产品解决方案和技术指导服务。</li>
        <li>提供材料科学研究、市场信息、投资咨询、技术开发、新材料技术转让服务。</li>
      </ol>
    </div>

    <div style="width: 50%;height:435px;margin: 50px auto;">
      <el-tag class="font_2 subtitle img-border bord-rad" style="width: 145px;">推荐产品</el-tag>
      <el-carousel :interval="4000" height="400px" style="margin-top: 20px" >
        <el-carousel-item v-for="pro in productImg" >
          <router-link :to="{name:'Detail',params:{'nameCN':pro.name}}">
            <img style="width: 659px;height: 310px;margin: 0 150px;" class="img-shadow2"  :src="pro.url" alt="">
            <p class="font_6 pro-p-margin pro-name-size">{{pro.name}}</p>
            <p class="font_10 pro-p-margin pro-size" >{{pro.spec1}}</p>
            <p class="font_10 pro-p-margin pro-size" >{{pro.spec2}}</p>
          </router-link>
        </el-carousel-item>
      </el-carousel>
    </div>
    <div style="width: 50%;height:90px;margin: 20px auto;">
      <el-tag class="font_2 subtitle img-border bord-rad" style="width: 205px;">产品目录下载</el-tag>
      <a href="../../static/files/dc2.pdf" download style="margin: 20px 0">
        <img src="../../static/imgs/products/pdflogo.png" alt=""  style="display: block;margin: 20px 0 0 0 ">
        ATT产品目录2015.pdf</a>
      <!--<a @click="toDownload">下载</a>-->
    </div>

  </div>
</template>

<script>
    export default {
        name: "Products",
      data(){
          return{
            mainClass:[
              {'nameCN':'高分子树脂','nameEN':'Base Polymer Resin'},
              {'nameCN':'高分子添加剂','nameEN':'Polymer Additives'},
              {'nameCN':'合成原料','nameEN':'Synthetic Source'}
            ],
            productImg:[
              {'url':require('../../static/imgs/products/pro001.jpg'),'name':'聚苯硫醚', 'spec1':'白色规格，无低分子挥发物，不含卤素','spec2':'HDT>260℃，卓越的机械性能，杰出的抗化学性'},
              {'url':require('../../static/imgs/products/pro002.jpg'),'name':'单壁碳纳米管', 'spec1':'高导电性和高导热性','spec2':'专为橡塑而设计，易分散'},
              {'url':require('../../static/imgs/products/pro003.jpg'),'name':'聚酮树脂',
                'spec1':'耐油，耐磨，耐化学品；高熔点，高冲击，高阻隔','spec2':'应用于汽车耐油部件和外部组件，耐磨齿轮，高阻隔包装等'},
              {'url':require('../../static/imgs/products/pro004.jpg'),'name':'绝缘散热剂',
                'spec1':'导热系数，电阻率等综合性能优于H-BN和石墨','spec2':'适用于注塑压模聚合物的填充剂'},
              {'url':require('../../static/imgs/products/pro005.jpg'),'name':'抗滴落剂 ADA-2500',
                'spec1':'SAN包覆的PTFE;出色的分散性，共混物表面光滑','spec2':'阻燃共混改性（PC,PC/ABS,ABS,Nylon和聚酯等）'},
              {'url':require('../../static/imgs/products/pro006.jpg'),'name':'PA12替代品',
                'spec1':'设计替代PA12，用于重型卡车的气压制动软管','spec2':'通过ISO7628-2010高压软管测试'}
            ],
            // exportLink:'../../static/files/dc2.pdf', //自己加下载链接！！！
          }
      },
      methods:{
        goDetail(nameCN){
          // this.Utils.goDetail('ddd'); //全局函数
          this.$router.push({name:"Detail",params:{'nameCN':nameCN}})
        },
        // toDownload(){
        //   alert(111);
        //   let iframe = document.createElement('iframe');
        //   iframe.src = this.exportLink;
        //   iframe.style.display = 'none';
        //   document.body.appendChild(iframe);
        // }
        goSerial(item){
          let name = item.nameEN;
          let title = item.nameCN + '  /  ' + name;
          switch (name) {
            case 'Base Polymer Resin':
              this.$router.push({name:'ShuZhi',params:{'title':title}});
              break;
            case 'Polymer Additives':
              this.$router.push({name:'TianJiaJi',params:{'title':title}});
              break;
            case 'Synthetic Source':
              this.$router.push({name:'HeChengYuanLiao',params:{'title':title}});
              break;
            default:
              break;
          }
        }
      },
    }
</script>

<style scoped>
  .pro-name-size{
    font-size: 18px;
  }
  .pro-size{
    font-size: 13px;
  }
  .pro-p-margin{
    margin: 0 150px;
  }
  .subtitle{
    font-size: 30px;
    color: #441C08;
    height: 45px;
    background: white;
    display: block;
    line-height:45px;
  }

  .img-shadow2{
    border:2px solid #441C08;
    box-shadow: 0 3px 4px rgba(0,0,0,0.27)
  }


  .font_6-size{
    font-size: 16px;
    line-height: 1.8em;
  }
  .item-p{
    font-size: 15px;
    margin: 10px 0 0 10px;
  }
</style>
