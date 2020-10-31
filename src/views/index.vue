<template>
  <div class="heightClass">
    <div class="container">
      <div class="head-tu">
        <img src="../image/zhongke2x.png" alt="" />
        <div class="headTu-gui" @click="guiZeClick">规则</div>
      </div>

      <!--梦想模块-->
      <div class="dream-banck">
        <div class="dreamTitle">
          <div class="dream-num">
            我的梦想值: <span>{{ userInfo.integral }}</span>
          </div>
        </div>

        <div class="dreamConsume">
          <div class="dreamConsume-frame">
            <!--消耗框图片-->
            <div class="dreamConsume-bg">
              <img src="../image/xiaohao.png" alt="" />
            </div>

            <div class="dreamConsume-bg-text">
              <div class="bgText-flex">
                消耗<span style="color: #ff2a86">{{
                  newSwiperValue.score
                }}</span
                >梦想值
              </div>
            </div>

            <!--轮播图-->
            <div class="dreamConsume-more">
              <div class="dreamConsume-swiper">
                <!-- <img src="../image/paizhao_two.png" alt="" /> -->
                <van-swipe
                  class="my-swipe"
                  :autoplay="3000"
                  indicator-color="white"
                  :touchable="true"
                  @change="onChange"
                >
                  <van-swipe-item
                    v-for="(item, index) in swiperImgs"
                    :key="index"
                    ><img :src="item.url" alt=""
                  /></van-swipe-item>
                </van-swipe>
              </div>
            </div>

            <!--点击按钮图片-->
            <div class="dreamConsume-btn">
              <div class="clickBtn" @click="duiHuan">
                <img src="../image/duihuan2.png" alt="" />
                <div class="clickBtn-text">
                  <div class="clickBtnText-tu">
                    <img src="../image/duiText.png" alt="" />
                  </div>
                  <div class="clickBtnText-packet">
                    可兑换<span style="color: #ff2a86">{{
                      newSwiperValue.qujian
                    }}</span
                    >元红包
                  </div>
                </div>
              </div>
              <div class="bottomTwoBtn">
                <div class="bottomTwoBtn-tu" @click="isShowSign">
                  <img src="../image/lingQu2.png" alt="" />
                </div>
                <div class="bottomTwoBtn-tu" @click="isShowDiscounts">
                  <img src="../image/yiDui2.png" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!--宇航员背图和箭头-->
      <div class="twoTuClass">
        <div class="twoTuClass-one">
          <img src="../image/yuHangYuan2.png" alt="" />
        </div>
        <div class="twoTuClass-two">
          <img src="../image/xiaJiantou2.png" alt="" />
        </div>
      </div>

      <!--时间进度-->
      <div class="time-schedule">
        <div class="noneJin"><img src="../image/kongJin.png" alt="" /></div>
        <div class="youJin-content">
          <div class="youJin-left" :style="{ width: dongWidth + '%' }">
            <div class="youJin">
              <img src="../image/youjian.png" alt="" />
            </div>
            <!-- <div class="youJintou">
              <img src="../image/jinShanGuang.png" alt="" />
            </div> -->
          </div>
        </div>
        <div class="noneJin-dian">
          <div class="timeItem-img">
            <img class="yuanDian" src="../image/timeYuan2.png" alt="" />
          </div>
          <div class="timeItem-img noneJin-two">
            <img class="yuanDian" src="../image/timeYuan2.png" alt="" />
          </div>
          <div class="timeItem-img noneJin-three">
            <img class="yuanDian" src="../image/timeYuan2.png" alt="" />
          </div>
        </div>
        <div class="timeSchedule-zong">
          <div class="timeSchedule-item">
            <div class="timeItem-title">积攒梦想值</div>
            <div class="timeItem-date">11.1</div>
          </div>
          <div class="timeSchedule-item">
            <div class="timeItem-title">兑换红包</div>
            <div class="timeItem-date">11.2 -11.10</div>
          </div>
          <div class="timeSchedule-item">
            <div class="timeItem-title">抢购开始</div>
            <div class="timeItem-date">11.11</div>
          </div>
        </div>
      </div>

      <!--四个优惠切换模块-->
      <div class="four-discounts">
        <!--四个tab切换-->
        <div class="tabsScroll">
          <div class="switch-tabs">
            <div
              @click="tabsSwitch(1)"
              class="switchTabs-items"
              :class="switchDetailsShow == 1 ? 'pitchOnImg' : ''"
            >
              单科项目
            </div>
            <div
              @click="tabsSwitch(2)"
              class="switchTabs-items"
              :class="switchDetailsShow == 2 ? 'pitchOnImg' : ''"
            >
              单一项目
            </div>
            <div
              @click="tabsSwitch(3)"
              class="switchTabs-items"
              :class="switchDetailsShow == 3 ? 'pitchOnImg' : ''"
            >
              组合项目
            </div>
          </div>
        </div>

        <!--切换内容-->
        <div class="switch-details">
          <div v-if="swithList != ''">
            <div v-for="(item, index) in swithList" :key="index">
              <div class="swDetails-items" v-if="item.zhekou == 0">
                <div class="swDetailsItems-left">
                  <span class="itemsLeft-sprice">{{ item.discounts }}</span>
                </div>
                <div class="swDetailsItems-right">
                  <div>{{ item.cp_name }}</div>
                  <div @click="promptlyGet(item)" class="itemsRight-btn">
                    立即领取 >
                  </div>
                </div>
              </div>

              <div class="swDetails-items" v-else-if="item.zhekou == 1">
                <div class="swDetailsItems-left twoDetail">
                  <div class="itemsLeft-num">
                    {{ item.discounts | extractNumber }}
                  </div>
                  <div class="itemsLeft-break">折</div>
                </div>
                <div class="swDetailsItems-right">
                  <div>{{ item.cp_name }}</div>
                  <div @click="promptlyGet(item)" class="itemsRight-btn">
                    立即领取 >
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- <div v-else class="noneDiscounts">暂无优惠</div> -->
        </div>
      </div>

      <!---->
    </div>

    <!--签到弹窗-->
    <van-popup v-model="show" position="bottom" :style="{ height: '31.25rem' }">
      <div class="signIn">
        <!--日期-->
        <div class="signIn-data">
          <div class="signIn-bgstrip"></div>
          <div class="signIn-all">
            <div class="signInAll-position">
              <div v-for="(item, index) in qianDaoDate" :key="index">
                <div class="signIn-items signIn-xiao" v-if="item.type == 1">
                  <div class="signInItems-img">
                    <img src="../image/yiqian.png" alt="" />
                  </div>
                  <div class="signInItems-text">{{ item.zhanValue }}</div>
                </div>

                <div
                  class="signIn-items signIn-xiao"
                  v-else-if="item.type == 0"
                >
                  <div class="signInItems-img">
                    <img src="../image/louqian.png" alt="" />
                  </div>
                  <div class="signInItems-text">{{ item.zhanValue }}</div>
                </div>

                <div
                  class="signIn-items"
                  @click="signinClick"
                  v-else-if="item.type == 2 && userInfo.signState == 0"
                >
                  <div class="signInItems-now">
                    <img src="../image/qianFen.png" alt="" />
                  </div>
                  <div class="itemsNow-text">签到</div>
                </div>

                <div
                  class="signIn-items"
                  v-else-if="item.type == 2 && userInfo.signState == 1"
                >
                  <div class="signInItems-now">
                    <img src="../image/qianFen.png" alt="" />
                  </div>
                  <div class="itemsNow-img">
                    <img src="../image/duihao.png" alt="" />
                  </div>
                </div>

                <div
                  class="signIn-items signIn-xiao"
                  v-else-if="item.type == 3"
                >
                  <div class="signInItems-img">
                    <div class="signInItems-later">
                      <img src="../image/qianFen.png" alt="" />
                      <div class="itemsNow-later">
                        <div class="itemsNow-later-num">?</div>
                      </div>
                    </div>
                  </div>
                  <div class="signInItems-text">{{ item.zhanValue }}</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!---->
        <div class="signIn-value">我的梦想值：{{ userInfo.integral }}</div>

        <!--四个跳转小程序-->
        <div class="four-skip">
          <!-- <div class="fouRskip-scroll"> -->
          <div class="skipProgram" v-if="title != 1">
            <div class="skipProgram-left">
              <div class="skipProgram-img">
                <img src="../image/zhongtiku.jpg" alt="" />
              </div>
              <div class="programLeft-text">
                <div class="programLeft-title">中题库做题</div>
                <div>每日最高可拿500梦想值</div>
              </div>
            </div>
            <div class="skipProgram-right">
              <van-button color="#f499be" @click="goZuoti">去做题</van-button>
            </div>
          </div>
          <div class="skipProgram" v-if="title != 2">
            <div class="skipProgram-left">
              <div class="skipProgram-img">
                <img src="../image/zhongkexiang.jpg" alt="" />
              </div>
              <div class="programLeft-text">
                <div class="programLeft-title">中课享分享</div>
                <div>最高可拿1000梦想值</div>
              </div>
            </div>
            <div class="skipProgram-right">
              <van-button color="#f499be" @click="goFenxaing"
                >去分享</van-button
              >
            </div>
          </div>

          <div class="skipProgram" v-if="title != 3">
            <div class="skipProgram-left">
              <div class="skipProgram-img">
                <img src="../image/zhongkebang.jpg" alt="" />
              </div>
              <div class="programLeft-text">
                <div class="programLeft-title">中课帮提问</div>
                <div>每日最高可拿500梦想值</div>
              </div>
            </div>
            <div class="skipProgram-right">
              <van-button @click="goTiwen" color="#f499be">去提问</van-button>
            </div>
          </div>

          <div class="skipProgram" v-if="title != 4">
            <div class="skipProgram-left">
              <div class="skipProgram-img">
                <img src="../image/zhongketang.jpg" alt="" />
              </div>
              <div class="programLeft-text">
                <div class="programLeft-title">中课堂听课</div>
                <div>每日最高可拿200梦想值</div>
              </div>
            </div>
            <div class="skipProgram-right">
              <van-button color="#f499be" @click="goTingke">去听课</van-button>
            </div>
          </div>
          <!-- </div> -->
        </div>
      </div>
    </van-popup>

    <!--兑换中奖弹窗-->
    <van-popup v-model="winnerShow" :close-on-click-overlay="false">
      <div class="winner-content">
        <div class="winner-top" @click="winnerClick">
          <div class="winnerImg">
            <img src="../image/zhongjiang.png" alt="" />
          </div>
          <div class="winner-text">
            <div class="winnerText-flex">
              <div>恭喜您</div>
              <div>
                抽中<span style="color: #fff312">{{ winnerList.money }}</span
                >元红包
              </div>
            </div>
          </div>
          <!-- <div class="winner-bottom">
            <img src="../image/winclose.png" alt="" />
          </div> -->
        </div>
      </div>
    </van-popup>

    <!--已兑换优惠卷弹窗-->
    <van-popup
      v-model="discountsShow"
      position="bottom"
      :safe-area-inset-bottom="true"
      :style="{ height: '80%' }"
    >
      <div class="discounts">
        <div class="discounts-content">
          <!--两个切换-->
          <div class="discounts-head">
            <div
              @click="twoKuaiClick(1)"
              class="discountsHead-kuai"
              :class="twoKuaiType == 1 ? 'kuaiOn' : ''"
            >
              已兑换红包
            </div>
            <div
              @click="twoKuaiClick(2)"
              class="discountsHead-kuai"
              :class="twoKuaiType == 2 ? 'kuaiOn' : ''"
            >
              已领取优惠券
            </div>
          </div>
          <!--切换内容-->
          <div class="redContent">
            <!--红包内容-->
            <div class="red-packet" v-if="twoKuaiType == 1">
              <div class="redPacket-all" v-if="jfdhList != ''">
                <div
                  class="redPacket-item"
                  v-for="(item, index) in jfdhList"
                  :key="index"
                >
                  <div class="redPacket-sprice">
                    ￥<span style="font-size: 1.56rem">{{ item.money }}</span>
                  </div>
                  <div class="redPacket-text">无门槛红包</div>
                  <div class="redPacket-time">11.11前使用</div>
                </div>
              </div>
              <!--暂无数据的时候-->
              <div class="noRed" v-else>
                <div
                  class="noRed-item"
                  v-for="(item, index) in noredList"
                  :key="index"
                >
                  <img :src="item.url" alt="" />
                </div>
              </div>
            </div>
            <!--优惠卷内容-->
            <div class="red-packet" v-else-if="twoKuaiType == 2">
              <div class="roll-all" v-if="lqyhqList != ''">
                <div v-for="(item, index) in lqyhqList" :key="index">
                  <div class="rollAll-item">
                    <div class="rollAll-left">
                      <span class="itemsLeft-sprice">{{ item.discounts }}</span>
                    </div>
                    <div class="rollAll-right">
                      <div>{{ item.cp_name }}</div>
                      <div style="font-size: 0.75rem">
                        {{ item.state | stateNumber }}
                      </div>
                    </div>
                  </div>

                  <!-- <div class="rollAll-item" v-else-if="item.zhekou == 1">
                    <div class="rollAll-left twoDetail">
                      <div class="itemsLeft-num">
                        {{ item.discounts | extractNumber }}
                      </div>
                      <div class="itemsLeft-break">折</div>
                    </div>
                    <div class="rollAll-right">
                      <div>{{ item.cp_name }}</div>
                      <div></div>
                    </div>
                  </div> -->
                </div>
              </div>
              <!---->
              <div class="noRoll" v-else>
                <img src="../image/noneRoll.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </van-popup>

    <!--规则弹窗-->
    <van-popup
      v-model="guiZeshow"
      position="bottom"
      :style="{ height: '31.25rem' }"
    >
      <div class="signIn">
        <div class="guiZe">
          <img class="guiImg" src="../image/guiNei.png" alt="" />
        </div>
      </div>
    </van-popup>

    <!--图片弹窗-->
    <van-popup v-model="tikuShow" lock-scroll :style="{ height: '60%' }" :close-on-click-overlay="false" :closeable="true">
      <div class="tikuShowFu"><img class="showTu" :src="showImg.url" alt="" /></div>
    </van-popup>

    <!-- <van-overlay :show="show" @click="show = false" z-index="15" lock-scroll /> -->
  </div>
