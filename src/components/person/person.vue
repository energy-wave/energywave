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
            <a href="#">下载</a>
          </li>
          <li>
            <a href="#">动态</a>
          </li>
        </ul>
        <div class="other">
          <ul>
            <li>
              <a href="#">登录</a>
            </li>
            <li>
              <a href="#">qq安全</a>
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
        <a class="left" href="javascript:;">&lt;</a>
        <a class="right" href="javascript:;">&gt;</a>
      </div>
    </section>
    <!-- 兴趣 -->
    <section></section>
    <!-- 底部 -->
    <footer></footer>
  </div>
</template>
<script>
export default {
  name: "person"
};
</script>
<style lang="less" scoped>
.ew-nav {
  height: 150px;
  background: url("~@/assets/images/nav_bg.png") repeat-x;
  .wrapper {
    width: 1080px;
    height: 75px;
    margin: 0 auto;
    .logo {
      width: 100px;
      height: 75px;
      background: url("~@/assets/images/nav_brand.png") no-repeat center;
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
      transform-style: preserve-3d;
      .li {
        width: 112px;
        height: 100%;
        float: left;
        position: relative;
        transform-style: preserve-3d;
        transition: all 1s;
        span {
          position: absolute;
          left: 0;
          top: 0;
          width: 100%;
          height: 100%;
          // background: url("images/1.jpg") no-repeat;
          &:nth-child(1) {
            // background-image: url("images/1.jpg");
            transform: translateZ(150px);
            span {
              background-position: 0 0;
            }
          }
          &:nth-child(2) {
            // background-image: url("images/2.jpg");
            transform: rotateX(90deg) translateZ(150px);
            span {
              background-position: -112px 0;
            }
          }
          &:nth-child(3) {
            // background-image: url("images/3.jpg");
            transform: rotateX(180deg) translateZ(150px);
            span {
              background-position: -224px 0;
            }
          }
          :nth-child(4) {
            // background-image: url("images/4.jpg");
            transform: rotateX(270deg) translateZ(150px);
            span {
              background-position: -336px 0;
            }
          }
          // :nth-child(5) {
          //   span{
          //   background-position: -448px 0;
          // }
        }
      }
    }
    .left,
    .right {
      position: absolute;
      width: 50px;
      height: 70px;
      background: rgba(0, 0, 0, 0.2);
      top: 115px;
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
</style>
