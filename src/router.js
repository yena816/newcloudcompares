import Vue from 'vue'
import Router from 'vue-router'
import Overview from './views/Overview.vue'
import Storage from './views/Storage.vue'
import Networking from './views/Networking.vue'
import Compute from './views/Compute.vue'
import Hybrid from './views/Hybrid.vue'
import Database from './views/Database.vue'
import Security from './views/Security.vue'
import Management from './views/Management.vue'
import IAM from './views/IAM.vue'
import AIML from './views/AIML.vue'
import Application from './views/Application.vue'
import Business from './views/Business.vue'
import Migration from './views/Migration.vue'
import Disaster from './views/Disaster.vue'
import Developer from './views/Developer.vue'

Vue.use(Router)

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/', 
            name: 'overview',
            component: Overview
        }, 
        {
            path: '/storage',
            name: 'storage',
            component: Storage
        },
        {
            path: '/networking',
            name: 'networking',
            component: Networking
        },
        {
            path: '/compute',
            name: 'compute',
            component: Compute
        },
        {
            path: '/hybrid',
            name: 'hybrid',
            component: Hybrid
        },
        {
            path: '/database',
            name: 'database',
            component: Database
        },
        {
            path: '/security',
            name: 'security',
            component: Security
        },
        {
            path: '/management',
            name: 'management',
            component: Management
        },
        {
            path: '/iam',
            name: 'iam',
            component: IAM
        },
        {
            path: '/aiml',
            name: 'aiml',
            component: AIML
        },
        {
            path: '/application',
            name: 'application',
            component: Application
        },
        {
            path: '/business',
            name: 'business',
            component: Business
        },
        {
            path: '/migration',
            name: 'migration',
            component: Migration
        },
        {
            path: '/disaster',
            name: 'disaster',
            component: Disaster
        },
        {
            path: '/developer',
            name: 'developer',
            component: Developer
        },
    ],
})