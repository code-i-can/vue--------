<template>
  <div class="tag">
    <el-tag
        v-for="tag,index in tags"
        :key="tag.name"
        :closable="tag.name !== '首页'"
        :effect=" $route.name === tag.name ? 'dark' : 'plain' "
        @click="handleChange(tag)"
        @close="handleClose(tag, index)"
        size="small"
    >
      {{tag.label}}
    </el-tag>
  </div>
</template>

<script>
import {mapMutations, mapState} from "vuex";

export default {
  name: "CommonTag",
  data(){
    return{

    }
  },
  computed:{
    ...mapState({
      tags:state => state.tab.tabsList
    })
  },
  methods:{
    ...mapMutations({
      close:'closeTag'
    }),
    handleChange(tag){
      this.$router.push(tag.name)
    },
    handleClose(tag, index){
      const length = this.tags.length - 1
      this.close(index)
      if(tag.name !== this.$route.name){
        return ;
      }
      if(length === index){
        if(length>=1) this.$router.push(this.tags[index-1].name)
        else{
          if(this.$route.name!=='home') this.$router.push('home')
        }
      }else{
        this.$router.push(this.tags[index].name)
      }
    }
  }
}
</script>

<style lang="less" scoped>
.tag{
  padding: 20px;
  .el-tag {
    margin-right: 15px;
    cursor: pointer;
  }
}
</style>