</template>


<script>
import Vue from "vue";
import { Toast } from "vant";
Vue.use(Toast);
const wx = require("weixin-js-sdk");
import { _methods } from "../../utils/public";
import Services from "../../utils/api";
export default {
  data() {
    return {
      tushow: false,
      showImg: "",
      tikuShow:false,
      tikuImg: {
        url: require("../image/zhongtiku.jpg"),
      },
      kexiang: {
        url: require("../image/zhongkexiang.jpg"),
      },
      kebang: {
        url: require("../image/zhongkebang.jpg"),
      },
      ketang: {
        url: require("../image/zhongketang.jpg"),
      },
      isMiniprogram: false, // 是否是小程序环境
      phone: "",
      title:"",
      userInfo: {}, //用户数据
      dongWidth: 0, //控制时间进度条
      timeWidthLists: [
        //时间进度列表
        { tiem: "2020-11-01" },
        { tiem: "2020-11-02" },
        { tiem: "2020-11-03" },
        { tiem: "2020-11-04" },
        { tiem: "2020-11-05" },
        { tiem: "2020-11-06" },
        { tiem: "2020-11-07" },
        { tiem: "2020-11-08" },
        { tiem: "2020-11-09" },
        { tiem: "2020-11-10" },
        { tiem: "2020-11-11" },
      ],
      swiperImgs: [
        {
          url: require("../image/11.png"),
          score: 0,
          level: 1,
          qujian: "1-10",
        },
        {
          url: require("../image/22.png"),
          score: 4900,
          level: 2,
          qujian: "11-50",
        },
        {
          url: require("../image/33.png"),
          score: 9900,
          level: 3,
          qujian: "51-100",
        },
        {
          url: require("../image/44.png"),
          score: 14900,
          level: 4,
          qujian: "101-200",
        },
        {
          url: require("../image/55.png"),
          score: 19800,
          level: 5,
          qujian: "201-288",
        },
      ],
      newSwiperValue: null, //当前轮播数据值
      switchDetailsShow: 1,
      swithList: [], //页面展示优惠数据
      dkxmList: [], //单科项目数据
      dyxmList: [], //单科项目数据
      zhxmList: [], //单科项目数据
      show: false, //控制签到弹窗显示
      winnerShow: false, //控制中奖显示弹窗
      winnerList: {}, //中奖后数据
      discountsShow: false, //已兑换弹窗
      twoKuaiType: 1, //控制已兑换记录两个tabs
      noredList: [
        { url: require("../image/xinxiang.png") },
        { url: require("../image/zhengzheng.png") },
        { url: require("../image/qiancheng.png") },
        { url: require("../image/caiyuan.png") },
        { url: require("../image/wanshi.png") },
      ],
      jfdhList: [], //积分兑换红包数据
      lqyhqList: [], //领取的优惠券数据
      qianDaoDate: [
        //签到日期集合 type: 为1代表已签过， 0为漏签， 2为当日， 3为以后日期
        {
          sign_date: "2020-11-01",
          zhanValue: "11-01",
          type: 3,
          state: false,
        },
        {
          sign_date: "2020-11-02",
          zhanValue: "11-02",
          type: 3,
          state: false,
        },
        {
          sign_date: "2020-11-03",
          zhanValue: "11-03",
          type: 3,
          state: false,
        },
        {
          sign_date: "2020-11-04",
          zhanValue: "11-04",
          type: 3,
          state: false,
        },
        {
          sign_date: "2020-11-05",
          zhanValue: "11-05",
          type: 3,
          state: false,
        },
        {
          sign_date: "2020-11-06",
          zhanValue: "11-06",
          type: 3,
          state: false,
        },
        {
          sign_date: "2020-11-07",
          zhanValue: "11-07",
          type: 3,
          state: false,
        },
        {
          sign_date: "2020-11-08",
          zhanValue: "11-08",
          type: 3,
          state: false,
        },
        {
          sign_date: "2020-11-09",
          zhanValue: "11-09",
          type: 3,
          state: false,
        },
        {
          sign_date: "2020-11-10",
          zhanValue: "11-10",
          type: 3,
          state: false,
        },
      ],
      yiqianDate: [],
      guiZeshow: false, //控制规则弹窗
    };
  },
  filters: {
    extractNumber: _methods.extractNumber,
    stateNumber: function (value) {
      if (value == 0) {
        return "未使用";
      } else if (value == 1) {
        return "已使用";
      } else if (value == 2) {
        return "已过期";
      }
    },
  },

  mounted() {
    this.wx = wx;
    this.wx.miniProgram.getEnv((res) => {
      console.log("getEnv", res, res.miniprogram);
      this.isMiniprogram = true;
    });

    this.phone = this.getUrlParam("phone");
    this.title = this.getUrlParam("title");
    console.log("手机号", this.phone);
    console.log("标题", this.title);
    this.getUser();
    this.getCouponLqLists();
    this.getWidthValue();
    this.newSwiperValue =
      this.newSwiperValue != null ? this.newSwiperValue : this.swiperImgs[0];
    console.log(this.newSwiperValue);
  },
  methods: {
    //获得小程序穿的手机号
    getUrlParam(name) {
      var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
      var r = window.location.search.substr(1).match(reg);
      if (r != null) return unescape(r[2]);
      return null;
    },

    //获得日期时间进度
    getWidthValue() {
      var myDate = new Date();
      var YY = myDate.getFullYear() + "-";
      var MM =
        (myDate.getMonth() + 1 < 10
          ? "0" + (myDate.getMonth() + 1)
          : myDate.getMonth() + 1) + "-";
      var DD =
        myDate.getDate() < 10 ? "0" + myDate.getDate() : myDate.getDate();
      let newDate = YY + MM + DD;
      let timeAll = this.timeWidthLists;
      console.log(timeAll);
      for (let index = 0; index < timeAll.length; index++) {
        if (newDate == timeAll[index].tiem) {
          let dongWidth = ((index + 1) / timeAll.length) * 100;
          this.dongWidth = dongWidth.toFixed(0);
        }
      }
    },

    //获得用户信息
    getUser() {
      let publicData = {
        mobile: this.phone,
      };
      let jiami = {
        mobile: this.phone,
      };
      Services.userIf(publicData, jiami).then((res) => {
        if (res.event == 100) {
          console.log("res", res);
          this.userInfo = res.data[0];
          this.yiqianDate = res.data[0].signDate;
          console.log(this.yiqianDate);
        } else {
          console.log(res.msg);
        }
      });
    },

    //点击规则出现规则弹窗
    guiZeClick() {
      this.guiZeshow = true;
    },

    //四个优惠模块切换
    tabsSwitch(type) {
      this.switchDetailsShow = type;
      if (type == 1) {
        this.swithList = this.dkxmList;
        console.log("1", this.swithList);
      } else if (type == 2) {
        this.swithList = this.dyxmList;
        console.log("2", this.swithList);
      } else if (type == 3) {
        this.swithList = this.zhxmList;
        console.log("3", this.swithList);
      }
    },

    //获取优惠卷列表
    getCouponLqLists() {
      let publicData = {
        mobile: this.phone,
      };
      let jiami = {
        mobile: this.phone,
      };
      Services.coupon(publicData, jiami).then((res) => {
        if (res.event == 100) {
          console.log("res", res);
          this.dkxmList = res.list.dkxm;
          this.dyxmList = res.list.dyxm;
          this.zhxmList = res.list.zhxm;
          this.swithList = this.dkxmList;
        } else {
          console.log(res.msg);
        }
      });
    },

    //轮播图切换事件
    onChange(index) {
      let nowIndex = index;
      let allList = this.swiperImgs;
      for (let index = 0; index < allList.length; index++) {
        if (nowIndex == index) {
          this.newSwiperValue = allList[index];
        }
      }
    },

    //点击兑换图片事件
    duiHuan() {
      console.log(this.newSwiperValue != null);
      let newSwiperValue =
        this.newSwiperValue != null ? this.newSwiperValue : this.swiperImgs[0];
      console.log(newSwiperValue);
      let publicData = {
        mobile: this.phone,
        sy_integral: newSwiperValue.score,
        level: newSwiperValue.level,
      };
      let jiami = {
        mobile: this.phone,
        sy_integral: newSwiperValue.score,
        level: newSwiperValue.level,
      };
      Services.lottery(publicData, jiami).then((res) => {
        if (res.event == 100) {
          console.log("res", res);
          this.winnerList = res.data;
          this.winnerShow = true;
          this.getUser();
        } else {
          console.log(res.msg);
          Toast(res.msg);
        }
      });
    },

    //点击中奖弹窗时关闭
    winnerClick() {
      this.winnerShow = false;
    },

    //点击立即领取，领取优惠卷
    promptlyGet(item) {
      console.log(item);
      let publicData = {
        mobile: this.phone,
        coupon_id: item.id,
      };
      let jiami = {
        mobile: this.phone,
        coupon_id: item.id,
      };
      Services.couponLq(publicData, jiami).then((res) => {
        if (res.event == 100) {
          console.log(res.msg);
          Toast(res.msg);
        } else {
          console.log(res.msg);
          Toast(res.msg);
        }
      });
    },

    //点击已兑换，查看已兑换列表
    isShowDiscounts() {
      this.discountsShow = true;
      this.getCouponLqjl();
    },

    //获得已兑换列表数据
    getCouponLqjl() {
      let publicData = {
        mobile: this.phone,
      };
      let jiami = {
        mobile: this.phone,
      };
      Services.couponLqjl(publicData, jiami).then((res) => {
        if (res.event == 100) {
          console.log("res", res);
          this.jfdhList =
            typeof res.list.jfdh == "undefined" ? null : res.list.jfdh;
          this.lqyhqList =
            typeof res.list.lqyhq == "undefined" ? null : res.list.lqyhq;
          console.log("jfdhList", this.jfdhList);
          console.log("lqyhqList", this.lqyhqList);
        } else {
          console.log(res.msg);
        }
      });
    },

    //已兑换列表两个tabs切换
    twoKuaiClick(type) {
      this.twoKuaiType = type;
    },

    //点击领取梦想值，打开签到弹窗
    isShowSign() {
      this.show = true;
      this.signInDateDispose();
    },

    //签到数据处理，已签到对号图片，漏签到叉号，当日签到，以及未签
    signInDateDispose() {
      let qianDaoDate = this.qianDaoDate;
      let yiqianDate = this.yiqianDate;
      var myDate = new Date();
      var YY = myDate.getFullYear() + "-";
      var MM =
        (myDate.getMonth() + 1 < 10
          ? "0" + (myDate.getMonth() + 1)
          : myDate.getMonth() + 1) + "-";
      var DD =
        myDate.getDate() < 10 ? "0" + myDate.getDate() : myDate.getDate();
      let newDate = YY + MM + DD;
      var date = new Date(newDate);
      let time1 = date.getTime();

      if (yiqianDate.length > 0) {
        qianDaoDate.forEach((item) => {
          // for (const item of qianDaoDate) {
          yiqianDate.forEach((jtem) => {
            // for (const jtem of yiqianDate) {
            let itemTime = this.timeZhuan(item.sign_date);
            let itemTimeone = this.timeZhuan(jtem.sign_date);
            if (itemTime > time1) {
              item["type"] = 3;
            } else if (itemTime == time1) {
              item["type"] = 2;
            } else {
              if (!item.state) {
                if (itemTime == itemTimeone) {
                  console.log("item", item);
                  console.log("jtem", jtem);
                  item["type"] = 1;
                  item["state"] = true;
                } else {
                  item["type"] = 0;
                }
              }
            }
          });
          // }
          // }
        });
      } else {
        qianDaoDate.forEach((item) => {
          let itemTime = this.timeZhuan(item.sign_date);
          if (itemTime > time1) {
            item["type"] = 3;
          } else if (itemTime == time1) {
            item["type"] = 2;
          }
        });
      }

      this.qianDaoDate = qianDaoDate;
      console.log(this.qianDaoDate);
    },

    //日期转为时间戳
    timeZhuan(value) {
      var date = new Date(value);
      var time1 = date.getTime();
      return time1;
    },

    //点击签到按钮
    signinClick() {
      let publicData = {
        mobile: this.phone,
      };
      let jiami = {
        mobile: this.phone,
      };
      Services.signIn(publicData, jiami).then((res) => {
        if (res.event == 100) {
          console.log("res", res);
          this.getUser();
          this.show = false;
          Toast("签到成功获得" + res.fenzhi + "梦想值");
        } else {
          console.log(res.msg);
          Toast(res.msg);
        }
      });
    },

    /*四个小程序跳转模块
    type:1为打开中题库
    type:2为打开中课享
    type:3为打开中课帮
    type:4为打开中课堂
    */

    //去做题，跳转到中题库
    goZuoti() {
      // this.wx.miniProgram.postMessage({
      //   data: { type: 1 },
      // });
      // wx.miniProgram.navigateBack({ delta: 1 });
      this.tikuShow = true;
      this.showImg = this.tikuImg;
    },

    //去分享，跳转到中课享
    goFenxaing() {
      // this.wx.miniProgram.postMessage({
      //   data: { type: 2 },
      // });
      // wx.miniProgram.navigateBack({ delta: 1 });
      this.tikuShow = true;
      this.showImg = this.kexiang;
    },

    //跳转到中课帮小程序
    goTiwen() {
      // this.wx.miniProgram.postMessage({
      //   data: { type: 3 },
      // });
      // wx.miniProgram.navigateBack({ delta: 1 });
      this.tikuShow = true;
      this.showImg = this.kebang;
    },

    //去听课，跳转到中课堂
    goTingke() {
      // this.wx.miniProgram.postMessage({
      //   data: { type: 4 },
      // });
      // wx.miniProgram.navigateBack({ delta: 1 });
      this.tikuShow = true;
      this.showImg = this.ketang;
    },
  },
};
</script>

