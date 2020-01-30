<template>
  <div>
    <v-item-group
      v-model="model"
      class="pa-4"
      prev-icon="mdi-minus"
      next-icon="mdi-plus"
      show-arrows
    >
      <v-item v-for="item in list" :key="item.id">
        <TedCard
          :height="200"
          :item="item"
          :showAction="false"
          :width="200"
          type="list"
        />
      </v-item>
    </v-item-group>
  </div>
</template>

<script>
import TedCard from '@/components/Card/TedCard';

export default {
  name: 'TedCarouselGroup',
  props: {
    list: {
      type: Array,
      default: () => [],
    },
  },
  components: {
    TedCard,
  },
  data() {
    return {
      model: null,
    };
  },
};
</script>

<style lang="scss" scoped></style>
