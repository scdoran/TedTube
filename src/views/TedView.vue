<template>
  <section class="d-flex flex-column align-center">
    <TedHeading :text="video.name" />
    <TedLoader :display="loading" type="list" />
    <div class="d-flex flex-column video-container">
      <TedCard type="video" :item="video" />
      <v-expansion-panels accordion focusable hover multiple>
        <v-expansion-panel>
          <v-expansion-panel-header>About the Speaker</v-expansion-panel-header>
          <v-expansion-panel-content>
            <p>
              Speaker:
              <a :href="video.speaker_url" target="_blank">{{
                video.speaker
              }}</a
              >, {{ video.speakersDesc }}
            </p>
            <p>Speaker Bio: {{ video.speakerBio }}</p>
          </v-expansion-panel-content>
        </v-expansion-panel>
        <v-expansion-panel>
          <v-expansion-panel-header>About the Talk</v-expansion-panel-header>
          <v-expansion-panel-content>
            <span>{{ video.talkDesc }}</span>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
    </div>
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
