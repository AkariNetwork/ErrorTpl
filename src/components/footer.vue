<template>
  <v-footer>

  </v-footer>
</template>

<script>
import settings from '../settings'
import psl from "psl";

var parsed = psl.parse()

export default {
  data: function(){
    return {
      link: settings.link,
      linktext: settings.linktext,
      domain: parsed.domain
    }
  }
}
</script>

<style>

</style>