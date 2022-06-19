<template>
  <div
    id="GridBlockLayout"
    class="flex items-center justify-center overflow-x-hidden"
    :class="`
    mx-${properties.marginX} 
    my-${properties.marginY}  
    `"
    style="max-width: 50vw"
  >
    <div
      class="grid"
      :class="[
        checkDirection(properties.direction)
          ? `horizontal_direction grid-rows-${properties.rows}`
          : `grid-cols-${properties.cols}`,
      ]"
    >
      <product-card-layout
        v-for="(product, productIndex) in item.content"
        :key="productIndex"
        :class="`px-${properties.paddingX} py-${properties.paddingY}`"
        :product="product"
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
    this.properties = this.gridStyle()
  },
  methods: {
    gridStyle() {
      const properties = {
        paddingY: this.item.properties.inner_top_bottom_spacing ?? 16,
        paddingX: this.item.properties.inner_left_right_spacing ?? 16,
        marginY: this.item.properties.outer_top_bottom_margins ?? 8,
        marginX: this.item.properties.outer_left_right_margins ?? 16,
        rows: this.item.properties.rows ?? 1,
        cols: this.item.properties.cols ?? 1,
        direction: this.item.properties.direction ?? 'vertical',
      }

      return properties
    },
    checkDirection: (direction) => direction === 'horizontal',
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