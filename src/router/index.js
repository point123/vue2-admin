import VueRouter from "vue-router"
import Page404 from "@/views/404.vue";
import Home from "@/views/Home.vue";
import Login from "@/views/Login.vue";
import OldHome from "@/views/OldHome.vue"

const router =  new VueRouter({
    routes: [
        {
            path: "/404",
            component: Page404,
        },
        {
            path: "/home",
            component: Home,
            alias: "/",
            name: "首页"
        },
        {
            path: "/login",
            name: "/login",
            component: Login
        },
        {
            path: "/odlHome",
            component: OldHome,
        }
    ]
})

/* 添加全局前置守卫 to,即将要进入的目标,from,当前正要离开的路由,
next:function,调用该方法resolve这个钩子 */
router.beforeEach((to,from,next)=> {
    let user = sessionStorage.getItem("user");
    //如果即将访问的是登录页面,根据用户信息是否存在判断是否登录过,如果登录了,则跳转到主页
    if (to.path === "/login") {
        user?next('/'):next();
    } 
    //如果即将访问的是其他页面,且用户信息不存在,表明未登录,跳转到登录页
    else {
        user?next():next('/login');
    }
})

export default router;