<template>
  <h1>{{ title }}</h1>
  <p> Welcome ... </p>
  <!-- <input type="text" ref="name">
  <button @click="handleClick">Click</button> -->
  <div v-if="showModal">
    <Modal :header="header" :text="text" theme="sale" @close="toggleModal">
      <template v-slot="links">
        <a href="#">sign up</a>
        <a href="#">log in</a>
      </template>
    </Modal>
  </div>
  <teleport to=".modals" v-if="showModal2">
    <Modal :header="header" :text="text" theme="sale" @close="toggleModal2">
      <template v-slot="article">
        <article>I am an article</article>
      </template>
    </Modal>
  </teleport>
  <button @click="toggleModal">Open Modal</button>
  <button @click="toggleModal2">Open Second Modal</button>
</template>


<script>
import Modal from '@/components/Modal.vue'

export default {
  name: 'App',
  components:{ Modal},
  data () {
    return {
      title: "My First Vue App :)",
      header: "Sign up for the giveaway",
      text: "Grab your ninja swag for half price",
      showModal: false,
      showModal2:false,
    }
  },
  methods: {
    handleClick () {
      console.log(this.$refs.name)
      this.$refs.name.classList.add('active')
      this.$refs.name.focus()
    },
    toggleModal () {
      this.showModal = !this.showModal
    },
    toggleModal2 () {
      this.showModal2 = !this.showModal2
      
    }
  }
}
</script>


<style></style>