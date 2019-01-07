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
    <section>
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
    </section>
    <!-- 信息 -->
    <section class="d-none d-sm-block ew-info">
      <div class="container">
        <div class="row">
          <div class="col-sm-6 col-md-4 ew-info-item">
            <a href="#">
              <div class="media border p-3">
                <img
                  src="@/assets/images/Photoshop.png"
                  alt="pic"
                  class="mr-3 mt-3 rounded-circle"
                  style="width:60px;"
                >
                <div class="media-body">
                  <h4>Photoshop</h4>
                  <p>学的不仅是技术，更是梦想！！！</p>
                </div>
              </div>
            </a>
          </div>
          <div class="col-sm-6 col-md-4">
            <a href="#">
              <div class="media border p-3">
                <img
                  src="@/assets/images/h5c3.png"
                  alt="pic"
                  class="mr-3 mt-3 rounded-circle"
                  style="width:60px;"
                >
                <div class="media-body">
                  <h4>H5C3</h4>
                  <p>学的不仅是技术，更是梦想！！！</p>
                </div>
              </div>
            </a>
          </div>
          <div class="col-sm-6 col-md-4">
            <a href="#">
              <div class="media border p-3">
                <img
                  src="@/assets/images/JavaScript.png"
                  alt="pic"
                  class="mr-3 mt-3 rounded-circle"
                  style="width:60px;"
                >
                <div class="media-body">
                  <h4>JavaScript</h4>
                  <p>学的不仅是技术，更是梦想！！！</p>
                </div>
              </div>
            </a>
          </div>
          <div class="col-sm-6 col-md-4">
            <a href="#">
              <div class="media border p-3">
                <img
                  src="@/assets/images/Vue.png"
                  alt="pic"
                  class="mr-3 mt-3 rounded-circle"
                  style="width:60px;"
                >
                <div class="media-body">
                  <h4>VUE</h4>
                  <p>学的不仅是技术，更是梦想！！！</p>
                </div>
              </div>
            </a>
          </div>
          <div class="col-sm-6 col-md-4">
            <a href="#">
              <div class="media border p-3">
                <img
                  src="@/assets/images/nodejs.png"
                  alt="pic"
                  class="mr-3 mt-3 rounded-circle"
                  style="width:60px;"
                >
                <div class="media-body">
                  <h4>Nodejs</h4>
                  <p>学的不仅是技术，更是梦想！！！</p>
                </div>
              </div>
            </a>
          </div>
          <div class="col-sm-6 col-md-4">
            <a href="#">
              <div class="media border p-3">
                <img
                  src="@/assets/images/MongoDB.jpg"
                  alt="pic"
                  class="mr-3 mt-3 rounded-circle"
                  style="width:60px;"
                >
                <div class="media-body">
                  <h4>MongoDB</h4>
                  <p>学的不仅是技术，更是梦想！！！</p>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
    <!-- 了解 -->
    <section class="ew-know">
      <div class="container ew-know-div">
        <div class="float-left">
          熟悉ps，h5c3，JavaScript，nodejs，...
          <a href="#" class="know">立即了解</a>
        </div>
        <div class="float-right d-none d-sm-block">
          <a href="#" class="video">
            <i class="person fa fa-tags"></i> 个人宣传片
          </a>
        </div>
      </div>
    </section>
    <!-- 产品 -->
    <section class="product">
      <div class="container ew-product">
        <!-- Nav tabs -->
        <ul class="nav nav-tabs" role="tablist">
          <li class="nav-item">
            <a class="nav-link active" data-toggle="tab" href="#home">天气</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" data-toggle="tab" href="#menu1">未定义</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" data-toggle="tab" href="#menu2">未定义</a>
          </li>
        </ul>
        <!-- Tab panes -->
        <div class="tab-content">
          <div id="home" class="container row tab-pane active">
            <!-- display的flex和none冲突 -->
            <div class="col-12 col-sm-6 col-md-4" v-for="item in weather" :key="item.adcode">
              <a href="#" class="product-box">
                <div class="product-r">
                  <span>
                    <img src="@/assets/images/weather.jpg" class="weather" alt="天气">
                  </span>
                  <p class="text-center">{{item.reporttime}}</p>
                </div>
                <div class="product-l">
                  <h3 class="text-center">{{item.province}}</h3>
                  <div class="row">
                    <div class="col-6 col-sm-6">
                      <p>地区:</p>
                      <p>{{item.city}}</p>
                    </div>
                    <div class="col-6 col-sm-6 text-right">
                      <p>天气:</p>
                      <p>{{item.weather}}</p>
                    </div>
                    <div class="col-6 col-sm-6">
                      <p>温度:</p>
                      <p>{{item.temperature}}℃</p>
                    </div>
                    <div class="col-6 col-sm-6 text-right">
                      <p>风向:</p>
                      <p>{{item.winddirection}}风{{item.windpower}}级</p>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>
          <div id="menu1" class="container tab-pane row fade">未定义</div>
          <div id="menu2" class="container tab-pane row fade">未定义</div>
        </div>
      </div>
    </section>
    <!-- 新闻 -->
    <section class="ew-news">
      <div class="container">
        <div class="row">
          <div class="col-md-2 offset-md-2">
            <h3 class="ew-news-title">全部新闻</h3>
          </div>
          <div class="col-md-1">
            <ul class="nav nav-pills">
              <li class="nav-item">
                <a class="nav-link active" data-toggle="tab" href="#home2">头条</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" data-toggle="tab" href="#menu12">国内</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" data-toggle="tab" href="#menu22">国外</a>
              </li>
            </ul>
          </div>
          <div class="col-md-7">
            <div class="tab-content">
              <div class="tab-pane active container" id="home2">
                <ul class="ew-news-text">
                  <li v-for="item in technews" :key="item.docid">
                    <a :href="item.link" target="_blank">{{item.title}}</a>
                    <span class="float-right">{{item.ptime}}</span>
                  </li>
                </ul>
              </div>
              <div class="tab-pane container" id="menu12">
                <ul class="ew-news-text">
                  <li v-for="item in toutiaonews" :key="item.docid">
                    <a :href="item.link" target="_blank">{{item.title}}</a>
                    <span class="float-right">{{item.ptime}}</span>
                  </li>
                </ul>
              </div>
              <div class="tab-pane container" id="menu22">
                <ul class="ew-news-text">
                  <li v-for="item in entnews" :key="item.docid">
                    <a :href="item.link" target="_blank">{{item.title}}</a>
                    <span class="float-right">{{item.ptime}}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- 合作伙伴 -->
    <footer class="ew-foot">
      <div class="container">
        <h3 class="text-center">技术栈</h3>
        <ul>
          <li>
            <a href="#"><img src="@/assets/images/Photoshop.png" alt=""></a>
          </li>
          <li>
            <a href="#"><img src="@/assets/images/h5c3.png" alt=""></a>
          </li>
          <li>
            <a href="#"><img src="@/assets/images/JavaScript.png" alt=""></a>
          </li>
          <li>
            <a href="#"><img src="@/assets/images/nodejs.png" alt=""></a>
          </li>
          <li>
            <a href="#"><img src="@/assets/images/Vue.png" alt=""></a>
          </li>
          <li>
            <a href="#"><img src="@/assets/images/MongoDB.jpg" alt=""></a>
          </li>
        </ul>
      </div>
    </footer>
  </div>
