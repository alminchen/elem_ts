/**
* @module Home
* @author: ArMChAn
* @description: 什么都不用说,我其实是一个假前端!
* @since: 创建时间  2019-11-20 17:29:48
*/

<template>
  <div class='index_main'>
    <div class="index_header">
      <div class="index_location">
        <div class="location_left ell">
          <svg class="v-md">
            <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#location"></use>
          </svg>
          <span class="v-md">深圳市福田区这里是个假定位村淡定啦~这不重要</span>
        </div>
        <div class="index_login">
          <router-link to="" v-if="!getLogin">登录</router-link>
        </div>
      </div>
      <div class="search_box">
        <input type="text" v-model="search_word" placeholder="搜索商家、商品">
      </div>
      <div class="hot_word">
        <span v-for="(x ,index) in getFalseHotWord" :key="index">{{x.title}}</span>
      </div>
    </div>
    <div class="index_banner">
      <Swipe class="my-swipe" :auto="0">
        <!-- swipe 设置不自动滚动 -->
        <Swipe-item class="slide slide1">
          <router-link to="/search/美食">
            <div class="common_slider">
              <img src="../assets/images/slider-pic/slider-pic1.jpeg" alt="">
              <p>美食</p>
            </div>
          </router-link>
          <router-link to="/search/甜品饮品">
            <div class="common_slider">
              <img src="../assets/images/slider-pic/slider-pic2.jpeg" alt="">
              <p>甜品饮品</p>
            </div>
          </router-link>
          <router-link to="/search/商店超市">
            <div class="common_slider">
              <img src="../assets/images/slider-pic/slider-pic3.jpeg" alt="">
              <p>商店超市</p>
            </div>
          </router-link>
          <router-link to="/search/预定早餐">
            <div class="common_slider">
              <img src="../assets/images/slider-pic/slider-pic4.jpeg" alt="">
              <p>预定早餐</p>
            </div>
          </router-link>
          <router-link to="/search/果蔬生鲜">
            <div class="common_slider">
              <img src="../assets/images/slider-pic/slider-pic5.jpeg" alt="">
              <p>果蔬生鲜</p>
            </div>
          </router-link>
          <router-link to="/search/新店特惠">
            <div class="common_slider">
              <img src="../assets/images/slider-pic/slider-pic6.jpeg" alt="">
              <p>新店特惠</p>
            </div>
          </router-link>
          <router-link to="/search/准时达">
            <div class="common_slider">
              <img src="../assets/images/slider-pic/slider-pic7.jpeg" alt="">
              <p>准时达</p>
            </div>
          </router-link>
          <router-link to="/search/夜宵">
            <div class="common_slider">
              <img src="../assets/images/slider-pic/slider-pic8.jpeg" alt="">
              <p>夜宵</p>
            </div>
          </router-link>
        </Swipe-item>

        <Swipe-item class="slide slide2">
          <router-link to="/search/土豪推荐">
            <div class="common_slider">
              <img src="../assets/images/slider-pic/slider-pic9.jpeg" alt="">
              <p>土豪推荐</p>
            </div>
          </router-link>
          <router-link to="/search/鲜花蛋糕">
            <div class="common_slider">
              <img src="../assets/images/slider-pic/slider-pic10.jpeg" alt="">
              <p>鲜花蛋糕</p>
            </div>
          </router-link>
          <router-link to="/search/汉堡">
            <div class="common_slider">
              <img src="../assets/images/slider-pic/slider-pic11.jpeg" alt="">
              <p>汉堡</p>
            </div>
          </router-link>
          <router-link to="/search/日韩料理">
            <div class="common_slider">
              <img src="../assets/images/slider-pic/slider-pic12.jpeg" alt="">
              <p>日韩料理</p>
            </div>
          </router-link>
          <router-link to="/search/麻辣烫">
            <div class="common_slider">
              <img src="../assets/images/slider-pic/slider-pic13.jpeg" alt="">
              <p>麻辣烫</p>
            </div>
          </router-link>
          <router-link to="/search/披萨意面">
            <div class="common_slider">
              <img src="../assets/images/slider-pic/slider-pic14.jpeg" alt="">
              <p>披萨意面</p>
            </div>
          </router-link>
          <router-link to="/search/川湘菜">
            <div class="common_slider">
              <img src="../assets/images/slider-pic/slider-pic15.jpeg" alt="">
              <p>川湘菜</p>
            </div>
          </router-link>
          <router-link to="/search/包子粥店">
            <div class="common_slider">
              <img src="../assets/images/slider-pic/slider-pic16.jpeg" alt="">
              <p>包子粥店</p>
            </div>
          </router-link>
        </Swipe-item>
      </Swipe>
    </div>
    <h3 class="index_title">推荐商家</h3>
    <one-business v-for="(i ,index) in getFalseBussinessbrief" :key="index" :item="i" ref="father"></one-business>
    <div class="space"></div>
    <fix-nav></fix-nav>
  </div>
</template>

