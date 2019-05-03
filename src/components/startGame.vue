<template>
  <section>
    <div class="columns">
      <div class="column has-text-centered">

        
        <div class="field">
          <button class="button is-success is-medium" @click="startGame">Start game</button>
        </div>
        {{ playerName }} {{ isGameRunning }}
      </div>
    </div>
  </section>
</template>


<script>

import { mapState, mapMutations } from "vuex";
export default {

  computed: {
    isGameRunning: {
      get() {
        return this.$store.state.isGameRunning;
      }
    },
    playerName: {
      get() {
        return this.$store.state.playerName;
      }
    },
    error: {
      set(newError) {
        this.$store.state.error = newError;
      },
      get() {
        return this.$store.state.error
      }
    }
  },
  methods: {
    startGame: function() {

      if(this.playerName !=='') {
          this.$store.error = ''
          this.$store.commit("START_GAME");
      } else {
        let error= 'Please choose an username'
          this.$store.commit("UPDATE_ERRORS", error);

      }
    }
  }
};
</script>

