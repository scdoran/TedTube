<template>
  <v-container grid-list-xs text-xs-center fluid>
    <v-layout align-center justify-center row fill-height wrap>
      <slot></slot>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: 'TedContainer',
};
</script>
