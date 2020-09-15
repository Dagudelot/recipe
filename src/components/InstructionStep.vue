<template>
    <div class="instruction">
        <div class="instruction_title">
            {{ pos+1 }} - {{ step.name }}
        </div>
        <div class="instruction_description">
            {{ step.description }}
        </div>
    </div>
</template>

<script>
    export default {
        props: [ 'pos', 'step' ],
    }
</script>

<style scoped>

    .instruction{
        margin-bottom: 2em;
        padding: 1em;
        border-radius: 10px;
    }

    .instruction > .instruction_title{
        font-size: 1.3em;
        font-weight: bold;
        text-align: left;
        margin-bottom: 3px;
    }

    .instruction > .instruction_description{
        font-size: 1em;
        text-align: justify;
    }

</style>