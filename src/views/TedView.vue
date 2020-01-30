<template>
  <section class="d-flex flex-column align-center">
    <TedHeading :text="video.name" />
    <TedLoader :loading="loading">
      <div class="d-flex flex-column video-container">
        <TedCard type="video" :item="video" />
        <v-expansion-panel focusable>
          <v-expansion-panel-content>
            <template v-slot:header>
              <div>About the Speaker</div>
            </template>
            <p>
              Speaker:
              <a :href="video.speaker.link" target="_blank">{{
                video.speaker.name
              }}</a
              >, {{ video.speakersDesc }}
            </p>
            <p>Speaker Bio: {{ video.speaker.bio }}</p>
          </v-expansion-panel-content>
        </v-expansion-panel>
        <v-expansion-panel>
          <v-expansion-panel-content>
            <template v-slot:header>
              <div>About the Talk</div>
            </template>
            <span>{{ video.speaker.description }}</span>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </div>
    </TedLoader>
  </section>
</template>

<script>
import TedCard from '@/components/Card/TedCard';
import TedHeading from '@/components/TedHeading';
import TedLoader from '@/components/TedLoader';

import { mapActions, mapGetters } from 'vuex';
export default {
  name: 'TedView',
  props: {
    video: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {
      recent: {},
      loading: false,
    };
  },
  components: {
    TedCard,
    TedHeading,
    TedLoader,
  },
  computed: {
    ...mapGetters('recents', ['getRecentById']),
  },
  methods: {
    ...mapActions('recents', ['addToRecentsAction']),
    ...mapActions('search', ['getVideoAction']),
    inRecents(id) {
      this.recent = { ...this.getRecentById(id) };
      return this.video.id === this.recent.id;
    },
  },
  async created() {
    if (this.video && !this.inRecents(this.video.id)) {
      await this.addToRecentsAction(this.video);
    }
    // if (!this.video) {
    // this.getVideoAction(this.$route.params.id);
    //   this.video = await
    // }
  },
};
</script>

<style lang="scss" scoped>
.video-container {
  max-width: 1200px;
}
</style>
