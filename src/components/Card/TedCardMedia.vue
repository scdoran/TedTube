<template>
  <div>
    <router-link :to="{ name: 'view', params: { id: media.id, video: media } }">
      <v-img
        v-if="type === 'image'"
        alt="video thumbnail"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/TED_three_letter_logo.svg/1200px-TED_three_letter_logo.svg.png"
        class="white--text align-end"
        gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
        height="200px"
        contain
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
