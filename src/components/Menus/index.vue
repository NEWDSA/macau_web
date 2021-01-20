<template>
  <div class="m_menu">
    <div class="m_content">
      <router-link to="/" class="menu_item">首頁</router-link>
      <router-link to="/searchByVideo" class="menu_item">360揾樓</router-link>
      <router-link to="/NewHotProject" class="menu_item">焦點新盤</router-link>
      <router-link to="/Searchs" class="menu_item">網上揾樓</router-link>
      <router-link to="/OnlineSale" class="menu_item"
        ><span>網上放盤</span
        ><img
          src="http://10.68.2.9/testmacau/images/OnlineSale/web_label_base_pic.png"
        />
        <img
          class="hot_new"
          src="http://10.68.2.9/testmacau/images/OnlineSale/web_label_base_title.png"
        />
      </router-link>
      <router-link to="/Situation" class="menu_item">市场成交</router-link>
      <router-link to="/NewList" class="menu_item">活動報名</router-link>
      <router-link to="/CentaAnalysis" class="menu_item">樓市指南</router-link>
      <router-link to="/About" class="menu_item">關於中原</router-link>
      <router-link to="/EstatesHandBook" class="menu_item">樓盤天書</router-link>
      <router-link to="/Job" class="menu_item">加入中原</router-link>
    </div>
  </div>
</template>

<script>
export default {
  setup() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.m_menu {
  display: flex;
  justify-content: center;
  width: 100%;
  height: 42px;
  background-color: #da1616;
  .m_content {
    display: flex;
    // justify-content: space-between;
    align-items: center;
    width: 1290px;
    height: 42px;
    // border: 1px solid blue;
    .menu_item {
      margin-right: 66.5px;
      line-height: 42px;
      height: 42px;
      text-decoration: none;
      color: white;
      display: block;
      img {
        position: absolute;
        margin-top: -20px;
      }
      .hot_new {
        position: absolute;
        margin-top: 5px;
        margin-left: 4px;
        width: 24px;
        height: 9px;
      }
      //关键帧动画
      .hot_new{
          animation: movehot 1.5s infinite;
      }
      @keyframes movehot {
		0% {
			transform: translate(0px, 0px);
		}

		50% {
			transform: translate(0px, -4px);
		}

		100% {
			transform: translate(0px, 0px);
		}
	}
      //   float: left;
    }
    .menu_item:last-child {
    margin-right: 16px;
}
  }
}
</style>