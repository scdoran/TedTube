<template>
  <div>
    <v-snackbar v-model="display" :timeout="5000">
      {{ message }}
      <TedButton
        :hideBackground="true"
        color="white"
        text="Close"
        @clicked="display = false"
      />
    </v-snackbar>
  </div>
</template>

<script>
import TedButton from './TedButton';
export default {
  name: 'TedSnackbar',
  props: {
    message: {
      type: String,
      default: () => 'Success',
    },
    show: {
      type: Boolean,
      default: () => false,
    },
  },
  data() {
    return {
      display: this.show,
    };
  },
  components: {
    TedButton,
  },
};
</script>

<style lang="scss" scoped></style>
