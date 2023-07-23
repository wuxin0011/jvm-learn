import { defineUserConfig, defaultTheme } from 'vuepress'
import { commentPlugin } from "vuepress-plugin-comment2";
import { copyCodePlugin } from "vuepress-plugin-copy-code2";
// @ts-ignore
import { searchPlugin } from '@vuepress/plugin-search'
// const isProd = process.env?.NODE_ENV === 'production'
import { path } from '@vuepress/utils'

import head from "./configs/head";
import navbar from "./configs/navbar";
import sidebar from "./configs/sidebar";

export default defineUserConfig({
    base: '/jvm-learn/',
    head: head,

    locales: {
        '/': {
            title: '巩固JVM',
            description: '巩固JVM',
        },
    },


    theme: defaultTheme({
        logo: '/logo/logo.png',
        repo: 'wuxin0011/jvm-learn',
        docsBranch: 'main',
        docsDir: 'docs',

        locales: {
            '/': {
                navbar: navbar,
                sidebar: sidebar,
                editLinkText: '编辑此页',
            },

        },


    }),

    // 组件重命名，覆盖默认组件
    alias: {
        '@theme/ToggleColorModeButton.vue': path.resolve(__dirname, './components/ToggleColorModeButton.vue')
    },


    plugins: [
        searchPlugin({
            locales: {
                '/': {
                    placeholder: '搜索',
                }
            },
        }),
        commentPlugin({
            provider: "Giscus",
            repo: 'wuxin0011/blog-giscus-comment',
            repoId: 'R_kgDOJADaHw', // id
            category: 'Announcements',
            categoryId: 'DIC_kwDOJADaH84CUUwQ', // id
            mapping: 'pathname', // url
            lazyLoading: true,
            reactionsEnabled: true,
            inputPosition: 'bottom',
        }),


        // 代码复制
        copyCodePlugin({
            locales: {
                "/": {
                    copied: 'copy success!',
                    copy: 'click copy'
                }
            }
        })


    ]

})
