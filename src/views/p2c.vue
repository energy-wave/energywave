<template>
  <div class="music">
    <table>
      <thead>
        <tr>
          <th>title</th>
          <th>author</th>
          <th>picture</th>
          <th>play</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in list" :key="item.songid">
          <td>{{item.title}}</td>
          <td>{{item.author}}</td>
          <td>
            <img :src="item.pic">
          </td>
          <td>
            <audio :src="item.url" controls controlslist="nodownload"></audio>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
export default {
  name: "p2c",
  data() {
    return {
      song: "",
      list: []
    };
  },
  created() {
    this.getList();
  },
  methods: {
    getList() {
      this.$http
        .get(
          "https://api.apiopen.top/searchMusic?name=" + this.$route.query.name
        )
        .then(result => {
          this.list = result.body.result;
        });
    }
  }
};
</script>
<style lang="less" scoped>
.music {
  display: flex;
  justify-content: center;
  table {
    width: 80%;
    text-align: center;
    th,
    td {
      border: 1px solid #ccc;
    }
  }
}
</style>
