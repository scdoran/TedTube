<template>
  <v-card class="ma-3" hover :width="width" :height="height">
    <router-link
      v-if="type === 'image'"
      :to="{ name: 'view', params: { id: item.id, video: item } }"
    >
      <TedCardMedia
        :type="type"
        :media="item.thumbnail_url"
        :title="item.name"
      />
    </router-link>
    <TedCardMedia
      v-if="type === 'video'"
      :type="type"
      :media="item.embeddedLink"
    />
    <slot></slot>
  </v-card>
</template>

<script>
import TedCardMedia from './TedCardMedia';
export default {
  name: 'TedCard',
  props: {
    item: {
      type: Object,
      default: () => {},
    },
    type: {
      type: String,
      default: () => 'image',
    },
    width: {
      type: [Number, String],
      default: () => 'auto',
    },
    height: {
      type: Number,
      default: () => undefined,
    },
    size: {
      type: String,
      default: () => 'small',
    },
  },
  components: {
    TedCardMedia,
  },
};
</script>

<style lang="scss" scoped></style>
