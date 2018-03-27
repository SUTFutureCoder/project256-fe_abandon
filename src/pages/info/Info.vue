<template>
    <div class="info">
        <vue-markdown>

# Hi
**Can you hear me**
How are you

---


        </vue-markdown>
    </div>
</template>
<script>
    import VueMarkdown from 'vue-markdown'

    export default {
        name: 'info',
        data() {
            return {
            }
        },
        methods: {
            t: function () {

            }
        },
        components: {
            VueMarkdown,
        }
    }
</script>