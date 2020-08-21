<template>
    <div class = "application">
        <v-card>
            <v-card-title>
                Application
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
              name: 'Application Discovery Services',
              AWS: 'Application Discovery Service',
              Azure: 'Azure Active Directory',
              GCP: ' ',
            
            },
            {
              name: 'API Management Service',
              AWS: 'Amazon API Gateway',
              Azure: 'Azure API Management',
              GCP: 'Apigee API Platform',
            },
            {
              name: 'Chatbot',
              AWS: 'Lex Chatbots',
              Azure: 'Azure Bot Service',
              GCP: 'Dialogflow',
            },
            {
              name: 'Media Transcoders',
              AWS: 'AWS Elemental MediaLive',
              Azure: 'Azure Media Player',
              GCP: ' ',
            },
            {
              name: 'Media Transcoders',
              AWS: 'Amazon Elastic Transcoder',
              Azure: 'Azure Media Services',
              GCP: ' ',
            },
            {
              name: 'Notification Services',
              AWS: 'Amazon SNS',
              Azure: 'Azure Notification Services',
              GCP: 'Firebase Cloud Messaging',
            },
            {
              name: 'Blockchain Services',
              AWS: 'Amazon Managed Blockchain (Preview)',
              Azure: 'Blockchain',
              GCP: ' ',
            },
            {
              name: 'Blockchain Services',
              AWS: ' ',
              Azure: 'Blockchain Workbench',
              GCP: ' ',
            },
            {
              name: 'Media Transcoders',
              AWS: 'AWS Elemental MediaPackage',
              Azure: 'Content Protection',
              GCP: ' ',
            },
            {
              name: 'Media Transcoders',
              AWS: 'AWS Elemental MediaConvert',
              Azure: 'Live On Demand Streaming',
              GCP: ' ',
            },
            {
              name: 'Media Transcoders',
              AWS: 'AWS Elemental MediaStore',
              Azure: 'Media Analytics',
              GCP: ' ',
            },
            {
              name: 'Mobile Analytics',
              AWS: 'Amazon Pinpoint',
              Azure: 'Mobile Engagement',
              GCP: ' ',
            },
            {
              name: 'Queuing Services',
              AWS: 'Amazon MQ',
              Azure: 'Queue Storage',
              GCP: ' ',
            },
            {
              name: 'API Management Service',
              AWS: ' ',
              Azure: ' ',
              GCP: 'Cloud Endpoints',
            },
            {
              name: 'Other Media Services',
              AWS: ' ',
              Azure: 'Media Player, Media Indexer, Content Protection',
              GCP: ' ',
            },
            {
              name: 'Messaging',
              AWS: 'Simple Queue Service, Simple Notification Service',
              Azure: 'Queue Storage, Service Bus Queues, Service Bus Topics, Service Bus Relay',
              GCP: 'Cloud Pub/Sub, Task Queue (App Engine)',
            },
            {
              name: 'Application Streaming',
              AWS: 'App Stream',
              Azure: 'Remote App',
              GCP: ' ',
            },
            {
              name: 'Search',
              AWS: 'CloudSearch',
              Azure: 'Search',
              GCP: 'Search API (App Engine)',
            },
            {
              name: 'Email Address',
              AWS: 'Simple Email Service',
              Azure: ' ',
              GCP: 'Email Service (App Engine)',
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