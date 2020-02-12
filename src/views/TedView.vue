<template>
  <TedContainer v-if="recent">
    <v-flex xs12>
      <TedHeading :text="recent.name" />
    </v-flex>
    <TedContainer>
      <TedCard type="video" :item="recent">
        <TedCardAction>
          <TedButton
            :hideBackground="true"
            :className="'card - button'"
            :icon="true"
            @clicked="handleFavorite(recent)"
          >
            <TedIcon
              :color="`${recent.favorite ? 'red' : ''}`"
              iconType="favorite"
            />
          </TedButton>
          <TedButton
            :hideBackground="true"
            :className="'card-button'"
            :icon="true"
            @clicked="handleWatchlist(recent)"
          >
            <TedIcon
              :color="`${recent.watchlist ? 'blue' : ''}`"
              iconType="bookmark"
            />
          </TedButton>
        </TedCardAction>
      </TedCard>
      <TedAccordionContainer title="About the Speaker" v-if="recent.speaker">
        <TedAccordionContent>
          <TedCardText>
            Speaker:
            <a :href="recent.speaker.link" target="_blank">
              {{ recent.speaker.name }}
            </a>
            <v-spacer></v-spacer>
            {{ recent.speakersDesc }} Speaker Bio:
            {{ recent.speaker.bio }}
          </TedCardText>
        </TedAccordionContent>
      </TedAccordionContainer>
      <TedAccordionContainer title="About the Talk" v-if="recent.speaker">
        <TedAccordionContent>
          <TedCardText :text="recent.speaker.description" />
        </TedAccordionContent>
      </TedAccordionContainer>
    </TedContainer>
  </TedContainer>
</template>

<script>
import TedButton from '@/components/TedButton';
import TedCard from '@/components/Card/TedCard';
import TedCardAction from '@/components/Card/TedCardAction';
import TedCardText from '@/components/Card/TedCardText';
import TedContainer from '@/components/TedContainer';
import TedAccordionContainer from '@/components/Accordion/TedAccordionContainer';
import TedAccordionContent from '@/components/Accordion/TedAccordionContent';
import TedHeading from '@/components/TedHeading';
import TedIcon from '@/components/TedIcon';

import { mapActions, mapGetters, mapState } from 'vuex';
import { favoritesAndWatchlists } from '../shared/mixins/favoritesAndWatchlist';

export default {
  name: 'TedView',
  mixins: [favoritesAndWatchlists],
  props: {
    video: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {
      recent: this.video ? JSON.parse(JSON.stringify(this.video)) : {},
      loading: false,
    };
  },
  components: {
    TedButton,
    TedCard,
    TedCardAction,
    TedCardText,
    TedContainer,
    TedAccordionContainer,
    TedAccordionContent,
    TedHeading,
    TedIcon,
  },
  computed: {
    ...mapGetters('recents', ['getRecentById']),
    ...mapState('recents', ['recents']),
  },
  methods: {
    ...mapActions('recents', ['addToRecentsAction', 'getRecentsAction']),
    ...mapActions('search', ['getVideoAction']),
    inRecents(id) {
      const video = { ...this.getRecentById(id) };
      return video.id === this.recent.id;
    },
    async loadData() {
      this.loading = true;
      await this.getRecentsAction();
      if (!this.video) {
        this.recent = await { ...this.getRecentById(this.$route.params.id) };
      }
      this.loading = false;
    },
  },
  async created() {
    await this.loadData();
    if (this.video && !this.inRecents(this.video.id)) {
      await this.addToRecentsAction(this.video);
    }
  },
};
</script>
