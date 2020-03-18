<template>
  <div>
    <b-tabs content-class="mt-3" justified>
      <b-tab title="Новая Почта" active class="nav-item">
        <div class="basket__tab-content form-group_tab form-group" :class="{'active': this.radio == 'nova_poshta'}">
          <label class="label">
            <input type="radio" name="name" v-model="radio" value="nova_poshta" class="label__input" />
            <span class="label__custom"></span>
            <span class="label__text">Из отделения “Новая почта”</span>
          </label>
          <div class="content content_np">
            <div class="content__input">
                <ValidationProvider rules="required" name="Имя" v-slot="{errors,valid}">
                <Input
                    type="text"
                    placeholder="Имя"
                    :isValid="valid"
                    :message="errors[0]"
                    :value="name"
                    @inputValue="name = $event"
                />
                </ValidationProvider>
                <ValidationProvider rules="required" name="Фамилия2" v-slot="{errors,valid}">
                <Input
                    type="text"
                    placeholder="Фамилия"
                    :isValid="valid"
                    :message="errors[0]"
                    :value="surname"
                    @inputValue="surname = $event"
                />
                </ValidationProvider>
            </div>
            <div class="content__select">
              <div class="form-group form-group_np ">
                   <v-select :options="np" v-model="selectValue" placeholder="Выберите отделение НП...">
                        <template #search="{attributes, events}">
                            <input
                              class="vs__search"
                              :required="!selectValue"
                              v-bind="attributes"
                              v-on="events"
                            />
                        </template>
                   </v-select>
              </div>
              <p>
                График работы точки выдачи: Пн-Пт: 08:00-22:00, Сб: 08:00-18:00
              </p>
            </div>
          </div>
          <p v-if="!selectValue">Check you New Post!</p>
        </div>
        <div class="basket__tab-content form-group_tab form-group" :class="{'active': this.radio == 'own'}">
          <label class="label">
            <input type="radio" name="name" v-model="radio" value="own" class="label__input" />
            <span class="label__custom"></span>
            <span class="label__text">Курьером “Новая почта”</span>
          </label>
          <div class="content">
            <div class="content__input">
                <ValidationProvider rules="required" name="Имя1" v-slot="{errors,valid}">
                <Input
                    type="text"
                    placeholder="Имя"
                    :isValid="valid"
                    :message="errors[0]"
                    :value="namek"
                    @inputValue="namek = $event"
                />
                </ValidationProvider>
                <ValidationProvider rules="required" name="Фамилия1" v-slot="{errors,valid}">
                <Input
                    type="text"
                    placeholder="Фамилия"
                    :isValid="valid"
                    :message="errors[0]"
                    :value="surnamek"
                    @inputValue="surnamek = $event"
                />
                </ValidationProvider>
                <ValidationProvider rules="required" name="Улица" v-slot="{errors,valid}">
                <Input
                    type="text"
                    placeholder="Улица"
                    adress
                    :isValid="valid"
                    :message="errors[0]"
                    :value="street"
                    @inputValue="street = $event"
                />
                </ValidationProvider>
                <ValidationProvider rules="required" name="Дом" v-slot="{errors,valid}">
                <Input
                    type="text"
                    placeholder="Дом"
                    house
                    :isValid="valid"
                    :message="errors[0]"
                    :value="house"
                    @inputValue="house = $event"
                />
                </ValidationProvider>
                <ValidationProvider rules="required" name="Квартира/офис" v-slot="{errors,valid}">
                <Input
                    type="text"
                    placeholder="Квартира/офис"
                    number
                    :isValid="valid"
                    :message="errors[0]"
                    :value="number"
                    @inputValue="number = $event"
                />
                </ValidationProvider>
            </div>
          </div>
        </div>
      </b-tab>
      <b-tab title="Самовывоз">
        <div class="basket__tab-content basket__tab-content_own">
            <p>График работы точки выдачи: Пн-Пт: 08:00-22:00, Сб: 08:00-18:00</p>
        </div>
      </b-tab>
    </b-tabs>
  </div>
</template>

<script>
import Input from "../input/input";
export default {
    data() {
        return {
            radio:'',
            name:'',
            surname:'',
            namek:'',
            surnamek:'',
            house:'',
            street:'',
            number:'',
            np:['5','4'],
            selectValue:''
        }
    },
    watch: {
        radio(val) {
            this.$emit("radio-tab",val);
            // console.log(val)
        },
        name(val) {
            this.$emit("name-tab",val);
            // console.log(val)
        },
        surname(val) {
            this.$emit("surname-tab",val);
            // console.log(val)
        },
        namek(val) {
            this.$emit("namek-tab",val);
            // console.log(val)
        },
        surnamek(val) {
            this.$emit("surnamek-tab",val);
            // console.log(val)
        },
        selectValue(val) {
            this.$emit("select-tab",val);
            // console.log(val)
        },
        street(val) {
            this.$emit("street-tab",val);
            // console.log(val)
        },
        house(val) {
            this.$emit("house-tab",val);
            // console.log(val)
        },
        number(val) {
            this.$emit("number-tab",val);
            // console.log(val)
        },
    },
    components: {
        Input
    }
};
</script>

<style lang="scss">
.form-group {
    p {
            color: #EB5757;
    font-size: 12px;
    margin-top: 5px;
    }
  .vs {
    &__dropdown {
      &-toggle {
        padding: 0;
        border-radius: 18px;
        border: 1px solid #b8adab;
      }
      &-menu {
        top:41px;
         border-radius: 18px;
         font-size: 12px;
      }
    }
    &__selected {
          padding: 0 18px;
          margin: 0;
          // position: initial!important;
    }
    &__search {
      border:none;
      &:focus {
        font-size: 12px;
        padding: 0 18px;
        border:none;
      }
    }
  }

}
</style>
