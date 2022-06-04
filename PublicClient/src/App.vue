<script>
const self = require('./Client.js');

export default {
  props : {
    oauthVals
  },
  data() {
    return {
      
    }
  }
};

</script>

<template>
  <header>
  </header>

  <main>
    This is some shit<br />
    <p>Using text interpolation: {{ rawHtml }}</p>
    <p>Using v-html directive: <span v-html="rawHtml"></span></p>
  </main>
</template>

<style>
</style>
