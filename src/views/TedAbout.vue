<template>
  <TedContainer>
    <v-flex xs12>
      <TedHeading text="About Ted Search" />
      <section class="subheading-container">
        <p class="subheading-text">
          Ted Search is an app that allows you to search for Ted talks by
          speaker, talk name or description.
        </p>
      </section>
    </v-flex>
    <v-flex xs12>
      <section class="body-container">
        <p class="body-text">
          Ted Search is not possible without the use of TED API (develped by
          <a
            class="body-link"
            href="https://rapidapi.com/user/bestApi"
            target="_blank"
          >
            bestApi</a
          >). For more information about the TED API endpoints visit
          <a
            class="body-link"
            href="https://rapidapi.com/bestApi/api/ted/endpoints"
            target="_blank"
          >
            Rapid API</a
          >.
        </p>
      </section>
    </v-flex>
  </TedContainer>
</template>

<script>
import TedContainer from '@/components/TedContainer';
import TedHeading from '@/components/TedHeading';
export default {
  name: 'TedAbout',
  components: {
    TedContainer,
    TedHeading,
  },
};
</script>
