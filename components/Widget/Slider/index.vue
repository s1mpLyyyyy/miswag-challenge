<template>
  <div
    id="SliderBlockLayout"
    class="flex justify-center items-center"
    :class="`mx-${properties.marginX} my-${properties.marginY}`"
  >
    <slick-slider-layout
      :slider-speed="properties.slideInterval"
      :has-indicator="properties.hasIndicator"
      style="max-width: 50vw"
    >
      <div
        v-for="(product, index) in item.content"
        :key="index"
        class="px-5 touch-manipulation"
      >
        <a :href="'#' + product.action.target" class="">
          <img :src="product.image" class="w-full h-full" alt="" />
        </a>
      </div>
    </slick-slider-layout>
  </div>
</template>

<script>
import SlickSliderLayout from '@/components/Utilities/Share/Slider'
export default {
  name: 'SliderBlockLayout',
  components: { SlickSliderLayout },
  props: {
    item: {
      type: Object,
      required: true,
      default: () => {},
    },
  },
  data() {
    return {
      properties: {},
    }
  },
  created() {
    this.properties = this.sliderStyle()
  },
  methods: {
    sliderStyle() {
      const properties = {
        // ⏲ vue-slick-carousel slide animation only in millisecond
        slideInterval: this.convertToMilisec(
          this.item.properties.slide_interval
        ),
        marginY: this.item.properties.top_bottom_margins ?? 0,
        marginX: this.item.properties.left_right_margins ?? 0,
        hasIndicator: this.item.properties.has_indicator ?? true,
      }
      return properties
    },
    convertToMilisec: (sec = 0) => sec * 1000,
  },
}
</script>

<style></style>
