<template>
<section :class="{ 'isUsed': used }">
  <h4>{{ section.title }}<button class="showButton" @click="showElement()"><i class="icon" :class="{ 'icon-arrow-up': isShow, 'icon-arrow-down': !isShow }"></i></button></h4>
  <div v-if="isShow">
    <p>{{ section.description }}</p>
    <div class="buttonContainer">
      <div class="buttonElement" @mouseleave="elementTargeted(false,0)" @mouseenter="elementTargeted(true,0)">
        <strong :class="{ 'sexSelected': sexContentShow==0, '': sexContentShow!=0 }">Pan: </strong><button @click="addElement(section.id,0)"><i class="icon icon-plus"></i></button>
      </div>
      <div class="buttonElement" @mouseleave="elementTargeted(false,1)" @mouseenter="elementTargeted(true,1)">
        <strong :class="{ 'sexSelected': sexContentShow==1, '': sexContentShow!=1 }">Pani: </strong><button @click="addElement(section.id,1)"><i class="icon icon-plus"></i></button>
      </div>
      <div class="buttonElement" @mouseleave="elementTargeted(false,2)" @mouseenter="elementTargeted(true,2)">
        <strong :class="{ 'sexSelected': sexContentShow==2, '': sexContentShow!=2 }">Państwo: </strong><button @click="addElement(section.id,2)"><i class="icon icon-plus"></i></button>
      </div>
    </div>
    <div class="sexContentArea">
      <p :class="{ '': sexContentShow==0, 'hide': sexContentShow!=0 }">{{ section.content[0].content }}</p>
    </div>
    <div class="sexContentArea">
      <p :class="{ '': sexContentShow==1, 'hide': sexContentShow!=1 }">{{ section.content[1].content }}</p>
    </div>
    <div class="sexContentArea">
      <p :class="{ '': sexContentShow==2, 'hide': sexContentShow!=2 }">{{ section.content[2].content }}</p>
    </div>
  </div>

</section>
</template>

<script>
export default {
  name: 'PricingElement',
  data() {
    return {
      isShow: false,
      sexContentShow: 0
    }
  },
  methods: {
    showElement() {
      this.isShow = !this.isShow;
    },
    addElement(id, sexNumber) {
      // console.log("Dodaje opis elementu o id: " + id + " oraz płci: " + this.section.content[sexNumber].sex);
      let arrayValue = [id, sexNumber];
      this.$emit('addElement', arrayValue);
      this.showElement();
    },
    elementTargeted(isTargeted, sexID) {
      if (isTargeted === false) {
        // this.sexContentShow = undefined;
      } else {
        this.sexContentShow = sexID;
      }
    }
  },
  props: ['section', 'used'],
  components: {

  }
}
</script>

<style scoped>
.hide {
  display: none;
}

.isUsed h4 {
  text-decoration: line-through;
  color: #bbbbbb;
}

.isUsed button {
  background-color: #ebebe0;
}


.sexSelected {
  background-color: #cccccc;
}

.sexContentArea {
  display: inline-block;
}

.buttonContainer {
  /* float: left; */
}

.buttonContainer strong {
  padding: 10px;
}

.buttonContainer button {
  border-top: 2px solid #bbbbbb;
  background-color: #bbbbbb;
  margin-left: 0px;
}

.buttonContainer button:hover {
  border-top: 2px solid #4dc3ff;
  background-color: #4dc3ff;
}

.buttonElement {
  float: left;
}

.showButton {
  background-color: #cccccc;
}

.showButton:hover {
  background-color: #4dc3ff;
}

.pricingElements section {
  padding-left: 25px;
  padding-right: 10px;
}

.pricingElements section:hover {
  padding-left: 30px;
  padding-right: 0px;
  border-left: 5px solid #4dc3ff;
}

.pricingElements p {}

.pricingElements p:hover {}

.pricingElements h4 {
  padding: 0px;
  margin: 0px;
}

.pricingElements h4:hover {}
</style>
