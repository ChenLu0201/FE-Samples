<template>
  <div id="search-app">
    <h2 class="title">Golden State Warriors</h2>
    <SearchBar v-bind:search-player = searchPlayer v-bind:msg="message"></SearchBar>
    <PlayerList v-bind:players = players></PlayerList>
  </div>
</template>

<script>
  import SearchBar from './SearchBar.vue'
  import PlayerList from './PlayerList.vue'
  const allPlayers = [
    {name: 'Stephen Curry', age: 27},
    {name: 'Kevin Durant', age: 29},
    {name: 'Klay Thompson'},
    {name: 'Draymond Green'},
    {name: 'Zaza Pachulia'}
  ];
  export default {
    components: {SearchBar, PlayerList},
    data () {
      return {
        players: allPlayers,
        message: 'here is the message'
      }
    },
    methods: {
      searchPlayer: function(name) {
        this.players = allPlayers.filter((player) => {return player.name.toLowerCase().includes(name.toLowerCase())})
      }
    }
  }
</script>

<style scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  /*list-style-type: none;*/
  /*padding: 0;*/
}

/*li {*/
  /*display: inline-block;*/
  /*margin: 0 10px;*/
/*}*/

.title {
  color: green
}

a {
  color: #42b983;
}
</style>
