<template>
    <div class = "business">
        <v-card>
            <v-card-title>
                Business
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
              name: 'Office Document Solutions',
              AWS: 'Amazon WorkDocs',
              Azure: 'Microsoft Office 365',
              GCP: 'G Suite',
            
            },
            {
              name: 'Desktop Application Streaming',
              AWS: 'Amazon AppStream 2.0',
              Azure: ' ',
              GCP: ' ',
            },
            {
              name: 'Office Document Solutions',
              AWS: 'Amazon WorkMail',
              Azure: ' ',
              GCP: ' ',
            },
            {
              name: 'Office Document Solutions',
              AWS: 'Amazon WorkSpaces',
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