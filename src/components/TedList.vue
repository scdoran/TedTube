<template>
  <div v-if="results && results.length" class="ted-result-list">
    <TedCard
      v-for="item in results"
      :key="item.id || 0"
      :item="item"
      :isFavorite="item.favorite"
      :inMyWatchlist="item.watchlist"
      :width="350"
    />
  </div>
</template>

<script>
import TedCard from '@/components/Card/TedCard.vue';

export default {
  name: 'TedList',
  props: {
    results: {
      type: Array,
      default: () => [],
    },
  },
  components: {
    TedCard,
  },
};
</script>

<style lang="scss" scoped>
.ted-result-list {
  display: flex;
  flex-flow: row wrap;
  justify-content: space-evenly;
}
</style>
