/**
* @module Business
* @author: ArMChAn
* @description: 什么都不用说,我其实是一个假前端!
* @since: 创建时间  2019-11-08 17:21:38
*/

<template>
  <div class="business_box">
    <div class="business_top">
      <div class="blur_bg"></div>
      <div class="font_words">
        <div class="fw_top">
          <div class="fw_top_img">
            <img src="../assets/images/shop-logo.png" alt="" />
          </div>
          <div class="fw_top_word clear">
            <h3 class="ell">{{ commodity.shop_name }}</h3>
            <p class="ell">
              <span v-if="commodity.fengniao">蜂鸟配送</span><span v-else>商家配送</span>／{{
                commodity.estimate_time
              }}分钟送达／配送费¥{{ commodity.send_cost }}
            </p>
            <p class="ell">公告：{{ commodity.notice }}</p>
          </div>
          <p class="shop_activity ell">
            <i class="new_user">减</i><span>{{ commodity.discount }}</span>
          </p>
        </div>
      </div>
    </div>
    <div class="change_show_type">
      <div>
        <span :class="{ activity_show: changeShowType == 'food' }" @click="changeShowType = 'food'">商品</span>
      </div>
      <div>
        <span :class="{ activity_show: changeShowType == 'rating' }" @click="changeShowType = 'rating'">评价</span>
      </div>
    </div>
    <BusinessContent :height="computedContentHeight" v-show="changeShowType == 'food'" :commodity="commodity" :contentShow="changeShowType"></BusinessContent>
    <BusinessRating :height="computedContentHeight" :commodity="commodity" v-show="changeShowType == 'rating'"></BusinessRating>
  </div>
</template>

<script lang='ts'>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import { Component, Vue, Watch, Prop, Emit } from "vue-property-decorator";
import { Action, Mutation, State, Getter } from "vuex-class";
import BusinessContent from "../components/BusinessContent.vue";
import BusinessRating from "../components/BusinessRating.vue";
// import ShoppingCar from "../components/ShoppingCar.vue";
// import ShoppingCarList from "../components/ShoppingCarList.vue";
@Component({
  components: {
    BusinessContent,
    BusinessRating
    // ShoppingCar,
    // ShoppingCarList
  }
})
export default class Business extends Vue {
  private computedContentHeight: number =
    window.innerHeight - (window.innerWidth / 10) * 4.2;
  private changeShowType: string = "food";
  @Getter getFalseBussinessInfo: any;
  private mounted() {
    console.log(this.commodity);
  }
  get commodity(): any {
    let _this: any = this;
    return this.getFalseBussinessInfo[_this.$route.params.id];
  }
}
</script>
<style lang='scss' scoped>
//@import url(); 引入公共css类
.business_box {
  width: 100%;
  height: 100%;
  /* 头部 */
  .business_top {
    height: 3rem;
    position: relative;
    .blur_bg {
      width: 100%;
      height: 100%;
      position: absolute;
      background: url(../assets/images/shop-logo.png) no-repeat center;
      background-size: cover;
      -webkit-filter: blur(0.08rem);
      filter: blur(0.08rem);
      z-index: 1;
    }
    .font_words {
      width: 100%;
      height: 100%;
      position: absolute;
      padding: 0.3rem;
      box-sizing: border-box;
      z-index: 2;
      .fw_top {
        .fw_top_img {
          img {
            width: 1.8rem;
            height: 1.8rem;
            border-radius: 0.1rem;
            float: left;
          }
        }
        .fw_top_word {
          margin-left: 2rem;
          color: #fff;
          h3 {
            font-size: 0.7rem;
          }
          p {
            font-size: 0.37rem;
          }
        }
        .shop_activity {
          font-size: 0.3rem;
          color: #fff;
          line-height: 0.8rem;
          .new_user {
            display: inline-block;
            width: 0.35rem;
            height: 0.35rem;
            background: rgb(240, 115, 115);
            line-height: 0.35rem;
            text-align: center;
            vertical-align: middle;
            font-style: normal;
            font-size: 0.25rem;
            margin-right: 0.1rem;
          }
          span {
            vertical-align: middle;
          }
        }
      }
    }
  }
  /* 切换按钮 */
  .change_show_type {
    height: 1.2rem;
    div {
      width: 50%;
      height: 1.2rem;
      float: left;
      text-align: center;
      line-height: 1.2rem;
      font-size: 0.45rem;
      background: #fff;
      span {
        &.activity_show {
          color: #3190e8;
          border-bottom: 0.05rem solid #3190e8;
          padding: 0.1rem 0.05rem;
        }
      }
    }
  }
}

@-webkit-keyframes mymove {
  0% {
    -webkit-transform: scale(1);
  }
  25% {
    -webkit-transform: scale(0.8);
  }
  50% {
    -webkit-transform: scale(1.1);
  }
  75% {
    -webkit-transform: scale(0.9);
  }
  100% {
    -webkit-transform: scale(1);
  }
}
@keyframes mymove {
  0% {
    transform: scale(1);
  }
  25% {
    transform: scale(0.8);
  }
  50% {
    transform: scale(1.1);
  }
  75% {
    transform: scale(0.9);
  }
  100% {
    transform: scale(1);
  }
}
/* 购物车弹弹弹 */
.tantantan {
  -webkit-animation: mymove 1s;
  animation: mymove 1s;
}

/* 购物车 */
</style>