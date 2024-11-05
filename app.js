const app = Vue.createApp({
  data () {
    return {
      showBooks: true,
      title: 'The Green Leaf',
      author: 'Mac Andrews',
      age: 34
    }
  },
  methods: {
    changeBook () {
      this.title = 'The White Book'
    },

    toggleInfo () {
      this.showBooks = !this.showBooks
    }

  }
})

app.mount('#app')