/**
* @module BackBar
* @author: ArMChAn
* @description: 什么都不用说,我其实是一个假前端!
* @since: 创建时间  2019-11-19 15:10:53
*/

<template>
  <div class='back_box'>
    <div class="back_arrow" @click="back_once">
      <svg>
        <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#arrow-left.6f6409e"></use>
      </svg>
    </div>
    <h3>{{ title }}</h3>
  </div>
</template>

<script lang='ts'>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import { Component, Vue, Watch, Prop, Emit } from "vue-property-decorator";
import { Action, Mutation, State, Getter } from "vuex-class";

@Component({ components: {} })
export default class BackBar extends Vue {
  @Prop()
  title!: string;
  private back_once(): void {
    let _this: any = this;
    _this.$router.go(-1);
  }
}
</script>
<style lang='scss' scoped>
//@import url(); 引入公共css类
.back_box {
  width: 10rem;
  height: 1rem;
  line-height: 1rem;
  position: fixed;
  background: #0096ff;
  top: 0;
  left: 0;
  right: 0;
  z-index: 999;
  h3 {
    color: #fff;
    width: 100%;
    display: block;
    font-size: 0.52rem;
    text-align: center;
    font-weight: 700;
  }
  div.back_arrow {
    width: 1rem;
    height: 1rem;
    position: absolute;
    left: 0;
    top: 0;
    svg {
      width: 0.6rem;
      height: 0.6rem;
      position: absolute;
      left: 50%;
      top: 50%;
      margin-left: -0.3rem;
      margin-top: -0.3rem;
    }
  }
}
</style>