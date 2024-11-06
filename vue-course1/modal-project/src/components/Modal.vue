<template>
    <div class="backdrop" @click.self="closeModal">
        <div class="modal" :class="{ sale: theme === 'sale'}" >
            <h1>{{ header }}</h1>
            <p>{{text}}</p>
            <div to="modals" class="actions">
                <slot name="links"></slot>
            </div>
            <div>
                <slot name="article"></slot>
            </div>
            <slot>default</slot>
        </div>

    </div>
</template>


<script>
export default {
    props: ['header', 'text', 'theme'],
    methods:{
        closeModal () {
            this.$emit('close')
        }
    }
}


</script>


<style>
.modal {
    width: 400px;
    padding: 20px;
    margin: 10px auto;
    background: white;
    border-radius: 10px;
    text-align: center
}

.backdrop {
    top:0;
    position: fixed;
    background: #00000099;
    width: 100%;
    height: 100%;
}

.modal h1 {
    color: #03cfb4;
    border: none;
    padding: 0;
    text-align: center;
    font-weight: bold;
}

.modal p {
    text-align: center;
}

.modal.sale {
    background-color: crimson;
    color: white;
}

.modal.sale h1{
    color: white;
}
</style>