<template>
  <v-footer>
    <div>Build: {{build}}</div>
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
      build: settings.build,
      domain: parsed.domain
    }
  }
}
</script>

<style>

</style>