<template>
<!--  <el-table :data="tableData" border style="width: 100%">-->
<!--    <el-table-column prop="date" label="日期" width="180" />-->
<!--    <el-table-column prop="name" label="名字" width="180" />-->
<!--    <el-table-column prop="address" label="地址" />-->
<!--  </el-table>-->
  <div class="menu-bottom"></div>
</template>

<script>
export default {
  name: 'MenuBottom',
  data () {
    return {
      tableData: [
        {
          date: '2016-05-03',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles'
        },
        {
          date: '2016-05-02',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles'
        },
        {
          date: '2016-05-04',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles'
        },
        {
          date: '2016-05-01',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.menu-bottom {
  width: 100%;
  height: 100%;
  background-image: url("../../assets/dnf1.png");
}
</style>
