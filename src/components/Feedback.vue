<template>
    <div id="feedback_container">
        <h1>Consola</h1>

        <feedbackmessage
        v-for="(message, i) in feedback_messages"
        :key="i"
        :message="message"
        ></feedbackmessage>
    </div>
</template>

<script>
    // Vuex
    import { mapState } from 'vuex';

    // Components
    import feedbackmessage from './FeedbackMessage.vue'

    export default {
        components: {
            feedbackmessage
        },
        computed: {
            ...mapState([ 'feedback_messages' ])
        }
    }
</script>

<style scoped>

    h1{
        margin-bottom: 3em;
    }

    #feedback_container{
        /*background: #f7f7fc;*/
        background: #424250;
        color: #fff;
        overflow-y: scroll;
    }

</style>