<template>
<!-- Element Struktury Strony -->
<div class="webElement">
  <!-- Przyciski -->
  <!-- Usuń -->
  <i class="icon icon-cross removeElement left" :class="{ 'hide': !showAddButtons }" @click="removeElement()"></i>
  <!-- Dodaj -->
  <i class="icon icon-plus addElement right" :class="{ 'hide': !showAddButtons }" @click="addChildren()"></i>
  <!-- Parametry elementu -->
  <!-- Nazwa -->
  <!-- Widok -->
  <template v-if="nameEditMode">
    <input type="text" @keydown.enter="nameClicked( getName() )" class="input-up" v-model="editedName" />
    <i class="icon icon-check okClick" @click="nameClicked( getName() )"></i>
  </template>
  <!-- Edycja -->
  <template v-else>
    <div class="label" @click="nameClicked( getName() )">{{ name }}</div>
  </template>
  <!-- Opis -->
  <!-- Widok -->
  <template v-if="descriptionEditMode">
    <input type="text" @keydown.enter="descriptionClicked( getDescription() )" class="input-down" v-model="editedDescription" />
    <i class="icon icon-check okClick" @click="descriptionClicked( getDescription() )"></i>
  </template>
  <!-- Edycja -->
  <template v-else>
    <div class="description" @click="descriptionClicked( getDescription() )">{{ description }}</div>
  </template>
</div>
</template>

<script>
export default {
  name: 'WebStructureList',
  data() {
    return {
      editedName: this.name,
      editedDescription: this.description,
      showAddButtons: false,
      nameEditMode: false,
      descriptionEditMode: false
    }
  },
  props: ['name', 'description', 'id'],
  methods: {
    getName() {
      return this.editedName;
    },
    getDescription() {
      return this.editedDescription;
    },
    addChildren() {
      this.$emit('add', this.id)
    },
    removeElement() {
      this.$emit('removeElement', this.id)
    },
    showButtons() {
      if (this.descriptionEditMode || this.nameEditMode) {
        this.showAddButtons = true;
      } else if (!this.descriptionEditMode && !this.nameEditMode) {
        this.showAddButtons = false;
      }
    },
    nameClicked(value) {
      this.descriptionEditMode ? (this.descriptionEditMode = !this.descriptionEditMode) : '';
      this.$emit('editName', [this.editedName, this.id]);
      this.nameEditMode = !this.nameEditMode;
      this.showButtons();
    },
    descriptionClicked(value) {
      this.nameEditMode ? (this.nameEditMode = !this.nameEditMode) : '';
      this.$emit('editDescription', [this.editedDescription, this.id]);
      this.descriptionEditMode = !this.descriptionEditMode;
      this.showButtons();
    }
  },
  components: {

  }
}
</script>

<style scoped>
.right {
  float: right;
}

.left {
  float: left;
}

.hide {
  display: none;
}

.input-up {
  padding: 10px;
  margin-bottom: 10px;
}

.input-down {
  padding: 10px;
  margin-top: 10px;
}

.okClick {
  padding: 15px;
  margin: 5px;
  color: green;
}

.okClick:hover {
  color: white;
  background-color: green;
}

.addElement {
  padding: 10px;
  margin: 5px;
  margin-top: 7.5px;
  color: green;
}

.addElement:hover {
  color: white;
  background-color: green;
}

.removeElement {
  padding: 10px;
  margin: 5px;
  margin-top: 7.5px;
  color: red;
}

.removeElement:hover {
  color: white;
  background-color: red;
}

.description {
  padding: 10px;
  background-color: #2c3e50;
  color: #dddddd;
  /* background-color: #ffffff; */
}

.description:hover {
  cursor: pointer;
  background-color: #ffff4d;
  color: black;
}

.label {
  padding: 10px;
}

.label:hover {
  cursor: pointer;
  background-color: #ffff4d;
  /* text-shadow: 0px 0px 2px rgba(0, 0, 0, 1); */
}

.webElement {
  /* margin-top: 25px; */
  /* margin-bottom: 25px; */
  margin-left: 25px;
  margin-right: 25px;
  padding: 10px;
  color: #2c3e50;
  border: 1px solid #2c3e50;
}

.webElement:hover {
  cursor: pointer;
  background-color: #4dc3ff
}
</style>
