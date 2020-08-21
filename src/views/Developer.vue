<template>
    <div class = "developer">
        <v-card>
            <v-card-title>
                Developer
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
              name: 'Cloud Software Development Kit',
              AWS: 'AWS Cloud9',
              Azure: 'Azure Boards',
              GCP: 'Cloud Source Repositories',
            },
            {
              name: 'Cloud Software Development Kit',
              AWS: 'AWS Code Star',
              Azure: 'Azure Pipelines',
              GCP: ' ',
            },
            {
              name: 'Cloud Software Development Kit',
              AWS: 'AWS CodeCommit',
              Azure: 'Azure Repos',
              GCP: ' ',
            },
            {
              name: 'Cloud Software Development Kit',
              AWS: 'AWS SDK',
              Azure: 'Azure SDK Visual Studio',
              GCP: 'Cloud SDK Cloud Tools for IntelliJ',
            },
            {
              name: 'Cloud Software Development Kit',
              AWS: 'AWS CodeBuild',
              Azure: 'Azure Test Plans',
              GCP: ' ',
            },
            {
              name: 'Cloud Software Development Kit',
              AWS: 'AWS X-Ray',
              Azure: ' ',
              GCP: ' ',
            },
            {
              name: 'Cloud Software Development Kit',
              AWS: ' ',
              Azure: ' ',
              GCP: 'Cloud Tools for Android Studio',
            },
            {
              name: 'Cloud Software Development Kit',
              AWS: ' ',
              Azure: ' ',
              GCP: 'Cloud Tools for Powershell',
            },
            {
              name: 'Cloud Software Development Kit',
              AWS: ' ',
              Azure: ' ',
              GCP: 'Google Plugin for Eclipse',
            },
            {
              name: 'Cloud Software Development Kit',
              AWS: 'AWS CodeDeploy',
              Azure: 'Azure Artifacts',
              GCP: ' ',
            },
            {
              name: 'Cloud Software Development Kit',
              AWS: 'AWS CodePipeline',
              Azure: ' ',
              GCP: ' ',
            },
            {
              name: 'Development and Testing',
              AWS: 'AWS Dev/Test',
              Azure: 'Azure Dev/Test',
              GCP: ' ',
            },
            {
              name: 'Game Development',
              AWS: 'Amazon Lumberyard',
              Azure: 'Visual Studio',
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