<style scoped>
html,
body {
  height: 100%;
  width: 100%;
  overflow: hidden;
  margin: 0;
  padding: 0;
}

.heightClass {
  height: auto;
  position: relative;
}

.container {
  width: 100%;
  height: 100%;
  background-image: url("../image/img_background@2x.png");
  background-repeat: no-repeat;
  background-position: 0px 0px;
  background-size: 100% 100%;
  object-fit: contain;
  overflow: hidden;
}

.head-tu {
  width: 100%;
  height: 8.75rem;
  margin-top: 2.25rem;
  background-image: url("../image/shedeng2.png");
  background-repeat: no-repeat;
  background-position: 0px 0;
  background-size: 100% 100%;
  object-fit: contain;
  position: relative;
}

.head-tu img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.headTu-gui {
  position: absolute;
  top: 0;
  right: 0;
  width: 3.75rem;
  height: 1.56rem;
  line-height: 1.56rem;
  background: rgba(0, 0, 0, 0.2);
  font-size: 0.94rem;
  color: #fff;
  border-radius: 0.81rem 0px 0px 0.81rem;
}

/*梦想 模块*/
.dream-banck {
  width: 100%;
  height: 38.13rem;
  background-image: url("../image/swiperBg2.png");
  background-repeat: no-repeat;
  background-position: 0px 0;
  background-size: 100% 100%;
  object-fit: contain;
  position: relative;
}

