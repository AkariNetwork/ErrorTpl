<template>
  <div>
    <div class="float">
      <mu-appbar style="width: 100%;" title="Title"></mu-appbar>
    </div>
    <div class="background">
      <mu-carousel hide-indicators class="full">
        <mu-carousel-item>
          <img :src="img.img_misaka_1">
        </mu-carousel-item>
        <mu-carousel-item>
          <img :src="img.img_misaka_2">
        </mu-carousel-item>
        <mu-carousel-item>
          <img :src="img.img_misaka_3">
        </mu-carousel-item>
        <mu-carousel-item>
          <img :src="img.img_misaka_4">
        </mu-carousel-item>
        <mu-carousel-item>
          <img :src="img.img_misaka_5">
        </mu-carousel-item>
      </mu-carousel>
    </div>
  </div>
</template>

<script>
import settings from '../settings'
import img_misaka_1 from '../assets/img-misaka/1.jpg'
import img_misaka_2 from '../assets/img-misaka/2.jpg'
import img_misaka_3 from '../assets/img-misaka/3.jpg'
import img_misaka_4 from '../assets/img-misaka/4.jpg'
import img_misaka_5 from '../assets/img-misaka/5.jpg'

export default {
  data: function(){
    return {
      link: settings.link,
      linktext: settings.linktext,
      img: {
        img_misaka_1,
        img_misaka_2,
        img_misaka_3,
        img_misaka_4,
        img_misaka_5
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
</style>