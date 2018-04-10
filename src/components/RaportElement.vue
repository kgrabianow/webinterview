<template>
<section>
  <h4><span>{{number}}</span>. {{answer.question}}</h4>
  <p class="checkAnswer">{{answer.answer}}</p>
  <p class="note">{{answer.answerNote}}</p>
</section>
</template>

<script>
export default {
  name: 'RaportElement',
  data() {
    return {

    }
  },
  methods: {

  },
  components: {

  },
  props: ["answer", "number"]
}
</script>

<style>
section {
  text-align: left;
  padding-left: 10%;
  padding-right: 10%;
}

.note {
  font-style: italic;
}
</style>
