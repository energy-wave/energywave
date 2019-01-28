<template>
  <div>
    <table>
      <thead>
        <tr>
          <th>姓名</th>
          <th>内容</th>
          <th>时间</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in list" :key="item.id">
          <td>{{item.name}}</td>
          <td>{{item.msg}}</td>
          <td>{{item.date}}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
export default {
  name: "p3c",
  data() {
    return {
      list: []
    };
  },
  created() {
    this.getLists();
  },
  methods: {
    getLists() {
      this.$http.get("http://www.energywave.top:3053/message").then(result => {
        this.list = result.body;
      });
    }
  }
};
</script>
<style lang="less" scoped>
div {
  width: 960px;
  margin: 0 auto;
  table {
    width: inherit;
    word-break: break-all;
    white-space: normal;
    // min-height: 60%;
    th,
    td {
      display: inline-block;
      width: 320px;
      height: 100px;
      border: 1px dashed #ccc;
      overflow: hidden;
      text-overflow: ellipsis;
      overflow: hidden;
    }
  }
}
</style>
