<template>
  <div class="p2">
    <div class="search">
      <input type="text" placeholder="请输入歌曲名称" v-model="songId">
      <router-link :to="{ path: '/p2c', query: { name: songId }}" tag="button">检索</router-link>
    </div>
  </div>
</template>
<script>
export default {
  name: "p2",
  data() {
    return {
      songId: ""
    };
  },
  created() {
    this.text();
  },
  methods: {
    text() {
      console.log(this.songId);
    }
  }
};
</script>
<style lang="less" scoped>
.p2 {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
