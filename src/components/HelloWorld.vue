<template>
  
  <v-card>
    <v-card-title class="text-center justify-center py-6">
      <h1 class="font-weight-bold display-3 basil--text">Cloud Comparison</h1>
    </v-card-title>
    <v-tabs
      v-model="tab"
      background-color="primary"
      dark
    >
      <v-tab
        v-for="item in items"
        :key="item.tab"
      >
        {{ item.tab }}
      </v-tab>
    </v-tabs>

    <v-tabs-items v-model="tab">
      <v-tab-item
        v-for="item in items"
        :key="item.tab"
      >
        <v-card flat>
          <v-card>
            <v-card-title>
             {{ item.tab }}
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
              :items="item.content"
              :search="search"
            ></v-data-table>
          </v-card>
        </v-card>
      </v-tab-item>
    </v-tabs-items>
  </v-card>
</template>

<script>
  export default {
    data () {
      return {
        tab: null,
        items: [
          { tab: 'Storage', content: [
            {
              name: 'Backup',
              AWS: 'AWS Backup',
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
          ], },
          { tab: 'Networking', content: [
            {
              name: 'Site-to-Site VPN',
              AWS: 'AWS Site-to-Site VPN',
              Azure: 'Azure Site-to-Site VPN',
              GCP: 'Third party (e.g. OpenVPN)',
            
            },
            {
              name: 'Point-to-Site VPN',
              AWS: 'AWS Transit Gateway',
              Azure: 'Azure Point-to-Site VPN',
              GCP: 'N/A',
            },
            {
              name: 'Hybrid Networking Hub',
              AWS: 'AWS Transit Gateway',
              Azure: 'Transit VNet using VNet peering',
              GCP: 'N/A',
            },
            {
              name: 'Network Load Balancer',
              AWS: 'Classic Load Balancer, Network Load Balancer',
              Azure: 'Azure Load Balancer',
              GCP: 'Network TCP/UDP Load Balancer',
            },
            {
              name: 'Application Load Balancers',
              AWS: 'Application Load Balancer',
              Azure: 'Azure Load Balancer',
              GCP: 'HTTP(S) Load Balancer',
            },
            {
              name: 'Global Traffic Management',
              AWS: 'Amazon Route 53 Traffic Flow',
              Azure: 'Azure Traffic Manager',
              GCP: 'Global TCP/SSL/HTTP(S) Load Balancer (Premium Tier)',
            },
            {
              name: 'DNS',
              AWS: 'Route 53',
              Azure: 'DNS, Traffic Manager',
              GCP: 'Cloud DNS',
            },
            {
              name: 'Dedicated Network',
              AWS: 'Direct Connect',
              Azure: 'ExpressRoute',
              GCP: 'Cloud Interconnect',
            },
            {
              name: 'Networking',
              AWS: 'Virtual Private Cloud',
              Azure: 'Virtual Network',
              GCP: 'Virtual Private Cloud',
            },
            {
              name: 'Private Connectivity',
              AWS: 'AWS Direct Connect, AWS Private Link',
              Azure: 'Azure ExpressRoute',
              GCP: 'Cloud Interconnect',
            },
            {
              name: 'Content Delivery Network',
              AWS: 'Amazon CloudFront',
              Azure: 'Azure CDN',
              GCP: 'Cloud CDN',
            },
          ], },
          { tab: 'Compute', content: '' },
          { tab: 'Hybrid Identity', content: '' },
          { tab: 'Database', content: '' },
          { tab: 'Security', content: '' },
          { tab: 'Management', content: '' },
          { tab: 'IAM', content: '' },
          { tab: 'AI/ML/BigData', content: '' },
          { tab: 'Application', content: '' },
          { tab: 'Business', content: '' },
          { tab: 'Migration', content: '' },
          { tab: 'Disaster Recovery', content: '' },
          { tab: 'Developer', content: '' },
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