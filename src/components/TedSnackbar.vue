<template>
  <div>
    <v-snackbar v-model="show">
      {{ message }}
      <TedButton
        :hideBackground="true"
        color="white"
        text="Close"
        @clicked="show = false"
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
  components: {
    TedButton,
  },
};
</script>

<style lang="scss" scoped></style>
