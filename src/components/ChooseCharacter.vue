<template>
  <section>
    pick a character
 {{ image }}
    <img :src="image" alt="" />
  </section>


</template>

<script>
export default {
  name: 'ChooseCharacter',

  props: [
    'image'
  ],
}
</script>
