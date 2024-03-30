<template>


  <v-toolbar app>
      <span class="hidden-sm-and-up">
        <v-toolbar-side-icon  >
        </v-toolbar-side-icon>
      </span>
      <v-toolbar-title>
             My Project
       </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-xs-only">
        <v-btn
          flat
          v-for="item in menuItems"
          :key="item.title"
          :to="item.path">
          <v-icon left dark></v-icon>
          {{ item.title }}
        </v-btn>
      </v-toolbar-items>

    </v-toolbar>



</template>

<script setup lang="ts">
interface MenuItem {
  title: string;
  path: string;

}

const appTitle: string = 'Awesome App';
const sidebar: boolean = false;
const menuItems: MenuItem[] = [
{ title: 'Main', path: '/'   },
  { title: 'Home', path: '/home'},
  { title: 'About', path: '/about' }

];
</script>