.dreamTitle {
  display: flex;
  justify-content: center;
  align-content: center;
}

.dream-num {
  position: absolute;
  top: 2.38rem;
  font-size: 17px;
  font-weight: 500;
  color: #ffffff;
  text-shadow: 0px 1px 2px #d85ea8;
}

.dreamConsume {
  display: flex;
  justify-content: center;
}

.dreamConsume-frame {
  width: 18.38rem;
  height: 17.5rem;
}

.dreamConsume-bg {
  width: 18.38rem;
  height: 17.5rem;
  position: absolute;
  top: 4.5rem;
  z-index: 4;
}

.dreamConsume-bg img {
  width: 100%;
  height: 100%;
  /* object-fit: contain; */
}

.dreamConsume-bg-text {
  width: 9.38rem;
  height: 2.5rem;
  position: absolute;
  background-image: url("../image/rightKuang.png");
  background-repeat: no-repeat;
  background-position: 0px 0;
  background-size: 100% 100%;
  object-fit: contain;
  top: 5.44rem;
  right: 3.56rem;
  font-size: 0.75rem;
  font-weight: 500;
  color: #ffffff;
  z-index: 10;
}

.bgText-flex {
  width: 7.81rem;
  height: 2.5rem;
  line-height: 2.5rem;
  display: flex;
  align-items: center;
  padding: 0 0 0 1.25rem;
  box-sizing: border-box;
}

