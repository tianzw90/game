<template>
  <el-card class="page-container">
    <el-row class="row-top">
      <!--   表单     -->
      <el-form ref="form" inline :model="form" :rules="formRules">
        <el-form-item class="w30" label="节日套名称" prop="festivalName">
          <el-input v-model="form.festivalName" readonly suffix-icon="more" @click="openToFestivalSelectDialog" />
        </el-form-item>
        <el-form-item class="w30" label="节日套价格" prop="festivalPrice">
          <el-input v-model="form.festivalPrice" type="number" disabled>
            <template v-slot:append>元/套</template>
          </el-input>
        </el-form-item>
        <el-form-item class="w30" label="金币比例" prop="goldRatio">
          <el-input v-model="form.goldRatio" readonly suffix-icon="more" @click="openToGoldSelectDialog" />
        </el-form-item>
        <el-form-item class="w30" label="购买数量" prop="buyNum">
          <el-input v-model="form.buyNum" />
        </el-form-item>
        <el-form-item class="w30" label="九折券数量" prop="nineDiscountNum">
          <el-input v-model="form.nineDiscountNum" />
        </el-form-item>
        <el-form-item class="w30" label="拍卖行优惠卷" prop="isAuction">
          <el-select v-model="form.isAuction">
            <el-option label="是" value="1" />
            <el-option label="否" value="0" />
          </el-select>
        </el-form-item>
      </el-form>
      <div class="form-btn">
        <el-button @click="clearForm">清 除</el-button>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <el-button type="primary" @click="calculation">计 算</el-button>
      </div>
    </el-row>
    <el-row class="row-bottom">
      <el-card>
        <el-form ref="form" inline :model="formVo" disabled>
          <el-form-item class="w30" label="总价格" prop="totalPrice">
            <el-input v-model="formVo.totalPrice" />
          </el-form-item>
          <el-form-item class="w30" label="九折每套优惠" prop="nineDiscountPrice">
            <el-input v-model="formVo.nineDiscountPrice" />
          </el-form-item>
          <el-form-item class="w30" label="七折每套优惠" prop="sevenDiscountPrice">
            <el-input v-model="formVo.sevenDiscountPrice" />
          </el-form-item>
          <el-form-item class="w30" label="九折总优惠" prop="nineTotalDiscountPrice">
            <el-input v-model="formVo.nineTotalDiscountPrice" />
          </el-form-item>
          <el-form-item class="w30" label="总优惠" prop="totalDiscountPrice">
            <el-input v-model="formVo.totalDiscountPrice" />
          </el-form-item>
          <el-form-item class="w30" label="购买价" prop="buyPrice">
            <el-input v-model="formVo.buyPrice" />
          </el-form-item>
          <el-form-item class="w30" label="金币" prop="buyGold">
            <el-input v-model="formVo.buyGold" />
          </el-form-item>
        </el-form>
      </el-card>
    </el-row>

    <el-dialog v-model="dialogFormVisibleFestival" title="节日套选择" width="60%" top="10vh">
      <festival-select-cpt ref="festivalSelectCpt" />
      <div class="form-btn">
        <el-button @click="dialogFormVisibleFestival = false">关 闭</el-button>
        <el-button type="primary" @click="confirmFestival">确 定</el-button>
      </div>
    </el-dialog>

    <el-dialog v-model="dialogFormVisibleGold" title="金币比例选择" width="60%" top="10vh">
      <gold-select-cpt ref="goldSelectCpt" />
      <div class="form-btn">
        <el-button @click="dialogFormVisibleGold = false">关 闭</el-button>
        <el-button type="primary" @click="confirmGold">确 定</el-button>
      </div>
    </el-dialog>
  </el-card>
</template>

<script>
import GoldSelectCpt from '@/views/dnf/components/GoldSelectCpt'
import FestivalSelectCpt from '@/views/dnf/components/FestivalSelectCpt'
export default {
  name: 'DnfFestivalCalculation',
  components: {
    FestivalSelectCpt,
    GoldSelectCpt
  },
  data () {
    return {
      dialogFormVisibleGold: false,
      dialogFormVisibleFestival: false,
      formVo: {},
      formRules: {
        festivalName: [
          { required: true, message: '请输入节日套名称', trigger: 'blur' }
        ],
        festivalPrice: [
          { required: true, message: '请输入节日套价格', trigger: 'blur' }
        ],
        goldRatio: [
          { required: true, message: '请输入金币比例', trigger: 'blur' }
        ],
        buyNum: [
          { required: true, message: '请输入购买数量', trigger: 'blur' }
        ],
        nineDiscountNum: [
          { required: true, message: '请输入九折卷数量', trigger: 'blur' }
        ],
        isAuction: [
          { required: true, message: '请选择是否持有拍卖行优惠券', trigger: 'blur' }
        ]
      },
      formTitle: '节日套计算',
      form: {}
    }
  },
  mounted () {
  },
  methods: {
    confirmGold () {
      const data = this.$refs.goldSelectCpt.goSelected()
      this.form.goldRatio = data.goldRatio
      this.dialogFormVisibleGold = false
    },
    openToGoldSelectDialog () {
      this.dialogFormVisibleGold = true
    },
    confirmFestival () {
      const data = this.$refs.festivalSelectCpt.goSelected()
      this.form.festivalName = data.festivalName
      this.form.festivalPrice = data.festivalPrice
      this.dialogFormVisibleFestival = false
    },
    openToFestivalSelectDialog () {
      this.dialogFormVisibleFestival = true
    },
    clearForm () {
      this.form = {}
      this.formVo = {}
    },
    calculation () {
      const _self = this
      this.request.postAxios({
        url: '/dnfFestivalCalculation/calculation',
        data: _self.form
      }).then(response => {
        _self.formVo = response.data.result
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.form-btn {
  margin-left: 40%;
  margin-top: 10%;
}
.row-bottom {
  margin-top: 15%;
}
</style>
