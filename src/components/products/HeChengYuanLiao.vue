<template>
  <div >
    <!--574 116-->
    <h2 style="margin: 20px 0 10px 30% ">{{title}}</h2>
    <div style="width: 40%;height: 180px;border: 1px saddlebrown solid;margin: 30px auto;border-radius:5px" v-for="pro in Products">
      <router-link :to="{name:'Detail',params: {'nameCN':pro.nameCN}}">
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
    name: "HeChengCaiLiao",
    data(){
      return{
        title:'',
        Products:[
          {'nameCN':'四甲基双酚F','nameEN':'TMBPF','specs':['* CAS：5384-21-4','* 纯度：＞98%','* 原产地：进口']},
          {'nameCN':'双酚M','nameEN':'Bisphenol M','specs':['* CAS：13595-25-0','* 纯度：＞99%','* 原产地：进口']},
          {'nameCN':'钛系催化剂','nameEN':'Titanium Catalysts','specs':['* 不含重金属','* REACH、TSCA、欧盟食品标准','* 高热稳定性','* 更轻更亮更透明','* 应用于PET、PETG、PCT等']},
        ],
      }
    },
    created(){
      // alert(this.$route.params.title)
      this.title = this.$route.params.title
    },
    methods:{
      goDetail(nameCN) {
        this.$router.push({name: "Detail", params: {'nameCN': nameCN}})
      }
    }
  }
</script>

<style scoped>
  p{
    margin: 0;
  }
</style>
