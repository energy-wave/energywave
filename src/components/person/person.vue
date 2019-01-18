<template>
  <div class="person">
    <!-- 导航 -->
    <nav class="ew-nav">
      <div class="wrapper">
        <a href="#" class="logo"></a>
        <ul class="nav">
          <li>
            <a href="#" class="active">首页</a>
          </li>
          <li>
            <a href="#">信息</a>
          </li>
          <li>
            <a href="#">动态</a>
          </li>
        </ul>
        <div class="other">
          <ul>
            <li>
              <a href="#">留言</a>
            </li>
            <li>
              <a href="#">Program</a>
            </li>
            <li>
              <a href="#">登录</a>
            </li>
          </ul>
          <span>联系邮箱：515023802@qq.com</span>
        </div>

        <a href="#" class="register">注册</a>
      </div>
    </nav>
    <!-- 展示 -->
    <section class="ew-lbt">
      <div class="box">
        <ul class="imageBox">
          <li>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </li>
          <li>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </li>
          <li>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </li>
          <li>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </li>
          <li>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </li>
        </ul>
        <!-- 转义符 \  实体 &lt; -->
        <span class="left" @click="leftClick">&lt;</span>
        <span class="right" @click="rigrtClick">&gt;</span>
      </div>
    </section>
    <!-- 兴趣 -->
    <section class="person-look-1">
      <h1>李学博</h1>
      <div class="look-1" data-stellar-background-ratio="0.5"></div>
      <div class="content">
        <div class="piao"></div>
        <h2>Just a starting point</h2>
        <p>最美的期待，全新的起点</p>
      </div>
    </section>
    <section class="person-look-2">
      <div class="look-2" data-stellar-background-ratio="0.5"></div>
      <div class="content">
        <div class="piao"></div>
        <h2>Code，everything</h2>
        <p>前端工程，将所见掌控于代码</p>
      </div>
    </section>
    <section class="person-look-3">
      <div class="look-3" data-stellar-background-ratio="0.5"></div>
      <div class="content">
        <div class="piao"></div>
        <h2>My phone</h2>
        <p>欢迎致电157-7125-3536</p>
      </div>
    </section>
    <!-- 底部 -->
    <footer>
      <div class="content">
        <div class="info">
          <a href="#" target="_blank">
            <img src="@/assets/images/Photoshop.png" alt>
          </a>
          <a href="#" target="_blank">
            <img src="@/assets/images/h5c3.png" alt>
          </a>
          <a href="#" target="_blank">
            <img src="@/assets/images/JavaScript.png" alt>
          </a>
          <a href="#" target="_blank">
            <img src="@/assets/images/Vue.png" alt>
          </a>
        </div>
        <p>Copyright © 2018-2019 by energywave</p>
        <p>蒙ICP备18005616号</p>
      </div>
    </footer>
  </div>
