<template>
  <div
    id="SliderBlockLayout"
    class="flex justify-center items-center"
    :style="`margin:${properties.marginY}px ${properties.marginX}px;`"
  >
    <slick-slider-layout
      :slider-speed="properties.slideInterval"
      :has-indicator="properties.hasIndicator"
      class="w-full"
    >
      <div v-for="(product, index) in block.content" :key="index" class="px-5">
        <a :href="'#' + product.action.target" class="">
          <img
            :src="product.image"
            class="w-full h-full"
            :alt="'Product title'"
          />
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
    block: {
      type: Object,
      required: true,
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
      return {
        slideInterval: this.convertToMilisec(
          this.block.properties.slide_interval
        ),
        marginY: this.allowedMargins(this.block.properties.top_bottom_margins),
        marginX: this.allowedMargins(this.block.properties.left_right_margins),
        hasIndicator: this.block.properties.has_indicator ?? true,
      }
    },
    convertToMilisec: (sec = 0) => sec * 1000,

    allowedMargins(value, defaultValue = 0) {
      return this.checkMargin(value) ? value : defaultValue
    },
    checkMargin: (value) => value <= 32 && value >= 0,
  },
}
</script>

<style></style>
