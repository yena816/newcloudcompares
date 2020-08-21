<template>
    <div class = "security">
        <v-card>
            <v-card-title>
                Security
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
              name: 'SSL Decryption Reverse Proxy',
              AWS: 'Application Load Balancer',
              Azure: 'Application Gateway',
              GCP: 'HTTPS Load Balancing',
            
            },
            {
              name: 'Multi-Factor Authentication',
              AWS: 'AWS MFA (Part of AWS IAM)',
              Azure: 'Azure Active Directory',
              GCP: 'Security Key Enforcement',
            },
            {
              name: 'Privileged Access Management (PAM)',
              AWS: '3rd Party Only',
              Azure: 'Azure AD Privileged Identity Management',
              GCP: '3rd Party Only',
            },
            {
              name: 'IPS/IDS',
              AWS: '3rd Party Only',
              Azure: 'Azure Firewall',
              GCP: '3rd Party Only',
            },
            {
              name: 'Firewall & ACLs',
              AWS: 'AWS Network ACLs',
              Azure: 'Azure Firewall',
              GCP: 'VPC Firewall',
            },
            {
              name: 'SIEM & Log Analytics',
              AWS: 'Amazon GuardDuty',
              Azure: 'Azure Monitor',
              GCP: 'Event Threat Detection',
            },
            {
              name: 'Governence Rish and Compliance Monitoring',
              AWS: 'AWS Compliance Center',
              Azure: 'Azure Policy',
              GCP: ' ',
            },
            {
              name: 'Vulnerability Assessment',
              AWS: 'Amazon Inspector',
              Azure: 'Azure Security Center',
              GCP: 'Cloud Security Scanner',
            },
            {
              name: 'Governence Rish and Compliance Monitoring',
              AWS: 'AWS Security Hub',
              Azure: 'Azure Security Center',
              GCP: 'Cloud Security Command Center',
            },
            {
              name: 'Antimalware',
              AWS: ' ',
              Azure: 'Azure Security Center',
              GCP: ' ',
            },
            {
              name: 'SIEM & Log Analytics',
              AWS: 'AWS Secruity Hub',
              Azure: 'Azure Sentinel',
              GCP: 'Chronicle Backstory',
            },
            {
              name: 'Data Loss Prevention (DLP)',
              AWS: 'Amazon Macie',
              Azure: 'Information Protection (AIP)',
              GCP: 'Cloud Data Loss Prevention API',
            },
            {
              name: 'Certificate Management',
              AWS: 'AWS Certificate Manager',
              Azure: 'Key Vault',
              GCP: '3rd Party Only',
            },
            {
              name: 'Antimalware',
              AWS: '3rd Party Only',
              Azure: 'Microsoft Antimalware',
              GCP: '3rd Party Only',
            },
            {
              name: 'Endpoint Protection',
              AWS: '3rd Party Only',
              Azure: 'Microsoft Defender ATP',
              GCP: '3rd Party Only',
            },
            {
              name: 'Firewall & ACLs',
              AWS: 'Security groups',
              Azure: 'Network Security Groups',
              GCP: 'Cloud Armor',
            },
            {
              name: 'Email Protection',
              AWS: '3rd Party Only',
              Azure: 'Office Advanced Threat Protection',
              GCP: 'Various controls embeded in G-Suite',
            },
            {
              name: 'Encryption at Rest',
              AWS: 'EBS/EFS Volume Encryption',
              Azure: 'Storage Encryption for Data at Rest',
              GCP: 'Part of Google Cloud Platform',
            },
            {
              name: 'Web Application Firewall (WAF)',
              AWS: 'AWS Firewall Manager',
              Azure: ' ',
              GCP: ' ',
            },
            {
              name: 'Centralized Logging, Auditing',
              AWS: 'S3 Bucket Logging',
              Azure: ' ',
              GCP: 'Access Transparency',
            },
            {
              name: 'Encryption at Rest',
              AWS: 'S3 SSE',
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