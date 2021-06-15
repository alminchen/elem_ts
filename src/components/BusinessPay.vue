/**
* @module BusinessPay
* @author: ArMChAn
* @description: 什么都不用说,我其实是一个假前端!
* @since: 创建时间  2019-11-19 11:37:31
*/

<template>
  <div class="alert_box" v-if="alertMaskShow">
    <header>支付确认</header>
    <div class="con_info">需支付￥{{ allTotalPrice }}</div>
    <footer>
      <div class="double_btn" @click.stop="cancelPay">取消</div>
      <div class="double_btn" @click.stop="paySuccess">支付</div>
    </footer>
  </div>
</template>

<script lang='ts'>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import { Component, Vue, Prop } from "vue-property-decorator";

@Component({ components: {} })
export default class BusinessPay extends Vue {
  @Prop()
  allTotalPrice!: number;
  @Prop()
  alertMaskShow!: boolean;
  private paySuccess (): void {
    this.$emit("payInBuy");
  }
  private cancelPay (): void {
    this.$emit("cancel");
  }
}
</script>
<style lang='scss' scoped>
//@import url(); 引入公共css类
.alert_box {
  width: 8rem;
  background: #fff;
  position: absolute;
  left: 50%;
  top: 50%;
  -webkit-transform: translate3d(-50%, -50%, 0);
  transform: translate3d(-50%, -50%, 0);
  font-size: 0.4rem;
  z-index: 10;
  border-radius: 0.14rem;
  overflow: hidden;
  text-align: center;
  header {
    font-size: 0.45rem;
    padding: 0.3rem;
  }
  .con_info {
    height: 2.5rem;
    line-height: 2.5rem;
    border-top: 0.025rem solid #eee;
    border-bottom: 0.025rem solid #eee;
  }
  footer {
    height: 1.3rem;
    .double_btn {
      width: 50%;
      height: 1.3rem;
      float: left;
      line-height: 1.3rem;
      &:nth-of-type(2) {
        background: #4cd964;
        color: #fff;
      }
    }
  }
}
</style>