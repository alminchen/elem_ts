/**
* @module BusinessContent
* @author: ArMChAn
* @description: 什么都不用说,我其实是一个假前端!
* @since: 创建时间  2019-11-11 10:49:06
*/

<template>
  <section>
    <div class="business_content" :style="{ height: height + 'px' }">
      <ul class="business_left" ref="businessLeft">
        <li v-for="(item, index) in commodity.commodity" :key="index" :class="{ active_ia: index == 0 }" ref="leftLi" @click="leftControlRightScroll(index)">
          {{ item.name }}
          <span class="left_red" v-if="reNub[item.type_accumulation]">{{
            reNub[item.type_accumulation]
          }}</span>
        </li>
      </ul>
      <ul class="business_right" ref="ullist">
        <li v-for="(n, index) in commodity.commodity" :key="index" ref="rightLi">
          <header class="type_title ell" ref="typeTitle">
            <strong class="ell">{{ n.name }}</strong>
            <span>{{ n.description }}</span>
          </header>
          <div class="single_commodity" v-for="(x, idx) in n.foods" :key="idx">
            <div class="single_l">
              <img src="../assets/images/slider-pic/slider-pic1.jpeg" alt />
            </div>
            <div class="single_r">
              <h4>{{ x.name }}</h4>
              <p>{{ x.tips }}</p>
              <p class="xiaolq">
                月售{{ x.month_sales }}份，好评率{{ x.satisfy_rate }}%
              </p>
              <div class="add_remove">
                <span>￥{{ x.unit_price }}</span>
                <div class="add_remove_btn">
                  <svg @click="reduce_food(x.one_food_id)" v-if="shoppingCarList[x.one_food_id]">
                    <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#cart-add" />
                  </svg>
                  <span class="commodity_count" v-if="shoppingCarList[x.one_food_id]">{{ shoppingCarList[x.one_food_id].count }}</span>
                  <svg @click="add_food(n, x, $event)">
                    <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#cart-minus" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
    <shopping-car :change-show-type="contentShow" :send-const="sendConst" ref="ball" @showList="shoppingCarShowIn" @goPay="goPayStatus"></shopping-car>
    <shopping-car-list-tpl :shopping-car-show="shoppingCarShow" @clearShopping="cleanShopCar" :shopping-car-list="shoppingCarList" @reduceCarFood="reduce_food" @addCarFood="add_shopping_car"></shopping-car-list-tpl>
    <business-pay :all-total-price="allTotalPrice" :alert-mask-show="alertMaskShow" @cancel="cancelInPay" @payInBuy="payToSuccess"></business-pay>
    <div class="mask" v-if="shoppingCarShow || alertMaskShow" @click="shoppingCarShow = false;alertMaskShow = false"></div>
  </section>
</template>

<script lang='ts'>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import { Component, Vue, Watch, Prop, Ref } from "vue-property-decorator";
import { Action } from "vuex-class";

