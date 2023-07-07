//axios默认配置,包含基础路径等信息,axios文档中的请求配置
export default {
    method: "get",//创建请求时使用的方法
    baseURL: "http://localhost:8081", //基础url前缀,将自动加载url前面,除非url是绝对url
    //自定义请求头
    headers:{
        'Content-type':"application/json;charset=UTF-8"
    },
    /*  作为请求体被发送的数据
        仅适用于PUT,POST,DELETE,PATCH方法
        如果没有设置transformRequest时,则必须为一下类型之一: 
            -string,plain object,ArrayBuffer,ArrayBufferView,URLSearchParams
            -浏览器专属类型: FormData,File,Blob
            -Node专属:Stream,Buffer
    */
    data:{},
    //设置超时时间(毫秒),如果请求时间超过设置的时间,则请求会中断,默认为0
    timeout:10000,
    //跨域请求时是否携带凭证,默认false
    withCredentials: true,
    /* 
        表示浏览器将要响应的数据类型,默认值json
        包含值为:arraybuffer,document,json,text,stream,浏览器专属类型blob
    */
    responseType: "json"
}