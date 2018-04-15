<template>
<div id="app">

  <ul class="menu">
    <li class="menu-element" style="float:left;"><button @click.prevent="view = 'App'">Start</button></li>
    <li class="menu-element" style="float:left;"><button @click.prevent="view = 'WebStructure'">Struktura Strony</button></li>
    <li class="menu-element" style="float:left;"><button @click.prevent="view = 'Interview'">Wywiady</button></li>
  </ul>

  <component :is="view">
    <li class="menu-element" style="float:left;"><button @click.prevent="view = 'App'">Start</button></li>
    <li class="menu-element" style="float:left;"><button @click.prevent="view = 'WebStructure'">Struktura Strony</button></li>
    <li class="menu-element" style="float:left;"><button @click.prevent="view = 'Interview'">Wywiady</button></li>
  </component>

</div>
</template>

<script>
import Interview from './components/interview/Interview'
import WebStructure from './components/webStructure/WebStructure'

export default {
  name: 'App',
  data() {
    return {
      view: ''
    }
  },
  methods: {

  },
  components: {
    Interview,
    WebStructure
  }
}
</script>

<style>
@import './css/app.css';
</style>
