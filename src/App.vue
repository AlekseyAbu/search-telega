<template>
  <div id='app'>
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'App',
}
</script>

<style>
  #app{
    margin: 0;
    padding: 0;
    max-width: 600px;
    margin: 0 auto;
  }
  :active, :hover, :focus {
    outline: 0;
    outline-offset: 0;
  }
  @media screen and (min-width: 940px) {
      #app{
        background: #E5E5E5;
        max-width: 100%;
    }
  }
</style>

