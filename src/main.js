// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import Utils from './components/Utils.vue'

// 导入必要部分
import {
  Dropdown,
  DropdownMenu,
  DropdownItem,
  Menu,
  Submenu,
  MenuItem,
  MenuItemGroup,
  Input,
  Select,
  Button,
  Tag,
  Alert,
  Icon,
  Row,
  Col,
  Card,
  Carousel,
  CarouselItem,
  Cascader,
  Transfer,
  Message
} from 'element-ui';



Vue.use(Dropdown);
Vue.use(DropdownMenu);
Vue.use(DropdownItem);
Vue.use(Menu);
Vue.use(Submenu);
Vue.use(MenuItem);
Vue.use(MenuItemGroup);
Vue.use(Input);
Vue.use(Select);
Vue.use(Button);
Vue.use(Tag);
Vue.use(Alert);
Vue.use(Icon);
Vue.use(Row);
Vue.use(Col);
Vue.use(Card);
Vue.use(Carousel);
Vue.use(CarouselItem);
Vue.use(Cascader);
Vue.use(Transfer);
Vue.prototype.$message = Message;



Vue.config.productionTip = false;
// Vue.use(ElementUI);
Vue.prototype.Utils = Utils;
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
});


