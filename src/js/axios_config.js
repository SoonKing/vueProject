import axios from 'axios';
import { domain } from './api_config.js';

//配置默认的域名,将来请求接口的时候书写路径
axios.defaults.baseURL = domain;

//导出配置后的axios
export default axios;