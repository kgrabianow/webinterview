<template>
<div id="app">
  <button @click="startInterview()">Rozpocznij nowy wywiad</button>
  <button @click="showBrief()" :disabled="!duringInterview">Zakończ bieżący wywiad</button>
  <QuestionList v-if="this.duringInterview" @writeBrief="writeBrief"></QuestionList>
  <InterviewRaport v-else :answered="answered"></InterviewRaport>
</div>
</template>

<script>
import QuestionList from './components/QuestionList'
import InterviewRaport from './components/InterviewRaport'

export default {
  name: 'App',
  data() {
    return {
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
      // console.log(this.answered);
      // console.log(this.notAnswered);
    }
  },
  components: {
    QuestionList,
    InterviewRaport
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 100%;
}

button {
  padding: 10px;
  margin: 10px;
  background-color: #4dc3ff;
  border-style: none;
  color: #000000;
  font-weight: bold;
  cursor: pointer;
}

button:disabled {
  background: #dddddd;
  color: #000000;
  cursor: no-drop;
}
</style>
