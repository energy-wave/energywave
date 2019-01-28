<template>
  <div>
    <h2>留言板</h2>
    <form action="http://www.energywave.top:3053/message/new" method="post">
      名字
      <input type="text" name="name">
      消息
      <textarea name="msg" id="text" cols="30" rows="10"></textarea>
      <input type="submit" value="提交">
      <router-link tag="button" to="/p3c">全部留言</router-link>
    </form>
  </div>
</template>
<style lang="less" scoped>
div {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  form {
    width: 300px;
    height: 500px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    textarea {
      resize: none;
    }
  }
}
</style>
