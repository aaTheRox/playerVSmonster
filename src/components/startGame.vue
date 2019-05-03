<template>
  <section>
    <div class="columns">
      <div class="column has-text-centered">
        <div class="field">
          <button id="startGame" :disabled="this.playerName.length == 0" :class="(this.playerName.length == 0 ) ? '' :  'is-success'"  class="button is-medium" @click="startGame">Save</button>
        </div>
        {{ playerName }} {{ isGameRunning }}
      </div>
    </div>
  </section>
</template>


<script>

import { router } from 'vue-router'
import { mapState, mapMutations } from "vuex"
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
          this.$router.push('choose-character')
      } else {
        let error= 'Please choose an username'
          this.$store.commit("UPDATE_ERRORS", error);

      }
    }
  }
};
</script>