import ShoppingCar from "../components/ShoppingCar.vue";
import ShoppingCarListTpl from "../components/ShoppingCarList.vue";
import BusinessPay from "../components/BusinessPay.vue";
@Component({
  components: {
    ShoppingCar,
    ShoppingCarListTpl,
    BusinessPay
  }
})
export default class BusinessContent extends Vue {
  private shoppingCarList: any = {};
  private reNub: any = {};
  private allNub: number = 0;
  private totalPrice: number = 0;
  private allTotalPrice: number = 0;
  private shoppingCarShow: boolean = false;
  private sendConst: number = 0;
  private leftScrollTimer: any = null;
  private alertMaskShow: boolean = false;
  @Ref("leftLi") leftLi!: HTMLFormElement;
  @Ref("ullist") ullist!: HTMLFormElement;
  @Ref("typeTitle") typeTitle!: HTMLFormElement;
  @Ref("ball") ball!: HTMLFormElement;
  @Action private setAllNums!: (num: number) => number;
  @Action private setAllTotalPrice!: (nums: number) => number;
  @Action private setOrder!: (plate: any) => any;
  @Prop()
  height!: number;
  @Prop()
  commodity!: any;
  @Prop()
  contentShow!: boolean;
  @Watch("commodity")
  onValueChange (val: any) {
    this.sendConst = val.send_cost;
    this.$nextTick(() => {
      this.init();
    });
  }
  private beforeDestroy () {
    clearInterval(this.leftScrollTimer);
    this.leftScrollTimer = null;
    this.ullist.removeEventListener(
      "scroll",
      () => {
        console.log("remove");
      },
      false
    );
  }
  private mounted () {
    console.log(this.commodity);
    this.$nextTick(() => {
      this.sendConst = this.commodity.send_cost;
      this.init();
    });
  }
  private goPayStatus (): void {
    if (this.allNub > 0) {
      this.alertMaskShow = !this.alertMaskShow;
    }
  }
  private cancelInPay (): void {
    this.alertMaskShow = false;
  }
  private shoppingCarShowIn (): void {
    if (this.allNub > 0) {
      this.shoppingCarShow = !this.shoppingCarShow;
    }
  }
  private cleanShopCar (): void {
    this.shoppingCarList = {};
    this.spChangeComputeAll();
    this.shoppingCarShow = false;
  }
  private payToSuccess (): void {
    let d: any = new Date();
    let Y: number = d.getFullYear();
    let M: number =
      d.getMonth() + 1 < 10 ? `0${d.getMonth() + 1}` : d.getMonth() + 1;
    let D: number = d.getDate() < 10 ? `0${d.getDate()}` : d.getDate();
    let h: number = d.getHours() < 10 ? `0${d.getHours()}` : d.getHours();
    let m: number = d.getMinutes() < 10 ? `0${d.getMinutes()}` : d.getMinutes();
    let s: number = d.getSeconds() < 10 ? `0${d.getSeconds()}` : d.getSeconds();
    let orderTime: string = `${Y}-${M}-${D} ${h}:${m}:${s}`;
    let headeerWord = (): any => {
      for (let i in this.shoppingCarList) {
        return this.shoppingCarList[i].name;
      }
    };
    let footerWord: string = this.allNub > 1 ? `等${this.allNub}件商品` : "";
    let orderBriefInfo: string = headeerWord() + footerWord;
    let order: object = {
      restaurant_id: this.commodity.id,
      img_src: "",
      store_name: this.commodity.shop_name,
      order_birth_time: orderTime,
      order_state: "订单已完成",
      order_content: this.shoppingCarList,
      order_brief_info: orderBriefInfo,
      order_price: this.allTotalPrice
    };
    this.setOrder(order);
    this.setAllNums(0);
    this.setAllTotalPrice(0);
    let router: any = this;
    router.$router.push("/order");
  }
  private init (): any {
    this.rightControlLeftClass();
  }
  private rightControlLeftClass (): any {
    // let leftLi: any = this.leftLi;
    // let rightUl: any = this.ullist;
    // let ti: any = this.typeTitle;
    // let asIndex: any = 0;
  }
  private leftControlRightScroll (index: number): any {
    let rightUl_: any = this.ullist;
    let rightTo_: any = this.typeTitle;
    let top_: number = rightTo_[index].offsetTop;
    this.scrollMove(rightUl_, top_);
  }
  private scrollMove (ele: any, target: any): any {
    let vector = Math.round(target - ele.scrollTop) / 10;
    this.leftScrollTimer = setInterval(() => {
      ele.scrollTop += vector;
      if (
        (ele.scrollTop >= target && vector > 0) ||
        (ele.scrollTop <= target && vector < 0) ||
        ele.scrollTop + ele.clientHeight + 1 >= ele.scrollHeight
      ) {
        ele.scrollTop = target + 1;
        clearInterval(this.leftScrollTimer);
        this.leftScrollTimer = null;
      }
    }, 1000 / 10);
  }
  private add_food (n: any, x: any, e: any) {
    this.add_shopping_car(
      n.type_accumulation,
      n.name,
      x.name,
      x.one_food_id,
      x.unit_price
    );
    let ball: any = this.ball;
    ball.ball_fly(e);
  }
  private add_shopping_car (
    type: string,
    typename: string,
    foodname: string,
    foodid: number,
    foodprice: number
  ): any {
    if (!this.shoppingCarList[foodid]) {
      this.$set(this.shoppingCarList, foodid, {
        type_accumulation: type,
        type_name: typename,
        name: foodname,
        one_food_id: foodid,
        unit_price: foodprice,
        count: 1
      });
    } else {
      this.shoppingCarList[foodid].count++;
    }
    this.spChangeComputeAll();
  }
  private reduce_food (fooid: number): any {
    if (this.shoppingCarList && this.shoppingCarList[fooid].count > 0) {
      this.shoppingCarList[fooid].count--;
      this.shoppingCarList[fooid].count <= 0 &&
        delete this.shoppingCarList[fooid];
    }
    this.spChangeComputeAll();
    if (Object.keys(this.shoppingCarList).length == 0)
      this.shoppingCarShow = false;
  }
  private spChangeComputeAll (): any {
    this.reNub = {};
    for (let u in this.shoppingCarList) {
      if (!this.reNub[this.shoppingCarList[u].type_accumulation]) {
        this.reNub[
          this.shoppingCarList[u].type_accumulation
        ] = this.shoppingCarList[u].count;
      } else {
        this.reNub[
          this.shoppingCarList[u].type_accumulation
        ] += this.shoppingCarList[u].count;
      }
    }
    let key: number = 0;
    for (let i in this.reNub) {
      key += this.reNub[i];
    }
    this.allNub = key;
    this.setAllNums(key);
    let allPrice: number = 0;
    for (let x in this.shoppingCarList) {
      allPrice +=
        this.shoppingCarList[x].count * this.shoppingCarList[x].unit_price;
    }
    this.totalPrice = allPrice;
    this.allTotalPrice = this.totalPrice + this.sendConst;
    this.setAllTotalPrice(allPrice);
  }
  private ball_fly (e: any) {
    e.target.getBoundingClientRect();
    // let bound: any = ;
    // let boundTop: number = bound.top;
    // let boundLeft: number = bound.left;
  }
}
</script>
<style lang='scss' scoped>
//@import url(); 引入公共css类
.business_content {
  padding-bottom: 1.2rem;
  box-sizing: border-box;
  position: relative;
  ul {
    -webkit-overflow-scrolling: touch;
    overflow-y: auto;
    height: 100%;
    &.business_left {
      width: 2.5rem;
      float: left;
      li {
        padding: 0.45rem 0.3rem;
        font-size: 0.4rem;
        position: relative;
        border-bottom: 1px solid #ccc;
        position: relative;
        .left_red {
          background: #ff461d;
          color: #fff;
          position: absolute;
          right: 0.08rem;
          top: 0.08rem;
          font-size: 0.3rem;
          min-width: 0.4rem;
          text-align: center;
          border-radius: 0.2rem;
          padding: 0.02rem 0.05rem;
        }
      }
      li.active_ia {
        background: #fff;
        &:after {
          content: '';
          position: absolute;
          left: 0;
          top: 0;
          width: 0.1rem;
          height: 100%;
          background: #3190e8;
        }
      }
    }
    &.business_right {
      margin-left: 2.5rem;
      background: #fff;
      li {
        .type_title {
          padding: 0.2rem;
          box-sizing: border-box;
          width: 100%;
          background: #f1f1f1;
          line-height: 0.6rem;
          strong {
            font-size: 0.45rem;
            color: #666;
          }
          span {
            font-size: 0.3rem;
            color: #999;
          }
        }
        .single_commodity {
          background: #fff;
          padding: 0.3rem;
          border-bottom: 1px solid #ccc;
          .single_l {
            width: 1.5rem;
            height: 1.5rem;
            img {
              width: 100%;
            }
            float: left;
          }
          .single_r {
            margin-left: 1.7rem;
            h4 {
              font-size: 0.5rem;
            }
            p {
              font-size: 0.3rem;
              color: #999;
              text-align: justify;
            }
            .xiaolq {
              font-size: 0.4rem;
              color: #666;
            }
            .add_remove {
              margin-top: 0.2rem;
              height: 0.5rem;
              line-height: 0.5rem;
              font-size: 0.4rem;
              span {
                font-size: 0.45rem;
                font-weight: 600;
                color: #f60;
                vertical-align: middle;
              }
              .add_remove_btn {
                float: right;
                .commodity_count {
                  color: #666;
                  margin: 0 0.15rem;
                }
                svg {
                  fill: #3190e8;
                  width: 0.5rem;
                  height: 0.5rem;
                  vertical-align: middle;
                }
              }
            }
          }
        }
      }
    }
  }
}
.mask {
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  position: absolute;
  top: 0;
  left: 0;
  z-index: 3;
}
</style>