<template>
  <el-menu default-active="1-4-1" class="el-menu-vertical-demo" text-color="#fff" active-text-color="#ffd04b" background-color="#545c64" :collapse="isCollapse">
  <h3>{{isCollapse ? '后台' : '通用后台管理系统'}}</h3>
  <el-menu-item @click="clickMenu(m)" v-for="m in noChildren" :index="m.path+''" :key="m.path" >
    <i :class="'el-icon-' + m.icon"></i>
    <span slot="title" >{{m.label}}</span>
  </el-menu-item>
  <el-submenu v-for="m in hasChildren" :index="m.path+''" :key="m.path">
    <template slot="title">
      <i :class="'el-icon-' + m.icon"></i>
      <span slot="title">{{m.label}}</span>
    </template>
    <el-menu-item-group v-for="(mm, subIndex) in m.children"  :key="mm.path">
      <el-menu-item @click="clickMenu(mm)" :index="subIndex+''">{{mm.label}}</el-menu-item>
    </el-menu-item-group>
  </el-submenu>

</el-menu>
</template>

<script>
export default {
    data() {
        return {

            menu:[
                {
                    path:'/',
                    name:'home',
                    label:'首页',
                    icon:'s-home',
                    url:'Home/Home',
                },
                {
                    path:'/mall',
                    name:'mall',
                    label:'商品管理',
                    icon:'video-play',
                    url:'MallManage/MallManage',
                },
                {
                    path:'/user',
                    name:'user',
                    label:'用户管理',
                    icon:'user',
                    url:'UserManage/UserManage',
                },
                {

                    label:'其他',
                    icon:'location',
                    children:[
                        {
                            path:'/page1',
                            name:'page1',
                            label:'页面1',
                            icon:'setting',
                            url:'Other/PageOne',
                        },
                        {
                            path:'/page2',
                            name:'page2',
                            label:'页面2',
                            icon:'setting',
                            url:'Other/PageTwo',
                        },
                    ]
                },
            ],
        }
    },
    methods:{
        clickMenu(item){
          if(this.$route.name===item.name) return ;
            this.$router.push({
                name:item.name
            })
            this.$store.commit("selectMenu",item)
        },

    },
    computed:{
        noChildren(){
            return this.asyncMenu.filter( item => !item.children)
        },
        hasChildren(){
            return this.asyncMenu.filter( item => item.children)
        },
        isCollapse(){
            return this.$store.state.tab.isCollapse
        },
        asyncMenu(){
            return this.$store.state.tab.menu
        }
    }
}
</script>

<style lang="less" scoped>
.el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
  }
.el-menu{
    height: 100%;
    border: none;
    h3{
        color: #fff;
        text-align: center;
        line-height: 48px;
    }
}
</style>
