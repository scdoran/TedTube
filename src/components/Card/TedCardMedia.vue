<template>
  <div>
    <v-img
      v-if="type === 'image'"
      alt="video thumbnail"
      lazy-src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/TED_three_letter_logo.svg/1200px-TED_three_letter_logo.svg.png"
      :src="media"
      srcset="https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/TED_three_letter_logo.svg/1200px-TED_three_letter_logo.svg.png"
      class="white--text align-end"
      gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
      height="200px"
      contain
    >
      <TedCardTitle :title="title" />
      <slot></slot>
    </v-img>
    <div v-if="type === 'video'" class="video" v-html="media"></div>
  </div>
</template>

<script>
import TedCardTitle from './TedCardTitle';
export default {
  name: 'TedMedia',
  props: {
    media: {
      type: String,
      default: () =>
        'https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/TED_three_letter_logo.svg/1200px-TED_three_letter_logo.svg.png',
    },
    title: {
      type: String,
      default: () => '',
    },
    type: {
      type: String,
      default: () => 'image',
    },
  },
  components: {
    TedCardTitle,
  },
};
</script>

<style lang="scss">
iframe {
  width: 100%;
}
</style>
