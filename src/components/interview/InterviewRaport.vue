<template>
<div class="container">
  <h2 v-if="answered.length>0">Podsumowanie rozmowy na temat strony internetowej</h2>
  <div v-else>
    <h2>Nie pobrano żadnego wywiadu</h2>
    <slot></slot>
  </div>
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

<style scoped>
.container {
  margin-top: 150px;
}

@media print {
  .container {
    margin-top: 0px;
  }
}
</style>
