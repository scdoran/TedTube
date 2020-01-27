<template>
  <div class="about-container">
    <TedHeading text="About Ted Search" />
    <section class="subheading-container">
      <p class="subheading-text">
        Ted Search is an app that allows you to search for Ted talks by speaker,
        talk name or description.
      </p>
    </section>
    <section class="body-container">
      <p class="body-text">
        Ted Search is not possible without the use of TED API (develped by
        <a class="body-link" href="https://rapidapi.com/user/bestApi">
          bestApi</a
        >). For more information about the TED API endpoints visit
        <a
          class="body-link"
          href="https://rapidapi.com/bestApi/api/ted/endpoints"
        >
          Rapid API</a
        >.
      </p>
    </section>
  </div>
</template>

<script>
import TedHeading from '@/components/TedHeading';
export default {
  name: 'TedAbout',
  components: {
    TedHeading,
  },
};
</script>

<style lang="scss" scoped>
.body {
  &-container {
  }
  &-link {
  }
  &-text {
  }
}
.heading {
}
.subheading {
  &-container {
  }
  &-link {
  }
}
</style>
