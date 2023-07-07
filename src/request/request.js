import axios from "axios";
import config from "@/request/config"
import router from "@/router/index";
import qs from "qs"
import Cookies from "js-cookie";
import errorCode from "@/utils/errorCode";
import { Message } from "element-ui";
// import store from '@/store' //使用vuex进行全局loading时使用

//二次封装axios为request

// 为axios设置全局默认值,配置优先级:请求时设置的configs属性>默认值defaults属性>库的默认值
// axios.defaults.headers.common['Authorization'] = xxx

//创建axios实例,为它设置配置,使请求使用相同的配置;如果有部分接口需要的配置不太一样,则可以再创建一个实例
//比如一个实例调用服务A,服务A可以在100ms超时下工作;另一个实例调用服务B,服务B可以在500ms下工作
const httpService = axios.create({
    //在创建axios实例时设置默认值
    baseURL: config.baseURL,
    headers: config.headers,
    //转换器,在传递给then/catch前,允许修改响应数据
    //(这部分代码会导致返回的数据变成字符串而不是json,库默认转成json)
    // transformResponse: [
    //     function(data) {
    //         //可以对data进行处理
    //         return data;
    //     }
    // ]
})

//在请求或响应被then或catch处理前拦截它们。
//设置请求拦截器
httpService.interceptors.request.use(
    function(config) {
        //console.log("请求拦截器中的config",config);
        //1.请求开始时,结合vuex开启全屏loading动画
        // console.log(store.state.loading)
        //获取token
        let token = Cookies.get("Authorization");
        //2.携带token
        if (token) {
            config.headers.Authorization = token;
        } else {
            // 重定向到登录页
            //临时添加的,防止在登录页重复路由
            if (location.hash.includes("login")) {
                return config;
            }
            console.log("前往登录");
            router.push({
                path: "/login",
            })
        }
        //根据请求方式序列化传递的参数,根据后端需求是否序列化
        if (config.method === "post") {

        }
        return config;
    },
    function(error) {
        console.log("请求错误:",error);
        return Promise.reject(error);
    }
)

//设置响应拦截器
httpService.interceptors.response.use(
    response => {
        console.log("响应拦截器中的response",response);
        //2xx范围内的状态码会触发该函数
        //对响应数据做点什么
        const code  = response.data.code || 200; //获取自定义响应状态码
        const msg = response.data.msg || errorCode['default'];
        if (code === 500) {
            Message({
                message:msg,
                type: "error",
                showClose: true,
            })
            return Promise.reject(msg)
        }
        return response.data
    },
    error => {
        //2xx范围外的状态码都会触发该函数
        //对响应错误做点什么
        return Promise.reject(error)
    },
)

// 在axios实例创建后设置默认值
// httpService.defaults.baseURL = ""


export default httpService;