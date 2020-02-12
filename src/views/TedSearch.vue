<template>
  <TedContainer>
    <v-flex xs12>
      <TedHeading text="Search" :uppercase="true" />
      <SearchBar @search="getVideos" />
    </v-flex>
    <v-flex xs12>
      <TedList :results="videos" :loading="loading">
        <TedCard
          v-for="item in videos"
          :key="item.id || 0"
          :width="350"
          :item="item"
          type="image"
        >
          <TedCardAction>
            <TedButton
              :hideBackground="true"
              :className="'card - button'"
              :icon="true"
              @clicked="handleFavorite(item)"
            >
              <TedIcon
                :color="`${item.favorite ? 'red' : ''}`"
                iconType="favorite"
              />
            </TedButton>
            <TedButton
              :hideBackground="true"
              :className="'card-button'"
              :icon="true"
              @clicked="handleWatchlist(item)"
            >
              <TedIcon
                :color="`${item.watchlist ? 'blue' : ''}`"
                iconType="bookmark"
              />
            </TedButton>
          </TedCardAction>
        </TedCard>
      </TedList>
    </v-flex>
  </TedContainer>
</template>

<script>
// COMPONENTS
import SearchBar from '@/components/Search/SearchBar';
import TedButton from '@/components/TedButton';
import TedCard from '@/components/Card/TedCard';
import TedCardAction from '@/components/Card/TedCardAction';
import TedContainer from '@/components/TedContainer';
import TedHeading from '@/components/TedHeading';
import TedIcon from '@/components/TedIcon';
import TedList from '@/components/TedList';

// STORE
import { mapState } from 'vuex';
import { favoritesAndWatchlists } from '../shared/mixins/favoritesAndWatchlist';

export default {
  name: 'TedSearch',
  mixins: [favoritesAndWatchlists],
  props: {
    queryType: {
      type: String,
      default: () => '',
    },
    text: {
      type: String,
      default: () => '',
    },
  },
  components: {
    SearchBar,
    TedButton,
    TedCard,
    TedCardAction,
    TedContainer,
    TedHeading,
    TedIcon,
    TedList,
  },
  data() {
    return {
      initialLoad: true,
      loading: false,
    };
  },
  computed: {
    ...mapState('search', ['videos']),
  },
  async created() {
    await this.checkForQuery();
    this.initialLoad = false;
  },
  methods: {
    checkForQuery() {
      if (this.queryType !== '' && this.text !== '') {
        const query = {
          queryType: this.queryType,
          text: this.text,
        };
        this.getVideos(query);
      }
    },
    async getVideos(query) {
      this.loading = true;
      this.results = await this.getVideosAction(query);
      this.loading = false;
    },
  },
};
</script>
