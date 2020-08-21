<template>
    <div class = "aiml">
        <v-card>
            <v-card-title>
                AI/ML/Big Data
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
              name: 'Genomics',
              AWS: ' ',
              Azure: ' ',
              GCP: 'Google Genomics',
            
            },
            {
              name: 'Data Discovery',
              AWS: ' ',
              Azure: 'Data Catalog',
              GCP: ' ',
            },
            {
              name: 'Intelligence API',
              AWS: ' ',
              Azure: 'Cognitive Services (Language, Speech, Vision, Knowledge)',
              GCP: 'Translate, Speech, Vision',
            },
            {
              name: 'Data Orchestration',
              AWS: 'Data Pipeline',
              Azure: 'DataFactory',
              GCP: 'Cloud Dataflow',
            },
            {
              name: 'Machine Learning',
              AWS: 'Machine Learning',
              Azure: 'Machine Learning',
              GCP: 'Cloud Machine Learning, Prediction API',
            },
            {
              name: 'Visualization',
              AWS: 'QuickSight',
              Azure: 'Power BI',
              GCP: 'Cloud Datalab',
            },
            {
              name: 'Search',
              AWS: 'Elasticsearch Service',
              Azure: 'Search',
              GCP: 'Search API (App Engine)',
            },
            {
              name: 'Analytics',
              AWS: 'Kinesis Analytics',
              Azure: 'Stream Analytics, Data Lake Analytics, Data Lake Store',
              GCP: 'Cloud Dataflow',
            },
            {
              name: 'Language Processing AI',
              AWS: 'Amazon Comprehend',
              Azure: 'Azure Bot Service',
              GCP: 'Cloud Text-to-Speech (Beta)',
            },
            {
              name: 'Machine Learning',
              AWS: 'Amazon Machine Learning',
              Azure: 'Azure Machine Learning',
              GCP: 'Cloud DataLab',
            },
            {
              name: 'Machine Learning',
              AWS: ' ',
              Azure: 'Azure Machine Learning Model Management',
              GCP: 'Cloud Machine Learning Services',
            },
            {
              name: 'Machine Learning',
              AWS: 'Amazon SageMaker',
              Azure: 'Azure Machine Learning Workbench',
              GCP: 'Cloud AutoML (Alpha)',
            },
            {
              name: 'Language Processing AI',
              AWS: ' ',
              Azure: 'Azure Speech Recognition API',
              GCP: 'DialogFlow Enterprise Edition (Beta)',
            },
            {
              name: 'Speech Recognition AI',
              AWS: 'Amazon Polly',
              Azure: 'Bing Speech API',
              GCP: 'Translation API',
            },
            {
              name: 'Image Recognition AI',
              AWS: ' ',
              Azure: 'Computer Vision API',
              GCP: ' ',
            },
            {
              name: 'Image Recognition AI',
              AWS: 'Amazon Rekognition',
              Azure: 'Emotion API',
              GCP: 'Vision API',
            },
            {
              name: 'Image Recognition AI',
              AWS: ' ',
              Azure: 'Face API',
              GCP: 'Cloud Video Intelligence',
            },
            {
              name: 'Language Processing AI',
              AWS: 'Amazon Lex',
              Azure: 'LUIS (Language Understanding Intelligent Service)',
              GCP: 'Natural Language API',
            },
            {
              name: 'Speech Recognition AI',
              AWS: 'Amazon Transcribe',
              Azure: ' ',
              GCP: 'Speech API',
            },
            {
              name: 'Speech Recognition AI',
              AWS: 'Amazon Translate',
              Azure: ' ',
              GCP: ' ',
            },
            {
              name: 'Cloud ETL',
              AWS: 'AWS Glue',
              Azure: 'Azure Data Catalog',
              GCP: 'Cloud Composer (Beta)',
            },
            {
              name: 'Cloud ETL',
              AWS: 'AWS Data Pipeline',
              Azure: 'Azure Data Factory',
              GCP: 'Cloud DataPrep (Private Beta)',
            },
            {
              name: 'Big Data Query as a Service',
              AWS: 'Amazon Athena',
              Azure: 'Azure Data Lake Analytics',
              GCP: 'BigQuery',
            },
            {
              name: 'Streaming Service',
              AWS: 'Amazon Kinesis Video Streams',
              Azure: 'Azure Event Hub',
              GCP: ' ',
            },
            {
              name: 'Big Data Managed Cluster as a Service',
              AWS: 'Amazon EMR',
              Azure: 'Azure HDInsight',
              GCP: 'Cloud DataProc',
            },
            {
              name: 'Cloud Search',
              AWS: 'Amazon CloudSearch',
              Azure: 'Azure Search',
              GCP: ' ',
            },
            {
              name: 'Data Warehouse',
              AWS: 'Amazon Redshift',
              Azure: 'Azure SQL Data Warehouse',
              GCP: 'BigQuery',
            },
            {
              name: 'Streaming Service',
              AWS: 'Amazon Kinesis',
              Azure: 'Azure Stream Analytics',
              GCP: 'Cloud Dataflow',
            },
            {
              name: 'Cloud ETL',
              AWS: 'Amazon Simple Workflow Service (SWF)',
              Azure: 'Logic Apps',
              GCP: ' ',
            },
            {
              name: 'Business Intelligence and Data Visualization',
              AWS: 'Amazon QuickSight',
              Azure: 'Power BI',
              GCP: 'Google Data Studio (Beta)',
            },
            {
              name: 'Cloud Search',
              AWS: 'Amazon Elastic Search Service',
              Azure: ' ',
              GCP: ' ',
            }
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