<script lang='ts'>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import { Component, Vue } from "vue-property-decorator";
import { Action, Getter } from "vuex-class";
import { Swipe, SwipeItem } from "vue-swipe";
import OneBusiness from "../components/OneBusiness.vue";
import FixNav from "../components/FixNav.vue";
@Component({
  components: {
    Swipe,
    SwipeItem,
    OneBusiness,
    FixNav
  }
})
export default class Home extends Vue {
  private showMe: boolean = false;
  private ss: string = "";
  private search_word: string = "";
  private hot_words: string = "";
  private sexteen_slider: string = "";
  private isLoadingMore: boolean = false;
  @Getter private getLogin!: boolean;
  @Getter private getFalseHotWord: any;
  @Getter private getFalseBussinessbrief: any;
  @Action private setLoading!: (plateform: boolean) => boolean;
  @Action private setHomepageMore!: (plateform: any) => any;
  @Action private setWhichpage!: (plate: string) => string;
  @Action private setLogin!: (plate: boolean) => boolean;
  private get colo() {
    return "1111";
  }
  private mounted(): any {
    this.setLogin(true);
    // console.log(this.colo);
    this.setWhichpage("homepage");
    setTimeout(() => {
      window.addEventListener("scroll", this.dispatchLoad, false);
    }, 0);
  }
  private beforeDestroy() {
    window.removeEventListener("scroll", this.dispatchLoad, false);
  }
  private loadMore(): any {
    if (this.getFalseBussinessbrief.length > 15) return;
    this.setLoading(true);
    if (this.isLoadingMore) return;
    this.isLoadingMore = true;
    setTimeout(() => {
      this.setLoading(false);
      if (this.getFalseBussinessbrief.length <= 15)
        this.setHomepageMore([
          ...this.getFalseBussinessbrief,
          ...this.getFalseBussinessbrief.splice(0, 5)
        ]);
      this.isLoadingMore = false;
    }, 1000);
  }
  private dispatchLoad(): void {
    let dscrollTop =
      document.body.scrollTop || document.documentElement.scrollTop;
    let offsetHei = document.documentElement.offsetHeight;
    let winHei = window.innerHeight;
    if (offsetHei <= dscrollTop + winHei + 1) this.loadMore();
  }
}
</script>
<style lang='scss' scoped>
//@import url(); 引入公共css类

.com_gray1 {
  color: #666;
}
.com_gray2 {
  color: #999;
}
.com_blue {
  color: #0096ff;
}

.index_main {
  width: 100%;
  overflow: hidden;
  .index_header {
    background: #0096ff;
    // height: 3rem;
    padding: 0.26rem;
    box-sizing: border-box;
    overflow: hidden;
    .index_location {
      height: 0.9rem;
      color: #fff;
      width: 100%;
      font-size: 0.4rem;
      .location_left {
        width: 8rem;
        svg {
          width: 0.5rem;
          height: 0.5rem;
        }
      }
      .index_login {
        position: absolute;
        height: 1rem;
        font-size: 0.35rem;
        right: 0;
        top: 0;
        line-height: 1rem;
        padding: 0 0.2rem;
        a {
          color: #fff;
        }
      }
    }
    /* 搜索 */
    .search_box {
      width: 9rem;
      margin: 0 auto;
      height: 0.9rem;
      input[type="text"] {
        width: 100%;
        height: 0.9rem;
        outline: none;
        font-size: 0.4rem;
        text-align: center;
        border: none;
        display: block;
        border-radius: 0.45rem;
      }
    }
    /* 热搜 */
    .hot_word {
      // height: 1.2rem;
      line-height: 0.9rem;
      font-size: 0.3rem;
      // width: 9.48rem;
      overflow-x: auto;
      white-space: nowrap;
      span {
        padding: 0 0.1rem;
        color: #fff;
      }
      a {
        color: #fff;
      }
    }
  }
  .index_banner {
    height: 4.6rem;
    background: #fff;
    margin-bottom: 0.2rem;
    .common_slider {
      width: 2.5rem;
      height: 2rem;
      float: left;
      img {
        margin: 0 auto;
        display: block;
        width: 1.2rem;
        height: 1.2rem;
        margin-top: 0.2rem;
      }
      p {
        text-align: center;
        font-size: 0.3rem;
      }
    }
  }
  .index_title {
    line-height: 0.8rem;
    font-weight: 600;
    background: #fff;
    border-top: 1px solid #eee;
    font-size: 0.4rem;
    padding-left: 0.4rem;
  }
  .space {
    width: 10rem;
    height: 1.2rem;
  }
}
/* slider插件css + 改写*/
.mint-swipe,
.mint-swipe-items-wrap {
  overflow: hidden;
  position: relative;
  height: 100%;
}
.mint-swipe-items-wrap > div {
  position: absolute;
  -webkit-transform: translateX(-100%);
  transform: translateX(-100%);
  width: 100%;
  height: 100%;
  display: none;
}
.mint-swipe-items-wrap > div.is-active {
  display: block;
  -webkit-transform: none;
  transform: none;
}
.mint-swipe-indicators {
  position: absolute;
  bottom: 10px;
  left: 50%;
  -webkit-transform: translateX(-50%);
  transform: translateX(-50%);
}
.mint-swipe-indicator {
  width: 0.1rem;
  height: 0.1rem;
  display: inline-block;
  border-radius: 50%;
  background: #ccc;
  margin: 0 3px;
}
.mint-swipe-indicator.is-active {
  background: #0096ff;
}
</style>