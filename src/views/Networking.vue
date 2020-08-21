<template>
    <div class = "networking">
        <v-card>
            <v-card-title>
                Networking
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