<template>
	<div class="app-container">
		<form>
			<div class="row">
				<label for="username">帐号</label>
				<input type="text" v-model="formData.username" name="username" placeholder="请输入帐号">
			</div>
			<div class="row">
				<label for="password">密码</label>
				<input type="password" v-model="formData.password" placeholder="请输入密码">
			</div>
			<div class="row">
				<label for="email">邮箱</label>
				<input type="email" v-model="formData.email" placeholder="请输入邮箱">
			</div>
			<div class="row btns">
				<button type="button" @click="corfirm">确定注册</button>
				<button type="button" @click="signin">帐号登录?</button>
			</div>
		</form>
	</div>
</template>
<style lang="scss" scoped>
@import "../../../styles/variables.scss";

.app-container {
  padding: 0.5rem;
  .row {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0.5rem 0;
    border-bottom: 0.05rem solid $color_border_light;
  }
  input[type] {
    height: 1.5rem;
    line-height: 1.5rem;
    width: 50%;
    margin-left: 1rem;
    border: none;
    outline: none;
    text-indent: 0.5rem;
    color: $color_font_mid;
    border-radius: 0.2rem;
  }
  .btns {
    justify-content: space-around;
  }
  button {
    padding: 0;
    height: 1.5rem;
    width: 42%;
    border: none;
    color: #fff;
    background-color: $color_cyan;
  }
}
</style>

<script lang="ts">
import { Component, Vue, Watch } from "vue-property-decorator";

@Component
export default class Signup extends Vue {
  formData: any = {
    username: "",
    password: "",
    email: "",
  };
  @Watch("formData", { deep: true })
  onFormDataChanged() {
    localStorage.setItem("signup", JSON.stringify(this.formData));
  }
  corfirm() {
    localStorage.setItem("accessToken", "9527");
    localStorage.removeItem("signup");
    let redirect = location.href.match(/redirect=(.*)+/);
    if (redirect) {
      return (location.href = decodeURIComponent(redirect[1]));
    }
    location.href = "/user/bookshelf.html";
  }
  signin() {
    let redirect = location.href.match(/redirect=(.*)+/);
    if (redirect) {
      return (location.href = "/user/signin.html?redirect=" + redirect[1]);
    }
    location.href = "/user/signin.html";
  }
  created() {
    let signup = localStorage.getItem("signup");
    if (signup) {
      this.formData = JSON.parse(signup);
    }
  }
}
</script>
