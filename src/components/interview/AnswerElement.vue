<template>
<!-- Przycisk odpowiedzi na pytanie -->
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
    // Emitowanie zdarzenia onclik przycisku do pytania
    click(element) {
      this.$emit('answer', element);
    }
  },
  props: ["element"]
}
</script>

<style>

</style>
