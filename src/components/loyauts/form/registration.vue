<template>
    <div>
        <ValidationObserver v-slot="{ handleSubmit }">
            <form @submit.prevent="handleSubmit(onSubmit)">
                <ValidationProvider rules="required" name="ф.и.о" v-slot="{errors,valid}">
                    <Input type="text" placeholder="ФИО" :isValid="valid" :message="errors[0]" v-model="fio" @inputValue="fio = $event"/>
                </ValidationProvider>
                <ValidationProvider rules="required|email" name="Е-мейл" v-slot="{errors,valid}">
                    <Input type="email" placeholder="E-mail" :isValid="valid" :message="errors[0]" v-model="email" @inputValue="email = $event"/>
                </ValidationProvider>
                <ValidationProvider rules="required" name="телефон" v-slot="{errors,valid}">
                    <Input type="text"  mask="+38 (999)-999-99-99"  :isValid="valid" :message="errors[0]" placeholder="+38 (___)-___-__-__" v-model="phone" @inputValue="phone = $event"/>
                </ValidationProvider>
                <ValidationProvider rules="required|min:6" name="пароль" v-slot="{errors,valid}" vid="confirmation">
                    <Input type="password" placeholder="Пароль" classes="password" :isValid="valid" :message="errors[0]" v-model="password" @inputValue="password = $event"/>
                </ValidationProvider>
                <ValidationProvider rules="required|confirmed:confirmation" name="повторный пароль" v-slot="{errors,valid}">
                    <Input type="password" placeholder="Повторите пароль" :isValid="valid" :message="errors[0]" classes="password" v-model="repassword" @inputValue="repassword = $event"/>
                </ValidationProvider>
                <Button value="Зарегистрироваться" type="submit" classes="button button_green button__registration" />
            </form>
        </ValidationObserver>
    </div>
</template>

<script>
import Input from "../input/input"
import Button from "../button/button"
    export default {
        data(){
            return{
                fio:'',
                email:'',
                phone:'',
                password:'',
                repassword:'',
            }
        },
        methods: {
            onSubmit:function() {
               return console.log('ok')
            }
        },
        components: {
            Input,
            Button,
        }
    }
</script>

<style lang="scss" scoped>

</style>