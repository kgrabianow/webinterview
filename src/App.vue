<template>
<div id="app">

  <ul class="menu">
    <li class="menu-element" style="float:left;"><button @click.prevent="view = 'App'">Start</button></li>
    <li class="menu-element" style="float:left;"><button @click.prevent="view = 'Interview'">Wywiady Stron</button></li>
    <li class="menu-element" style="float:left;"><button @click.prevent="view = 'WebStructure'">Struktury Stron</button></li>
    <li class="menu-element" style="float:left;"><button @click.prevent="view = 'Pricing'">Wyceny Stron</button></li>
  </ul>

  <component :is="view">
    <li class="menu-element" style="float:left;"><button @click.prevent="view = 'App'">Start</button></li>
    <li class="menu-element" style="float:left;"><button @click.prevent="view = 'Interview'">Wywiady Stron</button></li>
    <li class="menu-element" style="float:left;"><button @click.prevent="view = 'WebStructure'">Struktury Stron</button></li>
    <li class="menu-element" style="float:left;"><button @click.prevent="view = 'Pricing'">Wyceny Stron</button></li>
  </component>

</div>
</template>

<script>
import Interview from './components/interview/Interview'
import WebStructure from './components/webStructure/WebStructure'
import Pricing from './components/pricing/Pricing'

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
    WebStructure,
    Pricing
  }
}
</script>

<style>
@import './css/app.css';
</style>
