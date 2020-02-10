<template>
  <div>
    <b-modal
      id="oneClick"
      v-model="showModal"
      modal-class="custom"
      centered
      hide-header
      content-class="custom__content"
      dialog-class="custom__dialog custom__dialog_click"
      body-class="custom__body custom__body_click"
      hide-footer
      no-stacking
    >
      <button
        @click="showModal = false"
        type="button"
        class="close custom__close"
        aria-label="Close"
      >
        <svg class="icon-svg icon-svg-close-modal close-modal">
          <use xlink:href="../../assets/img/sprite.svg#close-modal"></use>
        </svg>
      </button>
      <!-- <div class="custom__body-left">
        <div class="custom__body-phones">
          <span>+38 (050) 954-88-05</span>
          <span> +38 (067) 715-82-11</span>
          <span> +38 (0332) 76-90-91</span>
        </div>
        <span class="text">Наши номера телефонов</span>
      </div> -->
      <ValidationObserver ref="callbackV" v-slot="{ handleSubmit, invalid }">
        <form @submit.prevent="handleSubmit(onSubmit)">
          <div class="custom__body-right">
            <div class="custom__body-fields">
              <ValidationProvider
                rules="required"
                name="телефон"
                v-slot="{ errors, valid }"
              >
                <Input
                  type="text"
                  mask="+38 (999)-999-99-99"
                  :isValid="valid"
                  :message="errors[0]"
                  placeholder="+38 (___)-___-__-__"
                  :value="phone"
                  @inputValue="phone = $event"
                />
              </ValidationProvider>
              <ValidationProvider
                rules="required"
                name="ф.и.о"
                v-slot="{ errors, valid }"
              >
                <Input
                  type="text"
                  placeholder="ФИО"
                  :isValid="valid"
                  :message="errors[0]"
                  :value="fio"
                  @inputValue="fio = $event"
                />
              </ValidationProvider>
            </div>
            <Button
              value="Заказать звонок"
              type="submit"
              :disabled="invalid"
              class="button button__modal callback-btn"
              v-b-modal.thank
            />
          </div>
        </form>
      </ValidationObserver>
    </b-modal>
  </div>
</template>

<script>
import Button from "../../components/loyauts/button/button";
import Input from "../../components/loyauts/input/input";
export default {
        data() {
        return {
            showModal:false,
            fio:'',
            phone:''
        }
    },
  components: {
    Button,
    Input
  }
};
</script>

<style lang="scss" scoped></style>
