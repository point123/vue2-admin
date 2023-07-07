<template>
    <div class="headBar-container" :class="collapse?'collapse-on':'collapse-off'">
        <div class="folder" @click="switchCollapse">
            <i :class="collapse?'el-icon-s-unfold':'el-icon-s-fold'"></i>
        </div>
        <div class="tool-bar">
            <el-dropdown class="translate" @command="switchLang">
                <span class="el-dropdown-link">
                    {{ $t("lang") }}<i class="el-icon-arrow-down el-icon--right"></i>
                </span>
                <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item command="zh_cn">中文</el-dropdown-item>
                    <el-dropdown-item command="en_us">English</el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>
            <el-dropdown class="user">
                <span class="el-dropdown-link userInfo">
                    <el-avatar icon="el-icon-user-solid"></el-avatar>
                    <i class="el-icon-arrow-down el-icon--right"></i>
                </span>
                <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item>{{ $t("common.setting") }}</el-dropdown-item>
                    <el-dropdown-item @click.native="logout">{{ $t("common.exit") }}</el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>
        </div>
    </div>
</template>

<script>
import Cookie from "js-cookie";
import { mapState,mapMutations } from "vuex";
export default {
    name:"HeadBar",
    data(){
        return {
        }
    },
    computed:{
        ...mapState(["collapse"])
    },
    methods:{
        ...mapMutations(['toggleCollapse']),
        // 切换语言
        switchLang(command) {
            this.$i18n.locale === command ? null : this.$i18n.locale = command;
        },
        // 伸缩侧边栏
        switchCollapse() {
            this.toggleCollapse();
        },
        // 退出登录
        logout() {
            this.$confirm("",{
                title:"提示",
                message: "确认退出?",
                type: "warning"
            }).then(()=>{
                Cookie.remove("Authorization");
                sessionStorage.removeItem("user");
                this.$router.push("/login");
            }).catch(error=>{
                console.log(error);
            })
        }
    }
}
</script>

<style scoped lang="scss">
    .headBar-container {
        position: absolute;
        left: 250px;
        right: 0;
        height: 60px;
        background-color:#001529;
        .folder {
            float:left;
            font-size:3rem;
            color:white;
            height:100%;
            width:60px;
            line-height: 60px;
            cursor: pointer;
        }
        .tool-bar {
            float: right;
            padding-right: 40px;
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            .translate {
                color: white;
                margin-right: 20px;
                cursor: pointer;
            }
            .userInfo {
                display: flex;
                justify-content: center;
                align-items: center;
                color: white;
                cursor: pointer;
            }
        }
    }

    .collapse-on {
        left: 64px
    }

    .collapse-off {
        left: 250px;
    }
</style>