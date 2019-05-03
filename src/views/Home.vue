<template>
  <div class="home">
    <FormNickName></FormNickName>
    <startGame></startGame>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import FormNickName from '@/components/FormNickName.vue'
import startGame from '@/components/startGame.vue'

export default {
  name: 'home',
  components: {
    HelloWorld,
    FormNickName,
    startGame
  }
}
</script>

<style>
@import "~bulma/css/bulma.css";
</style>
