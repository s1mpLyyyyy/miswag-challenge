<template>
  <div id="ProductCardLayout">
    <img
      :src="product.image"
      class="object-center object-cover w-full h-full"
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
