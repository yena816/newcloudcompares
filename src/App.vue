<template>
  <v-app>
    <drawer />
    <v-content>
      <router-view></router-view> 
    </v-content>
  </v-app>
</template>

<script>
import drawer from './components/drawer';

export default {
  name: 'App',

  components: {
    drawer
  },

  data: () => ({
    //
  }),
};
</script>
