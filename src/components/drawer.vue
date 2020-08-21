<template>
  <v-card>
    <v-navigation-drawer
      v-model="drawer"
      permanent
      clipped
      app
    >
      <v-list-item class="px-2">

        <v-list-item-title>Cloud Comparison</v-list-item-title>

      </v-list-item>

      <v-divider></v-divider>

      <v-list dense>
        <v-list-item
          v-for="item in items"
          :key="item.title"
          link
          :to="item.route"
        >
          
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </v-card>
</template>

<script>
  export default {
    data () {
      return {
        drawer: true,
        items: [
          { title: 'Overview', icon: 'mdi-home', route: '/' },
          { title: 'Storage', icon: 'mdi-server', route: '/storage' },
          { title: 'Networking', icon: 'mdi-lan', route: '/networking' },
          { title: 'Compute', icon: 'mdi-desktop-classic', route: '/compute' },
          { title: 'Hybrid Identity', icon: 'mdi-account-outline', route: '/hybrid' },
          { title: 'Database', icon: 'mdi-database', route: '/database' },
          { title: 'Security', icon: 'mdi-security', route: '/security' },
          { title: 'Management', icon: 'mdi-account-tie', route: '/management' },
          { title: 'IAM', icon: 'mdi-key', route: '/iam' },
          { title: 'AI/ML/BigData', icon: 'mdi-brain', route: '/aiml' },
          { title: 'Application', icon: 'mdi-application', route: '/application' },
          { title: 'Business', icon: 'mdi-domain', route: '/business' },
          { title: 'Migration', icon: 'mdi-cloud-download', route: '/migration' },
          { title: 'Disaster Recovery', icon: 'mdi-database-sync', route: '/disaster' },
          { title: 'Developer', icon: 'mdi-developer-board', route: '/developer' },

        ],
        
      }
    },
  }
</script>