.dreamConsume-more {
  display: flex;
  justify-content: center;
  overflow: hidden;
}

.dreamConsume-swiper {
  width: 16.56rem;
  height: 15.94rem;
  position: absolute;
  top: 5.63rem;
  z-index: 5;
}

.dreamConsume-swiper img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.my-swipe .van-swipe-item img {
  width: 16.56rem;
  height: 15.94rem;
  color: #fff;
  font-size: 20px;
  text-align: center;
}

/* 点击按钮图片*/
.dreamConsume-btn {
  display: flex;
  justify-content: center;
}

.clickBtn {
  width: 9.88rem;
  height: 5rem;
  position: absolute;
  z-index: 10;
  bottom: 11.06rem;
  display: flex;
  justify-content: center;
}

.clickBtn-text {
  position: absolute;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.clickBtnText-tu {
  width: 5rem;
  height: 1.25rem;
  margin: 0.63rem 0 0.25rem 0;
}

.clickBtnText-packet {
  font-size: 12px;
  font-weight: 400;
  color: #db991b;
}

img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.bottomTwoBtn {
  position: absolute;
  z-index: 10;
  bottom: 5.63rem;
  display: flex;
  justify-content: space-around;
}

.bottomTwoBtn-tu {
  width: 7.81rem;
  height: 3.75rem;
}

.twoTuClass {
  display: flex;
}

.twoTuClass-one {
  width: 10.63rem;
  height: 11.75rem;
}

.twoTuClass-two {
  width: 3.13rem;
  height: 3.5rem;
  margin-top: 2.5rem;
}

/*时间进度*/
.time-schedule {
  margin-top: 1.25rem;
  width: 100%;
  height: 10rem;
  background-image: url("../image/timeKuang2.png");
  background-repeat: no-repeat;
  background-position: 0px 0;
  background-size: 100% 100%;
  object-fit: contain;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
}

.noneJin {
  width: 17.19rem;
  height: 1.13rem;
  position: absolute;
  z-index: 2;
}

.youJin-content {
  width: 17.19rem;
  height: 1.13rem;
  position: absolute;
  z-index: 4;
  display: flex;
  justify-content: start;
}

.youJin-left {
  width: 0;
  height: 1.13rem;
  position: relative;
  display: flex;
}

.youJin {
  height: 1.13rem;
}

.youJin img {
  width: 100%;
  height: 100%;
  object-fit: fill;
}

.youJintou {
  width: 1.25rem;
  height: 0.63rem;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  right: -0.31rem;
  bottom: 0.25rem;
}

.youJintou img {
  width: 100%;
  height: 100%;
  object-fit: fill;
}

.noneJin-dian {
  position: absolute;
  z-index: 6;
  width: 18.75rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.timeSchedule-zong {
  width: 18.75rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  z-index: 5;
}

.timeSchedule-item {
  width: 4.38rem;
  height: 4.38rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
}

.timeItem-title {
  font-size: 12px;
  font-weight: 400;
  color: #ffffff;
}

.timeItem-img {
  width: 4.38rem;
  height: 1rem;
  display: flex;
  justify-content: center;
}

.noneJin-two {
  justify-content: center;
}

.noneJin-three {
  justify-content: center;
}

.timeItem-date {
  font-size: 10px;
  font-weight: 400;
  color: #ffffff;
}

/*四个优惠模块*/
.four-discounts {
  margin-top: 1.25rem;
}

.tabsScroll {
  overflow: hidden;
}

.switch-tabs {
  /* width: 23.44rem; */
  width: 100%;
  white-space: nowrap; /*文本不会换行，文本会在在同一行上继续*/
  overflow-y: scroll;
  height: 3.75rem;
  background-image: url("../image/switchBg.png");
  background-repeat: no-repeat;
  background-position: 0px 0;
  background-size: 100% 100%;
  object-fit: contain;
  position: relative;
  /* display: flex;
  justify-content: space-around;
  align-items: center; */
}

.switch-tabs::-webkit-scrollbar {
  display: none;
}

.switchTabs-items {
  width: 5.75rem;
  height: 3.75rem;
  line-height: 3.75rem;
  margin: 0 0.94rem;
  /* display: flex; */
  display: inline-block;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  font-weight: 400;
  color: #ffffff;
  text-shadow: 0px 0px 15px rgba(191, 56, 148, 0.19);
}

.pitchOnImg {
  background-image: url("../image/tabsBg.png");
  background-repeat: no-repeat;
  background-position: 0px 0;
  background-size: 100% 100%;
  object-fit: contain;
}

.switch-details {
  margin-bottom: 0.75rem;
}

.swDetails-items {
  width: 100%;
  height: 8.75rem;
  background-image: url("../image/switchItembg.png");
  background-repeat: no-repeat;
  background-position: 0px 0;
  background-size: 100% 100%;
  object-fit: contain;
  display: flex;
  align-items: center;
}

.swDetailsItems-left {
  width: 6.88rem;
  margin-left: 2.19rem;
  text-align: left;
  font-size: 12px;
  color: #fff;
}

.itemsLeft-sprice {
  font-size: 1.38rem;
  font-weight: bold;
  color: #ffffff;
}

.twoDetail {
  display: flex;
}

.itemsLeft-num {
  font-size: 50px;
  font-weight: bold;
  color: #ffffff;
}

.itemsLeft-break {
  width: 1rem;
  height: 1rem;
  margin-left: 0.38rem;
  background-color: #fff;
  border-radius: 50%;
  font-size: 12px;
  font-weight: 400;
  color: #e467bf;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 1.56rem;
}

.itemsLeft-song {
  font-size: 2rem;
  font-weight: bold;
  color: #ffffff;
}

.swDetailsItems-right {
  width: 7.5rem;
  margin-left: 3.13rem;
  font-size: 12px;
  font-weight: 400;
  color: #ffffff;
  text-align: left;
}

.itemsRight-btn {
  margin-top: 0.63rem;
  width: 6.25rem;
  height: 1.5rem;
  line-height: 1.5rem;
  background-color: #fff;
  border-radius: 0.75rem;
  font-size: 13px;
  font-weight: 400;
  color: #ec4abd;
  text-align: center;
}

.noneDiscounts {
  text-align: center;
  margin-top: 1.88rem;
  font-size: 2.19rem;
  color: #fff;
  font-weight: bold;
}

/*签到弹窗*/
.signIn {
  width: 100%;
  height: 31.25rem;
  background-image: url("../image/qianDaobg.png");
  background-repeat: no-repeat;
  background-position: 0px 0;
  background-size: 100% 100%;
  object-fit: contain;
  overflow: hidden;
}

.van-popup {
  background-color: transparent;
}

.signIn-data {
  width: 21.56rem;
  height: 6.25rem;
  margin: 5.75rem auto 0;
  background-color: #fff;
  border-radius: 0.63rem;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}

.signIn-bgstrip {
  width: 325px;
  height: 6px;
  background: #ef85b0;
  border-radius: 3px;
  margin: 0 auto;
  position: absolute;
  z-index: 1;
}

.signIn-all {
  width: 100%;
  height: 6.25rem;
  position: absolute;
  z-index: 3;
  top: 0;
}

.signInAll-position {
  white-space: nowrap; /*文本不会换行，文本会在在同一行上继续*/
  overflow-y: scroll;
  padding: 0 1.38rem;
  display: flex;
  align-items: center;
  height: 100%;
}

.signInAll-position::-webkit-scrollbar {
  display: none;
}

.signIn-items {
  display: inline-block;
  margin-right: 0.63rem;
  position: relative;
  height: 4.5rem;
}

.signIn-xiao {
  padding-top: 1.25rem;
  box-sizing: border-box;
}

/* .signIn-items:last-child {
  margin-right: 0.31rem;
} */

.signInItems-img {
  width: 2.5rem;
  height: 2.5rem;
  margin-bottom: 0.38rem;
}

.signInItems-text {
  font-size: 0.75rem;
  font-weight: 500;
  color: #f499be;
}

.signInItems-now {
  width: 4.5rem;
  height: 4.5rem;
  position: relative;
  z-index: 3;
}

/* .signInItems-now img{
  width: 100%;
  height: 100%;
  object-fit: fill;
} */

.itemsNow-text {
  position: absolute;
  z-index: 5;
  font-size: 20px;
  top: calc(50% - 0.81rem);
  left: calc(50% - 1.25rem);
  color: #fff;
  font-weight: bold;
}

.itemsNow-img {
  width: 1.88rem;
  height: 1.88rem;
  position: absolute;
  z-index: 5;
  top: calc(50% - 0.94rem);
  left: calc(50% - 0.94rem);
}

.signInItems-later {
  width: 2.5rem;
  height: 2.5rem;
  position: relative;
  z-index: 3;
}

.itemsNow-later {
  font-size: 0.75rem;
  position: absolute;
  z-index: 5;
  font-weight: bold;
  color: #fff;
  /* top: calc(50% - 0.44rem);
  left: calc(50% - 0.81rem); */
  top: 0;
  left: 0;
}

.itemsNow-later-num {
  width: 2.5rem;
  height: 2.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
}

.signIn-value {
  font-size: 0.94rem;
  font-weight: 500;
  color: #ffffff;
  margin: 0.94rem 0 0.63rem 1.88rem;
  text-align: left;
}

/*四个跳转小程序任务 */
.four-skip {
  width: 100%;
  height: 15.94rem;
  overflow-y: scroll;
}

.skipProgram {
  width: 21.56rem;
  height: 5rem;
  margin: 0 auto 0.63rem;
  border-radius: 0.63rem;
  background-color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 0.94rem;
  box-sizing: border-box;
}

.skipProgram-left {
  display: flex;
}

.skipProgram-img {
  width: 3.13rem;
  height: 3.13rem;
  margin-right: 0.63rem;
}

.programLeft-text {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  font-size: 0.75rem;
  font-weight: 400;
  color: #666666;
}

.programLeft-title {
  font-size: 0.94rem;
  font-weight: 500;
  color: #f499be;
  margin-bottom: 0.5rem;
}

.skipProgram-right {
  border-radius: 0.31rem;
  font-size: 0.88rem;
  font-weight: 400;
  color: #ffffff;
}

.van-button {
  width: 4.38rem;
  height: 2.13rem;
  line-height: 2.13rem;
  padding: 0;
}

/*兑奖中奖弹窗*/
.winner-content {
  position: relative;
}

.winner-top {
  position: relative;
}

.winnerImg {
  width: 23.44rem;
  height: 25rem;
  box-sizing: border-box;
}

.winner-text {
  width: 100%;
  /* height: 70px; */
  position: absolute;
  top: 2.5rem;
  left: 0;
  text-align: center;
  z-index: 10;
  color: #fff;
}

.winnerText-flex {
  /* display: flex;
  flex-direction: column;
  align-items: center; */
  font-size: 1.63rem;
  font-weight: 400;
  color: #ffffff;
  text-shadow: 0px 2px 3px rgba(192, 63, 135, 0.35);
}

.winner-bottom {
  width: 1.88rem;
  height: 3.75rem;
  margin: 0 auto;
}

/*已兑换列表弹窗*/

.discounts {
  width: 100%;
  height: 100%;
  background-image: url("../image/zhanshibg.png");
  background-repeat: no-repeat;
  background-position: 0px 0;
  background-size: 100% 100%;
  object-fit: contain;
  position: relative;
  overflow: hidden;
}

.discounts-content {
  width: 21.56rem;
  height: 21.88rem;
  margin-left: 0.94rem;
  background-color: #fff;
  position: absolute;
  bottom: 0;
  left: 0;
  box-sizing: border-box;
  border-radius: 0.63rem 0.63rem 0 0;
}

.discounts-head {
  width: 100%;
  height: 3.12rem;
  border-radius: 0.63rem 0.63rem 0 0;
  background-color: #f499be;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.discountsHead-kuai {
  width: 50%;
  height: 3.13rem;
  line-height: 3.13rem;
  font-size: 1.06rem;
  border-radius: 0.63rem 0.63rem 0 0;
  font-weight: 500;
  color: #fff;
  box-sizing: border-box;
}

.kuaiOn {
  background-color: #fff;
  color: #f499be;
}

.redContent {
  overflow: hidden;
}

.red-packet {
  height: 18.75rem;
  margin-top: 1.63rem;
  padding: 0 0.75rem;
  box-sizing: border-box;
  overflow-y: scroll;
}

.redPacket-all {
  display: flex;
  flex-wrap: wrap;
  padding-bottom: 1.88rem;
}

.redPacket-item {
  margin-bottom: 0.31rem;
  width: 6.5rem;
  height: 7.75rem;
  background-image: url("../image/redKong.png");
  background-repeat: no-repeat;
  background-position: 0px 0;
  background-size: 100% 100%;
  object-fit: contain;
  position: relative;
  color: #fff;
}

.noRed {
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 0.31rem;
}

.noRed-item {
  width: 6.5rem;
  height: 7.75rem;
}

.redPacket-sprice {
  font-size: 0.81rem;
  font-weight: bold;
  margin-top: 30px;
}

.redPacket-text {
  font-size: 0.81rem;
  margin-top: 0.13rem;
}

.redPacket-time {
  font-size: 0.75rem;
}

.roll-all {
  display: flex;
  flex-wrap: wrap;
  padding-bottom: 1.88rem;
}

.rollAll-item {
  margin-bottom: 0.31rem;
  width: 19.75rem;
  height: 5.88rem;
  background-image: url("../image/rollKong.png");
  background-repeat: no-repeat;
  background-position: 0px 0;
  background-size: 100% 100%;
  object-fit: contain;
  position: relative;
  color: #fff;
  display: flex;
  align-items: center;
}

.rollAll-right {
  width: 9.38rem;
  font-size: 1rem;
  text-align: left;
}

.rollAll-left {
  width: 6.88rem;
  margin-left: 1.56rem;
  text-align: left;
  font-size: 12px;
  color: #fff;
}

.noRoll {
  width: 13rem;
  height: 13rem;
  margin: 0 auto;
}

/*规则*/

.guiZe {
  width: 19.69rem;
  height: 25rem;
  margin: 5.31rem auto 0;
  overflow-y: scroll;
  padding-bottom: 1.25rem;
}
.guiImg {
  width: 19.69rem;
  height: 80.25rem;
}

.yuanDian {
  width: 1rem;
  height: 1rem;
}

.tikuShowFu{
  padding-top: 50px;
}

.showTu{
  width: 250px;
  height: 250px;
}

</style>