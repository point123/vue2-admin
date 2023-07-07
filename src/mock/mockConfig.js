import Mock from "mockjs";
import * as login from "@/mock/module/login";
import * as user from "@/mock/module/user";
import * as menu from "@/mock/module/menu";

/* 开启登录mock的拦截,通过isOpen参数开启
 */
fnCreate(login,true);
fnCreate(user,true);
fnCreate(menu,true);


//对login返回的拦截设置进行处理
function fnCreate(mod,isOpen = true) {
    // console.log(mod);
    if (isOpen) {
        // 开启请求的拦截
        for (let key in mod) {
            //执行mod[key]方法,获取返回值
            ((res) => {
                // console.log(res);
                if (res.isOpen !== false) {
                    //生成模拟数据,这里的new RegExp直接写成res.url好像也没啥问题
                    Mock.mock(new RegExp(res.url), res.type, (options)=> {
                        // 将body中的参数转换为对象存储到data中
                        options['data'] = options.body ? JSON.parse(options.body): null;
                        delete options.body;
                        // 获取模拟的返回数据
                        let responseData = res.data;
                        // 判断是否对请求的参数进行校验
                        if (res.isValid) {
                            // 校验结果,返回正确或错误的信息
                            let validResult = Mock.valid(res.validTemplate,options.data);
                            if (validResult.length > 0) {responseData = res.validData}
                            for (let item of validResult) {
                                console.log('%cMock校验','color:tomato',`${item.path[1]}错误`);
                            }
                        }
                        console.log('%cMock拦截,请求:','color:skyblue',options);
                        console.log('%cMock拦截,响应:','color:skyblue',responseData);
                        return responseData;
                    })
                }
            })(mod[key]() || {})
        }
    }
}