import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

/* 
    state 数据源
    view 将state映射到视图
    actions 响应在view上的用户输入导致的状态变化
*/
const store = new Vuex.Store({
    state: {
        collapse: false,
    },
    getters:{
        collapseToString(state){
            return state.collapse? "收缩" : "展开"
        }
    },
    mutations: {
        toggleCollapse(state) {
            state.collapse = !state.collapse;
        }
    },
    actions: {
        //接收一个与store实例有相同方法和属性的对象
        switchCollapse(context) {
            context.commit("toggleCollapse")
        },
        //es2015参数解构
        switchCollapseEs({commit}) {
            commit("toggleCollapse");
        }
    }
})

export default store;