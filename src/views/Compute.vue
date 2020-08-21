<template>
    <div class = "compute">
        <v-card>
            <v-card-title>
                Compute
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
              name: 'API Runtime',
              AWS: ' ',
              Azure: 'API Apps',
              GCP: ' ',
            
            },
            {
              name: 'App Development/Deployment (Java/.Net/PHP/Python)',
              AWS: 'AWS Elastic Beanstalk',
              Azure: 'Azure Web Apps',
              GCP: 'Google App engine',
            },
            {
              name: 'Auto Scaling',
              AWS: 'Auto Scaling',
              Azure: 'Virtual Machine Scale Sets',
              GCP: 'Auto Scaler',
            },
            {
              name: 'Backend Processing/Event Driven Logic',
              AWS: 'Lambda',
              Azure: 'Cloud Services (worker role), Functions, Logic Apps, Web Jobs',
              GCP: 'Cloud Functions',
            },
            {
              name: 'Bare Metal Server',
              AWS: 'Amazon EC2 Bare Metal Instance (Preview)',
              Azure: 'Azure Bare Metal Servers (Large Instance Only for SAP Hana)',
              GCP: ' ',
            },
            {
              name: 'Batch Jobs',
              AWS: 'AWS Batch',
              Azure: 'Azure Batch',
              GCP: 'Preemptible VMs',
            },
            {
              name: 'Low cost VMs',
              AWS: 'Spot Instances',
              Azure: 'Low-priority VMs',
              GCP: 'Preemptible VMs',
            },
            {
              name: 'Container Management Service',
              AWS: 'Amazon EC2 Container Service',
              Azure: 'Azure Container Instances',
              GCP: 'Kubernetes Engine',
            },
            {
              name: 'Container Management Service',
              AWS: 'Amazon Elastic Container Service for Kubernetes (EKS)',
              Azure: 'Azure Kubernetes Service (AKS)',
              GCP: 'Kubernetes Engine',
            },
            {
              name: 'Container Registration Service',
              AWS: 'Amazon EC2 Container Registry',
              Azure: 'AzureContainer Registry',
              GCP: 'Container Registry',
            },
            {
              name: 'Disaster Recovery',
              AWS: ' ',
              Azure: 'Site Recovery',
              GCP: ' ',
            },
            {
              name: 'Event Driven Computing',
              AWS: 'Simple Notification Service',
              Azure: 'Event Grid',
              GCP: ' ',
            },
            {
              name: 'Microservices',
              AWS: 'AWS App Mesh',
              Azure: 'Service Fabric',
              GCP: ' ',
            },
            {
              name: 'Redefined Templates',
              AWS: 'AWS Quickstart',
              Azure: 'Azure Quickstart templates',
              GCP: 'GCP Quickstarts',
            },
            {
              name: 'Virtual Dedicated Host',
              AWS: 'Amazon EC2 Dedicated Hosts',
              Azure: 'Azure Dedicated Host',
              GCP: 'Sole Tenant Node (Beta)',
            },
            {
              name: 'Virtual Private Servers',
              AWS: 'Amazon Lightsail',
              Azure: 'Azure App Service Environment',
              GCP: ' ',
            },
            {
              name: 'Virtual Server',
              AWS: 'Amazon EC2',
              Azure: 'Azure Virtual Machine',
              GCP: 'Compute Engine',
            },
            {
              name: 'Virtual Server Disk',
              AWS: 'Elastic Block Store (EBS)',
              Azure: 'Page blobs, Premium Storage',
              GCP: 'Persistent Disks',
            },
            {
              name: 'Web Applications',
              AWS: 'Elastic Beanstalk',
              Azure: 'App Service',
              GCP: 'App Engine',
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