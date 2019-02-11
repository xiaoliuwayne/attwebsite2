<template>
  <div>
    <div style="width: 40%;margin: 50px auto">
      <h2 class="font_2" style="margin: 40px 0">{{proDetail.title}}</h2>
      <p  class="font_7" v-for="desc in proDetail.desc">{{desc}}</p>
      <p  class="font_7" style="margin: 30px 0">{{proDetail.oriarea}}</p>
      <div v-for="item in proDetail.section" style="margin-bottom: 30px">
        <p  class="font_7" style="font-weight: bold">{{Object.keys(item)[0]}}：</p>
        <p class="font_7" v-for="i in item[Object.keys(item)[0]]">{{i}}</p>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "Detail",
      data(){
          return{
            proDetail:{},
            keys:[],
          }
      },
      created(){
          let name = this.$route.params.nameCN;
          console.log(name);
          this.proDetail = window.PROD_DETAIL[name];
          this.keys = Object.keys(this.proDetail.section);
          console.log('this keys', this.keys);
      },
      methods:{

      }
    }
</script>

<style scoped>
  p{
    /*margin: 0;*/
    /*line-height: 30px;*/
  }

</style>
