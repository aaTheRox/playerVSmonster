<template>
  <section v-if="!isGameRunning">
    <div class="columns">
      <div class="column has-text-centered">
        <div class="field">
          <button class="button is-success is-medium" @click="startGame">Start game</button>
        </div>
      </div>
    </div>
  </section>
</template>


<script>

export default {
 data: function () {
    return {
      isGameRunning: false
    }
  },

  methods: {
    startGame: function() {
        if(!this.isGameRunning) {
          this.isGameRunning = true;
          console.log(this.isGameRunning)
        }
}
  }
};
</script>

