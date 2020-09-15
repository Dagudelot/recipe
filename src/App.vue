<template>
	<div id="wrapper">

		<Instructions/>
		<Recipe/>
		<Feedback/>
	</div>
</template>

<script>
	// Vuex
	import { mapMutations } from 'vuex';
	
	// Import steps
    import steps from './assets/steps.json'

	// Components
	import Instructions from './components/Instructions.vue'
	import Recipe from './components/Recipe.vue'
	import Feedback from './components/Feedback.vue'

	export default {
		name: 'App',
		components: {
			Instructions,
			Recipe,
			Feedback
		},
		mounted(){
			this.SET_STEPS( steps )
		},
		methods: {
			...mapMutations([ 'SET_STEPS' ])
		}
	}
</script>

<style lang="scss">
	#app {
		font-family: Avenir, Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: center;
		color: #2c3e50;
	}

	#wrapper{
		display: grid;
		grid-template-columns: 1fr 3fr 1fr;
		width: 100vw;
		height: 100vh;
	}

	#wrapper > div{
		padding: 1em;
	}
</style>
