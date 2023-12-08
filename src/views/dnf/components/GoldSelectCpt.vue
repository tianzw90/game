<template>
  <el-card class="page-container">
    <!--   查询条件     -->
    <template #header>
      <div class="header">
        <el-form class="clear map-search" inline :model="searchForm">
          <el-form-item class="w30" label="比例">
            <el-input v-model="searchForm.goldRatio" placeholder="比例" type="number" />
          </el-form-item>

          <el-form-item class="w30" label="日期">
            <el-date-picker v-model="searchForm.dateTime" :editable="false" type="daterange" range-separator="至" start-placeholder="开始时间" end-placeholder="结束时间" />
          </el-form-item>
        </el-form>
      </div>
    </template>

    <!--   按钮     -->
    <el-row class="map-button">
      <el-col :span="12">
      </el-col>
      <el-col :span="12" align="right">
        <el-button type="primary" icon="search" @click="getList()">查询</el-button>
        <el-button icon="refresh" @click="resetSearch()">重置</el-button>
      </el-col>
    </el-row>

    <!--   列表     -->
    <el-table
      ref="table"
      tooltip-effect="dark"
      stripe
      :data="table.tableData"
      border
      :height="tableHeight-640"
      @row-click="rowClick"
      @selection-change="handleSelectionChange">
      <el-table-column type="selection" />
      <el-table-column prop="goldRatio" label="比例" width="120" />
      <el-table-column prop="dateTime" label="日期" width="180" :formatter="commonUtils.formatDate" />
      <el-table-column prop="createName" label="创建人" width="120" />
      <el-table-column prop="createTime" label="创建时间" width="180" :formatter="commonUtils.formatDate" />
      <el-table-column fixed="right" label="操作" width="120">
        <template #default="scope">
          <el-button link type="primary" size="small" @click.prevent="goDetail(scope.row, true)">查看</el-button>
        </template>
      </el-table-column>
    </el-table>

    <!--   分页     -->
    <div class="map-pagination">
      <el-pagination
        v-model:current-page="table.curPageNum"
        v-model:page-size="defaultSearch.params.pageSize"
        :page-sizes="commonUtils.paginationPageSize()"
        layout="total, sizes, prev, pager, next, jumper"
        background
        :total="table.total"
      />
    </div>

    <!--   表单     -->
    <el-drawer class="drawer-dialog" :title="formTitle" size="50%" v-model="dialogFormVisible">
      <el-form ref="form" inline :model="form" :rules="formRules" :disabled="disabled">
        <el-form-item class="w30" label="比例" prop="goldRatio">
          <el-input v-model="form.goldRatio" type="number">
            <template v-slot:append>/元</template>
          </el-input>
        </el-form-item>
        <el-form-item class="w30" label="日期" prop="dateTime">
          <el-date-picker
            v-model="form.dateTime"
            type="date"
            placeholder="选择日期"
            clearable
          />
        </el-form-item>
      </el-form>
      <div class="form-btn">
        <el-button @click="dialogFormVisible = false">关 闭</el-button>
      </div>
    </el-drawer>
  </el-card>
</template>

<script>

export default {
  name: 'DnfGold',
  data () {
    return {
      isRowClick: false,
      multipleSelection: [],
      disabled: false,
      formRules: {
        goldRatio: [
          { required: true, message: '请输入比例', trigger: 'blur' }
        ],
        dateTime: [
          { required: true, message: '请选择日期', trigger: 'blur' }
        ]
      },
      dialogFormVisible: false,
      formTitle: '金币比例信息',
      form: {},
      table: {
        tableData: [],
        page: 1,
        total: null,
        curPageNum: 1
      },
      defaultSearch: {
        params: { page: 1, pageSize: 20, sorter: 'dateTime=desc' }
      },
      searchForm: {}
    }
  },
  mounted () {
    this.getList(1)
  },
  methods: {
    goSelected () {
      if (this.multipleSelection.length > 1) {
        this.$message.info('只能选择一条。')
      }
      if (this.multipleSelection.length <= 0) {
        this.$message.info('请至少选择一条。')
      }
      return this.multipleSelection[0]
    },
    goDetail (rowData, disabled) {
      this.disabled = disabled
      this.isRowClick = true
      this.getOne(rowData)
    },
    getOne (rowData) {
      const _self = this
      this.request.getAxiosWithNoMsg({
        url: '/dnfGold/' + rowData.id
      }).then(response => {
        _self.form = response.data.result
        _self.dialogFormVisible = true
      })
    },
    /**
     * 行点击
     * */
    rowClick (row) {
      if (!this.isRowClick) {
        this.$refs.table.toggleRowSelection(row)// 切换选中
      } else {
        this.isRowClick = false
      }
    },
    /**
     * 选中
     * */
    handleSelectionChange (val) {
      this.multipleSelection = val
    },
    /**
     * 重置查询
     * */
    resetSearch () {
      this.searchForm = {}
      delete this.defaultSearch.params.filter// 移除对象的某个属性
      delete this.defaultSearch.params.otherFilter// 移除对象的某个属性
      this.getList(1)
    },
    /**
     * 获取列表
     * */
    getList (page) {
      const _self = this
      const filter = _self.commonUtils.getDefaultFilter(_self.searchForm)// 拼接查询条件
      _self.defaultSearch.params.filter = filter
      _self.defaultSearch.params.page = page
      // 请求到后台
      _self.request.getAxiosWithNoMsg(
        {
          url: '/dnfGold',
          params: _self.defaultSearch.params
        }
      ).then(function (response) {
        _self.table.tableData = response.data.result.records
        _self.table.total = response.data.result.total
        _self.table.curPageNum = page
        console.log('total:', response.data.result.total)
        console.log('curPageNum:', page)
      })
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
