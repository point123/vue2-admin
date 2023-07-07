<template>
    <div class="menubar-container" :class="collapse?'collapse-on':'collapse-off'">
        <div class="logo">
            <img :src="logo">
            <span>{{ collapse?'':sysName }}</span>
        </div>
        <el-menu
            class="menu"
            background-color="#001529" 
            text-color="#ffffff" 
            active-text-color="#ffa500"
            default-active="1"
            :unique-opened="true"
            :collapse="collapse"
            :collapse-transition="false"
        >
            <el-menu-item index="1">
                <i class="el-icon-s-home"></i>
                <span>{{ $t("common.home") }}</span>
            </el-menu-item>
            <el-submenu index="2">
                <template slot="title">
                    <i class="el-icon-s-operation"></i>
                    <span>{{ $t("sys.sysManage") }}</span>
                </template>
                <el-menu-item index="2-1">{{ $t("sys.userManage") }}</el-menu-item>
                <el-menu-item index="2-2">{{ $t("sys.roleManage") }}</el-menu-item>
                <el-menu-item index="2-3">{{ $t("sys.deptManage") }}</el-menu-item>
                <el-menu-item index="2-4">{{ $t("sys.menuManage") }}</el-menu-item>
                <el-menu-item index="2-5">{{ $t("sys.logManage") }}</el-menu-item>
            </el-submenu>
        </el-menu>
    </div>
</template>

<script>
import logo from "@/assets/logo.png"
import { mapState } from "vuex";
export default {
    name: "MenuBar",
    data() {
        return {
            logo: null,
            sysName: "管理系统",
        }
    },
    computed:{
        ...mapState(["collapse"])
    },
    mounted(){
        this.logo = logo;
    },
    methods:{

    }
}
</script>

<style scoped lang="scss">
    // 组件根样式
    .menubar-container {
        position: absolute;
        top: 0;
        bottom: 0;
        // box-shadow: 0 0 5px 5px #001529;
        
        //组件logo结构样式
        .logo {
            height: 60px;
            line-height: 60px;
            background-color: #001529;
            text-align: center;
            color: white;
            // logo图片样式
            img {
                width: 40px;
                height: 40px;
                vertical-align: middle;
            }
        }
        // 菜单样式
        .menu {
            position: absolute;
            top: 60px;
            bottom: 0;
            left: 0;
            right: -1px;
            text-align: left;
        }

    }

    
    .collapse-on {
        width: 64px;
    }
    .collapse-off {
        width: 250px;
    }
</style>