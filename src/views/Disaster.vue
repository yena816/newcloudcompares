<template>
    <div class = "disaster">
        <v-card>
            <v-card-title>
                Disaster Recovery
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
              name: 'Backup and Recovery',
              AWS: 'Amazon S3 Glacier',
              Azure: 'Azure Site Recovery',
              GCP: 'Cloud Storage Nearline',
            
            },
            {
              name: 'Automated Disaster Recovery Services',
              AWS: 'AWS Backup',
              Azure: 'Azure Backup',
              GCP: 'Object Versioning',
            },
            {
              name: 'Automated Disaster Recovery Services',
              AWS: 'AWS Disaster Recovery',
              Azure: 'Azure Site Recovery',
              GCP: ' ',
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
