<template>
  <el-container class="container">
    <el-header class="header">Header</el-header>
    <el-container>
      <el-aside class="aside">Aside</el-aside>
      <el-main class="main">Main</el-main>
    </el-container>
    <el-footer class="footer">Footer</el-footer>
  </el-container>
</template>

<script>
export default {
  name: "Home",
  components: {},
};
</script>

<style less scoped>
.container{
  width: 100%;
  height: 100vh;
  background-color: #333;
}
.header{
  height: 100px;
  background-color: #fff;
}
.aside{
  width: 10%;
  background-color: blue;
}
</style>