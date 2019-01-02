<template>
  <div class="ew">
    <!--顶部通栏-->
    <header class="ew-topBar d-none d-lg-block">
      <div class="container">
        <div class="row">
          <div class="col-lg-2">
            <a href="#" class="ew-app">
              <i class="fa fa-mobile-phone fa-lg"></i>&nbsp;
              <span>EnergyWave</span>&nbsp;
              <i class="fa fa-sort"></i>
              <img src="@/assets/images/ew.png">
            </a>
          </div>
          <div class="col-lg-5">
            <i class="fa fa-phone"></i>&nbsp;
            <span>电话：155-4730-8688（服务时间：9：00-18：00）</span>
          </div>
          <div class="col-lg-2">
            <a href="#">常见问题</a>&nbsp;
            <a href="#">技术服务</a>
          </div>
          <div class="col-lg-3">
            <a href="#" class="btn btn-default btn-register">免费注册</a>
            <a href="#" class="btn">登录</a>
          </div>
        </div>
      </div>
    </header>
    <!--导航栏-->
    <nav class="container navbar navbar-expand-md bg-white navbar-light ew-nav">
      <!-- logo -->
      <a class="navbar-brand" href="#">
        <img src="@/assets/images/logo.png" alt="Logo">
      </a>
      <!-- 小屏幕 -->
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#collapsibleNavbar"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <!-- 大屏幕 -->
      <div class="collapse navbar-collapse" id="collapsibleNavbar">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link" href="#">首页</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">信息</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">预约</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">产品</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">新闻</a>
          </li>
        </ul>
      </div>
      <ul class="navbar-nav float-right d-none d-lg-block">
        <li class="nav-item">
          <a class="nav-link" href="#">个人中心</a>
        </li>
      </ul>
    </nav>
    <!-- 轮播图 -->
    <div id="demo" class="carousel slide" data-ride="carousel">
      <!-- 指示符 -->
      <ul class="carousel-indicators">
        <li
          data-target="#demo"
          data-slide-to="0"
          v-for="(item,index) in img"
          :key="item.id"
          :class="[{'active':!index}]"
        ></li>
      </ul>
      <!-- 轮播图片 -->
      <div class="ew-banner">
        <div class="carousel-inner">
          <div
            v-for="(item,index) in img"
            :key="item.id"
            :class="['carousel-item',{'active':!index}]"
          >
            <a
              href="#"
              class="pc-img"
              :style="{backgroundImage:'url('+item.pAddress+')'}"
              v-if="flag"
            ></a>
            <a href="#" class="m-img" v-else>
              <img :src="item.mAddress">
            </a>
          </div>
        </div>
        <!-- 左右切换按钮 -->
        <a class="carousel-control-prev" href="#demo" data-slide="prev">
          <span class="carousel-control-prev-icon"></span>
        </a>
        <a class="carousel-control-next" href="#demo" data-slide="next">
          <span class="carousel-control-next-icon"></span>
        </a>
      </div>
    </div>
    <!-- 信息 -->
    <!-- 预约 -->
    <!-- 产品 -->
    <!-- 新闻 -->
    <!-- 合作伙伴 -->
  </div>
</template>
<script>
export default {
  name: "program",
  data() {
    return {
      items: [],
      img: [],
      flag: "",
      style: ""
    };
  },
  created() {
    this.banner();
  },
  methods: {
    banner() {
      this.$http
        .get("http://www.energywave.top:3053/api/imgUrl")
        .then(result => {
          var isMobile = $(window).width() > 768 ? "ture" : false;
          console.log(isMobile);
          this.flag = isMobile;
          console.log(result.body);
          this.img = result.body;
        });
    }
    // 未开发屏幕监视
  }
};
</script>
<style scoped lang="less">
/* reset */
a {
  text-decoration: none;
  color: #333;
  font-size: 12px;
}
a:hover {
  text-decoration: none;
  color: #333;
  font-size: 12px;
}
/* topBar */
.ew-topBar {
  font-size: 14px;
  color: #333;
}
.ew-topBar > .container > .row > div {
  height: 40px;
  line-height: 40px;
  text-align: center;
}
.ew-topBar > .container > .row > div ~ div {
  border-left: 1px solid #ccc;
}
.ew-topBar .btn-register {
  border: none;
  background: #e92322;
  color: #fff;
  padding: 3px 12px;
}
.ew-app img {
  display: none;
}
.ew-app:hover img {
  display: block;
  position: absolute;
  z-index: 2;
  border-radius: 15px;
}
/* navBar */
.ew-nav {
  border: 1px solid #ccc;
  border-radius: 15px;
  .nav-item {
    margin: 0 25px;
  }
  .nav-link {
    font-size: 16px;
  }
  margin-bottom: 10px;
}
/* 轮播图 */
.pc-img {
  width: 100%;
  display: block;
  height: 400px;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
.m-img {
  display: block;
  width: 100%;
  img {
    display: block;
    width: 100%;
  }
}
//轮播图指示器颜色
.carousel-indicators .active {
  background-color: #000;
}
.carousel-control-next-icon,
.carousel-control-prev-icon {
  background-color: #000;
}
</style>
