function sideSystem(){
    return [
        {
            text:'计算机系统概述',
            collapsed: false,
            items:[
                {
                    text:'操作系统的基本概念',
                    link:'/net/system/system.md'
                },
                {
                    text:'操作系统的发展与分类',
                    link:'/net/system/01-development-classification-operating-systems.md'
                },
                {
                    text:'操作系统的运行环境',
                    link:'/net/system/01-operating-system-running-environment.md'
                },
                { 
                    text:'操作系统的体系结构',
                    link:'/net/system/01-the-architecture-the-operating-system.md'
                }
            ]
        },
        {
            text:'进程管理',
            collapsed: false,
            items:[
                {
                    text:'进程与线程',
                    link:'/net/system/02-process-thread.md'
                },
                {
                    text:'处理机调度',
                    link:'/net/system/02-processor-scheduling.md'
                },
                {
                    text:'进程同步',
                    link:'/net/system/02-process-synchronization.md'
                },
                { 
                    text:'死锁',
                    link:'/net/system/02-deadlock.md'
                }
            ]
        },
        {
            text:'内存管理',
            collapsed: false,
            items:[
                {
                    text:'内存管理的概念',
                    link:'/net/system/03-memory-management.md'
                },
                {
                    text:'虚拟内存管理',
                    link:'/net/system/03-virtual-memory-management.md'
                }
            ]
        },
        {
            text:'文件管理',
            collapsed: false,
            items:[
                {
                    text:'文件系统基础',
                    link:'/net/system/04-file-system-basics.md'
                },
                {
                    text:'文件系统实现',
                    link:'/net/system/04-file-system-implementation.md'
                },
                {
                    text:'磁盘组织与管理',
                    link:'/net/system/04-disk-organization-management.md'
                },
            ]
        },
        {
            text:'输入输出IO管理',
            collapsed: false,
            items:[
                {
                    text:'I/O管理概念',
                    link:'/net/system/05-ip-basic.md'
                },
                {
                    text:'I/O核心子系统',
                    link:'/net/system/05-io-system.md'
                }
            ]
        },
    ]
}

export default sideSystem