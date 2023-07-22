import type { SidebarConfig } from 'vuepress'

const sidebar: SidebarConfig = [
    {
        text: '认识JVM',
        link: '/jvm/jvm-basic/',
    },
    {
        text: 'JVM和Java体系架构',
        link: '/jvm/jvm-and-java-architecture/',
    },
    {
        text: '类加载系统',
        link: '/jvm/class-loading-system/',
    },
    {
        text: '类的加载过程',
        link: '/jvm/class-loading/',
    },

    {
        text: 'JVM运行时数据区',
        link: '/jvm/runtime-data/',
    },
    {
        text: '堆',
        link: '/jvm/heap/',
    },
    {
        text: '方法区',
        link: '/jvm/method-area/',
    },

    {
        text: '字符串常量池',
        link: '/jvm/string-constant-pool/',
    },
    {
        text: '虚拟机栈',
        link: '/jvm/vm-stack/',
    },
    {
        text: '字节码指令集',
        link: '/jvm/bytecodes/',
    },
    {
        text: '执行引擎',
        link: '/jvm/execution-engine/',
    },
    {
        text: '垃圾回收器',
        link: '/jvm/gc/',
    },
    {
        text: '垃圾回收概和相关算法',
        link: '/jvm/gc-recycling-related/',
    },
    {
        text: '分析GC日志',
        link: '/jvm/gc-log/',
    },
    {
        text: '对象的实例化内存访问定位',
        link: '/jvm/object-instantiation-memory-access-location/',
    },

    {
        text: 'JVM监控诊断工具',
        link: '/jvm/monitoring-and-diagnostic-tools/',
    },
    {
        text: 'JVM监控诊断工具-命令',
        link: '/jvm/monitoring-and-diagnostic-tools-command/',
    },
    {
        text: '浅堆与内存泄漏分析',
        link: '/jvm/memory-leak/',
    },
    {
        text: '性能监控与调优',
        link: '/jvm/performance-tuning/',
    },
]
export default sidebar
