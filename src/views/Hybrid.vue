<template>
    <div class = "hybrid">
        <v-card>
            <v-card-title>
                Hybrid Identity
            <v-spacer></v-spacer>
            <v-text-field
              v-model="search"
              append-icon="mdi-magnify"
              label="Search"
              single-line
              hide-details
             ></v-text-field>
            </v-card-title>
            <v-data-table 
              :headers="headers"
              :items="items"
              :search="search"
            ></v-data-table>
          </v-card>

    </div>
</template>

<script>
export default {
    data () {
      return {
        tab: null,
        items: [
            {
              name: 'Identity',
              AWS: 'AD Conntector',
              Azure: 'AAD Connect/ADFS',
              GCP: ' ',
            
            },
            {
              name: 'Data Ingestion',
              AWS: ' ',
              Azure: 'Data Management Gateway',
              GCP: ' ',
            },
            {
              name: 'Storage',
              AWS: ' ',
              Azure: 'StorSimple',
              GCP: ' ',
            },
            {
              name: 'Network',
              AWS: 'Virtual Private Cloud/VPN',
              Azure: 'Virtual Network/VPN',
              GCP: 'Cloud Virtual Network/VPN',
            },
            {
              name: 'Applications',
              AWS: ' ',
              Azure: 'Hybrid Connection Manager',
              GCP: ' ',
            },
            {
              name: 'Management & Monitoring',
              AWS: ' ',
              Azure: 'Operations Management Suite',
              GCP: 'Stackdriver(AWS)',
            },
            
        ],
        search: '',
        headers: [
          {
            text: 'Service',
            align: 'start',
            sortable: false,
            value: 'name',
          },
          { text: 'AWS', value: 'AWS' },
          { text: 'Azure', value: 'Azure' },
          { text: 'GCP', value: 'GCP' },
         
        ],
      }
    },
}
</script>