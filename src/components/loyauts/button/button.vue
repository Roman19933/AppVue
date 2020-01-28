<template>
  <button :type="type" :class="classes">
    {{value}}
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
        },
        value: {
            type:String,
            default:'button'
        }
    }
};
</script>

<style lang="scss" scoped></style>
