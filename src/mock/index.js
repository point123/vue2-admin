//废弃,未进行封装的mock
import Mock from "mockjs";

//测试用testMock的get接口
Mock.mock("http://localhost:8081/testMock",function(options){
    console.log("mockOptions:",options);
    return "hi"
})

Mock.mock("http://localhost:8081/testMock?id=1&fixId=7E1FS08SCSJ7",{
    "name":"123"
})

//测试用mock的get接口
Mock.mock("http://localhost:8081/mock","get",{
    "name": "@chineseName"
})
// 测试用mock的post接口
Mock.mock("http://localhost:8081/mock","post",{
    "name": Mock.Random.string("lower"),
})

// 登录接口
Mock.mock("http://localhost:8081/login",{
    data: {
        "token": "1616516sadasdao456",
    }
});



// 扩展自定义随机数据
Mock.Random.extend({
    chineseName: function(date) {
        const nameList = ["张三","李四","王五"];
        // console.log(Mock.Random);
        //pick:Mock.Random类中的方法,从数组中随机返回一个元素
        return this.pick(nameList)
    }
})