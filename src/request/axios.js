//二次封装axios模块,包含拦截器等信息
import axios from "axios"
import config from "./config"
import qs from "qs"
import Cookies from "js-cookie" 
import router from "@/router/index"
// import store from '@/store' //使用vuex进行全局loading时使用

export default function $axios(options) {
    return new Promise((resolve,reject)=> {
        //创建axios实例,为它设置配置,使请求使用相同的配置;如果有部分接口需要的配置不太一样,则可以再创建一个实例
        //比如一个实例调用服务A,服务A可以在100ms超时下工作;另一个实例调用服务B,服务B可以在500ms下工作
        const service = axios.create({
            baseURL: config.baseURL,
            headers: config.headers,
            //转换器,在传递给then/catch前,允许修改响应数据
            transformResponse:[
                function(data){
                    //可以对data进行处理
                    return data;
                },
            ]
        })

        //在请求或响应被then或catch处理前拦截它们。
        //为axios实例添加请求拦截器
        const requestInterceptor = service.interceptors.request.use(
            //发送请求之前做些什么
            function(config) {
                //尝试获取token
                let token = Cookies.get("token");
                //1.请求开始时,结合vuex开启全屏loading动画
                // console.log(store.state.loading)
                //2.携带token
                if (token) {
                    config.headers.accesstToken = token;
                } else {
                    //重定向到登录页
                    router.push("/login")
                }
                //3.根据请求方式序列化传递的参数,根据后端需求是否序列化
                if (config.method === "post") {
                    if (config.data.__proto__ === FormData.prototype
                        || config.url.endsWith("path")
                        || config.url.endsWith("mark")
                        || config.url.endsWith("patchs")
                        ) {
                            //code...
                    } else {
                        config.data = qs.stringify(config.data);
                    }
                }
                return config;
            },

            //请求错误做些什么
            function(error) {
                console.log('request Error:',error);
                //请求超时
                if (error.code === "ECONNABORTED" && error.message.indexOf("timeout") !== -1) {
                    console.log("timeout请求超时");
                }
                //重定向
                const errorInfo = error.response;
                return Promise.reject(error)
            },
        );
        //为axios实例添加响应拦截器
        service.interceptors.response.use(
            response => {
                //2xx范围内的状态码会触发该函数
                //对响应数据做点什么
                return response;
            },
            error => {
                //2xx范围外的状态码都会触发该函数
                //对响应错误做点什么
                return Promise.reject(error)
            }
        )

        //移除拦截器
        // service.interceptors.request.eject(requestInterceptor);
    })
}