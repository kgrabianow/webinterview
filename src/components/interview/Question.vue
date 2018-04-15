<template>
<li v-if="question.visible" :class="{ 'notAnswer': !isAnswered, 'isAnswer': isAnswered }">

  <!-- Wyświetlanie ikony statusu odpowiedzi -->
  <i class="icon right" @click="showDescription()" :class="{ 'icon-edit': !isAnswered, 'icon-check': isAnswered }"></i>

  <div class="left">

    <!-- Wyświetlanie numeru pytania oraz pytania -->
    <div @click="showDescription()" class="list-element" :class="{ 'inProgress': isDescription }">
      <h3>{{ question.id }} | {{ question.question }} </h3>
    </div>

    <!-- Wyświetlanie odpowiedzi i notatki dla pytania -->
    <div class="clear">
      <span v-if="!this.isDescription">
        <span :class="{ 'bold': isAnswered}">{{ answer }}</span>
      <div class="answerNote">{{ answerNote }}</div>
      </span>
    </div>

    <!-- Wyświetlanie opisu dla pytania -->
    <transition name="fade" appear>
      <div v-if="this.isDescription" class="description">
        {{ question.description }}
      </div>
    </transition>

    <!-- Wyświetlanie przycisków akcji do odpowiedzi -->
    <transition name="fade" appear>
      <div v-show="this.isDescription">
        <!-- Przyciski -->
        <div>
          <!-- Wyświetlanie przycisków sugerowanych odpowiedzi -->
          <AnswerElement v-for="(answer, index) in question.answers" :element="answer" :key="question.id+index" @answer="handleEvent">
          </AnswerElement>

          <!-- Wyświetlanie przycisku innej odpowiedzi -->
          <button class="warning" @click="setAnswer('Inna odpowiedź')">Inna odpowiedź</button>
        </div>
        <!-- Textarea -->
        <div>
          <!-- Wyświetlanie textarea dla odpowiedzi -->
          <textarea type="text" placeholder="Miejsce na notatkę" v-model="answerNote" />
        </div>
      </div>
    </transition>

  </div>

  <div class="clear" />
</li>
</template>

<script>
import AnswerElement from './AnswerElement';

export default {
  name: 'Question',
  data() {
    // Jeśli nie udzielono wcześniej odpowiedzi na pytanie, ustaw domyślne wartości
    if (this.question.answer === "") {
      return {
        isDescription: false,
        isAnswered: false,
        answer: "Jeszcze nie uzyskano odpowiedzi",
        answerNote: ""
      }
    } else {
      return {
        isDescription: false,
        isAnswered: true,
        answer: this.question.answer,
        answerNote: this.question.answerNote
      }
    }
  },
  methods: {
    // Obsługa pokazywania opisu do pytania
    showDescription() {
      this.isDescription = !this.isDescription
    },
    // Ustawienie udzielonej odpowiedzi na pytania
    setAnswer: function(answer) {
      this.answer = answer;
      this.isAnswered = true;
      this.isDescription = false;
      this.question.answer = this.answer;
      this.question.answerNote = this.answerNote;
      // Emitowanie zdarzenia udzielenia/zaznaczenia odpowiedzi do Listy Pytań
      this.$emit('progress', this.question)
    },
    // Obsługa zdarzenia przyjętego z komponentu niższego
    handleEvent(element) {
      this.setAnswer(element);
    }
  },
  components: {
    AnswerElement
  },
  props: ["question", "number"]
}
</script>

<style scoped>
.right {
  float: right;
  padding: 10px;
  margin: 10px;
}

.left {
  float: left;
}

.clear {
  clear: both;
  text-align: left;
}

.icon {
  cursor: pointer;
}

.description {
  text-align: justify;
  margin: 0 auto;
}

.inProgress {
  font-weight: bold;
  background-color: #4dc3ff;
}

.list-element {
  cursor: pointer;
  text-align: justify;
}

.answerNote {
  font-style: italic;
}

.warning {
  background-color: #ffff66;
  color: black;
}

.bold {
  font-weight: bold;
}

li {
  type: none;
}

li div {
  padding: 5px;
}

.notAnswer:nth-child(odd) {
  background: #e6e6e6;
}

.notAnswer:nth-child(even) {
  background: #f2f2f2;
}

.isAnswer:nth-child(odd) {
  background: #99ff99;
}

.isAnswer:nth-child(even) {
  background: #80ff80;
}

textarea {
  padding: 10px;
  margin: 10px;
  width: 80%;
  height: 100px;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-leave-active {
  /* position: absolute; */
}

.fade-move {
  transition: transform 0.5s;
}

.fade-enter {
  opacity: 0;
}

.fade-leave-to {
  opacity: 0;
}
</style>
