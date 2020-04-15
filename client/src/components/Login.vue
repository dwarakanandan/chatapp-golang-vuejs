<template>
  <div class="container">
    <section class="top-padding-1">
      <figure class="image center width-2">
        <img src="../assets/chat.png" />
      </figure>
      <h1 class="title center top-padding-2">Yet another Chat App!</h1>
    </section>

    <section class="center top-padding-1">
      <input id="nickname" ref="nickname" class="input is-dark width-1" type="text" placeholder="Pick a nickname..." />
    </section>

    <section class="center top-padding-2">
      <button class="button is-dark is-rounded width-2" v-on:click="onClicked">Submit</button>
    </section>
  </div>
</template>

<script>
export default {
  name: "Login",
  methods: {
      onClicked() {
        if (isEmpty(this.$refs.nickname.value.trim())) {
          alert("Please choose a valid nickname!")
          return
        }
        this.$router.push(`/chat/nickname=${this.$refs.nickname.value.trim()}`)
      }
   }
};

function isEmpty(str) {
    return (!str || 0 === str.length);
}
</script>


<style scoped>
.top-padding-1 {
  padding-top: 60px;
}
.top-padding-2 {
  padding-top: 30px;
}
.width-1 {
  max-width: 300px;
}
.width-2 {
  max-width: 100px;
}
.center {
  margin-left: auto;
  margin-right: auto;
  text-align: center;
}
</style>