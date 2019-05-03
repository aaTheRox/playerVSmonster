<template>
<section v-if="isGameRunning">

  <div class="columns is-centered">
    <div class="column is-half has-text-centered">
      <h3 class="title">Welcome, please choose your nickname...</h3>
      <form @submit.prevent="setNickName">
        <div class="field">
          <input
            type="text"
            id="playerName"
            v-model="playerName"
            class="input"
            placeholder="Enter your nickname..." >
        </div>
      </form>
    </div>
  </div>
</section>

</template>

<script>

export default {
  name: "FormNickName",
  
 data: function () {
    return {
      playerName: ''
    }
  },

  methods: {
    setNickName: function() {
      console.log(this.playerName)
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
</style>
