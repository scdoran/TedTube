<template>
  <v-container fluid>
    <v-row class="flex-md-row justify-center align-center search-bar-container">
      <v-col cols="4" sm="2">
        <TedDropdown
          :options="options"
          placeholder="Search by"
          @itemSelection="updateSelection"
        />
      </v-col>
      <v-col cols="5" sm="3">
        <TedTextInput
          placeholder="Search..."
          icon="magnify"
          @updatedText="updateQuery"
        />
      </v-col>
      <v-col cols="2" sm="1">
        <TedButton
          size="x-small"
          className="red darken-4 red--text text--lighten-5"
          @clicked="sendQuery"
          text="Go"
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import TedButton from '@/components/TedButton';
import TedDropdown from '@/components/TedDropdown';
import TedTextInput from '@/components/TedTextInput';
export default {
  name: 'SearchBar',
  data() {
    return {
      query: {
        text: '',
        queryType: '',
      },
      options: [
        {
          text: 'Name',
          value: 'talksByName',
        },
        {
          text: 'Speaker',
          value: 'bySpeaker',
        },
        {
          text: 'Description',
          value: 'talksByDescription',
        },
      ],
    };
  },
  components: {
    TedButton,
    TedDropdown,
    TedTextInput,
  },
  methods: {
    sendQuery() {
      this.$emit('search', this.query);
    },
    updateSelection(selection) {
      this.query.queryType = selection;
    },
    updateQuery(text) {
      this.query.text = text;
    },
  },
};
</script>

<style lang="scss" scoped></style>
