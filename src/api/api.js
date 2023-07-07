// import request from "@/request/axios";
import request from "@/request/request";
// 接口统一管理

//登录
export function login(data) {
    return request({
        url: "/login",
        method: "post",
        data: data,
    });
}

// 获取用户
export function getUser() {
    return request({
        url:"/user",
        method: "get",
    })
}

// 获取菜单
export function getMenu(data) {
    return request({
        url: "/menu",
        method: "post",
        data: data,
    })
}

//testMock
export function testMock(data) {
    return request({
        url: "/testMock",
        method: "post",
        data: data,
    })
}