<template>
  <div id="SliderComponentShared" class="relative">
    <vue-slick-carousel v-bind="{ ...settings, speed: sliderSpeed }">
      <slot />
    </vue-slick-carousel>
  </div>
</template>

<script>
// slider package import with css
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
export default {
  name: 'SliderComponentShared',
  components: {
    VueSlickCarousel,
  },
  props: {
    sliderSpeed: {
      type: Number,
      default: () => 0,
    },
    hasIndicator: {
      type: Boolean,
      default: () => true, //  appeared if slides are more than 1
    },
  },

  data() {
    return {
      settings: {
        dots: this.hasIndicator,
        arrows: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
      },
    }
  },

  computed: {},
  mounted() {},
  methods: {},
}
</script>

<style>
/* Slider Dots Styling */
.slick-dots {
  bottom: -10px;
}
.slick-dots li button {
  width: 30px;
  height: 10px;
  padding: 2.5px;
}
.slick-dots li button::before {
  width: 20px;
  height: 10px;
  opacity: 1 !important;
  color: white;
  font-size: 13px !important;
}

.slick-dots li.slick-active,
.slick-dots li {
  transition: 0.3s ease-out;
}
.slick-dots li.slick-active button::before {
  width: 25px;
  height: 10px;
  margin-top: 0px;
  background: black;
  border: 3px solid black;
  color: transparent;
  border-radius: 10px;
  transition: 0.1s ease-out;
  margin-left: -5px;
}
.slick-dots li.slick-active,
.slick-dots li {
  transition: 0.1s ease-out;
}
.slick-dots li.slick-active button::before {
  width: 30px;
  height: 10px;
  margin-top: 0px;
  background: black;
  border: 3px solid black;
  color: transparent;
  border-radius: 5px;
  transition: 0.1s ease-out;
  margin-left: -5px;
}

.slick-dots li.slick-active button::before ~ {
  margin: 0 5px;
}
.slick-dots li button:before {
  content: '' !important;
  width: 20px;
  height: 10px;
  border-radius: 5px;
  background: gray;
  border: 3px solid gray;
  color: transparent;
  transition: 0.2s ease-out;
}
.slick-dots li button {
  width: 30px;
  height: 10px;
  padding: 5px;
}

.slick-dots li {
  position: relative;
  display: inline-block;
  width: 25px;
  height: 10px;
  margin: 0 5px;
  padding: 0;
  cursor: pointer;
}

.slick-dots li button::before {
  width: 20px;
  height: 10px;
  opacity: 1 !important;
  color: white;
}
</style>
