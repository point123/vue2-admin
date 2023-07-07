<template>
  <el-row class="container">
    <!-- 顶部导航条 -->
    <el-col :span="24" class="header">
      <!-- 左侧logo -->
      <el-col :span="4" class="logo">
        <img :src="this.logo" width="20px">
        {{sysName}}
      </el-col>
      <!-- 折叠按钮 -->
      <el-col class="tools" :span="1">
        <div class="folder" @click="handleFold()">
          <i class="el-icon-s-fold" ref="folder"></i>
        </div>
      </el-col>
      <!-- 导航条 -->
      <el-col class="navbar" :span="14"></el-col>
      <!-- 右侧用户信息 -->
      <el-col class="userInfo" :span="5">
        <!-- 下拉菜单 -->
        <el-dropdown>
          <!-- 用户信息 -->
          <div class="el-dropdown-link userInner">
            <!-- 用户头像 -->
            <el-avatar :src="this.userAvatar" size="large"></el-avatar>
            <!-- 用户名 -->
            <span class="username">
              {{username}}
              <i class="el-icon-arrow-down el-icon--right"></i>
            </span>
          </div>
          <!-- 下拉菜单主体 -->
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>设置</el-dropdown-item>
            <el-dropdown-item>退出登录</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </el-col>
    </el-col>

    <el-col :span="24" class="main">
      <!-- h5标签,表示侧边栏 -->
      <aside class="aside">
        <!-- 侧边菜单栏 -->
        <el-menu 
          class="menu" 
          background-color="#001529" 
          text-color="#ffffff" 
          active-text-color="#ffa500"
          default-active="1"
          mod="vertical"
          :collapse="this.isFold"
          :collapse-transition="this.isFold"
          :unique-opened="true"
        >
          <!-- 一级菜单项 -->
          <el-menu-item index="1">
            <i class="el-icon-s-home"></i>
            <span>首页</span>
          </el-menu-item>
          <!-- 子菜单 -->
          <el-submenu index="2">
            <template slot="title">
              <i class="el-icon-menu"></i>
              <span>菜单一</span>
            </template>
            <el-menu-item index="2-1">
              菜单1-1
            </el-menu-item>
          </el-submenu>
          <!-- 子菜单,可嵌套再生成子菜单 -->
          <el-submenu index="3">
            <template slot="title">
              <i class="el-icon-menu"></i>
              <span>菜单二</span>
            </template>
            <el-menu-item index="3-1">
              <span>菜单2-1</span>
            </el-menu-item>
            <el-submenu index="3-2">
              <template slot="title">
                <span>菜单2-2</span>
              </template>
              <el-menu-item index="3-2-1">
                <span>菜单2-2-1</span>
              </el-menu-item>
            </el-submenu>
          </el-submenu>
          <!-- 菜单分组 -->
          <el-submenu index="4">
            <template slot="title">
              <i class="el-icon-menu"></i>
              <span>菜单三</span>
            </template>

            <el-menu-item-group>
              <template slot="title">
                <span>分组一</span>
              </template>
              <el-menu-item index="4-1">菜单3-1</el-menu-item>
              <el-menu-item index="4-2">菜单3-2</el-menu-item>
              <el-submenu index="4-3">
                <template slot="title">
                  <span>菜单3-3</span>
                </template>
                <el-menu-item index="4-3-1">
                  <span>菜单3-3-1</span>
                </el-menu-item>
              </el-submenu>
            </el-menu-item-group>

            <el-submenu index="4-4">
              <template slot="title">
                <span>菜单3-3</span>
              </template>
              <el-menu-item index="4-4-1">菜单3-3-1</el-menu-item>
            </el-submenu>
          </el-submenu>
        </el-menu>
      </aside>
      <!-- 主要展示区域 -->
      <section class="content-container">
        <div>
          <el-col :span="24" class="breadcrumb-bar">
            <el-breadcrumb separator-class="el-icon-arrow-right" class="breadcrumb-inner">
              <el-breadcrumb-item
                v-for="item in $route.matched"
                :key="item.path"
              >
                {{item.name}}
              </el-breadcrumb-item>
            </el-breadcrumb>
          </el-col>
          <el-col :span="24" class="content-warpper">
            
          </el-col>
        </div>
      </section>
    </el-col>
  </el-row>
</template>

<script>
import logo from "../assets/logo.png"
import avatar from "../assets/avatar.jpg"
import {testMock} from "../api/api"
export default {
    name:"Home",
    data() {
      return {
        logo: "", //展示的logo
        userAvatar: "",//用户的头像
        sysName: "系统名称",//系统名称
        username: "用户1",//用户名
        isFold: false,//折叠按钮状态,false为未折叠,true为折叠
      }
    },
    mounted() {
      this.logo = logo;
      this.userAvatar = avatar;
      console.log(this.$route);
    },
    methods: {
      //点击折叠按钮方法
      handleFold() {
        this.isFold = !this.isFold;
        this.$refs.folder.className = this.isFold?"el-icon-s-unfold":"el-icon-s-fold"
      }
    }
}
</script>

<style lang="scss" scoped>
  .container {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    .header {
      background-color: #ddd;
      height: 60px;
      text-align: center;
      line-height: 60px;
      .logo {
        height: 60px;
        background-color: #001529;
        color: white;
        font-weight: bolder;
      }
      .tools {
        font-size: 2rem;
        .folder {
          cursor: pointer;
        }
        .folder:hover {
          background-color: #eee;
        }
      }
      .navbar {
        height: 60px;
      }
      .userInfo {
        height: 60px;
        text-align: right;
        .userInner {
          display: flex;
          align-items: center;
          justify-content: center;
          .username {
            padding: 0 10px;
            font-size: 1rem;
          }
        }
      }
    }

    .main {
      display: flex;
      position: absolute;
      top: 60px;
      bottom: 0px;
      aside {
        flex: 0 0 247px;
        width: 247px;
        //编译后el-menu 变成ul.el-menu
        .el-menu {
          height: 100%;
          text-align: left;
          // .el-menu-item:focus,
          .el-menu-item:hover,
          ::v-deep .el-submenu__title:hover{
            background-color: #00284f !important;
          }
        }
      }
      .content-container {
        flex: 1;
        padding: 0;
        .breadcrumb-bar {
          height: 1.75rem;
          background: rgba(99, 138, 161, 0.2);
          border-bottom: 1px solid rgba(38, 86, 114, 0.2);
          .breadcrumb-inner {
            padding: 5px 0 5px 5px;
            text-align: left;
            font-size: 18px;
            width: 100%;
            height: 100%;
            // float: left;
          }
        }
      }
    }
  }
</style>