<template>
    <div class = "management">
        <v-card>
            <v-card-title>
                Management
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
              name: 'Change Management',
              AWS: 'AWS Config',
              Azure: 'Azure Automation (Change Tracking)',
              GCP: '3rd Party Only',
            
            },
            {
              name: 'Job Scheduling',
              AWS: ' ',
              Azure: 'Scheduler',
              GCP: 'Cron Service (App Engine)',
            },
            {
              name: 'Source Code Management',
              AWS: 'CodeCommit',
              Azure: 'Azure Repos',
              GCP: 'Cloud Source Resporitories',
            },
            {
              name: 'Catalogue Service',
              AWS: 'Service Catalog',
              Azure: ' ',
              GCP: ' ',
            },
            {
              name: 'Logging & Monitoring',
              AWS: ' ',
              Azure: 'Application Insights',
              GCP: 'Logging',
            },
            {
              name: 'Cloud Cost/Performance/Secruity Advisor',
              AWS: 'AWS Trusted Advisor',
              Azure: 'Azure Advisor',
              GCP: 'Google Cloud Platform Security',
            },
            {
              name: 'Server Automation',
              AWS: ' ',
              Azure: 'Azure Automation',
              GCP: ' ',
            },
            {
              name: 'Cloud Management Tools',
              AWS: ' ',
              Azure: 'Azure Cloud Shell',
              GCP: 'Cloud APIs',
            },
            {
              name: 'Cloud Management Tools',
              AWS: 'AWS Command Line Interface',
              Azure: 'Azure Command Line Interface',
              GCP: 'Cloud Shell',
            },
            {
              name: 'Cloud Management Tools',
              AWS: 'AWS Console',
              Azure: 'Azure Management Console',
              GCP: 'Google Cloud Console',
            },
            {
              name: 'Alerts and Remediation guidance Service',
              AWS: 'AWS CloudWatch',
              Azure: 'Azure Monitor',
              GCP: 'Stackdriver',
            },
            {
              name: 'Server Management Services',
              AWS: 'Amazon EC2 Systems Manager',
              Azure: 'Azure Monitor',
              GCP: 'Stackdriver',
            },
            {
              name: 'Cloud Deployment Templates/Infra as Code',
              AWS: 'AWS CloudFormation',
              Azure: 'Azure Resource Manager',
              GCP: 'Cloud Resource Manager',
            },
            {
              name: 'Logging',
              AWS: 'AWS CloudTrail',
              Azure: 'Log Analytics',
              GCP: 'Google StackDriver',
            },
            {
              name: 'Server Automation',
              AWS: 'AWS OpsWorks',
              Azure: 'Resource Manager',
              GCP: 'Cloud Deployment Manager',
            },
            {
              name: 'Server Automation',
              AWS: ' ',
              Azure: 'VM Extentions',
              GCP: ' ',
            },
            {
              name: 'Server Automation',
              AWS: 'AWS Service Catalog',
              Azure: ' ',
              GCP: ' ',
            },
            {
              name: 'Logging & Monitoring',
              AWS: 'AWS CloudWatch',
              Azure: 'Azure Monitor',
              GCP: 'Error Reporting',
            },
            {
              name: 'Logging & Monitoring',
              AWS: 'AWS CloudWatch',
              Azure: 'Azure Monitor',
              GCP: 'Trace',
            },
            {
              name: 'Logging & Monitoring',
              AWS: 'AWS CloudWatch',
              Azure: 'Azure Monitor',
              GCP: 'Debugger',
            },
            {
              name: 'Additional Logging',
              AWS: ' ',
              Azure: ' ',
              GCP: 'Access Transparency (Beta)',
            },
            {
              name: 'Billing API',
              AWS: 'AWS Cost Explorer API',
              Azure: 'Azure Billing API',
              GCP: 'Cloud Billing API',
            },
            {
              name: 'Cloud Cost/Performance/Secruity Advisor',
              AWS: 'AWS Cost Explorer',
              Azure: 'Azure Cost Management',
              GCP: 'GCP Cost Management',
            },
            {
              name: 'Server Migration Services',
              AWS: 'AWS Cost AWS Server Migration Service',
              Azure: 'Site Recovery',
              GCP: 'Google Cloud Migrate',
            },
            {
              name: 'Patch Management',
              AWS: 'AWS Systems Manager',
              Azure: 'Azure Security Center',
              GCP: '3rd Party Only',
            },
            {
              name: 'Patch Management',
              AWS: ' ',
              Azure: 'Update Management',
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