<template>
    <div class="step">
        <h2>{{ step.description }} </h2>

        <div id="step_options">
            <div 
            class="step_option"
            v-for="(option, index) in step.options"
            :key="index"
            >
                <input type="checkbox" v-model="selectedCheckbox[index]" v-if=" step.type == 'checkbox' ">
                <input type="radio" v-model="selectedRadio" :value="index" v-if=" step.type == 'radio' ">
                <label>{{ option }}</label>
            </div>
        </div>
    </div>
</template>

<script>
import { mapMutations, mapState } from 'vuex'
    export default {
        props: [ 'step' ],
        data(){
            return{
                selectedCheckbox: [],
                selectedRadio: null
            }
        },
        computed: {
            ...mapState([ 'index' ]),
        },
        methods: {
            ...mapMutations('stepStore', [ 'SET_SELECTED_INPUT' ]),
        },
        watch: {
            index(){
                if( this.selectedCheckbox.length ) this.SET_SELECTED_INPUT(this.selectedCheckbox);
                if( this.selectedRadio ) this.SET_SELECTED_INPUT(this.selectedRadio);
            },
            step(){                  
                this.selectedCheckbox = []
                this.selectedRadio = null                
            },
        }
    }
</script>

<style scoped>

    #step_options{
        margin-top: 6em;
    }

    .step_option{
        display: grid;
        grid-template-columns: 1fr 3fr;
        width: 50%;
        text-align: center;
        margin: 1em auto;
    }
</style>