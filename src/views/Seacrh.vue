/**
* @module Seacrh
* @author: ArMChAn
* @description: 什么都不用说,我其实是一个假前端!
* @since: 创建时间  2019-11-19 17:56:31
*/

<template>
  <div class='search_wrap'>
    <div class="re_search">
      <svg @click="$router.go(-1)">
        <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#arrow-left.6f6409e"></use>
      </svg>
      <input type="search" v-model="search_text" class="v-md" placeholder="请输入商品名称">
    </div>
    <one-business v-for="(item,index) in search_res" :key="index" :item="item"></one-business>
  </div>
</template>

<script lang='ts'>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import { Component, Vue, Watch } from "vue-property-decorator";
import { Getter } from "vuex-class";
import OneBusiness from "../components/OneBusiness.vue";
@Component({ components: { OneBusiness } })
export default class Seacrh extends Vue {
  @Getter private getFalseBussinessbrief!: any;
  private search_text: string = "";
  private search_res: any = [];
  @Watch("search_text")
  onChildChange(val: string) {
    this.search_method(val);
  }
  private mounted() {
    let _this: any = this;
    this.search_text = _this.$route.params.keyword;
    for (let x in this.getFalseBussinessbrief) {
      if (this.getFalseBussinessbrief[x].shop_name.includes(this.search_text)) {
        this.search_res.push(this.getFalseBussinessbrief[x]);
      }
    }
  }
  private search_method(val: string): void {
    this.search_res = [];
    for (let x in this.getFalseBussinessbrief) {
      if (this.getFalseBussinessbrief[x].shop_name.includes(val)) {
        this.search_res.push(this.getFalseBussinessbrief[x]);
      }
    }
  }
}
</script>
<style lang='scss' scoped>
//@import url(); 引入公共css类
.re_search {
  background: #0096ff;
  line-height: 0;
  padding: 0.2rem;
  svg {
    width: 0.6rem;
    height: 0.6rem;
  }
  input[type="search"] {
    display: inline-block;
    height: 0.9rem;
    width: 8rem;
    outline: none;
    border: none;
    border-radius: 0.45rem;
    background: #f2f2f2;
    box-sizing: border-box;
    padding: 0 0.5rem;
    font-size: 0.4rem;
  }
}
</style>