</template>
<script>
export default {
  name: "person",
  data() {
    return {
      index: 1,
      timeId: 0
    };
  },
  methods: {
    leftClick() {
      var angle = -this.index-- * 90;
      this.index = this.index--;
      console.log(this.flag);
      $(".ew-lbt li")
        .css("transform", "rotateX(" + angle + "deg)")
        .each(function(i) {
          $(this).css("transition", i * 0.25 + "s");
        });
    },
    rigrtClick() {
      var angle = -this.index++ * 90;
      this.index = this.index++;
      console.log(this.index);
      $(".ew-lbt li")
        .css("transform", "rotateX(" + angle + "deg)")
        .each(function(i) {
          $(this).css("transition", i * 0.25 + "s");
        });
    },
    stellar() {
      $(function() {
        $.stellar({
          horizontalScrolling: false,
          responsive: true
        });
      });
    }
  },
  mounted() {
    this.timeId = setInterval(this.rigrtClick, 2500);
    this.stellar();
  },
  beforeUpdate() {
    clearInterval(this.timeId);
  },
  beforeDestroy() {
    clearInterval(this.timeId);
  }
};
</script>
<style lang="less" scoped>
.ew-nav {
  height: 150px;
  background: url("~@/assets/images/nav_bg.png") repeat-x;
  .wrapper {
    width: 80%;
    height: 75px;
    margin: 0 auto;
    .logo {
      width: 100px;
      height: 75px;
      background: url("~@/assets/images/person-logo.png") no-repeat center;
      float: left;
    }
    .nav {
      float: left;
      li {
        float: left;
        font-size: 18px;
        line-height: 75px;
        margin-left: 20px;
        a {
          color: #000;
          display: block;
          padding: 0 20px;
          text-decoration: none;
          &:hover {
            background-color: #12b7f5;
          }
        }
      }
    }
    .register {
      float: right;
      height: 36px;
      width: 96px;
      text-align: center;
      line-height: 36px;
      font-size: 16px;
      background: #12b7f5;
      color: #fff;
      border-radius: 18px;
      margin-top: 19px;
      text-decoration: none;
    }
    .other {
      float: right;
      width: 250px;
      height: 75px;
      ul {
        width: 250px;
        li {
          float: right;
          margin-left: 40px;
          a {
            color: #000;
            font-size: 14px;
            text-shadow: 0 0 1px #333;
            height: 50px;
            line-height: 50px;
            text-decoration: none;
          }
        }
      }
      span {
        float: right;
        color: #000;
        font-size: 14px;
      }
    }
  }
}
.ew-lbt {
  .box {
    width: 950px;
    height: 500px;
    margin: 10px auto 0;
    border: 1px solid #ccc;
    position: relative;
    .imageBox {
      list-style: none;
      width: 100%;
      height: 100%;
      li {
        width: 189.6px;
        height: 100%;
        float: left;
        position: relative;
        transform-style: preserve-3d;
        transition: all 1s;
        &:nth-child(1) {
          span {
            background-position: 0 0;
          }
        }
        &:nth-child(2) {
          span {
            background-position: -189.6px 0;
          }
        }
        &:nth-child(3) {
          span {
            background-position: -379.2px 0;
          }
        }
        &:nth-child(4) {
          span {
            background-position: -568.8px 0;
          }
        }
        &:nth-child(5) {
          span {
            background-position: -758.4px 0;
          }
        }
        span {
          position: absolute;
          left: 0;
          top: 0;
          width: 100%;
          height: 100%;
          background-repeat: no-repeat;
          &:nth-child(1) {
            background-image: url("~@/assets/images/1.jpg");
            transform: translateZ(249px);
          }
          &:nth-child(2) {
            background-image: url("~@/assets/images/2.jpg");
            transform: rotateX(90deg) translateZ(249px);
          }
          &:nth-child(3) {
            background-image: url("~@/assets/images/3.jpg");
            transform: rotateX(180deg) translateZ(249px);
          }
          &:nth-child(4) {
            background-image: url("~@/assets/images/4.jpg");
            transform: rotateX(270deg) translateZ(249px);
          }
        }
      }
    }
    .left,
    .right {
      cursor: pointer;
      position: absolute;
      width: 50px;
      height: 70px;
      background: rgba(0, 0, 0, 0.2);
      top: 215px;
      text-align: center;
      line-height: 70px;
      font-size: 20px;
      color: #fff;
      text-decoration: none;
      font-weight: bold;
    }
    .right {
      right: 0;
    }
  }
}
.person-look-1 {
  h1 {
    height: 300px;
    background: url("~@/assets/images/look-0.jpg") no-repeat center/cover;
    font-size: 0;
    margin: 0;
  }
  .look-1 {
    height: 500px;
    background: url("~@/assets/images/look-1.jpg") no-repeat center/cover;
  }
  .content {
    height: 500px;
    width: 980px;
    margin: 0 auto;
    position: relative;
    .piao {
      width: 500px;
      height: 250px;
      background: url("~@/assets/images/look-1-1.png") no-repeat center/cover;
      position: absolute;
      left: 0;
      top: 100px;
      border-radius: 15px;
      overflow: hidden;
    }
    h2 {
      float: right;
      padding-top: 100px;
      width: 500px;
      text-align: right;
      font-size: 40px;
    }
    p {
      padding-top: 50px;
      float: right;
      width: 500px;
      text-align: right;
      font-size: 18px;
      text-shadow: 0 0 2px #333;
    }
  }
}
.person-look-2 {
  .look-2 {
    height: 500px;
    background: url("~@/assets/images/look-2.jpg") no-repeat center/cover;
  }
  .content {
    height: 500px;
    width: 980px;
    margin: 0 auto;
    position: relative;
    .piao {
      width: 500px;
      height: 280px;
      background: url("~@/assets/images/look-2-2.png") no-repeat center/cover;
      position: absolute;
      right: -60px;
      top: 100px;
    }
    h2 {
      float: left;
      padding-top: 100px;
      width: 500px;
      text-align: left;
      font-size: 40px;
    }
    p {
      padding-top: 50px;
      float: left;
      width: 500px;
      text-align: left;
      font-size: 18px;
      text-shadow: 0 0 2px #333;
    }
  }
}
.person-look-3 {
  .look-3 {
    height: 500px;
    background: url("~@/assets/images/look-3.jpg") no-repeat center/cover;
  }
  .content {
    height: 500px;
    width: 980px;
    margin: 0 auto;
    position: relative;
    .piao {
      width: 700px;
      height: 700px;
      background: url("~@/assets/images/look-3-3.png") no-repeat center
        top/cover;
      position: absolute;
      left: 0;
      top: -200px;
    }
    h2 {
      float: right;
      padding-top: 100px;
      width: 500px;
      text-align: right;
      font-size: 40px;
    }
    p {
      padding-top: 50px;
      float: right;
      width: 500px;
      text-align: right;
      font-size: 18px;
      text-shadow: 0 0 2px #333;
    }
  }
}
footer {
  .content {
    height: 250px;
    background: #2a2a2a;
    font-size: 12px;
    text-align: center;
    padding-top: 50px;
    color: #666;
    .info {
      width: 800px;
      height: 150px;
      margin: 0 auto;
      display: block;
      a {
        float: left;
        text-align: center;
        font-size: 12px;
        color: #666;
        padding-top: 50px;
        width: 80px;
        margin: 0 60px;
        img {
          overflow: hidden;
          width: 80px;
          height: 80px;
          border-radius: 10px;
        }
      }
    }
    p {
      margin-bottom: 10px;
    }
  }
}
</style>
