<template>
  <div id="app">
    <div class="header main-color">
      <myHead ></myHead>
        <el-menu  :default-active="activeIndex"
                  class="el-menu-demo main-color"
                  mode="horizontal"
                  @select="handleSelect"
                  style="width: 480px;margin:0 auto">
        <el-menu-item index="1">首页</el-menu-item>
        <el-menu-item index="2">公司简介</el-menu-item>
        <el-submenu index="3" >
          <template slot="title"><span @click="goProducts">产品与服务</span></template>
          <el-menu-item index="3-1">高分子树脂</el-menu-item>
          <el-menu-item index="3-2">高分子添加剂</el-menu-item>
          <el-menu-item index="3-3">合成原料</el-menu-item>
        </el-submenu>
        <el-menu-item index="4">联系我们</el-menu-item>
        <el-menu-item index="5">NEWS</el-menu-item>
      </el-menu>
    </div>
    <div class="main">
      <router-view/>
      <!--<router-link to="/index">首页</router-link>-->
    </div>
    <div class="footer main-color"><myFoot></myFoot></div>
  </div>
</template>

<script>
  import myHead from './layouts/Header.vue';
  import myFoot from './layouts/Footer.vue';
export default {
  components:{myHead,myFoot},
  name: 'App',
  data() {
    return {
      activeIndex: '1',
    };
  },
  watch:{
  },
  created() {
    this.$router.push('/index');
  },
  methods: {
    goProducts(){
      this.activeIndex = '';
      this.$router.push('/products');
    },
    handleSelect(key, keyPath) {
      console.log('key,path',key, keyPath);
      switch (key)
      {
        case '1':
          this.$router.push('/index');
          break;
        case '2':
          this.$router.push('/about');
          break;
        case '3':
          this.$router.push('/products');
          break;
        case '3-1':
          this.$router.push({name:'ShuZhi',params:{'title':'高分子树脂 / Base Polymer Resin'}});
          break;
        case '3-2':
          this.$router.push({name:'TianJiaJi',params:{'title':'高分子添加剂 / Polymer Additives'}});
          break;
        case '3-3':
          this.$router.push({name:'HeChengYuanLiao',params:{'title':'合成原料 / Synthetic Source'}});
          break;
        case '4':
          this.$router.push('/contact');
          break;
        case '5':
          this.$router.push('/news');
          break;
        default:
          this.$router.push('/products');
          break;
      }
    }
  }
}
</script>

<style>
  .menu-color{
    color: white;
  }
</style>
