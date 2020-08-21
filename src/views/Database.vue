<template>
    <div class = "database">
        <v-card>
            <v-card-title>
                Database
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
              name: 'Non Relational Database Management Service',
              AWS: 'Amazon DynamoDB',
              Azure: 'Azure CosmosDB',
              GCP: 'Cloud Datastore',
            
            },
            {
              name: 'Relational Database Management Service',
              AWS: ' ',
              Azure: 'Azure Database for MySQL',
              GCP: ' ',
            },
            {
              name: 'Relational Database Management Service',
              AWS: ' ',
              Azure: 'Azure Database for PostgresSQL',
              GCP: ' ',
            },
            {
              name: 'In-Memory Data Store',
              AWS: 'Amazon ElastiCache',
              Azure: 'Azure RedisCache',
              GCP: 'Cloud MemoryStore (Beta)',
            },
            {
              name: 'Data Warehousing',
              AWS: 'Amazon Redshift',
              Azure: 'Azure SQL Data Warehouse',
              GCP: 'BigQuery',
            },
            {
              name: 'Relational Database Management Service',
              AWS: 'Amazon Aurora',
              Azure: 'Azure SQL Database',
              GCP: 'Cloud SQL',
            },
            {
              name: 'Timeseries Database',
              AWS: 'Amazon DynamoDB',
              Azure: 'Azure Time Series Insights',
              GCP: 'Cloud BigTable',
            },
            {
              name: 'Non Relational Database Management Service',
              AWS: 'Amazon Neptune (Preview)',
              Azure: 'Azure Time Series Insights',
              GCP: ' ',
            },
            {
              name: 'Relational Database Management Service',
              AWS: 'Amazon RDS',
              Azure: 'SQL Server Stretch Database',
              GCP: 'Cloud Spanner',
            },
            {
              name: 'Non Relational Database Management Service',
              AWS: 'Amazon DynamoDB Accelerator (DAX)',
              Azure: 'Table Storage',
              GCP: 'Cloud BigTable',
            },
            {
              name: 'NOSQL Database',
              AWS: 'DynamoDB',
              Azure: 'DocumentDB',
              GCP: 'Cloud Datastore',
            },
            {
              name: 'Relational Database',
              AWS: 'RDS',
              Azure: 'SQL Database',
              GCP: 'Cloud SQL',
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