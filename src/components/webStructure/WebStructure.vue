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
      <div class="webArea" v-if="this.duringBuildStructure">
        <h2>Struktura Strony</h2>
        <WebStructureList @removeElement="removeElement" @editDescription="editDescription" @editName="editName" @add="addChilden" :structure="structure" :id="0"></WebStructureList>
      </div>
      <div v-else>
        <h2>Nie pobrano żadnej Struktury</h2>
        <p>Dostępne akcje:</p>
        <button @click="startBuildingStructure()">Nowy Schemat</button>
      </div>
    </div>
  </div>

  <div class="divFooter">B4AFTER Footer</div>

</div>
</template>

<script>
import WebStructureList from './WebStructureList'

export default {
  name: 'WebStructure',
  data() {
    return {
      view: "WebStructure",
      duringBuildStructure: false,
      level: 1,
      structure: [{
        id: 0,
        name: 'Strona Główna',
        description: 'Slider i skrót oferty',
        children: []
      }]
    }
  },
  computed: {
    divStyle: function() {
      return {
        transform: `scale(${this.level})`
      };
    }
  },
  methods: {
    startBuildingStructure() {
      this.duringBuildStructure = true;
      this.$emit('buildStructure', this.duringBuildStructure);
    },
    // Obsługuje powiększanie diva ze strukturą
    zoom: function(e) {
      if (e.deltaY > 1 && this.level > 0.2) {
        this.level -= 0.1;
      } else {
        if (this.level < 1) {
          this.level += 0.1;
        }
      }
    },
    // Nadpisuje nazwę elementu 'name'
    editName(arrayValue) {
      // Znajduje index elementu do edycji
      let elementToEdit = this.findId(arrayValue[1]);
      this.structure[elementToEdit].name = arrayValue[0];
    },
    // Nadpisuje opis elementu 'description'
    editDescription(arrayValue) {
      // Znajduje index elementu do edycji
      let elementToEdit = this.findId(arrayValue[1]);
      this.structure[elementToEdit].description = arrayValue[0];
    },
    // Dodaje podrzędny element (dziecko) do elementu o wskazanym 'id'
    addChilden(id) {
      // Znajduje największą występującą wartość id i powiększam ją o 1 dla nowego elementu
      let newID = this.findMaxId() + 1;
      // Tworzę domyślny obiekt elementu
      let obj = {
        id: newID,
        name: 'Nowy Element',
        description: 'Zakładka tekstowa (tekst + zdjęcia)',
        children: []
      };
      // Dodaję do rodzica (elementu nadrzędngo) referencję do dziecka
      this.structure[this.findId(id)].children.push(newID);
      // Dodaję nowy element do tablicy elementów
      this.structure.push(obj);
    },
    // Usuwam element o zadanym 'id' oraz jego elementy podrzędne (dzieci)
    removeElement(id) {
      // Znajduje index elementu do usunięcia
      let numberToDestroy = this.findId(id);
      // Znajduję rodzica usuwanego elementu i położenie referencji w talbicy child
      let parentWithChild = this.findIdinChildren(id);
      // Usuwam referencje do niszczonego elementu z tablicy children jego rodzica
      this.structure[parentWithChild[0]].children.splice(parentWithChild[1], 1);
      // Niszczę tablicę dzieci elementu do usunięcia
      let childrenToDestroy = this.structure[numberToDestroy].children;
      this.structure[numberToDestroy].children = [];
      // Ostatecznie usuwam element do usunięcia z tablicy
      this.structure.splice(numberToDestroy, 1);
      // Znajduje i niszczę dzieci elementu do usunięcia
      for (let i = 0; i < childrenToDestroy.length; i++) {
        this.structure.splice(this.findId(childrenToDestroy[i]), 1);
      }
    },
    // Znajduję i zwracam miejsce w tablicy elementu o zadanym 'id' z talblicy structure
    findId(value) {
      // Przechodzę po wszystkich elementach tablicy structure
      for (let j = 0; j < this.structure.length; j++) {
        // Jeżeli znajdę zadaną wartość 'value' w 'id' elementu,
        // zwracam jego index 'j' z tablicy structure
        if (this.structure[j].id === value) {
          return j;
        }
      }
    },
    // Znajduję referencję dla danego elementu
    // zwracam index rodzica, który posiada referencję,
    // oraz położenie referencji w tablicy children[]
    findIdinChildren(value) {
      // Przechodzę po wszystkich elementach tablicy structure
      for (let k = 0; k < this.structure.length; k++) {
        // Przechodzę po wszystkich elementach
        // tablicy structure[k].children
        for (let l = 0; l < this.structure[k].children.length; l++) {
          // Jeżeli znalazłem wskazaną wartość 'id' (value),
          // zwracam index rodzica - k
          // zwracam położenie w tablicy children - l
          if (this.structure[k].children[l] === value) {
            // console.log("Znalazłem w obiekcie: " + k + " na pozycji: " + l);
            return [k, l];
          }
        }
      }
    },
    // Znajduję największą wartość 'id' elementów w tablicy structure
    findMaxId() {
      // Tworzę roboczą tablicę na zebrane wartości 'id' z elementów
      let idArray = [];
      // Przechodzę po wszystkich elementach tablicy structure
      for (let j = 0; j < this.structure.length; j++) {
        // Dodaję znalezione 'id' do tablicy roboczej
        idArray.push(this.structure[j].id);
      }
      // Znajduję i zwracam największą wartość z tablicy zebranych 'id'
      let maxID = Math.max.apply(Math, idArray)
      return maxID;
    }
  },
  components: {
    WebStructureList
  }
}
</script>

<style scoped>
.container {
  margin-top: 150px;
}

@media print {
  .container {
    margin-top: 0px;
  }
}
</style>
