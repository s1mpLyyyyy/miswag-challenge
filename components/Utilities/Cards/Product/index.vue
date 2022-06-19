<template>
  <div id="ProductCardLayout">
    <img
      :src="product.image"
      width="auto"
      height="auto"
      class="object-center object-cover"
      :alt="product.title"
    />
  </div>
</template>

<script>
export default {
  name: 'ProductCardLayout',
  props: {
    product: {
      type: Object,
      required: true,
    },
  },
}
</script>

<style></style>
