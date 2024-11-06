<template>
  <h1>Ninja Reaction Timer</h1>
  <button @click="startTimer" :disabled="showBlock">play</button>
  <Block v-if="showBlock" @end="stopTimer"/>
  <Results v-if="!showBlock" :score="score" :result="result"/>
</template>

<script>
import Block from '@/components/Block.vue'
import Results from '@/components/Results.vue';

export default {
  data () {
    return {
      showBlock: false,
      delay: 2000 + Math.random() * 5000,
      score:null,
      result:null
    }
  },
  components: { Block, Results },

  methods: {

    startTimer () {
      setTimeout(()=>{
        this.showBlock = true
      }, this.delay)
    },

    stopTimer (timer) {
      this.showBlock = false
      this.score = timer
      if (this.score<350) {
        this.result = 'Fast fingers'
      } else if (this.score>350 && this.score<700) {
        this.result = 'Not fast'
      } else {
        this.result = 'Very slow'
      }
    }

  }

}
</script>