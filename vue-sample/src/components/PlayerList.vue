<template>
    <div id="player-list">
        <ul>
            <li v-for='player in players'> {{ player.name }} </li>
        </ul>
    </div>
</template>

<script>
    export default {
        props:['players'],
        data() {
            return {}
        }
    }
</script>