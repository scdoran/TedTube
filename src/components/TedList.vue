<template>
  <TedContainer class="ted-result-list">
    <TedLoader :loading="loading">
      <TedContainer v-if="results && results.length">
        <slot></slot>
      </TedContainer>
      <TedContainer v-if="!results || (results && !results.length)" row wrap>
        <TedSubheading text="Nothing to see here!" />
      </TedContainer>
    </TedLoader>
  </TedContainer>
</template>

<script>
import TedContainer from './TedContainer';
import TedLoader from './TedLoader';
import TedSubheading from './TedSubheading';
export default {
  name: 'TedList',
  props: {
    loading: {
      type: Boolean,
      default: () => false,
    },
    results: {
      type: Array,
      default: () => [],
    },
  },
  components: {
    TedContainer,
    TedLoader,
    TedSubheading,
  },
};
</script>
