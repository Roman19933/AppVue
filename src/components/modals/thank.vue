<template>
    <div>
 <b-modal id="thank" v-model="showModal" modal-class="custom" centered hide-header content-class="custom__content" dialog-class="custom__dialog custom__dialog_thank" body-class="custom__body custom__body_thank" hide-footer>
        <button @click="showModal = false" type="button" class="close custom__close" aria-label="Close">
            <svg class="icon-svg icon-svg-close-modal close-modal"><use xlink:href="../../assets/img/sprite.svg#close-modal"></use></svg>
        </button>
         <span>Спасибо!</span>
        <p>Наш консультант свяжется с вами в ближайшее время</p>
        <a href="#" @click="showModal = false" class="button button__modal onmain">Вернуться на главную</a>
    </b-modal>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                showModal:false
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>