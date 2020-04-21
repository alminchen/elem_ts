/**
* @module Myzone
* @author: ArMChAn
* @description: 什么都不用说,我其实是一个假前端!
* @since: 创建时间  2019-11-19 16:54:11
*/

<template>
  <div class='myzone_index'>
    <!-- <BackBar title="我的"></BackBar> -->
    <div class="myzone_content">
      <div class="myzone_info clear">
        <img src="../assets/images/slider-pic/slider-pic1.jpeg" alt="">
        <div class="myzone_uid">
          <h3>我的</h3>
          <p>132*****123</p>
        </div>
      </div>
    </div>
    <div class="three_lan">
      <a class="three_lan_">
        <p class="big_colorful">
          <span class="index-2FmrF_0" style="color: rgb(255, 153, 0);">0.00</span><span class="index-2V-Hh_0">元</span>
        </p>
        <p class="index-3S6cZ_0">余额</p>
      </a>
      <a class="three_lan_" style="border-left: 1px solid #ddd;border-right: 1px solid #ddd;">
        <p class="big_colorful">
          <span class="index-2FmrF_0" style="color: rgb(255, 95, 62);">3</span><span class="index-2V-Hh_0">个</span>
        </p>
        <p class="index-3S6cZ_0">优惠</p>
      </a>
      <a class="three_lan_">
        <p class="big_colorful">
          <span class="index-2FmrF_0" style="color: rgb(106, 194, 11);">6250</span><span class="index-2V-Hh_0">分</span>
        </p>
        <p class="index-3S6cZ_0">积分</p>
      </a>
    </div>
    <router-link to="/Order">
      <div class="some_bar first-c">
        <svg class="v-md">
          <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#order.070ae2a"></use>
        </svg>
        <span class="v-md">我的订单</span>
      </div>
    </router-link>
    <div class="some_bar">
      <svg class="v-md">
        <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#shop"></use>
      </svg>
      <span class="v-md">积分商城</span>
    </div>
    <div class="some_bar">
      <svg class="v-md">
        <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#eleme"></use>
      </svg>
      <span class="v-md">饿了么会员卡</span>
    </div>

    <div class="some_bar first-c">
      <svg class="v-md">
        <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#discover.5811137"></use>
      </svg>
      <span class="v-md">服务中心</span>
    </div>
    <div class="some_bar">
      <svg class="v-md">
        <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#index.18edf5a"></use>
      </svg>
      <span class="v-md">下载饿了么APP</span>
    </div>
    <fix-nav></fix-nav>
  </div>
</template>

<script lang='ts'>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import { Component, Vue } from "vue-property-decorator";
import { Action } from "vuex-class";
import FixNav from "../components/FixNav.vue";
import BackBar from "../components/BackBar.vue";
@Component({
  components: {
    FixNav,
    BackBar
  }
})
export default class Myzone extends Vue {
  @Action private setWhichpage!: (plate: string) => any;
  private mounted() {
    this.setWhichpage("myzone");
  }
}
</script>
<style lang='scss' scoped>
//@import url(); 引入公共css类
.myzone_content {
  width: 10rem;
  height: 3rem;
  //   margin-top: 1rem;
  padding: 0.8rem 0.4rem;
  box-sizing: border-box;
  background: #0097ff;
  img {
    width: 1.4rem;
    height: 1.4rem;
    border-radius: 50%;
    float: left;
  }
  .myzone_uid {
    float: left;
    margin-left: 0.5rem;
    color: #fff;
    h3 {
      font-size: 0.7rem;
    }
    p {
      font-size: 0.4rem;
    }
  }
}
.three_lan {
  display: table;
  width: 100%;
  height: 2.24rem;
  border-bottom: 1px solid #ddd;
  background-color: #fff;
  .three_lan_ {
    display: table-cell;
    width: 33.3333%;
    vertical-align: middle;
    text-align: center;
    p.big_colorful {
      line-height: 0.4rem;
    }
    .index-2FmrF_0 {
      padding: 0.4rem 0 0;
      font-size: 0.6rem;
      line-height: 0.6rem;
      font-weight: 700;
    }
    .index-2V-Hh_0 {
      font-size: 0.32rem;
      line-height: 0.32rem;
    }
    .index-3S6cZ_0 {
      font-size: 0.32rem;
      line-height: 0.37rem;
      font-weight: 500;
      color: #666;
    }
  }
}
div.some_bar {
  width: 10rem;
  height: 1.1rem;
  padding: 0 0.4rem;
  box-sizing: border-box;
  background: #fff;
  font-size: 0.4rem;
  line-height: 1.1rem;
  border-top: 1px solid #dedede;
  &.first-c {
    margin-top: 0.3rem;
    border: none;
  }
  svg {
    width: 0.4rem;
    height: 0.4rem;
  }
  span {
    margin-left: 0.2rem;
  }
}
</style>