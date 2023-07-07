<template>
    <div class="home">
        <Menu-Bar></Menu-Bar>
        <Head-Bar></Head-Bar>
        <Main-View></Main-View>
    </div>
</template>

<script>
import MenuBar from '@/views/MenuBar/MenuBar.vue';
import HeadBar from "@/views/HeadBar/HeadBar.vue";
import MainView from '@/views/MainView/MainView.vue';
import { getUser } from '@/api/api';
export default {
    name: "home",
    data() {
        return {
            
        }
    },
    components:{
        MenuBar,
        HeadBar,
        MainView,
    },
    mounted(){
        // getUser();
    },
    methods:{
    }
}
</script>

<style scoped lang="scss">
.home {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
}
</style>