<template>
  <div
    id="GridBlockLayout"
    class="flex items-center justify-center overflow-x-hidden"
    :style="`margin:${properties.marginY}px ${properties.marginX}px;`"
  >
    <div
      class="w-full grid"
      :class="{ horizontal_direction: isHorizontal(properties.direction) }"
      :style="
        isHorizontal(properties.direction)
          ? `grid-template-rows: repeat(${properties.rows}, minmax(0, 1fr))`
          : `grid-template-columns: repeat(${properties.cols}, minmax(0, 1fr))`
      "
    >
      <product-card-layout
        v-for="(product, productIndex) in block.content"
        :key="productIndex"
        :product="product"
        :style="`padding:${properties.paddingY}px ${properties.paddingX}px`"
      />
    </div>
  </div>
</template>

<script>
import ProductCardLayout from '@/components/Utilities/Cards/Product/'
export default {
  name: 'GridBlockLayout',
  components: { ProductCardLayout },
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
    this.properties = this.gridStyle()
  },
  methods: {
    gridStyle() {
      return {
        paddingY: this.allowedMarginsSpacing(
          this.block.properties.inner_top_bottom_spacing
        ),
        paddingX: this.allowedMarginsSpacing(
          this.block.properties.inner_left_right_spacing
        ),
        marginY: this.allowedMarginsSpacing(
          this.block.properties.outer_top_bottom_margins,
          8
        ),
        marginX: this.allowedMarginsSpacing(
          this.block.properties.outer_left_right_margins
        ),
        rows: this.block.properties.rows ?? 1,
        cols: this.block.properties.cols ?? 1,
        direction: this.block.properties.direction ?? 'vertical',
      }
    },

    isHorizontal: (direction) => direction === 'horizontal',

    checkMarginSpace: (value) => value <= 32 && value >= 0,

    allowedMarginsSpacing(value, defaultValue = 16) {
      return this.checkMarginSpace(value) ? value : defaultValue
    },
  },
}
</script>

<style>
.horizontal_direction {
  /* How many columns to show. */
  --visible-cols: 3.3;
  /*  Calculated column size. */
  --col-size: calc((100% / var(--visible-cols)));
  grid-auto-flow: column;
  grid-template-columns: var(--col-size);
  grid-auto-columns: var(--col-size);
  overflow-x: auto;
  overflow-y: hidden;
}
@media only screen and (max-width: 768px) {
  .horizontal_direction {
    --visible-cols: 1.3;
    --col-size: calc((100% / var(--visible-cols)));
    grid-template-columns: var(--col-size);
    grid-auto-columns: var(--col-size);
  }
}
</style>
