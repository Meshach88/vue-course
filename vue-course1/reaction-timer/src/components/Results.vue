<template>
    <div>
        <p v-if="score">Result : {{ score }} ms </p>
        <p>{{ result }}</p>
    </div>
</template>


<script>
export default {
    props:['score', 'result'],
}
</script>


<style>

</style>