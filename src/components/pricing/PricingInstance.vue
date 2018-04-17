<template>
<div class="pricingArea">

  <div class="pricingFeed">
    <h3>Dzień Dobry!</h3>

    <FeedElement @editTitle="editTitle" @editContent="editContent" @removeElement="removeElement" v-for="(feedElement, index) in sections" :section="feedElement" :key="feedElement.id"></FeedElement>

  </div>

  <div class="pricingElements">
    <h3>Elementy do użycia</h3>
    <PricingElement @addElement="addElement" v-for="(element, index) in sugesstedSections" :section="element" :key="element.id"></PricingElement>
  </div>

</div>
</template>

<script>
import PricingElement from './PricingElement'
import FeedElement from './FeedElement'

export default {
  name: 'PricingInstance',
  data() {
    return {

    }
  },
  methods: {
    addElement(arrayValue) {
      this.$emit('addElement', arrayValue);
    },
    removeElement(id) {
      this.$emit('removeElement', id);
    },
    editTitle(array) {
      this.$emit('editTitle', array);
    },
    editContent(array) {
      this.$emit('editContent', array);
    },
  },
  props: ['sections', 'sugesstedSections'],
  components: {
    PricingElement,
    FeedElement
  }
}
</script>

<style scoped>
.pricingArea {
  margin: 0 auto;
  max-width: 100%;
}

.pricingElements {
  float: left;
  text-align: justify;
  max-width: 40%;
  padding-left: 10px;
  padding-right: 10px;
  padding-bottom: 10px;
}

.pricingElements:hover {}

.pricingElements h3 {
  padding-left: 25px;
}

.pricingFeed {
  float: left;
  text-align: justify;
  min-width: 45%;
  max-width: 50%;
  padding-left: 25px;
  padding-right: 10px;
  padding-bottom: 50px;
  /* border-right: 4px solid #2c3e50; */
}

.pricingFeed:hover {}

.pricingFeed h3 {
  padding-left: 25px;
}

@media print {

  .container {
    margin-top: 0px;
  }

  .pricingFeed h3 {
    font-size: 20px;
    padding-left: 0px;
  }

  .pricingFeed {
    min-width: 90%;
    margin-left: 5%;
    margin-right: 5%;
    text-align: justify;
  }

  .pricingArea {
    margin: 0 auto;
  }

  header,
  nav,
  footer,
  .pricingElements,
  .menu,
  .adv,
  h3,
  .ndop {
    display: none;
  }
}
</style>
