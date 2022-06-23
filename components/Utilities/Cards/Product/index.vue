<template>
  <div id="ProductCardLayout">
    <img
      :src="product.image"
      class="object-center object-cover"
      width="150"
      height="150"
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
