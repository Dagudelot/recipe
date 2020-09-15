<template>
    <div id="recipe_container">
        <div id="heading">
            <img src="../assets/recipe.png" alt="ícono de torta" width="50">
            <h1>Receta</h1>
        </div>

        <div>
            <div
            v-if="!started"
            @click="started = 1"
            id="start_btn">
                Empezar
            </div>
            <div 
            id="recipe_content"
            v-else>
                <Step
                :step="steps[index]"
                ></Step>
                <NextButton></NextButton>
            </div>
        </div>
    </div>
</template>

<script>
    // Vuex
    import { mapState } from 'vuex';

    // Components
    import Step from './Step';
    import NextButton from './NextButton';

    export default {
        components: {
            Step,
            NextButton
        },
        data(){
            return {
                started: 0
            }
        },
        computed: {
            ...mapState([ 'steps', 'index' ])
        }
    }
</script>

<style scoped>

    #heading{
        display: flex;
        justify-content: center;
        align-items: center;
    }

    #recipe_content{
        position: relative;
    }

    #recipe_content > div{
        margin: 7em auto 0 auto;
    }

    #start_btn{
        margin: 15em auto;
        width: 30%;
        background: #424250;
        color: #fff;
        font-weight: bold;
        border-radius: 10px;
        padding: 1em 2em;
        cursor: pointer;
    }
</style>