<template>
<button @click="click(element)">{{ element }}</button>
</template>

<script>
export default {
  name: 'AnswerElement',
  data() {
    return {

    }
  },
  methods: {
    click(element) {
      this.$emit('answer', element);
    }
  },
  props: ["element"]
}
</script>

<style>

</style>
