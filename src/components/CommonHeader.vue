<template>
  <header>
    <div class="l-content">
        <el-button @click="handleMenu" plain icon="el-icon-menu" size="mini"></el-button>
        <h3 style="color: #fff">首页</h3>
    </div>
    <div class="r-conten">
         <el-dropdown trigger="click" size="mini">
            <span>
                <img class="user" :src="userImg" >
            </span>
            <el-dropdown-menu slot="dropdown">
                <el-dropdown-item>个人中心</el-dropdown-item>
                <el-dropdown-item @click.native="logOut">退出</el-dropdown-item>
            </el-dropdown-menu>
         </el-dropdown>
    </div>
  </header>
</template>

<script>
export default {
    name:'CommonHeader',
    data() {
        return {
            userImg: require('../assets/images/user.png')
        }
    },
    methods:{
        handleMenu(){
            this.$store.commit('collapseMenu')
        },
        logOut(){
            this.$store.commit('clearToken')
            this.$store.commit('clearMenu')
            this.$router.push('/login')
        }
    }
}
</script>

<style lang="less" scoped> 
header{
    display: flex; 
    width: 100%;
    height: 100%;
    justify-content: space-between;
    align-items: center;
}
.l-content{
    display: flex;
    align-items: center;
    .el-button {
        margin-right: 20px;
    } 
}
.user{
    width: 40px;
    height: 40px;
    border-radius: 100%;
}
</style>