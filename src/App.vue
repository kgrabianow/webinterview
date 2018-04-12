<template>
<div id="app">

  <ul class="menu">
    <li class="menu-element" style="float:left;"><button @click.prevent="view = 'App'">Start</button></li>
    <li class="menu-element" style="float:left;"><button @click.prevent="view = 'Interview'">Wywiady</button></li>
  </ul>

  <keep-alive>
    <component :is="view">
      <li class="menu-element" style="float:left;"><button @click.prevent="view = 'App'">Start</button></li>
      <li class="menu-element" style="float:left;"><button @click.prevent="view = 'Interview'">Wywiady</button></li>
    </component>
  </keep-alive>

  <!-- <Interview></Interview> -->

</div>
</template>

<script>
import Interview from './components/Interview'

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
    Interview
  }
}
</script>

<style>
@import './css/app.css';
</style>
