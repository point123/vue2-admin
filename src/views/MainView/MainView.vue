<template>
    <div class="main-container" :class="collapse?'collapse-on':'collapse-off'">
        <el-breadcrumb separator="/" class="breadcrumb">
            <el-breadcrumb-item v-for="item in $route.matched" :key="item.path">
                <span>{{ item.name }}</span>
            </el-breadcrumb-item>
        </el-breadcrumb>
        <transition name="fade" mode="out-in">
            <router-view></router-view>
        </transition>
    </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
    name: "mainView",
    computed:{
        ...mapState(['collapse'])
    },
    mounted() {
        
    }
}
</script>

<style scoped lang="scss">
.main-container {
    position: absolute;
    left: 250px;
    top: 60px;
    right: 0;
    bottom: 0;
    .breadcrumb {
        padding:10px;
        background: rgba(99, 138, 161, 0.2);
        border-bottom: 1px solid rgba(38, 86, 114, 0.2);
    }
}

.collapse-on {
    left: 64px;
}

.collapse-off {
    left: 250px;
}
</style>