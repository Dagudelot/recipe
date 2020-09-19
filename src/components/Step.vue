<template>
    <div class="step">
        <h2>{{ step.description }} </h2>

        <div id="step_options">
            <div 
            class="step_option"
            v-for="(option, index) in step.options"
            :key="index"
            >
                <input type="checkbox" @click="checkboxClicked(index)" v-if=" step.type == 'checkbox' ">
                <input type="radio" v-model="selectedRadio" :value="index" v-if=" step.type == 'radio' ">
                <label>{{ option }}</label>
            </div>
        </div>
    </div>
</template>

<script>
import { mapMutations, mapState } from 'vuex'
    export default {
        props: [ 'step', 'nextButtonClicked' ],
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
            checkboxClicked(index){
                const element = this.step.options[index];

                if( this.selectedCheckbox.includes(element) ){
                    const index = this.selectedCheckbox.indexOf(element)
                    this.selectedCheckbox.splice(index, 1)
                }else{
                    this.selectedCheckbox.push( element );
                }
            }
        },
        watch: {
            nextButtonClicked(){

                if( this.selectedCheckbox.length ) {
                    this.SET_SELECTED_INPUT({
                        selectedInput: this.selectedCheckbox, 
                        type: 'checkbox'
                    });
                }

                if( this.selectedRadio != null ) {
                    this.SET_SELECTED_INPUT({
                        selectedInput: this.selectedRadio, 
                        type: 'radio'
                    });
                }
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
        margin-top: 3em;
    }

    .step_option{
        display: grid;
        grid-template-columns: 1fr 3fr;
        width: 50%;
        text-align: center;
        margin: 1em auto;
    }
</style>