/**
 * 顶部导航栏
 * @returns
 */
function nav() {
    return [
        /**
         * 前端开发
         */
        {
            text: '前端',
            items: [
                {
                    text: 'HTML',
                    link: '/web/html/index.md',
                },
                {
                    text: 'CSS',
                    link: '/web/css/index.md',
                },
                {
                    text: 'JavaScript',
                    link: '/web/js/index.md',
                },
                {
                    text: 'Typescript',
                    link: '/web/typeScript/index.md',
                },
                {
                    text: 'Node',
                    link: '/web/node/index.md',
                },
            ],
        },
        /**
         * 服务端开发
         */
        {
            text: '服务端',
            items: [
                {
                    text: 'java',
                    link: '/admin/java/index.md',
                },
                {
                    text: 'python',
                    link: '/admin/python/index.md',
                },
                {
                    text: 'golang',
                    link: '/admin/go/index.md',
                },
                {
                    text: 'php',
                    link: '/admin/php/index.md',
                },
            ],
        },
        /**
         * 框架文档
         */
        {
            text: '框架',
            items: [
                {
                    text: '前端框架',
                    items: [
                        { text: 'Vue2', link: '/framework/web/vue2/index.md' },
                        { text: 'React', link: '/framework/web/react/index.md' },
                        { text: 'Nest', link: '/framework/web/nest/index.md' },
                    ],
                },
                {
                    text: '服务端框架',
                    items: [
                        {
                            text: 'Spring',
                            link: '/framework/admin/spring/index.md',
                        },
                        {
                            text: 'SpringMvc',
                            link: '/framework/admin/springMvc/index.md',
                        },
                    ],
                },
                {
                    text: '微服务',
                    items: [
                        {
                            text: 'SpringCloud',
                            link: '/framework/service/springCloud/index.md',
                        },
                    ],
                },
                {
                    text: 'UI',
                    items: [
                        { text: 'Element', link: '/framework/ui/element/index.md' },
                        { text: 'Antd', link: '/framework/ui/antd/index.md' },
                    ],
                },
            ],
        },
        /**
         * 开发系统
         */
        {
            text: '开发工具',
            items: [
                {
                    text: '开发系统',
                    items: [
                        {
                            text: 'Linux',
                            link: '/tool/system/linux/index.md',
                        },
                    ],
                },
                {
                    text: '编程软件',
                    items: [
                        {
                            text: 'VSCODE',
                            link: '/tool/softwore/vscode/index.md',
                        },
                        {
                            text: 'IDEA',
                            link: '/tool/softwore/idea/index.md',
                        },
                    ],
                },
                {
                    text: '包管理工具',
                    items: [
                        {
                            text: 'yarn',
                            link: '/tool/yarn/index.md',
                        },
                        {
                            text: 'npm',
                            link: '/tool/npm/index.md',
                        },
                        {
                            text: 'pnpm',
                            link: '/tool/pnpm/index.md',
                        },
                        {
                            text: 'nrm',
                            link: '/tool/nrm/index.md',
                        },
                        {
                            text: 'nvm',
                            link: '/tool/nvm/index.md',
                        },
                    ],
                },
                {
                    text: '其他',
                    items: [
                        {
                            text: 'Git',
                            link: '/tool/other/git/index.md',
                        },
                        {
                            text: 'markdown',
                            link: '/tool/other/markdown/index.md',
                        },
                        // {
                        //     text: 'npm',
                        //     link: '../tool/npm/index.md',
                        // },
                        // {
                        //     text: 'pnpm',
                        //     link: '../tool/pnpm/index.md',
                        // },
                        // {
                        //     text: 'nrm',
                        //     link: '../tool/nrm/index.md',
                        // },
                        // {
                        //     text: 'nvm',
                        //     link: '../tool/nvm/index.md',
                        // },
                    ],
                },
            ],
        },
        /**
         * 数据库
         */
        {
            text: '数据库',
            items: [
                {
                    text:'Redis',
                    link:'/database/redis/index.md'
                },
                {
                    text:'mongodb',
                    link:'/database/mongodb/index.md'
                },
                {
                    text:'mysql',
                    link:'/database/mysql/index.md'
                }
            ],
        },
        /**
         * 运维
         */
        {
            text: 'CI/CD',
            items: [
                {
                    text: 'jenkins',
                    link: '/ci-cd/jenkins/index.md',
                },
                {
                    text: 'docker',
                    link: '/ci-cd/docker/index.md',
                },
            ],
        },
        {
            text:'随笔',
            link:'/notebook/index'
        },
        {
            text:'其他',
            items:[
                {
                    text:'计算机基础',
                    items:[
                        {
                            text:'计算机组成原理',
                            link:'/net/principles/principles.md'
                        },
                        {
                            text:'数据结构',
                            link:'/net/struct/struct.md'
                        },
                        {
                            text:'计算机网络',
                            link:'/net/network/network.md'
                        },
                        {
                            text:'计算机系统',
                            link:'/net/system/system.md'
                        }
                    ]
                },
                {
                    text:'网络安全',
                    items:[
                        {
                            text:'kali-linux',
                            link:'/net/network-security /index.md'
                        },
                       
                    ]
                }
            ]
        }
    ]
}

export default nav