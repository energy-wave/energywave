<template>
  <div class="about">
    <p>App By 李学博</p>
    <div class="about-p">
      <router-link class="one" to="/p1">计算器</router-link>
      <router-link class="two" to="/p2">点歌台</router-link>
      <router-link class="three" to="/p3">留言</router-link>
      <router-link class="four" to="/p1">关于</router-link>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="less" scoped>
.about {
  display: flex;
  flex-direction: column;
  align-items: center;
  p {
    height: 100px;
    line-height: 100px;
    text-align: center;
    color: rgb(107, 22, 187);
  }
  .about-p {
    display: flex;
    border: 1px solid #000;
    width: 500px;
    height: 500px;
    align-items: top;
    flex-wrap: wrap;
    text-align: center;
    .one {
      flex: 0 0 50%;
      height: 250px;
      line-height: 250px;
      border-right: 1px solid #000;
      border-bottom: 1px solid #000;
      background-color: orange;
    }
    .two {
      flex: 0 0 50%;
      height: 250px;
      line-height: 250px;
      background-color: orange;
      border-bottom: 1px solid #000;
    }
    .three {
      flex: 0 0 50%;
      height: 250px;
      background-color: orange;
      border-right: 1px solid #000;
      border-bottom: 1px solid #000;
      line-height: 250px;
    }
    .four {
      flex: 0 0 50%;
      height: 250px;
      line-height: 250px;
      background-color: #ccc;
      border-bottom: 1px solid #000;
    }
  }
}
</style>
