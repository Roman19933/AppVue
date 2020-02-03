<template>
  <div>
    <ValidationObserver v-slot="{ handleSubmit }">
      <form @submit.prevent="handleSubmit(updateUser)">
        <div class="person__form">
          <div class="person__form-input">
            <div class="person__info">
              <h2 class="person__info-title">Персональные данные</h2>
              <div class="person__info-input">
                <Input type="text" placeholder="ФИО" :value="fio" @inputValue="fio = $event" />
              </div>
            </div>
            <div class="person__info">
              <h2 class="person__info-title">Контактные данные</h2>
              <div class="person__info-input">
                <Input
                  type="email"
                  placeholder="E-mail"
                  :value="email"
                  @inputValue="email = $event"
                />
                <Input
                  type="text"
                  mask="+38 (999)-999-99-99"
                  placeholder="+38 (___)-___-__-__"
                  :value="phone"
                  @inputValue="phone = $event"
                />
              </div>
            </div>
            <div class="person__info">
              <h2 class="person__info-title">Изменить пароль</h2>
              <div class="person__info-input">
                <Input
                  type="password"
                  width
                  placeholder="Старый пароль"
                  classes="password"
                  :value="oldPassword"
                  @inputValue="oldPassword = $event"
                />
                <ValidationProvider rules="min:6" name="пароль" v-slot="{errors,valid}" vid="pass">
                  <Input
                    :isValid="valid"
                    :message="errors[0]"
                    type="password"
                    width
                    placeholder="Новый пароль"
                    classes="password"
                    :value="newPassword"
                    @inputValue="newPassword = $event"
                  />
                </ValidationProvider>
                <ValidationProvider
                  rules="confirmed:pass"
                  name="повторный пароль"
                  v-slot="{errors,valid}"
                >
                  <Input
                    :isValid="valid"
                    :message="errors[0]"
                    type="password"
                    width
                    placeholder="Повторите пароль"
                    classes="password"
                    :value="rePassword"
                    @inputValue="rePassword = $event"
                  />
                </ValidationProvider>
              </div>
            </div>
          </div>
          <!-- <button type="submit" class="button button_green">Сохранить все изменения</button> -->
          <Button value="Сохранить все изменения" type="submit" classes="button button_green" />
        </div>
      </form>
    </ValidationObserver>
  </div>
</template>

<script>
import Input from "../input/input";
import Button from "../button/button";
export default {
  data() {
    return {
      fio: this.userAuthId.fio,
      email: this.userAuthId.email,
      phone: this.userAuthId.phone,
      oldPassword: this.userAuthId.password,
      newPassword: this.userAuthId.password,
      rePassword: this.userAuthId.repassword
    };
  },
  props: {
    userAuthId: {
      type: Object,
      default: null
    }
  },
  methods: {
    updateUser: async function() {
      await this.axios.put(
        `http://localhost:3000/users/${this.userAuthId.id}`,
        {
          fio: this.fio,
          email: this.email,
          phone: this.phone,
          password: this.newPassword,
          repassword: this.newPassword
        }
      );
      this.newPassword = this.rePassword = "";
      // this.$store.dispatch("updateUser", this.userAuthId.id, {
      //   fio: this.fio,
      //   email: this.email,
      //   phone: this.phone,
      //   password: this.newPassword,
      //   repassword: this.newPassword
      // });
      console.log("ok");
    }
  },
  mounted() {
    console.log(this.userAuthId.id);
  },
  components: {
    Input,
    Button
  }
};
</script>

<style lang="scss" scoped>
</style>