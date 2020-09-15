<template>
    <div id="instructions_container">
        <h1>Instrucciones</h1>

        <instruction
        v-for="(instruction, i) in steps"
        :key="i"
        :pos="i"
        :step="instruction"
        :class="{ active_instruction : i == index }"
        ></instruction>
    </div>
</template>

<script>
    // Vuex
    import { mapState } from 'vuex';

    // Components
    import instruction from './InstructionStep.vue'

    export default {
        components: {
            instruction
        },
        computed: {
            ...mapState([ 'steps', 'index' ])
        }
    }
</script>

<style scoped>

    h1{
        margin-bottom: 3em;
    }

    #instructions_container{
        background: #f7f7fc;
        overflow-y: scroll;
    }

    .active_instruction{
        background: #424250;
        color: #fff;
    }

</style>