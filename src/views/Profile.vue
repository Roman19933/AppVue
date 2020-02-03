<template>
  <div>
    <div class="person">
      <div class="person__wrapper default-container padding">
        <!-- <nav aria-label="breadcrumb">
                    <ol class="breadcrumb">
                        <li class="breadcrumb-item"><a href="#">Главная</a></li>
                        <li class="breadcrumb-item active" aria-current="page">Сброс пароля</li>
                    </ol>
        </nav>-->
        <img src="img/grain-person.png" alt class="grain" />
        <div class="person__title title">
          <h2>Личный кабинет</h2>
        </div>
        <Personal :userAuthId="userAuthId" />
        <!-- <form action="#">
                    <div class="person__form">
                        <div class="person__form-input">
                            <div class="person__info">
                                <h2 class="person__info-title">Персональные данные</h2>
                                <div class="person__info-input">
                                    <div class="form-group">
                                        <input type="text" placeholder="Ваше имя">
                                    </div>
                                </div>
                            </div>
                            <div class="person__info">
                                <h2 class="person__info-title">Контактные данные</h2>
                                <div class="person__info-input">
                                    <div class="form-group">
                                        <input type="email" placeholder="Ваша елекронная почта">
                                    </div>
                                    <div class="form-group">
                                        <input type="text" placeholder="+38 ( ___ ) - ___ - __ - __"
                                            data-mask="+38 (000) 000 00 00">
                                    </div>
                                </div>
                            </div>
                            <div class="person__info">
                                <h2 class="person__info-title">Изменить пароль</h2>
                                <div class="person__info-input">
                                    <div class="form-group">
                                        <input type="password" class="password" placeholder="Старый пароль">
                                        <button class="form-group__button">
                                            <svg class="icon-svg icon-svg-view view"><use xlink:href="img/sprite.svg#view"></use></svg>
                                        </button>
                                    </div>
                                    <div class="form-group">
                                        <input type="password" class="password" placeholder="Новый пароль">
                                        <button class="form-group__button">
                                            <svg class="icon-svg icon-svg-view view"><use xlink:href="img/sprite.svg#view"></use></svg>
                                        </button>
                                    </div>
                                    <div class="form-group">
                                        <input type="password" class="password" placeholder="Повторите новый пароль">
                                        <button class="form-group__button">
                                            <svg class="icon-svg icon-svg-view view"><use xlink:href="img/sprite.svg#view"></use></svg>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <button type="submit" class="button button_green">Сохранить все изменения</button>
                    </div>
        </form>-->
      </div>
    </div>
  </div>
</template>

<script>
import Personal from "../components/loyauts/form/profile";
export default {
  data() {
    return {
      userAuthId: JSON.parse(localStorage.getItem("userId"))
    };
  },
  components: {
    Personal
  }
};
</script>

<style lang="scss" scoped>
</style>