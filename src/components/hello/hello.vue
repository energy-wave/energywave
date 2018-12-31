<template>
  <div class="hello">
    <div class="center">
      <ul>
        <li>
          <router-link to="/person" tag="a">
            <img src="@/assets/images/bg.jpg" alt>
            <p>Person</p>
          </router-link>
        </li>
        <li>
          <router-link to="/program">
            <img src="@/assets/images/bg.jpg" alt>
            <p>Program</p>
          </router-link>
        </li>
        <li>
          <router-link to="/person">
            <img src="../../assets/images/bg.jpg" alt>
            <p>Person</p>
          </router-link>
        </li>
      </ul>
      <audio :src="audio" controls autoplay loop id="vd"></audio>
      <p></p>
    </div>
  </div>
</template>

<script>
import S from "../../assets/audio/bg.mp3";
export default {
  name: "hello",
  data() {
    return {
      number: 1,
      info: "",
      pic: "",
      audio: S
    };
  },
  mounted() {
    this.toggleSound();
  },
  methods: {
    // toggleSound() {
    //   var music = document.getElementById("vd");
    //   console.log(music);
    //   music.paused = false;
    //   console.log(music.paused);
    //   music.play();
    //   console.log(music.paused);
    // }
  }
};
$(function() {
  alert("推荐使用谷歌浏览器访问");
});
</script>

<style scoped lang="less">
.hello {
  width: 100%;
  height: 100%;
  background-image: url("~@/assets/images/bg.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  overflow: hidden;
}
ul {
  width: 70%;
  border: 1px solid #ccc;
  overflow: hidden;
  margin: 150px auto 0;
  background-color: rgba(0, 0, 0, 0.3);
  border-radius: 10px;
}
li {
  width: 30%;
  float: left;
  margin: 30px 1.5%;
  opacity: 0.8;
  img {
    width: 100%;
    border-radius: 20px;
    overflow: hidden;
    display: inline-block;
    box-shadow: 1px 1px 5px #000;
  }
  p {
    color: #fff;
    text-align: center;
    margin: 10px 0;
  }
  a {
    text-decoration: none;
  }
}
.center {
  text-align: center;
}
audio {
  opacity: 1;
  display: inline-block;
  width: 300px;
  height: 100px;
  margin: 0 auto 100px;
}
</style>
