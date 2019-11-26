/**
* @module ShoppingCarList
* @author: ArMChAn
* @description: 什么都不用说,我其实是一个假前端!
* @since: 创建时间  2019-11-18 18:20:18
*/

<template>
  <div class="sp_lists" v-if="shoppingCarShow">
    <header>
      <span class="sp_words">购物车</span>
      <div class="clear">
        <svg>
          <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#cart-remove" />
        </svg>
        <span @click.stop="clearShop">清空</span>
      </div>
    </header>
    <ul class="sp_content">
      <li v-for="(item,index) in shoppingCarList" :key="index">
        <div class="food_name ell">{{item.name}}</div>
        <div class="food_unit_price">￥{{(item.count * item.unit_price).toFixed(2)}}</div>
        <div class="food_nub">
          <svg @click.stop="reduceFood(item.one_food_id)">
            <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#cart-add" />
          </svg>
          <span class="commodity_count">{{ item.count }}</span>
          <svg @click.stop="addFood(item.type_accumulation, item.type_name, item.name, item.one_food_id, item.unit_price)">
            <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#cart-minus" />
          </svg>
        </div>
      </li>
    </ul>
  </div>
</template>

<script lang='ts'>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import { Component, Vue, Watch, Prop, Emit } from "vue-property-decorator";
import { Action, Mutation, State, Getter } from "vuex-class";

@Component({ components: {} })
export default class ShoppingCarList extends Vue {
  @Prop()
  shoppingCarShow!: boolean;
  @Prop()
  shoppingCarList!: () => object;
  @Emit("clearShopping") private clearShopping(): any {}
  @Emit("reduceCarFood") private reduceCarFood(foodid: number): any {}
  @Emit("addCarFood") private addCarFood(
    type_accumulation: string,
    type_name: string,
    name: string,
    one_food_id: number,
    unit_price: number
  ): any {}
  private clearShop(): void {
    this.clearShopping();
  }
  private reduceFood(foodid: number): void {
    this.reduceCarFood(foodid);
  }
  private addFood(
    type_accumulation: string,
    type_name: string,
    name: string,
    one_food_id: number,
    unit_price: number
  ): void {
    this.addCarFood(
      type_accumulation,
      type_name,
      name,
      one_food_id,
      unit_price
    );
  }
}
</script>
<style lang='scss' scoped>
//@import url(); 引入公共css类
.sp_lists {
  position: absolute;
  bottom: 1.2rem;
  width: 100%;
  left: 0;
  background: #fff;
  z-index: 9;
  font-size: 0.5rem;
  header {
    border-bottom: 1px solid #eee;
    padding: 0.25rem;
    height: 0.8rem;
    line-height: 0.8rem;
    color: #666;
    .sp_words {
      padding: 0 0.15rem;
      border-left: 0.09rem solid #3190e8;
      font-size: 0.45rem;
    }
    .clear {
      float: right;
      font-size: 0.4rem;
      svg {
        width: 0.5rem;
        height: 0.5rem;
        vertical-align: text-top;
      }
    }
  }
  ul.sp_content {
    max-height: 6.5rem;
    overflow-y: auto;
    -webkit-overflow-scrolling: touch;

    li {
      height: 1.3rem;
      border-bottom: 1px solid #eee;
      padding: 0 0.3rem;
      line-height: 1.3rem;
      > div {
        float: left;
      }
      .food_name {
        width: 50%;
        font-size: 0.4rem;
      }
      .food_unit_price {
        width: 20%;
        text-align: right;
        color: #f60;
      }
      .food_nub {
        width: 30%;
        text-align: right;
        svg {
          fill: #3190e8;
          width: 0.5rem;
          height: 0.5rem;
          vertical-align: middle;
        }
        span {
          vertical-align: middle;
        }
      }
    }
  }
}
.commodity_count {
  color: #666;
  margin: 0 0.15rem;
}
</style>