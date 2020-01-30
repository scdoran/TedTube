<template>
  <v-text-field
    class="d-flex"
    :placeholder="placeholder"
    icon
    :prepend-icon="icon"
    v-model="text"
    @keyup="handleChange"
  >
  </v-text-field>
</template>

<script>
export default {
  name: 'TedTextInput',
  props: {
    icon: {
      type: String,
      default: () => '',
    },
    placeholder: {
      type: String,
      default: () => 'Start typing...',
    },
  },
  data() {
    return {
      text: '',
    };
  },
  methods: {
    handleChange() {
      this.$emit('updatedText', this.text);
    },
  },
};
</script>

<style lang="scss" scoped></style>
