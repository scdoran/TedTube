<template>
  <div>
    <router-link :to="{ name: 'view', params: { id: media.id, video: media } }">
      <v-img
        v-if="type === 'image'"
        :src="media.thumbnail_url ? 'media.thumbnail_url' : ''"
        class="white--text align-end"
        gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
        height="200px"
      >
        <slot></slot>
      </v-img>
    </router-link>

    <div
      v-if="type === 'video'"
      class="video"
      v-html="media.embeddedLink"
    ></div>
  </div>
</template>

<script>
export default {
  name: 'TedMedia',
  props: {
    media: {
      type: Object,
      default: () => {},
    },
    type: {
      type: String,
      default: () => 'image',
    },
  },
};
</script>

<style lang="scss" scoped></style>
