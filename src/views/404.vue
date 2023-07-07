<template>
  <div class="notfound_container">
    <h2>404</h2>
    <p>
      <span>抱歉,你访问的页面<em>失联</em>了</span>
    </p>
    <el-button class="goback" @click="goback">返回上一页</el-button>
    <el-button type="primary" class="goHome" @click="goHome">进入首页</el-button>
  </div>
</template>

<script>
export default {
    name: "Page404",
    methods: {
      goback() {
        this.$router.go(-1)
      },
      goHome() {
        this.$router.push({
          path:"/",
        })
      }
    }
}
</script>

<style lang="scss">
  .notfound_container {
    h2 {
      font-size: 10rem;
      margin-bottom: 0;
    }
    p {
      font-size: 3rem;
      em {
        color: rgb(247, 84, 8);
      }
    }
    .goHome,.goback {
      width: 9.375rem;
      height: 3.75rem
    }
  }
</style>