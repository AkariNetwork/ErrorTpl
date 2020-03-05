<template>
  <div>
      <mu-appbar style="width: 100%;" :title="title"></mu-appbar>
      <mu-container class="card">
        <mu-row>
          <mu-col span="4" offset="1">
            <br><br><br>
            <mu-card>
              <mu-card-title :title="title" :sub-title="domain"></mu-card-title>
              <mu-card-text>
                <p>{{talk}}</p>
                <br>
                <a :href="link"><p>{{linktext}}</p></a>
              </mu-card-text>
            </mu-card>
          </mu-col>
        </mu-row>
      </mu-container>
    <div class="background">
      <mu-carousel hide-indicators hide-controls class="full">
        <mu-carousel-item v-for="img in imgs" :key="img">
          <img :src="img">
        </mu-carousel-item>
      </mu-carousel>
    </div>
  </div>
</template>

<script>
import settings from './settings'
import psl from 'psl'
import img_misaka_1 from './assets/img-misaka/1.jpg'
import img_misaka_2 from './assets/img-misaka/2.jpg'
import img_misaka_3 from './assets/img-misaka/3.jpg'
import img_misaka_4 from './assets/img-misaka/4.jpg'
import img_misaka_5 from './assets/img-misaka/5.jpg'
import img_1 from './assets/img/1.jpg'

var parsed = psl.parse(document.domain);

export default {
  data: function(){
    return {
      domain: parsed.domain,
      link: settings.link,
      linktext: settings.linktext,
      title: this.$parent.title,
      talk: this.$parent.talk,
      imgs: {
      img_misaka_1,
      img_misaka_2,
      img_misaka_3,
      img_misaka_4,
      img_misaka_5,
      img_1,
      }
    }
  }
}
</script>

<style>
.full{
  min-height:100vh;
  display: flexbox;
}

.background{
  width:100%;
  height:100%;
  z-index: -100;
  position: fixed;
}

.card {
  position: absolute;
  z-index: 100;
}
</style>