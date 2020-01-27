<template>
  <div>
    <TedHeading text="Search" :uppercase="true" />
    <SearchBar @search="getVideos" />
    <TedLoader :display="loading" type="list" />
    <TedList
      v-if="videos.length"
      type="search"
      heading="Results"
      :results="videos"
    />
    <TedHeading
      v-if="initialLoad && (!videos || !videos.length)"
      text="Oops, looks like there aren't any results based on the search criteria!"
      :uppercase="true"
    />
  </div>
</template>

<script>
// COMPONENTS
import SearchBar from '@/components/Search/SearchBar';
import TedHeading from '@/components/TedHeading';
import TedLoader from '@/components/TedLoader';
import TedList from '@/components/TedList';

// STORE
import { mapActions, mapState } from 'vuex';

export default {
  name: 'TedSearch',
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
    TedHeading,
    TedLoader,
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
    ...mapActions('search', ['addVideosAction', 'getVideosAction']),
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