</template>
<script>
export default {
  name: "program",
  data() {
    return {
      img: [],
      flag: "",
      weather: [],
      technews: [],
      toutiaonews: [],
      entnews: []
    };
  },
  created() {
    this.banner();
    this.weatherData();
    this.newsData();
  },
  methods: {
    banner() {
      this.$http
        .get("http://www.energywave.top:3053/api/imgUrl")
        .then(result => {
          var isMobile = $(window).width() > 768 ? "ture" : false;
          // console.log(isMobile);
          this.flag = isMobile;
          // console.log(result.body);
          this.img = result.body;
        });
    },
    weatherData() {
      this.$http
        .get(
          "https://restapi.amap.com/v3/weather/weatherInfo?key=9d20d1bd6df3f8f952e437c9d7ff003f&city=150429"
        )
        .then(result => {
          // console.log(result.body.lives[0]);
          this.weather.push(result.body.lives[0]);
        });
      this.$http
        .get(
          "https://restapi.amap.com/v3/weather/weatherInfo?key=9d20d1bd6df3f8f952e437c9d7ff003f&city=210200"
        )
        .then(result => {
          // console.log(result.body.lives[0]);
          this.weather.push(result.body.lives[0]);
          // console.log(this.weather);
        });
      this.$http
        .get(
          "https://restapi.amap.com/v3/weather/weatherInfo?key=9d20d1bd6df3f8f952e437c9d7ff003f&city=110000"
        )
        .then(result => {
          // console.log(result.body.lives[0]);
          this.weather.push(result.body.lives[0]);
          // console.log(this.weather);
        });
      this.$http
        .get(
          "https://restapi.amap.com/v3/weather/weatherInfo?key=9d20d1bd6df3f8f952e437c9d7ff003f&city=310000"
        )
        .then(result => {
          // console.log(result.body.lives[0]);
          this.weather.push(result.body.lives[0]);
          // console.log(this.weather);
        });
      this.$http
        .get(
          "https://restapi.amap.com/v3/weather/weatherInfo?key=9d20d1bd6df3f8f952e437c9d7ff003f&city=440300"
        )
        .then(result => {
          // console.log(result.body.lives[0]);
          this.weather.push(result.body.lives[0]);
          // console.log(this.weather);
        });
      this.$http
        .get(
          "https://restapi.amap.com/v3/weather/weatherInfo?key=9d20d1bd6df3f8f952e437c9d7ff003f&city=330100"
        )
        .then(result => {
          // console.log(result.body.lives[0]);
          this.weather.push(result.body.lives[0]);
          // console.log(this.weather);
        });
    },
    newsData() {
      this.$http.get("https://www.apiopen.top/journalismApi").then(result => {
        console.log(result.body.data.tech);
        this.technews = result.body.data.tech;
        this.toutiaonews = result.body.data.toutiao;
        this.entnews = result.body.data.ent;
      });
    }
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
//信息
.ew-info {
  margin-top: 10px;
}
.ew-info-item {
  margin-bottom: 5px;
}
//know
.ew-know-div {
  padding: 40px 0;
  border-bottom: 1px dashed #ccc;
}
.ew-know .know {
  color: #e92322;
  border-bottom: 1px dashed #e92322;
}
.ew-know .video:hover {
  color: #e92322;
}
.ew-product {
  padding: 0 0 25px 0;
  margin-top: 15px;
  border-bottom: 1px solid #ccc;
}
.product-box {
  border: 1px solid #ccc;
  display: block;
  width: 100%;
  height: 150px;
  background-color: #fff;
  box-shadow: 3px 3px 5px #d8d8d8;
  margin-top: 30px;
  .row {
    p {
      margin-bottom: 8px;
      font-size: 12px;
    }
  }
  .product-r {
    text-align: center;
    width: 80px;
    height: 150px;
    float: right;
    border-left: 1px dashed #ccc;
    position: relative;
    ::after,
    ::before {
      content: "";
      position: absolute;
      height: 12px;
      width: 12px;
      border-radius: 50%;
      background-color: #fff;
      left: -6px;
    }
    ::before {
      top: -6px;
      box-shadow: 0 -2px 3px #d8d8d8 inset;
    }
    ::after {
      bottom: -6px;
      box-shadow: 0 2px 3px #d8d8d8 inset;
    }
    .weather {
      margin-top: 20px;
      margin-bottom: 20px;
      border-radius: 50%;
    }
  }
  .product-l {
    padding: 0 15px;
    overflow: hidden;
    h3 {
      font-size: 16px;
      margin-top: 10px;
    }
  }
}
.tab-pane {
  display: flex !important;
  width: 0;
  height: 0;
  overflow: hidden;
}
.active {
  display: flex !important;
  width: 100%;
  height: 100%;
  overflow: visible;
}
//新闻
.ew-news {
  height: 450px;
  overflow: hidden;
  padding: 40px 0;
  border-bottom: 1px solid #ccc;
  .ew-news-title {
    text-align: center;
    font-size: 20px;
    height: 50px;
    line-height: 50px;
    border-bottom: 1px solid #ccc;
    position: relative;
  }
}
.ew-news-title::after {
  content: "";
  position: absolute;
  right: -6px;
  bottom: -3px;
  width: 6px;
  height: 6px;
  border: 1px solid #ccc;
  border-radius: 50%;
}
.ew-news .nav-item {
  margin-bottom: 50px;
}
.ew-news-text {
  width: 100%;
  a {
    display: inline-block;
    padding: 15px 0;
    color: #666;
    font-size: 14px;
  }
  span {
    display: inline-block;
    padding: 15px 0;
    font-size: 14px;
    line-height: 14px;
  }
}
//foot
.ew-foot {
  h3 {
    padding: 30px 0;
    font-size: 24px;
  }
  ul {
    text-align: center;
    padding: 0;
    li {
      display: inline-block;
      img {
        display: block;
        width: 40px;
        height: 40px;
        margin: 0 15px;
      }
    }
  }
}
</style>
