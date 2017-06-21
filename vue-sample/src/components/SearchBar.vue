<template xmlns:v-on="http://www.w3.org/1999/xhtml">
    <div id='search-box'>
        <input v-model='playerName'/>
        <button v-on:click='onClick'>Search</button>
        <p>{{msg}}</p>
    </div>
</template>

<script>

    export default {
        props: ['searchPlayer', 'msg'],
        data () {
            return {
                playerName: ''
            }
        },
        methods: {
            onClick: function () {
                this.searchPlayer(this.playerName);
                this.playerName = ''
            }
        }
    }
</script>