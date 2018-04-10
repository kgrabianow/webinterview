<template>
<div>
  <h2>Podsumowanie rozmowy na temat strony internetowej</h2>
  <RaportElement v-for="(answer, index) in answered" :number="index+1" :answer="answer" :key="answer.id"></RaportElement>
</div>
</template>

<script>
import RaportElement from './RaportElement';

export default {
  name: 'InterviewRaport',
  data() {
    return {

    }
  },
  methods: {

  },
  components: {
    RaportElement
  },
  props: ["answered"]
}
</script>

<style>

</style>
