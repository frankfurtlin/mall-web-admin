import axios from 'axios'

//全局添加拦截器的作用是可以在每个api前面加上headers的token验证
axios.interceptors.request.use(config => {
  // 判断token是否存在和是否需要token验证的路由
  if (sessionStorage.getItem('token')) {
    config.headers.Authorization = sessionStorage.getItem('token');
  }
  return config;
})

axios.interceptors.response.use(config => {
    res => {
        if(res.status !== 200){
            this.$message(res.data.message);
        }
        return res
    },
    err => {
        this.$message("请求网络失败")
        return Promise.reject(err)
    }
})

const request = axios.create({
  baseURL: 'http://localhost:8081/mall'
})
  
export default request