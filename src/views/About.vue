/**
* @module About
* @author: ArMChAn
* @description: 什么都不用说,我其实是一个假前端!
* @since: 创建时间  2019-11-20 17:30:29
*/

<template>
  <div class="about">
    <h1>This is an about page</h1>
    <span @click="changeAlert">{{isAlert}}</span>
  </div>
</template>


<script lang='ts'>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import { Component, Vue, Watch, Prop, Emit } from "vue-property-decorator";
import { Action, Mutation, State, Getter } from "vuex-class";

@Component({ components: {} })
export default class About extends Vue {
  private isAlert: boolean = false;
  @Watch("isAlert")
  onChildChange(bool: boolean) {
    console.log(bool);
  }
  private changeAlert(): void {
    this.isAlert = !this.isAlert;
  }
}
</script>
<style lang='scss' scoped>
//@import url(); 引入公共css类
</style>