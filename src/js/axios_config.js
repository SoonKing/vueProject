import axios from 'axios';
import { domain } from './api_config.js';

//配置默认的域名,将来请求接口的时候书写路径
axios.defaults.baseURL = domain;

// withCredentials配置为true表示在ajax请求中携带cookie信息，默认是false，实现服务器状态维持的关键
axios.defaults.withCredentials = true;

// // 在Vue原型上设置$http为axios对象后可以直接在方法中使用this.$http执行ajax请求
// Vue.prototype.$http = axios;

//导出配置后的axios
export default axios;