<template>
<div class="bodyPage">

  <ul class="menu">
    <slot></slot>
  </ul>

  <div class="divHeader">
    <div class="logoLeft"><img src="../.././assets/logo.png" width="90px" height="75px" /></div>
    <div class="logoRight"><img src="../.././assets/opineo.png" width="150px" height="60px" /></div>
    <div class="logoRight"><img src="../.././assets/certyfikaty.jpg" width="144px" height="75px" /></div>
  </div>

  <div class="content">
    <div class="container">
      <div v-if="this.duringPricing">
        <h2>Wycena Strony</h2>
        <PricingInstance @editTitle="editTitle" @editContent="editContent" @removeElement="removeElement" @addElement="addElement" :sections="sections" :sugesstedSections="sugesstedSections" :used="findUsedElements()"></PricingInstance>
      </div>
      <div v-else>
        <h2>Nie pobrano żadnej Wyceny</h2>
        <p>Dostępne akcje:</p>
        <button @click="startPricing()">Nowa Wycena</button>
      </div>
    </div>
  </div>

  <!-- <div class="divFooter">B4AFTER Footer</div> -->

</div>
</template>

<script>
import PricingInstance from './PricingInstance'

import SugesstedSections from '../../imitatedDB/sugesstedSections'

export default {
  name: 'Pricing',
  data() {
    return {
      view: "Pricing",
      duringPricing: false,
      sugesstedSections: SugesstedSections.sugesstedSections,
      // sugesstedSections: [{
      //   id: 0,
      //   title: 'Wstęp',
      //   description: 'Lorem ipsum dolor sit amet',
      //   content: [{
      //       sex: 'male',
      //       content: 'Pan: Słowo klucz Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
      //     },
      //     {
      //       sex: 'female',
      //       content: 'Pani: Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
      //     },
      //     {
      //       sex: 'both',
      //       content: 'Państwo: Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
      //     }
      //   ]
      // }],
      sections: []
      // sections: [{
      //   id: 0,
      //   pricingElementId: 0,
      //   sex: 'male',
      //   overwrite: false,
      //   title: 'Wstęp',
      //   description: 'Lorem ipsum',
      //   content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut quis ultrices turpis. Etiam elementum velit tellus, id fringilla dui tempor sed. Quisque consectetur vehicula neque, nec tempor quam consequat eu. Cras vestibulum velit nec scelerisque sollicitudin. Aliquam commodo augue ex, in hendrerit libero laoreet sed. Nulla condimentum vestibulum turpis ac vestibulum. Quisque accumsan feugiat dui, ut vulputate metus hendrerit vitae. Nulla molestie egestas ante congue ultricies. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin id odio at metus fringilla placerat. Nunc at orci eleifend, finibus neque at, laoreet elit. In vel dui odio. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae',
      // }]
    }
  },
  methods: {
    startPricing() {
      this.duringPricing = true;
      this.$emit('duringPricing', this.duringPricing);
    },
    findUsedElements() {
      let usedElementsArray = [];
      for (let j = 0; j < this.sections.length; j++) {
        // Dodaję znalezione 'pricingElementId' do tablicy roboczej
        usedElementsArray.push(this.sections[j].pricingElementId);
      }
      return usedElementsArray;
    },
    editTitle(arrayValue) {
      let idToEdited = this.findId(arrayValue[1], this.sections);
      this.sections[idToEdited].title !== arrayValue[0] ? (this.sections[idToEdited].overwrite = true) : '';
      this.sections[idToEdited].title = arrayValue[0];
    },
    editContent(arrayValue) {
      let idToEdited = this.findId(arrayValue[1], this.sections);
      this.sections[idToEdited].content !== arrayValue[0] ? (this.sections[idToEdited].overwrite = true) : '';
      this.sections[idToEdited].content = arrayValue[0];
    },
    addElement(arrayValue) {
      let elementToAdd = {
        id: this.findMaxId() + 1,
        pricingElementId: arrayValue[0],
        sex: this.sugesstedSections[this.findId(arrayValue[0], this.sugesstedSections)].content[arrayValue[1]].sex,
        overwrite: false,
        title: this.sugesstedSections[this.findId(arrayValue[0], this.sugesstedSections)].title,
        description: this.sugesstedSections[this.findId(arrayValue[0], this.sugesstedSections)].description,
        content: this.sugesstedSections[this.findId(arrayValue[0], this.sugesstedSections)].content[arrayValue[1]].content
      };
      this.sections.push(elementToAdd);
    },
    removeElement(id) {
      this.sections.splice(this.findId(id, this.sections), 1);
    },
    // Znajduję największą wartość 'id' elementów w tablicy sections
    findMaxId() {
      // Tworzę roboczą tablicę na zebrane wartości 'id' z elementów
      let idArray = [-1];
      // Przechodzę po wszystkich elementach tablicy sections
      for (let j = 0; j < this.sections.length; j++) {
        // Dodaję znalezione 'id' do tablicy roboczej
        idArray.push(this.sections[j].id);
      }
      // Znajduję i zwracam największą wartość z tablicy zebranych 'id'
      let maxID = Math.max.apply(Math, idArray)
      return maxID;
    },
    // Znajduję i zwracam miejsce w tablicy elementu o zadanym 'id' z talblicy array
    findId(value, array) {
      // Przechodzę po wszystkich elementach tablicy array
      for (let j = 0; j < array.length; j++) {
        // Jeżeli znajdę zadaną wartość 'value' w 'id' elementu,
        // zwracam jego index 'j' z tablicy array
        if (array[j].id === value) {
          return j;
        }
      }
    }
  },
  components: {
    PricingInstance
  }
}
</script>

<style scoped>
.container {
  margin-top: 150px;
}

@media print {
  .container {
    margin-top: 75px;
  }

  h2 {
    font-size: 22px;
  }

  header,
  nav,
  footer,
  .pricingElements,
  .menu,
  .adv,
  .ndop {
    display: none;
  }
}
</style>
