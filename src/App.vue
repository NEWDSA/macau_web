<template>
  <div id="app">
    <!--引入头部组件-->
    <L_Header @toParentap="changeAp" @toParentqr="changeQr">
      <template v-slot="child">
        <div v-if="child.qr" class="l_app">coming soon ...</div>
        <div v-if="child.ap" class="l_qr"></div>
      </template>
    </L_Header>
    <!--中原log -->
    <div class="brand">
      <div class="bl_content">
        <router-link to="/goother" class="m_logo"
          ><img src="http://10.68.2.9/testmacau/images/New/c-logo.jpg"
        /></router-link>
        <router-link to="/goother" class="m_company"
          ><img
            src="http://10.68.2.9/testmacau/images/New/c-loaction.jpg"
          /><span>分行网络</span></router-link
        >
      </div>
    </div>
    <!--引入菜单 -->
    <L_Menus />
    <!--主要内容区域 -->

    <router-view />
    <!--底部版权信息 -->
  </div>
</template>
<script>
import L_Header from "@/components/Header"; //引入头部组件
import L_Menus from "@/components/Menus"; //引入菜单组件
export default {
  data() {
    return {
      qr: false,
      ap: false,
    };
  },
  components: {
    L_Header, //头部
    L_Menus, //菜单组件
  },
  methods: {
    changeAp(val1, val2) {
      console.log("changeStatus");
      console.log(val2);
      this.qr = val1;
      this.ap = val2;
    },
    changeQr(val1, val2) {
      this.qr = val1;
      this.ap = val2;
    },
  },
  metaInfo() {
    return {
      title: "澳門中原-中原地產-網上搵樓及成交紀錄",
      meta: [
        {
          name: "keywords",
          content:
            "澳門買樓,澳門房地產,中原地產,地產,橫琴房地產,橫琴買房,房價,樓價,圖則,荀盤,成交,價格,粵港珠澳大灣區 港珠澳大橋通車",
        },
        {
          name: "description",
          content: "中原地產代理有限公司(澳門) - 提供澳門房地產市場資料。包括樓盤買賣,地產市場資訊,成交報價,樓市分析,地產新聞,澳門地產網,新盤推介、網上搵樓及成交紀錄等",
        },
      ],
    };
  },
};
</script>
<style lang="scss">
* {
  padding: 0;
  margin: 0;
}
html,
body,
#app {
  width: 100%;
  height: 100%;
  // font-size: 14px;
  font-size: calc(100vw / 192);
  @media screen and (max-width: 1920px) {
    width: 100%;
    height: 100%;
    font-size: 14px;
  }
  .l_app {
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    top: 32px;
    width: 260px;
    height: 135px;
    box-shadow: 1px 1px 12px -6px black;
    margin-left: auto;
    margin-right: auto;
    background-color: white;
    // border-radius: 8px;
    font-size: 22px;
  }
  .l_qr {
    position: absolute;
    top: 32px;
    display: flex;
    justify-content: center;
    width: 390px;
    height: 135px;
    box-shadow: 1px 1px 12px -6px black;
    margin-left: auto;
    margin-right: auto;
    background-color: white;
    z-index: 11;
  }
  .brand {
    display: flex;
    justify-content: center;
    width: 100%;
    height: 77px;
    .bl_content {
      display: flex;
      justify-content: space-between;
      align-items: center;
      // border: 1px solid pink;
      width: 1290px;
      .m_company {
        display: flex;
        justify-content: center;
        align-items: center;
        text-decoration: none;
        color: #333333;
        padding-right: 16px;
        // border: 1px solid pink;
        img {
          margin: 0 5px;
          width: 10px;
          height: 13px;
        }
      }
    }
  }
}
</style>
