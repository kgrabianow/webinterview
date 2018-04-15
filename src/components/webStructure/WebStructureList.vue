<template>
<ul>
  <!-- Nie wyświetlanie połączenia dla elementu 0 -->
  <div class="vl" :class="{ 'hide': id === 0 }"></div>
  <li>
    <WebStructureElement @removeElement="removeElement" @editDescription="editDescription" @editName="editName" @add="addChilden" :name="structure[findId(id)].name" :description="structure[findId(id)].description" :id="structure[findId(id)].id">
    </WebStructureElement>
    <WebStructureList @removeElement="removeElement" @editDescription="editDescription" @editName="editName" @add="addChilden" v-for="(child, index) in structure[findId(id)].children" :structure="structure" :id="child" :key="child.id"></WebStructureList>
  </li>
</ul>
</template>

<script>
import WebStructureElement from './WebStructureElement'

export default {
  name: 'WebStructureList',
  data() {
    return {

    }
  },
  props: ['structure', 'id'],
  methods: {
    findId(value) {
      for (let j = 0; j < this.structure.length; j++) {
        if (this.structure[j].id === value) {
          return j;
        }
      }
    },
    editName(arrayValue) {
      this.$emit('editName', arrayValue);
    },
    editDescription(arrayValue) {
      this.$emit('editDescription', arrayValue);
    },
    addChilden(id) {
      this.$emit('add', id);
    },
    removeElement(id) {
      this.$emit('removeElement', id);
    }
  },
  components: {
    WebStructureElement
  }
}
</script>

<style scoped>
.hide {
  display: none;
}

.vl {
  border-left: 6px solid #2c3e50;
  width: 10%;
  height: 50px;
  position: relative;
  left: 50%;
  margin-left: -3px;
  bottom: 0px;
}

.webArea ul {
  list-style-type: none;
  /* display: inline-flex; */
  display: table-cell;
  margin: 0 auto;
  padding: 0px;
  text-align: center;
}


.webArea {
  margin: 0 auto;
  text-align: center;
}
</style>
