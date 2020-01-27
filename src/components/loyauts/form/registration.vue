<template>
    <div>
        <ValidationObserver>
            <form action="#">
                <ValidationProvider rules="required|email" v-slot="{ errors }">
  <input v-model="value" type="text">
  <span>{{ errors[0] }}</span>
</ValidationProvider>
                <ValidationProvider rules="digits:3" name="FIO" v-slot="{errors}">
                    <Input type="text" placeholder="ФИО" :message="errors[0]" v-model="fio" @inputValue="fio = $event"/>
                </ValidationProvider>
                <Input type="email" placeholder="E-mail" v-model="email" @inputValue="email = $event"/>
                <Input type="text"  mask="+38 (999)-999-99-99" placeholder="+38 (___)-___-__-__" v-model="phone" @inputValue="phone = $event"/>
                <Input type="password" placeholder="Пароль" classes="password" v-model="password" @inputValue="password = $event"/>
                <Input type="password" placeholder="Повторите пароль" classes="password" v-model="repassword" @inputValue="repassword = $event"/>
                <Button type="button" classes="button button_green button__registration" />
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
                value:''
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