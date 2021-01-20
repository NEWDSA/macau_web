<template>
  <div class="m_container">
    <!--大湾区入口-->
    <div class="dw_inlet">
      <router-link to="http://hk.centanet.com/greater-bay-area/?lang=zh"
        ><img src="http://10.68.2.9/testmacau/images/dw_inlet.png"
      /></router-link>
    </div>
    <!--搜索-->
    <div class="b_box">
      <!--搜索导航-->
      <div class="i-newsearch">11</div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.m_container {
  .dw_inlet {
    position: fixed;
    /* top: 60%; */
    top: 80%;
    right: 52px;
    z-index: 999;
  }
  .b_box {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 464px;
    background: url("http://img11.soufunimg.com/news/2018_12/03/M18/10/EE/ChCE4VwEmMuITe-mAAEGds6jfpcABH_7wDOHMAAAQaO939.jpg");
    box-sizing: 100% 100%;
    .i-newsearch {
        background: rgba(0,0,0,.3);
    border-radius: 5px;
    box-shadow: #464343 5px 5px 15px;
      width: 720px;
      height: 200px;
      padding: 40px 0 0 40px;
      display: inline-block;
      vertical-align: middle;
      text-align: left;
    //   color: rgb(236, 8, 8);
      //   border: 1px solid pink;
    //   background: rgba(0, 0, 0, 0.3);
    //   border-radius: 5px;
    //   box-shadow: #464343 5px 5px 15px;
    }
    i-newserach {
      position: relative;
      z-index: 11;
    }
  }
}
</style>