<template>
  <div class="login">
    <el-row class="loginContent">
      <!-- 左侧 -->
      <el-col :lg="16" :md="12" class="left"> 欢迎光临 </el-col>
      <!-- 右侧 -->
      <el-col :lg="8" :md="12" class="right">
        <h2>欢迎回来</h2>
        <div class="rightContent">
          <span class="h-[1px] bg-gray-200 w-16"></span>
          <div class="mx-2">账号密码登录</div>
          <span class="h-[1px] bg-gray-200 w-16"></span>
        </div>

        <el-form
          ref="ruleFormRef"
          :model="ruleForm"
          :rules="rules"
          class="demo-ruleForm w-[250px]"
          :size="formSize"
          status-icon
        >
          <el-form-item prop="username">
            <el-input
              v-model.trim="ruleForm.username"
              placeholder="请输入用户名"
              :prefix-icon="User"
            />
          </el-form-item>
          <el-form-item prop="password">
            <el-input
              show-password
              v-model.trim="ruleForm.password"
              placeholder="请输入密码"
              :prefix-icon="Lock"
            />
          </el-form-item>
          <el-form-item>
            <el-button
              type="primary"
              class="w-[250px]"
              @click="submitForm(ruleFormRef)"
              round
            >
              登录
            </el-button>
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>
  </div>
</template>
<script setup lang="ts">
import { Lock, User } from '@element-plus/icons-vue'
import { reactive, ref } from 'vue'
import type { FormInstance, FormRules } from 'element-plus'

const formSize = ref('default')
const ruleFormRef = ref<FormInstance>()
const ruleForm = reactive({
  username: '',
  password: ''
})

const rules = reactive<FormRules>({
  username: [{ required: true, message: '请输入用户名', trigger: 'blur' }],
  password: [{ required: true, message: '请输入密码', trigger: 'blur' }]
})

const submitForm = async (formEl: FormInstance | undefined) => {
  if (!formEl) return
  await formEl.validate((valid, fields) => {
    if (valid) {
      console.log('submit!')
    } else {
      console.log('error submit!', fields)
    }
  })
}
</script>
<style lang="scss">
.login {
  width: 100vw;
  height: 100vh;

  .loginContent {
    @apply bg-indigo-500 min-h-screen;

    .left {
      @apply flex justify-center items-center text-light-50 mb-4 font-bold text-sm;
    }
    .right {
      @apply bg-light-50 flex justify-center items-center flex-col;

      h2 {
        @apply font-bold text-3xl my-5 text-gray-800;
      }

      .rightContent {
        @apply text-gray-300 my-5 flex items-center justify-center;
      }
    }
  }
}
@media only screen and (min-width: 992px) {
  .el-col-lg-16 {
    display: flex !important;
  }
  .el-col-md-12 {
    display: flex !important;
  }
  .el-col-lg-8 {
    display: flex !important;
  }
}
</style>
