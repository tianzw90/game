<template>
  <div class="avatar-tx">
    <el-row>
      <el-col :span="10" class="avatar-tx-img">
        <el-avatar :size="50" :src="circleUrl"></el-avatar>
      </el-col>
      <el-col :span="14" class="avatar-tx-text-col">
        <el-text class="avatar-tx-text">烟雨平生</el-text>
      </el-col>
    </el-row>
<!--    <el-avatar class="avatar-tx-img" :size="30" :src="circleUrl"></el-avatar>-->
<!--    <span class="avatar-tx-text">烟雨平生</span>-->
<!--    <div class="avatar-tx-img">-->
<!--      <el-avatar :size="30" :src="circleUrl"></el-avatar>-->
<!--    </div>-->
<!--    <div class="avatar-tx-text">-->
<!--      <el-text>烟雨平生</el-text>-->
<!--    </div>-->
  </div>
</template>

<script>
export default {
  name: 'MenuTop',
  data () {
    return {
      circleUrl: 'http://192.168.5.171:9000/cop-file/img/dnf-tx1.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=B1LRI3CNC6P6F0W0ICZK%2F20231129%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20231129T012324Z&X-Amz-Expires=604800&X-Amz-Security-Token=eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJhY2Nlc3NLZXkiOiJCMUxSSTNDTkM2UDZGMFcwSUNaSyIsImV4cCI6MTcwMTIyNDU2NSwicGFyZW50Ijoid2FuZ2p1bnlvbmcifQ.iiWbdKX_Niobj5mXFMohZy_QwZG9amyZEKu0S4fRAP7mxqhiHBHCps07SuW5IHhVPsQohAK1kZJLW9R182mP7A&X-Amz-SignedHeaders=host&versionId=null&X-Amz-Signature=953ffb39a56380bee8e90eec997b89f56538dcb6e8d83c35dc6383b227b842d7'
    }
  }
}
</script>

<style lang="scss" scoped>
.avatar-tx {
  float: right;
  height: 100%;
  width: 8%;
  //border: 1px solid red;
}
.avatar-tx-img {
  border-right: 1px solid var(--el-border-color);
}
.avatar-tx-text {
  position: revert;
  padding-left: 10%;
  color: #ffd04b;
}
.avatar-tx-text-col{
  margin-top: 10%;
}
</style>
