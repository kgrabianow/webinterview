<template>
<div id="app">
  <ul class="menu">
    <li class="danger"><button @click="showBrief()" :disabled="!duringInterview">Zakończ wywiad</button></li>
    <li class="menu-element"><button @click="startInterview()">Nowy wywiad</button></li>
  </ul>
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

.menu {
  position: fixed;
  top: 0;
  width: 100%;
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: #ffffff;
}

.menu li {
  float: right;
}

.left {
  float: left;
}

button {
  padding: 10px;
  margin: 10px;
  background-color: #4dc3ff;
  border-style: none;
  color: #2c3e50;
  text-align: center;
  font-weight: bold;
  cursor: pointer;
}

.menu .menu-element button {
  margin: 0px;
  font-weight: normal;
  background-color: #ffffff;
  display: block;
  color: #2c3e50;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
}

.menu .danger button {
  margin: 0px;
  font-weight: normal;
  background-color: #ffffff;
  display: block;
  color: #2c3e50;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
}

.menu li button:disabled {
  background: #ebebe0;
  color: #2c3e50;
  cursor: no-drop;
}

.menu li button:disabled:hover {
  background: #ebebe0;
  color: #2c3e50;
  cursor: no-drop;
}

.menu li button:hover {
  background-color: #4dc3ff;
}

.menu .danger button:hover {
  color: #ffffff;
  background-color: #e60000;
}
</style>
