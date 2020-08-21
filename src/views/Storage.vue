<template>
    <div class = "storage">
        <v-card>
            <v-card-title>
                Storage
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
              name: 'Backup',
              AWS: <a href='https://aws.amazon.com/backup/'>AWS Backup</a>,
              Azure: 'Azure Backup',
              GCP: 'Image',
            
            },
            {
              name: 'Snapshots',
              AWS: 'EBS Snapshots',
              Azure: 'VHD Snapshot',
              GCP: 'Persistent Disk Snapshot',
            },
            {
              name: 'Data Transport',
              AWS: 'Import/Export Snowball',
              Azure: 'Import/Export',
              GCP: '',
            },
            {
              name: 'Long Term Cloud Storage & Archiving',
              AWS: 'Amazon Glacier',
              Azure: 'Azure Archive Storage',
              GCP: 'Cloud Storage Nearline and Coldline',
            },
            {
              name: 'Object Storage',
              AWS: 'Amazon Simple Storage Service (S3)',
              Azure: 'Azure Blob Storage',
              GCP: 'Cloud Storage',
            },
            {
              name: 'File Storage (SMB Compatible)',
              AWS: 'Amazon Elastic File System (EFS)',
              Azure: 'Azure File Storage',
              GCP: 'File Store',
            },
            {
              name: 'Virtual Machine Disk Storage',
              AWS: 'Amazon Elastic Block Storage (EBS)',
              Azure: 'Azure Page Blobs/Premium Storage',
              GCP: 'Persistent Disk',
            },
            {
              name: 'Hybrid Storage/Storage Gateway',
              AWS: 'AWS Storage Gateway',
              Azure: 'Azure StorSimple',
              GCP: '',
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