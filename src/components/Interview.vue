<template>
<div class="bodyPage">

  <ul class="menu">
    <slot></slot>
    <li class="danger"><button @click="showBrief()" :disabled="!duringInterview">Zakończ wywiad</button></li>
    <li class="menu-element"><button @click="startInterview()" :disabled="duringInterview">Nowy wywiad</button></li>
  </ul>

  <div class="divHeader">
    <div class="logoLeft"><img src=".././assets/logo.png" width="90px" height="75px" /></div>
    <div class="logoRight"><img src=".././assets/opineo.png" width="150px" height="60px" /></div>
    <div class="logoRight"><img src=".././assets/certyfikaty.jpg" width="144px" height="75px" /></div>
  </div>

  <div class="content">
    <QuestionList v-if="this.duringInterview" @writeBrief="writeBrief"></QuestionList>
    <InterviewRaport v-else :answered="answered">
      <p>Dostępne akcje:</p>
      <button @click="startInterview()">Nowy wywiad</button>
    </InterviewRaport>
  </div>

  <div class="divFooter">B4AFTER Footer</div>

</div>
</template>

<script>
import QuestionList from './QuestionList'
import InterviewRaport from './InterviewRaport'

export default {
  name: 'App',
  data() {
    return {
      view: "Interview",
      duringInterview: false,
      answered: [],
      notAnswered: [],
    }
  },
  methods: {
    startInterview() {
      this.duringInterview = true;
    },
    writeBrief(lists) {
      this.answered = lists[0];
      this.notAnswered = lists[1];
    },
    showBrief() {
      this.duringInterview = false;
    }
  },
  components: {
    QuestionList,
    InterviewRaport
  }
}
</script>

<style>

</style>
