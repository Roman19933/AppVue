<template>
    <div>
        <form action="#">
          <Input type="text" placeholder="ФИО" v-model="fio" @inputValue="fio = $event"/>
          <Input type="email" placeholder="E-mail"/>
          <Input type="text" placeholder="+38 (___)-___-__-__"/>
          <Input type="password" placeholder="Пароль" classes="password"/>
          <Input type="password" placeholder="Повторите пароль" classes="password"/>
          <Button type="button" classes="button button_green button__registration"/>
        </form>
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
                repassword:''
            }
        },
        components: {
            Input,
            Button
        }
    }
</script>

<style lang="scss" scoped>

</style>