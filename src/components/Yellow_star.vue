/**
* @module Yellow_star
* @author: ArMChAn
* @description: 什么都不用说,我其实是一个假前端!
* @since: 创建时间  2019-11-11 11:09:40
*/

<template>
  <div class='yellow_star v-md'>
    <div class="back v-md">
      <svg v-for="n in 5" :key="n">
        <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#rating-star"></use>
      </svg>
    </div>
    <div class="front v-md" :style="'width:'+code*100/5+'%;'">
      <svg v-for="n in 5" :key="n">
        <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#rating-star"></use>
      </svg>
    </div>
  </div>
</template>

<script lang='ts'>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import { Component, Vue, Prop } from "vue-property-decorator";

@Component({ components: {} })
export default class Yellow_star extends Vue {
  @Prop()
  code!: number;
  private mounted () {
    // console.log(this.code);
  }
}
</script>
<style lang='scss' scoped>
//@import url(); 引入公共css类
.yellow_star {
  display: inline-block;
  position: relative;
  width: 1.5rem;
  height: 0.3rem;
  > div {
    position: absolute;
    left: 0;
    top: 0;
    white-space: nowrap;
    overflow: hidden;
    &.back {
      z-index: 2;
      svg {
        width: 0.3rem;
        height: 0.3rem;
        fill: #ccc;
      }
    }
    &.front {
      z-index: 3;
      svg {
        width: 0.3rem;
        height: 0.3rem;
        fill: #ffaa0c;
      }
    }
  }
}
</style>