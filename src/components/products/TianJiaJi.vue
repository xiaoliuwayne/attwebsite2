<template>
<div style="width: 60%;margin: 10px auto;min-height: 600px">
  <h2 style="margin: 20px 0 10px 30% ">{{title}}</h2>
  <div style="width: 100%;display: flex;">
    <div v-for="data in showDatas" style="margin: 10px auto;width: 200px;">
      <span style="color: rgb(255, 204, 0);font-size: 40px;">+</span><span style="margin: 20px 0 20px 10px;font-size: 18px" class="font_7">{{data.nameCN}}</span>
      <hr>
       <p v-for="item in data.items" style="margin: 10px 0 10px 15px;line-height: 30px;font-size: 15px" class="font_7" >
         <router-link :to="{name:'Detail',params:{'nameCN':item}}">
         {{item}}
         </router-link>
       </p>

    </div>
  </div>
  <div style="float: right;text-align: center;margin: 80px 0 10px 0;border-top: 2px dashed  rgba(143, 115, 101, 1);font-size:28px" class="font_5" @click="goHome">
    <p style="margin-bottom: 0">VISIT OUR</p>
    <p style="margin-top: 0">HOME</p>
  </div>
</div>
</template>

<script>
    export default {
        name: "TianJiaJi",
      data(){
          return{
            title:'',
            showDatas:[
              {'nameCN':'阻燃助剂','items':['抗滴落剂 FS-250FW','抗滴落剂 ADA-2500','无卤阻燃剂 FR005','无卤阻燃剂 FR006','透明PC无卤阻燃剂']},
              {'nameCN':'高性能助剂','items':['长效耐热抗氧剂','尼龙耐热稳定剂','耐热改性剂HM-800','耐热改性剂HM-900','光扩散剂','高胶粉/抗冲击剂','消光剂AM-10','增容剂/偶联剂']},
              {'nameCN':'碳纳米管','items':['多壁碳纳米管','单壁碳纳米管','碳纳米管油墨','CNT复合材料']},
              {'nameCN':'填充剂','items':['绝缘散热剂','纳米高岭土']}
            ],
          }
      },
      methods:{
        goHome(){
          this.$router.push('/index');
        },
        goDetail(nameCN) {
          this.$router.push({name: "Detail", params: {'nameCN': nameCN}})
        }
      }
    }
</script>

<style scoped>

</style>
