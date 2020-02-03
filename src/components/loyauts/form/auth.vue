<template>
  <div>
    <ValidationObserver v-slot="{ handleSubmit,changed }">
      <form @submit.prevent="handleSubmit(authUser)">
        <ValidationProvider rules="required|email" name="email" v-slot="{errors,valid}">
          <Input
            type="email"
            placeholder="E-mail"
            :isValid="valid"
            :message="errors[0]"
            :value="email"
            @inputValue="email = $event"
          />
        </ValidationProvider>
        <ValidationProvider rules="required" name="password" v-slot="{errors,valid}">
          <Input
            type="password"
            classes="password"
            placeholder="Пароль"
            :isValid="valid"
            :message="errors[0]"
            :value="password"
            @inputValue="password = $event"
          />
        </ValidationProvider>
        <div class="registration__checkbox">
          <label class="checkbox checkbox_registration">
            <input type="checkbox" class="checkbox__input" v-model="rememberMe" />
            <span class="checkbox__custom"></span>
            <span class="checkbox__text checkbox__text_me">Запомнить меня</span>
          </label>
          <a href="#">Забыли пароль?</a>
        </div>
        <div class="registration__button">
          <Button type="submit" class="button button_green button__registration" value="Войти" />
          <router-link tag="li" to="/registration">
            <a class="button button__registration">Регистрация</a>
          </router-link>
        </div>
        <p v-if="changed">cdddd</p>
      </form>
    </ValidationObserver>
    <pre>{{this.getUser}}</pre>
  </div>
</template>
<script>
import Input from "../input/input";
import Button from "../button/button";
import { mapGetters, mapActions } from "vuex";
export default {
  data() {
    return {
      email: "",
      password: null,
      rememberMe: false
      //   users: JSON.parse(localStorage.getItem("user"))
    };
  },
  computed: {
    ...mapGetters(["getUser"])
  },
  mounted() {
    this.$store.dispatch("getUserAction");
    // this.$store.dispatch('getUseId')
    // const userId = JSON.parse(localStorage.getItem('user')).findIndex(item => {
    //             return item.id == JSON.parse(localStorage.getItem('userId'))
    //         })
    // localStorage.setItem("user1",JSON.stringify(userId))
    // console.log(userId)
    // console.log(JSON.parse(localStorage.getItem('userId')))
    // console.log(this.getUseId)
    // console.log(this.getUser);
    // console.log(this.users[0].email);
  },
  methods: {
    authUser: function() {
      const userId = this.getUser.filter(item => {
        if (item.email == this.email && item.password == this.password) {
          localStorage.setItem("userId", JSON.stringify(item));
          this.$router.push("/profile");
        }
      });
      console.log(this.getUser);
    }
  },
  components: {
    Input,
    Button
  }
};
</script>

<style lang="scss" scoped>
</style>