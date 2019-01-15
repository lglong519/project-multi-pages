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
			<div class="row btns">
				<button type="button" @click="corfirm">确定登录</button>
				<button type="button" @click="signup">注册帐号?</button>
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
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Home extends Vue {
  formData: any = {
    username: "",
    password: "",
  };
  corfirm() {
    localStorage.setItem("accessToken", "9527");
    location.href = "/user/bookshelf.html";
  }
  signup() {
    location.href = "/user/signup.html";
  }
}
</script>
