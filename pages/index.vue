<template>
  <div id="HomePage" class="flex items-center justify-center">
    <component
      :is="block.type"
      v-for="(block, blockIndex) in blocks"
      :key="`block-Index__${blockIndex}`"
      :block="block"
    />
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import LoadingState from '@/components/Statics/Loading'
import ErrorState from '@/components/Layouts/Error'
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
  },
}
</script>
<style></style>
