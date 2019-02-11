import Vue from 'vue'
import Router from 'vue-router'
// import Index from '@/components/Index'
import Index from '../components/Index'
// import Test from '../components/Test.vue'
import About from '../components/About.vue'
import Contact from '../components/Contact.vue'
import News from '../components/News.vue'
import Products from '../components/Products.vue'
import ShuZhi from '../components/products/ShuZhi.vue'
import TianJiaJi from '../components/products/TianJiaJi.vue'
import HeChengYuanLiao from '../components/products/HeChengYuanLiao.vue'
import Detail from '../components/products/details/Detail.vue'
import NewsDetail from '../components/products/details/NewsDetail.vue'

Vue.use(Router);

const routers = [
  {path:'/index',name:'Index',component: Index},
  {path:'/about',name:'About',component: About},
  {path:'/contact',name:'Contact',component: Contact},
  {path:'/news',name:'News',component: News},
  {path:'/products',name:'Products',component: Products},
  {path:'/ShuZhi',name:'ShuZhi',component: ShuZhi},
  {path:'/TianJiaJi',name:'TianJiaJi',component: TianJiaJi},
  {path:'/HeChengYuanLiao',name:'HeChengYuanLiao',component: HeChengYuanLiao},
  {path:'/Detail',name:'Detail',component: Detail},
  {path:'/NewsDetail',name:'NewsDetail',component: NewsDetail},
  // {path:'/test',name:'Test',component: Test}
];

export default new Router({
  routes: routers
})
