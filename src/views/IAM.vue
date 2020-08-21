<template>
    <div class = "iam">
        <v-card>
            <v-card-title>
                IAM
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
              name: 'Identity and Access Management',
              AWS: ' ',
              Azure: ' ',
              GCP: 'Cloud IAM',
            
            },
            {
              name: 'Authentication & Authorization',
              AWS: 'Identity and Access Management, Multi-Factor Authentication',
              Azure: 'Azure AD, RBAC, Multi-Factor Authentication',
              GCP: 'Google IAM, Cloud Resource Manager, Google Identity Toolkit, Google Signin',
            },
            {
              name: 'Encryption',
              AWS: 'Key Management Service, CloudHSM, BYOK',
              Azure: 'Key Vault, BYOK',
              GCP: 'Platform leven encryption, BYOK, Cloud Key Management Service',
            },
            {
              name: 'Security',
              AWS: 'Inspector',
              Azure: 'Security Center',
              GCP: 'Cloud Security Scanner (App Engine)',
            },
            {
              name: 'Secured Socket Layer (SSL) Certificates',
              AWS: 'AWS Certificate Manager ',
              Azure: 'App Service Certificate',
              GCP: ' ',
            },
            {
              name: 'Directory Services',
              AWS: 'AWS Directory Service',
              Azure: 'Azure Active Directory',
              GCP: 'Cloud IAM',
            },
            {
              name: 'Identity & Access Management',
              AWS: 'AWS Identity and Access Management (IAM)',
              Azure: 'Azure Active Directory',
              GCP: 'Cloud IAM',
            },
            {
              name: 'Directory Services',
              AWS: ' ',
              Azure: 'Azure Active Directory B2C',
              GCP: 'Cloud Identity-Aware Proxy',
            },
            {
              name: 'Directory Services',
              AWS: ' ',
              Azure: 'Azure Active Directory Domain Services',
              GCP: 'Security Key Enforcement',
            },
            {
              name: 'Directory Services',
              AWS: ' ',
              Azure: 'Azure Active Directory Multi Factor Authenticaiton',
              GCP: ' ',
            },
            {
              name: 'DDos Protection Service',
              AWS: 'AWS Shield',
              Azure: 'Azure DDoS Protection',
              GCP: 'Cloud Armor (Beta)',
            },
            {
              name: 'Hardware Based Security Module',
              AWS: 'AWS CloudHSM',
              Azure: 'Azure Key Vault',
              GCP: 'Cloud Key Management Service',
            },
            {
              name: 'Consolidated Management of Multiple Cloud Accounts',
              AWS: 'AWS Organizations',
              Azure: 'Azure Management Groups',
              GCP: ' ',
            },
            {
              name: 'Security & Compliance Service',
              AWS: 'AWS Artifact',
              Azure: 'Azure Security & Compliance',
              GCP: 'Cloud Security Command Center (Alpha)',
            },
            {
              name: 'Cloud Security Assessment Service',
              AWS: 'Amazon Inspector',
              Azure: 'Azure Security Center',
              GCP: ' ',
            },
            {
              name: 'Web Application Firewall',
              AWS: 'AWS WAF',
              Azure: 'Azure WAF',
              GCP: 'Cloud Armor',
            },
            {
              name: 'Hardware Based Security Module',
              AWS: 'AWS Secrets Manager',
              Azure: ' ',
              GCP: ' ',
            },
            {
              name: 'Cloud Security Assessment Service',
              AWS: 'Guard Duty',
              Azure: ' ',
              GCP: ' ',
            },
            {
              name: 'Identity & Access Management',
              AWS: ' ',
              Azure: ' ',
              GCP: 'Cloud Identity-Aware Proxy	',
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