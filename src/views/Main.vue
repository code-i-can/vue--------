<template>
  <el-container style="height: 100%">
    <el-aside width="auto" >
        <CommonAside />
    </el-aside>
    <el-container>
      <el-header>
        <CommonHeader />
      </el-header>
      <el-main>
        <CommonTag></CommonTag>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import CommonAside from "../components/CommonAside.vue";
import CommonHeader from "@/components/CommonHeader.vue";
import CommonTag from "@/components/CommonTag";
export default {
    name: "Main",
    data() {
        return {};
    },
    components: {CommonTag, CommonAside, CommonHeader }
}
</script>

<style  scoped>
.el-header{
    background-color: #333;
}
.el-main{
    padding-top: 0;
}
</style>>
