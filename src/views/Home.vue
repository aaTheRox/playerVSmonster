<template>
  <div class="home">
    <FormNickName></FormNickName>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import FormNickName from '@/components/FormNickName.vue'

export default {
  name: 'home',
  components: {
    HelloWorld,
    FormNickName
  }
}
</script>
