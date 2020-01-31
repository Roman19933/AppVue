<template>
    <div>
        <form action="#">
            <div class="person__form">
                <div class="person__form-input">
                    <div class="person__info">
                        <h2 class="person__info-title">Персональные данные</h2>
                        <div class="person__info-input">
                            <Input type="text" placeholder="ФИО" v-model="fio" @inputValue="fio = $event"/>
                        </div>
                    </div>
                    <div class="person__info">
                        <h2 class="person__info-title">Контактные данные</h2>
                        <div class="person__info-input">
                            <Input type="email" placeholder="E-mail" v-model="email" @inputValue="email = $event" />
                            <Input type="text"  mask="+38 (999)-999-99-99"  placeholder="+38 (___)-___-__-__" v-model="phone" @inputValue="phone = $event"/>
                        </div>
                    </div>
                    <div class="person__info">
                        <h2 class="person__info-title">Изменить пароль</h2>
                        <div class="person__info-input">
                            <Input type="password" width placeholder="Старый пароль" classes="password" v-model="oldPassword" @inputValue="password = $event"/>
                            <Input type="password" width placeholder="Новый пароль" classes="password" v-model="newPassword" @inputValue="password = $event"/>
                            <Input type="password" width placeholder="Повторите пароль" classes="password" v-model="rePassword" @inputValue="password = $event"/>
                        </div>
                    </div>
                </div>
                <!-- <button type="submit" class="button button_green">Сохранить все изменения</button> -->
                <Button value="Сохранить все изменения" type="submit" classes="button button_green" />
            </div>
        </form>
    </div>
</template>

<script>
import Input from "../input/input"
import Button from "../button/button"
    export default {
        data() {
            return {
                fio:'wewewe',
                email:33,
                phone:'',
                oldPassword:'',
                newPassword:'',
                rePassword:'e',
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