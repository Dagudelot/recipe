<template>
    <div class="feedback_message">
        <span>> {{ message }}</span>
    </div>
</template>

<script>
    export default {
        props: [ 'message' ],
    }
</script>

<style scoped>

    .feedback_message{
        padding: 1em;
        text-align: left;
    }

</style>