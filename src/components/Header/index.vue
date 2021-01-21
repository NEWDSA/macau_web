<template>
  <div class="topbar">
    <div class="l_container">
      <div class="l_left">
        <router-link class="link1" to="mo.centanet.com/"
          ><img src="http://10.68.2.9/testmacau/images/New/c-loaction.jpg" />
          <span>澳門</span></router-link
        >
        <div class="topbar_line"></div>
        <router-link class="link2" to="hq.centanet.com/">橫琴</router-link>
      </div>
      <div class="l_right">
        <div @mouseover="showQr" @mouseleave="l_Qr"><router-link class="link1" to="">中原APP</router-link></div>
        <div class="topbar_line"></div>
        <div @mouseover="showAp" @mouseleave="l_Ap"><router-link class="link2" to="" >關注我們</router-link></div>
        <!-- 插槽 -->
        <slot  :qr="qr" :ap="ap"></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  // props: {
  //   qr: Boolean,
  //   ap: Boolean,
  // },
  data() {
    return {
      qr:false,
      ap:false
    };
  },
  methods: {
    showAp() {
      console.log('showAp');
      this.ap = true;
      // this.qr=false;
      this.$emit('toParentap', this.qr, this.ap)
    },
    l_Qr(){
        this.qr=false;
        this.$emit('toParentqr',this.qr,this.ap)
    },
    showQr() {
      this.qr = true;
      // this.ap=false;
      this.$emit('toParentqr',this.qr,this.ap)
    },
    l_Ap(){
      this.ap=false;
      this.$emit('toParentap', this.qr, this.ap)
    }
  },
};
</script>

<style lang="scss" scoped>
.topbar {
  width: 100%;
  height: 32px;
  background-color: #f0f0f2;
  //   border: 1px solid #000000;
  .l_container {
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
    width: 1290px;
    height: 32px;
    // border: 1px solid yellow;
    .l_left {
      justify-content: flex-start;
      display: flex;
      align-items: center;
      //   border: 1px solid blue;
      .link1 {
        display: flex;
        justify-content: center;
        align-items: center;
        color: #da1616;
        height: 32px;
        line-height: 32px;
        padding-left: 15px;
        padding-right: 15px;
        text-decoration: none;
        img {
          width: 10px;
          height: 13px;
          // border:1px solid blue;
        }
        span {
          display: inline-block;
          margin-left: 5px;
          //   border: 1px solid blue;
        }
      }
      .link2 {
        color: #da1616;
        height: 32px;
        line-height: 32px;
        padding-left: 15px;
        padding-right: 15px;
        text-decoration: none;
      }
      .topbar_line {
        display: flex;
        align-items: center;
        height: 15px;
        width: 1px;
        background-color: #666666;
      }
    }
    .l_right {
      display: flex;
      justify-content: flex-end;
      align-items: center;
      //   border: 1px solid pink;
      .link1 {
        color: #da1616;
        height: 32px;
        line-height: 32px;
        padding-right: 15px;
        text-decoration: none;
      }
      .link2 {
        color: #da1616;
        height: 32px;
        line-height: 32px;
        padding-left: 15px;
        padding-right: 15px;
        padding-right: 15px;
        text-decoration: none;
      }
      .topbar_line {
        display: flex;
        align-items: center;
        height: 15px;
        width: 1px;
        background-color: #666666;
      }
    }
  }
}
</style>