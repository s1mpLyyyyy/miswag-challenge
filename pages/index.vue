<template>
  <div id="HomePage" class="flex justify-center">
    <div class="md:w-10/12 w-full grid xl:grid-cols-2 grid-cols-1">
      <component
        :is="checkComponentType(block.type)"
        v-for="(block, blockIndex) in blocks"
        :key="`block-Index__${blockIndex}`"
        :block="block"
      />
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import LoadingState from '@/components/Statics/Loading'
import ErrorState from '@/components/Layouts/LoadError'
import ErrorComponentType from '@/components/Layouts/TypeError'
const GridBlockLayout = import('@/components/Widget/Grid/')
const SliderBlockLayout = import('@/components/Widget/Slider/')

export default {
  name: 'HomePage',
  components: {
    slider: () => ({
      component: new Promise((resolve) => {
        setTimeout(() => {
          resolve(SliderBlockLayout)
        }, 500)
      }),
      loading: LoadingState,
      error: ErrorState,
      delay: 0,
      timeout: 2000,
    }),
    grid: () => ({
      component: new Promise((resolve) => {
        setTimeout(() => {
          resolve(GridBlockLayout)
        }, 500)
      }),
      loading: LoadingState,
      error: ErrorState,
      delay: 0,
      timeout: 2000,
    }),
    ErrorComponentType,
  },
  data() {
    return {
      blocks: [],
    }
  },
  created() {
    this.initBlocks()
  },
  methods: {
    ...mapActions({
      getBlocks: 'Block/getAllBlocks',
    }),
    async initBlocks() {
      try {
        this.blocks = await this.getBlocks()
      } catch (err) {}
    },
    checkComponentType(type) {
      const components = Object.keys(this.$options.components)
      return components.includes(type) ? type : 'ErrorComponentType'
    },
  },
}
</script>
<style></style>
