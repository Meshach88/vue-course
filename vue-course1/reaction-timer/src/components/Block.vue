<template>
    <div class="block" @click="endGame">
        Click me
    </div>
</template>

<script>
export default {
    data () {
        return {
            timer: null,
        }
    },
    props:[],

    mounted () {
        setInterval(()=>{
            this.timer += 10
        }, 10)
    },

    methods: {
        endGame () {
            this.$emit('end', this.timer)
            // console.log(this.timer)
        }
    }

}
</script>



<style>
.block {
    background: #04c99e;
    padding: 100px 0;
    text-align: center;
    width: 300px;
    border-radius: 10px;
    color: white;
    margin: 10px;
}

</style>