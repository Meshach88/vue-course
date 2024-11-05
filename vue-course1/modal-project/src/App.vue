<template>
  <h1>{{ title }}</h1>
  <p> Welcome ... </p>
  <!-- <input type="text" ref="name">
  <button @click="handleClick">Click</button> -->
  <div v-if="showModal">
    <Modal :header="header" :text="text" theme="sale" @close="toggleModal"/>
  </div>
  <button @click="toggleModal">Open Modal</button>
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
      showModal: false
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
      console.log(this.showModal)
    }
  }
}
</script>


<style></style>