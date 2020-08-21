<template>
    <div class = "migration">
        <v-card>
            <v-card-title>
                Migration
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
              name: 'Server Migration Services',
              AWS: 'AWS Server Migration Service',
              Azure: 'Site Recovery',
              GCP: ' ',
            
            },
            {
              name: 'Large Scale Data Transfer Solution (Terabyte Scale',
              AWS: 'AWS Snowball Edge',
              Azure: 'Azure Data Box (Preview)',
              GCP: 'Transfer Applicance (Beta)',
            },
            {
              name: 'Database Migration Services',
              AWS: 'AWS Database Migration Service',
              Azure: 'Azure Database Migration Service (Preview)',
              GCP: ' ',
            },
            {
              name: 'Small Scale Data Transfer Service',
              AWS: 'AWS Import/Export',
              Azure: 'Azure Import/Export',
              GCP: ' ',
            },
            {
              name: 'Server Migration Services',
              AWS: ' ',
              Azure: 'Azure Websites Migration Assistant',
              GCP: ' ',
            },
            {
              name: 'Large Scale Data Transfer Solution (Petabyte Scale)',
              AWS: 'AWS Snowball',
              Azure: ' ',
              GCP: ' ',
            },
            {
              name: 'Large Scale Data Transfer Solution (Exabyte Scale)',
              AWS: 'AWS Snowmobile',
              Azure: ' ',
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