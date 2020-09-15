<template>
    <div 
    id="next_btn"
    v-if=" index < steps.length "
    @click="INCREMENT_INDEX()"
    >
        Siguiente
    </div>
</template>

<script>
    // Vuex
    import { mapMutations, mapState } from 'vuex';
    
    export default {
        computed: {
            ...mapState([ 'steps', 'index' ])
        },
        methods: {
            ...mapMutations([ 'INCREMENT_INDEX' ]),
        }
    }
</script>

<style scoped>

    #next_btn{
        position: absolute;
        right: 0;
        width: 20%;
        background: #424250;
        color: #fff;
        font-weight: bold;
        border-radius: 10px;
        padding: 1em 2em;
        cursor: pointer;
    }
</style>