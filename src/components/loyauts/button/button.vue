<template>
  <button :type="type" :class="classes">
    Зарегистрироваться
  </button>
</template>

<script>
export default {
    props: {
        classes: {
            type:String,
            default:'button'
        },
        type: {
            type:String,
            default:'button'
        }
    }
};
</script>

<style lang="scss" scoped></style>
