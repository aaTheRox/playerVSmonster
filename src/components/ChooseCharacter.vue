<template>
  <section>
    <div class="columns is-centered">
    <div class="column is-12">
      <h1 class="title">
      Pick up a character
    </h1>
    </div>
    </div>
    <div class="columns is-centered">
      <div class="column is-2">
        <div @click="setCharacter" :class="isSelected==true ? 'selected' : ''" class="choose-character">
          <img src="~@/assets/player.png">
        </div>
      </div>

      <div class="column is-2">
        <div class="choose-character is-unavailable">
          <img src="~@/assets/monster.png" alt>
        </div>
      </div>

      
      </div>

      <div class="columns">
        <div class="column is-fullwidth">
          <div class="field">
            <button :disabled="!isSelected" class="button is-large is-danger">Play now</button>
          </div>
          <div class="fie">
            <a href="#" class="button is-small is-dark" @click="changeNickname">Change nickname</a>
          </div>
      </div>
      </div>
  </section>
</template>

<script>
export default {
  name: "ChooseCharacter",

  props: {
    image: String
  },

  data() {
    return {
      isSelected: false
    }
  },
  methods: {

    setCharacter() {
      if(this.isSelected) {
        this.isSelected = false;
      } else {
        this.isSelected  = true;
      }
      console.log('character set successfully')
    },
    changeNickname() {
      this.$router.push('/')
    }
  }
};
</script>
<style lang="less">
.choose-character {
  &.is-unavailable {
    cursor: auto;
    border-color: #ddd;
    opacity: .5;
    &:hover,{
      border-color: #ddd;
      opacity: .5;
    }
  }
  padding: 10px;
  border-radius: 10px;
  border: 2px solid #ddd;
  height: 160px;
  width: 160px;
  opacity: .8;
  cursor: pointer;
  &:hover,&.selected {
    border-color: #92c792;
    opacity: 1;
  }
  img {
    height: 100%;
    width: 100%;
  }
}
</style>