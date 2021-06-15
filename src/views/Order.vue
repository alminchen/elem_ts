/**
* @module Order
* @author: ArMChAn
* @description: 什么都不用说,我其实是一个假前端!
* @since: 创建时间  2019-11-19 15:09:26
*/

<template>
  <div class='order_wrap'>
    <BackBar title='订单'></BackBar>
    <div class="order_box">
      <div class="order_one" v-for="(item,index) in getFalseOrder" :key="index">
        <div class="order_img">
          <img src="../assets/images/shop-logo.png" alt="">
        </div>
        <div class="order_info">
          <header class="order_info_t">
            <div class="order_title flex_align">
              <p class="b_name">{{item.store_name}}</p>
              <p class="b_status">{{item.order_state}}</p>
            </div>
            <p class="order_time">{{item.order_birth_time}}</p>
          </header>
          <footer class="order_info_b flex_align">
            <p class="order_brief_info">{{item.order_brief_info}}</p>
            <p class="order_price">￥{{item.order_price}}</p>
          </footer>
          <div style="display:none;">111</div>
        </div>
      </div>
    </div>
    <fix-nav></fix-nav>
  </div>
</template>

<script lang='ts'>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import { Component, Vue } from "vue-property-decorator";
import { Action } from "vuex-class";
import BackBar from "../components/BackBar.vue";
import FixNav from "../components/FixNav.vue";
@Component({
  components: {
    BackBar,
    FixNav
  }
})
export default class Order extends Vue {
  @Action private setWhichpage!: (plate: string) => any;
  private mounted () {
    this.setWhichpage("order");
  }
}
</script>
<style lang='scss' scoped>
//@import url(); 引入公共css类
.order_box {
  margin: 1rem 0 1.2rem;
}
.order_one {
  background: #fff;
  margin-bottom: 0.2rem;
  .order_img {
    width: 1rem;
    height: 1rem;
    float: left;
    padding: 0.2rem 0.4rem;
    img {
      width: 100%;
    }
  }
  .order_info {
    margin-left: 1.6rem;
    padding: 0.2rem 0.2rem 0 0;
    box-sizing: border-box;
    .order_info_t {
      border-bottom: 1px solid #eee;
      .order_title {
        height: 0.6rem;
        line-height: 0.6rem;
        .b_name {
          font-size: 0.4rem;
        }
        .b_status {
          font-size: 0.35rem;
          color: #333;
        }
      }
      .order_time {
        font-size: 0.3rem;
        color: #999;
        line-height: 0.6rem;
      }
    }
    .order_info_b {
      padding: 0.2rem 0;
      .order_brief_info {
        font-size: 0.346667rem;
        color: #666;
      }
      .order_price {
        text-align: right;
        font-size: 0.346667rem;
        color: #333;
        font-weight: bold;
      }
    }
  }
}
</style>