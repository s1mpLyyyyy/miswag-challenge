<template>
  <div id="HomePage" class="flex flex-col justify-center items-center">
    <div v-for="(item, itemIndex) in items" :key="`item-Index____${itemIndex}`">
      <!-- Keeping data values alive as you switch (cached) -->
      <keep-alive>
        <!-- Dynamic components -->
        <component :is="item.type" :item="item" />
      </keep-alive>
    </div>
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
      // LoadingState is the component that is displayed while our default component
      // is loading
      loading: LoadingState,
      // ErrorState is the component that is displayed should our default component have an // error while loading
      error: ErrorState,
      // A delay is set up before the loading component is shown
      delay: 0,
      // Should this timeout be reached, the default component is considered to have failed // to load
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
      items: [
        {
          id: '6E9F0971-229D-4694-8515-7FEE753D2B10',
          properties: {
            cols: 2,
            rows: 1,
            outer_left_right_margins: 100,
            outer_top_bottom_margins: 16,
            inner_left_right_spacing: 16,
            inner_top_bottom_spacing: 100,
            direction: 'horizontal',
          },
          content: [
            {
              image:
                'https://cdn.miswag.me/images/thumbs512/miswag_aLkDkoHz5N5o.jpg',
              action: {
                target: 'category',
                id: '1',
              },
              title: 'Product Title Here',
            },
            {
              image:
                'https://cdn.miswag.me/images/thumbs512/miswag_aLkDkoHz5N5o.jpg',
              action: {
                target: 'category',
                id: '1',
              },
              title: 'Product Title Here',
            },
            {
              image:
                'https://cdn.miswag.me/images/thumbs512/miswag_aLkDkoHz5N5o.jpg',
              action: {
                target: 'category',
                id: '1',
              },
              title: 'Product Title Here',
            },
            {
              image:
                'https://cdn.miswag.me/images/thumbs512/miswag_aLkDkoHz5N5o.jpg',
              action: {
                target: 'category',
                id: '1',
              },
              title: 'Product Title Here',
            },
            {
              image:
                'https://cdn.miswag.me/images/thumbs512/miswag_aLkDkoHz5N5o.jpg',
              action: {
                target: 'category',
                id: '1',
              },
              title: 'Product Title Here',
            },
            {
              image:
                'https://cdn.miswag.me/images/thumbs512/miswag_aLkDkoHz5N5o.jpg',
              action: {
                target: 'category',
                id: '1',
              },
              title: 'Product Title Here',
            },
          ],
          type: 'grid',
        },
        {
          id: '5923DF92-96E2-45E8-8149-2351D9611AC5',
          properties: {
            slide_interval: 2,
            left_right_margins: 32,
            top_bottom_margins: 32,
            has_indicator: true,
          },
          content: [
            {
              image:
                'https://cdn.miswag.me/images/images/ab7baffc-6fdb-49d9-814c-bc5389eb9c82.jpg',
              action: {
                target: 'category',
                id: '1',
              },
            },
            {
              image:
                'https://cdn.miswag.me/images/images/30ae5934-93df-40cc-b7be-4ef850aa65a4.jpg',
              action: {
                target: 'brand',
                id: '1',
              },
            },
            {
              image:
                'https://cdn.miswag.me/images/images/a24c961b-65c7-4d23-bc0c-74fcfb6f691d.png',
              action: {
                target: 'brand',
                id: '1',
              },
            },
            {
              image:
                'https://cdn.miswag.me/images/images/f9eebbf9-d098-433f-855b-41cecd0639c5.png',
              action: {
                target: 'brand',
                id: '1',
              },
            },
            {
              image:
                'https://cdn.miswag.me/images/images/dca63a4b-939d-4042-8c0d-38e6d250205b.png',
              action: {
                target: 'brand',
                id: '1',
              },
            },
          ],
          type: 'slider',
        },
      ],
    }
  },
  created() {
    // this.initItems()
  },
  methods: {
    ...mapActions({
      getItems: 'Item/getAll',
    }),
    async initItems() {
      this.items = await this.getItems()
    },
  },
}
</script>
<style></style>
