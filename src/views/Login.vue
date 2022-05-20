<template>
  <div class="login_container">
    <div class="login_form">
      <div class="title">
        <h3>电商系统后台登录</h3>
      </div>
      <el-form :model="ruleForm" :rules="rules" ref="ruleForm" class="form">
        <el-form-item prop="username">
          <el-input
            v-model="ruleForm.username"
            placeholder="请输入用户名"
            prefix-icon="el-icon-user"
          ></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input
            type="password"
            v-model="ruleForm.password"
            placeholder="请输入密码"
            show-password
            prefix-icon="el-icon-lock"
          ></el-input>
        </el-form-item>

        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm')"
            >登录</el-button
          >
          <el-button @click="resetForm('ruleForm')">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      ruleForm: {
        username: "admin",
        password: "12345678",
      },
      rules: {
        name: [
          { required: true, message: "请输入用户名", trigger: "blur" },
          { min: 3, max: 5, message: "长度在 3 到 16 个字符", trigger: "blur" },
        ],
        password: [
          { required: true, message: "请输入密码", trigger: "blur" },
          {
            min: 8,
            max: 18,
            message: "长度在 8 到 18 个字符",
            trigger: "blur",
          },
        ],
      },
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          let myParams = new URLSearchParams();
          myParams.append("username", this.ruleForm.username);
          myParams.append("password", this.ruleForm.password);

          let res = this.$api.post("/user/backLogin", myParams, {
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
          });
          console.log(res);
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
  },
};
</script>

<style less scoped>
.login_container {
  width: 100%;
  height: 100vh;
  background-color: #ddd;
  background-repeat: no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
}
.login_form {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  /* gap: 10px; */
  width: 600px;
  height: 320px;
  padding: 20px;
  border-radius: 10px;
  background-color: #ccc;
}
.title {
  font-size: 30px;
  color: #aaa;
}
.form {
  width: 60%;
  display: flex;
  flex-direction: column;
  gap: 5px;
}
</style>
