<template>
    <div>
        <ValidationObserver v-slot="{ handleSubmit,changed }">
            <form @submit.prevent="handleSubmit(enterUser)">
                <ValidationProvider rules="required|email" name="email" v-slot="{errors,valid}">
                    <Input type="email" placeholder="E-mail" :isValid="valid" :message="errors[0]" v-model="email" @inputValue="email = $event" />
                </ValidationProvider>
                <ValidationProvider rules="required" name="password" v-slot="{errors,valid}">
                    <Input type="password" classes="password" placeholder="Пароль" :isValid="valid" :message="errors[0]" v-model="password" @inputValue="password = $event" />
                </ValidationProvider>
                <div class="registration__checkbox">
                    <label class="checkbox checkbox_registration">
                        <input type="checkbox" class="checkbox__input" v-model="rememberMe">
                        <span class="checkbox__custom"></span>
                        <span class="checkbox__text checkbox__text_me">Запомнить меня</span>
                    </label>
                <a href="#">Забыли пароль?</a>
            </div>
                <div class="registration__button">
                    <Button type="submit" class="button button_green button__registration" value="Войти"/>
                    <router-link tag="li" to="/registration">
                        <a class="button button__registration">Регистрация</a>
                    </router-link>
                    <!-- <a href="#" class="button button__registration">Регистрация</a> -->
                </div>
                <p v-if="changed">cdddd</p>
            </form>
        </ValidationObserver>
        <!-- <pre>{{this.authUser}}</pre> -->
    </div>
</template>
<script>
import Input from "../input/input"
import Button from "../button/button"
import {mapGetters,mapActions} from "vuex"
    export default {
        data() {
            return {
                email:'',
                password:'',
                rememberMe:false,
                isUser:false,
            }
        },
        computed: {
            ...mapGetters(['getUser']),
            authUser:function() {
                return this.getUser.filter(item => {
                    if (this.email == item.email && this.password == item.password) {
                        this.isUser = true
                    } else {
                        this.isUser = false
                    }
                });
            }
        },
        mounted() {
            this.$store.dispatch('getUserAction')

        },
        methods: {
            enterUser:function() {
                if (this.isUser) {
                    this.$router.push('/')
                } 
            },
        },
        components: {
            Input,
            Button
        }
    }
</script>

<style lang="scss" scoped>

</style>