<template>
<div>
  <div class="container">
    <ul class="question-list left">
      <h3>Lista pytań do zadania podczas rozmowy</h3>
      <!-- Wyświetlanie elementów listy przekazanych pytań do zadania -->
      <Question v-for="(question, index) in questions" :question="question" :key="question.id" @progress="update">
      </Question>
    </ul>
  </div>
  <div class="container">
    <ul class="question-list right">
      <h3>Lista zadanych pytań</h3>
      <!-- Wyświetlanie elementów listy pytań, na które uzyskano już odpowiedź -->
      <Question v-for="(answer, index) in answers" :question="answer" :number="answer.id" :key="answer.id">
      </Question>
    </ul>
  </div>
</div>
</template>

<script>
import Question from './Question';

import InterviewQuestions from '../../imitatedDB/interviewQuestions';

export default {
  name: 'QuestionList',
  methods: {
    update(value) {
      this.answers.unshift(value);
      let index = this.questions.indexOf(this.findId(value.id));
      let questionsToUnlock = this.refreshList(index, value.answer);
      this.changeVisibility(questionsToUnlock);
      this.questions.splice(index, 1);
      this.$emit('writeBrief', this.prepareBrief());
    },
    prepareBrief() {
      let answered = [];
      for (let i = 0; i < this.answers.length; i++) {
        let obj = {
          id: this.answers[i].id,
          question: this.answers[i].question,
          answer: this.answers[i].answer,
          answerNote: this.answers[i].answerNote
        }
        answered.push(obj);
      }
      let notAnswered = [];
      for (let i = 0; i < this.questions.length; i++) {
        let obj = {
          id: this.questions[i].id,
          question: this.questions[i].question,
          answer: this.questions[i].answer,
          answerNote: this.questions[i].answerNote
        }
        notAnswered.push(obj);
      }
      return [answered.reverse(), notAnswered.reverse()];
    },
    findId(value) {
      for (let j = 0; j < this.questions.length; j++) {
        if (this.questions[j].id === value) {
          return this.questions[j];
        }
      }
    },
    refreshList(index, answer) {
      for (let i = 0; i < this.questions[index].answers.length; i++) {
        if (this.questions[index].answers[i] === answer) {
          return this.questions[index].conditionalQuestions[i];
        }
      }
    },
    changeVisibility(conditionalQuestions) {
      if (conditionalQuestions !== undefined) {
        for (let i = 0; i < conditionalQuestions.length; i++) {
          let param = this.questions.indexOf(this.findId(conditionalQuestions[i]));
          this.questions[param].visible = true;
        }
      }
    }
  },
  data() {
    return {
      answers: [],
      questions: InterviewQuestions.questions
    }
  },
  components: {
    Question
  }
}
</script>

<style scoped>
.question-list {
  list-style-type: none;
  padding: 0px;
  margin: 2.5%;
  float: left;
}

.left {
  width: 60%;
}

.right {
  width: 30%;
}

.container {
  margin: 25px;
}
</style>
