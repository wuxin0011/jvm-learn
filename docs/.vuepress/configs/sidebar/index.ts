import type { SidebarConfig } from 'vuepress'

const sidebar: SidebarConfig = {
    '/juc/': [
        {
            text: '线程',
            children: [
                '/juc/basic/',
                '/juc/lock/',
                '/juc/synchronized/',
                '/juc/volatile/',
                '/juc/final/',
            ]
        },
    ],

    '/jvm': [
        {
            text: '认识JVM',
            children: [
                '/jvm/jvm-basic/',
                '/jvm/jvm-and-java-architecture/',
                '/jvm/class-loading-system/',
                '/jvm/class-loading/',
                '/jvm/runtime-data/',
                '/jvm/heap/',
                '/jvm/method-area/',
                '/jvm/string-constant-pool/',
                '/jvm/vm-stack/',
                '/jvm/bytecodes/',
                '/jvm/execution-engine/',
                '/jvm/gc/',
                '/jvm/gc-recycling-related/',
                '/jvm/object-instantiation-memory-access-location/',
                '/jvm/monitoring-and-diagnostic-tools/',
                '/jvm/monitoring-and-diagnostic-tools-command/',
                '/jvm/memory-leak/',
                '/jvm/performance-tuning/',
            ]
        },
    ]





}
export default sidebar
