<template>
<section @mouseleave="setPointed(false)" @mouseenter="setPointed(true)">
  <button v-if="isPointed" class="showButton right" @click="showElement()"><i class="icon" :class="{ 'icon-arrow-up': isShow, 'icon-arrow-down': !isShow }"></i></button>
  <button v-if="isShow" class="removeButton right" @click="removeElement(section.id)"><i class="icon icon-delete"></i></button>

  <!-- Tytuł -->
  <!-- Widok -->
  <template v-if="!editTitleMode">
    <h4><span>{{ section.title }}</span><button v-if="isShow" class="editButton" @click="changeTitleMode()"><i class="icon icon-edit"></i></button></h4>
  </template>
  <!-- Edycja -->
  <template v-else>
    <input type="text" @keydown.enter="titleClicked( getTitle() )" class="input-up" v-model="editedTitle" />
    <button class="okButton" @click="titleClicked( getTitle() )"><i class="icon icon-check okClick"></i></button>
  </template>

  <!-- Opis -->
  <!-- Widok -->
  <template v-if="!editContentMode">
    <button v-if="isShow" class="editButton right" @click="changeContentMode()"><i class="icon icon-edit"></i></button>
    <p v-html="section.content"></p>
    <!-- <p>{{ section.content }}</p> -->
  </template>
  <!-- Edycja -->
  <template v-else>
    <textarea type="text" @keydown.enter="contentClicked( getContent() )" class="input-up" v-model="editedContent" />
    <button class="okButton" @click="contentClicked( getContent() )"><i class="icon icon-check okClick"></i></button>
  </template>

</section>
</template>

<script>
export default {
  name: 'FeedElement',
  data() {
    return {
      isShow: false,
      editedTitle: this.section.title,
      editedContent: this.section.content,
      editTitleMode: false,
      editContentMode: false,
      isPointed: false
    }
  },
  methods: {
    showElement() {
      this.isShow = !this.isShow;
    },
    getTitle() {
      return this.editedTitle;
    },
    getContent() {
      return this.editedContent;
    },
    changeTitleMode() {
      this.editTitleMode = !this.editTitleMode;
    },
    changeContentMode() {
      this.editContentMode = !this.editContentMode;
    },
    titleClicked() {
      this.$emit('editTitle', [this.editedTitle, this.section.id]);
      this.changeTitleMode();
    },
    contentClicked() {
      this.$emit('editContent', [this.editedContent, this.section.id]);
      this.changeContentMode();
    },
    setPointed(value) {
      if (this.isShow === false) {
        this.isPointed = value;
      }
    },
    removeElement(id) {
      this.$emit('removeElement', id);
    }
  },
  props: ['section'],
  components: {

  }
}
</script>

<style scoped>
textarea {
  width: 80%;
  min-height: 100px;
}

.right {
  float: right;
}

.editButton {
  background-color: #ffff66;
}

.editButton:hover {
  background-color: yellow;
  color: #000000;
}

.okButton {
  background-color: #00dd00;
}

.okButton:hover {
  background-color: #00ff00;
  color: #000000;
}

.showButton {
  background-color: #cccccc;
}

.showButton:hover {
  background-color: #4dc3ff;
}

.removeButton {
  color: #dddddd;
  background-color: #e64444;
}

.removeButton:hover {
  color: #ffffff;
  background-color: #e60000;
}

.pricingFeed section {
  padding-left: 25px;
  padding-right: 25px;
  padding-top: 5px;
  padding-bottom: 5px;
}

@media print {
  .pricingFeed {
    margin-left: 0px;
    padding-left: 0px;
  }
  .pricingFeed section {
    margin-left: 0px;
    padding-left: 0px;
  }
  .pricingFeed h4 {
    font-size: 18px;
    padding: 0px;
    margin: 0px;
  }
  p {
    padding: 0px;
    font-size: 12px;
    line-height: 18px;
  }
}

.pricingFeed section:hover {
  border-left: 5px solid #4dc3ff;
}

.pricingFeed p {
  padding: 5px 0px;
}

.pricingFeed p:hover {
  /* background-color: #ffff4d; */
}

.pricingFeed h4 {
  padding: 0px 0px;
}

.pricingFeed h4:hover {
  /* background-color: #ffff4d; */
  /* background-color: #2c3e50; */
  /* color: #dddddd; */
}
</style>
