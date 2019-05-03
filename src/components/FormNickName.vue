<template>
  <section>
    <div class="columns is-centered">
      <div class="column is-half has-text-centered">
        <h3 class="title">Welcome, please choose your nickname...</h3>
        <form @submit.prevent="submitForm">
          <div class="field">
            <input
              type="text"
              class="input"
              v-model="playerName"
              placeholder="Enter your nickname..."
            >
          </div>
          <div class="field has-text-danger">
          {{ this.$store.error }}
          </div>
        <startGame></startGame>

        </form>
      </div>
    </div>
  </section>
</template>

<script>
import startGame from '@/components/startGame.vue'

import { mapState, mapMutations } from "vuex";

export default {
  components: {
    startGame
  },
  computed: {
    playerName() {
      return this.$store.state.playerName;
    },
    playerName: {
      set(newValue) {
        return this.$store.commit("UPDATE_PNAME", newValue);
      },
      get() {
        return this.$store.state.playerName;
      }
    }
  },

  methods: {
    submitForm() {
      console.log('form submit')
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
</style>
