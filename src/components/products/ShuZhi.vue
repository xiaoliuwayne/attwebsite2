<template>
  <div >
    <!--574 116-->
    <h2 style="margin: 20px 0 10px 30% ">{{title}}</h2>
    <div style="width: 40%;height: 180px;margin: 30px auto;" class="bord-rad img-border" v-for="pro in Products">
      <router-link :to="{name:'Detail',params:{'nameCN':pro.nameCN}}">
      <div style="float: left;width: 220px;height:116px;margin:20px 50px 20px 20px " >
        <p class="font_7" style="font-size: 17px">{{pro.nameCN}}</p>
        <p class="font_7" style="font-size: 15px">{{pro.nameEN}}</p>
        <br>
        <hr>
        <div style="margin-top: -15px">
            <span class="font_4" style="margin: 0 10px 20px 10px;">
              <span style="color: rgb(255, 204, 0);font-size: 40px;">+</span><span style="margin: 0 0 20px 10px;display: inline-block">详细介绍</span>
            </span>
        </div>
      </div>
      <div v-if="pro.specs.length > 0" v-for="spec in pro.specs" style="margin-top: 15px;">
        <p class="font_8" style="font-size: 14px;">{{spec}}</p>
      </div>
      </router-link>
    </div>
  </div>
</template>

<script>
    export default {
        name: "ShuZhi",
        data(){
          return{
            title:'',
            Products:[
              {'nameCN':'聚酮树脂','nameEN':'POK','specs':['* 耐磨、耐油、耐化学品和低吸水率','* 熔点220℃，高HDT','* 优异蠕变和恢复性能','* 高阻隔性']},
              {'nameCN':'聚苯硫醚','nameEN':'PPS','specs':['* UL温度指数200-240℃，HDT＞260℃','* 卓越的机械性能','* 杰出的抗化学性','* 可提供白色规格，无低分子挥发物，不含卤素']},
              {'nameCN':'PA12替代品','nameEN':'THE PA12 ALTERNATIVE','specs':['* 比PA12更好的拉伸强度和抗冲击性','* 通过ISO7628-2010高压软管测试','* 可注塑、挤出、铸造、吹塑、流延','* 易上色；耐氯化锌']},
              {'nameCN':'有机硅聚碳酸酯','nameEN':'PC Polysiloxane','specs':['* 超高有机硅含量','* 透明度85%','* 长支链结构，高性能效率','* 容易共混']},
              {'nameCN':'改性聚乳酸','nameEN':'Modified PLA','specs':['* 耐温可达100℃以上','* 高表面硬度（2~3H）和高光泽','* 高强度和抗冲性能优异','* 符合美国FDA和欧洲LFGB食品标准']}
            ],
          }
      },
      created(){
        // alert(this.$route.params.title)
        this.title = this.$route.params.title
      },
      methods:{
        goDetail(nameCN){
          this.$router.push({name:"Detail",params:{'nameCN':nameCN}})
        }
      }
    }
</script>

<style scoped>
  p{
    margin: 0;
  }
</style>
