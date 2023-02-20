import schiphalast from './../assets/schiphalast.png';
import dHome from './../assets/d_home.svg';
import dSkills from './../assets/d_skills.svg';
import dExp from './../assets/d_exp.svg';
import dWorks from './../assets/d_works.svg';
import dContact from './../assets/d_contact.svg';
import sGithub from './../assets/s_github.svg';
import sBlog from './../assets/s_blog.svg';

export default {
  cn: {
    header: {
      langList: ['中'],
      titleList: [
        {
          svg: dHome,
          title: '首页'
        },
        {
          svg: dSkills,
          title: '能力'
        },
        {
          svg: dExp,
          title: '经历'
        },
        {
          svg: dWorks,
          title: '作品集'
        },
        {
          svg: dContact,
          title: '联系我'
        }
      ]
    },
    footer: ['Released under the MIT License', 'All Rights Reserved ', `Copyright © 2022-${new Date().getFullYear()} cooooing`],
    overview: {
      infoList: ['20岁', '本科', '苏州', '在读'],
      quote: '路漫漫其修远兮，吾将上下而求索。',
      desList: ['我叫张方霖，未来的Java工程师，后端工程师', '邮箱：cooooing@163.com', '手机：15523947379（微信同号）', 'QQ：2450144961', '个人主页：https://cooooing.github.io/']
    },
    skill: {
      outCircleList: [
        {
          bg: {
            backgroundColor: 'rgba(121,100,102,0.8)'
          },
          name: 'springboot'
        },
        {
          bg: {
            backgroundColor: 'rgba(49,65,82,0.8)'
          },
          name: 'spring'
        },
        {
          bg: {
            backgroundColor: 'rgba(76,157,160,0.8)'
          },
          name: 'springMVC'
        },
        {
          bg: {
            backgroundColor: 'rgba(66,66,66,0.8)'
          },
          name: 'MyBatis'
        },
        {
          bg: {
            backgroundColor: 'rgba(193,131,106,0.8)'
          },
          name: 'git'
        },
        {
          bg: {
            backgroundColor: 'rgba(117,148,179,0.8)'
          },
          name: 'maven'
        },
        {
          bg: {
            backgroundColor: 'rgba(71,83,94,0.8)'
          },
          name: 'redis'
        },
        {
          bg: {
            backgroundColor: 'rgba(147,147,189,0.8)'
          },
          name: 'Mysql'
        }
      ],
      innerCircleList: [
        {
          bg: {
            backgroundColor: 'rgba(179,164,140,0.8)'
          },
          name: 'Java'
        },
        {
          bg: {
            backgroundColor: 'rgba(171,209,220,0.8)'
          },
          name: 'Python'
        },
        {
          bg: {
            backgroundColor: 'rgba(238,215,163,0.8)'
          },
          name: 'JavaScript'
        },
        {
          bg: {
            backgroundColor: 'rgba(207,184,178,0.8)'
          },
          name: 'C'
        }
      ],
      desList: [
        '熟悉Java，有良好的Java基础，熟悉面对对象的编程思想',
        '熟悉SSM、SpringBoot等应用框架',
        '熟悉Linux环境、熟悉git和maven版本管理工具',
        '熟悉Mysql和Redis数据库以及数据库语言、熟悉Nginx代理服务器',
        '熟悉HTML、JavaScript、Ajax、JQuery等前端技术',
        '了解Dubbo、FastDFS、RabbitMQ和Docker',
        '了解Python基础编程、Java设计模式',
        '热爱编程，自学能力强，渴望学习新技术用于开发。',
        '有良好的代码风格，多注释。注重开发过程中的交流和团队合作。'
      ]
    },
    exp: {
      expList: [
        {
          title: 'Schiphalast开发组',
          time: '2022年6月~至今',
          post: '后端接口开发',
          img: {
            backgroundImage: `url(${schiphalast})`
          },
          contentList: ['负责部分游戏后端支持', '负责游戏热更新服务端功能的开发', '负责社交系统的开发']
        }
      ]
    },
    works: {
      worksList: [
        {
          title: '健康码识别网站',
          des: '大创项目，尚在开发中。主要负责项目后端的开发以及部署。深刻体会到了开发过程中交流以及文档的重要性。'
        },
        {
          title: 'Schiphalast',
          des: 'tap游戏，尚在测试阶段。',
          url: 'https://schiphalast.space/'
        }
      ],
      viewMore: 'github上面查看更多'
    },
    contact: {
      title: '联系我',
      desList1: ['灵感', '代码', '梦想', '未来'],
      desList2: ['热爱学习，想获取更多新知识', '喜欢尝试，期待新鲜事物', '和朋友一起开发更有趣的项目', '带上我吧，一起看到更大的世界'],
      download: '下载简历',
      fileList: [
        {
          title: 'HTML版',
          url: 'www.baidu.com'
        },
        {
          title: 'PDF版',
          url: 'www.baidu.com'
        }
      ],
      typeList: [
        {
          icon: sGithub,
          url: 'https://github.com/cooooing'
        },
        {
          icon: sBlog,
          url: 'https://cooooing.github.io'
        }
      ]
    }
  }
  // en: {
  //   header: {
  //     langList: ['CN', 'EN'],
  //     titleList: [
  //       {
  //         svg: dHome,
  //         title: 'home'
  //       },
  //       {
  //         svg: dSkills,
  //         title: 'skills'
  //       },
  //       {
  //         svg: dExp,
  //         title: 'exp'
  //       },
  //       {
  //         svg: dWorks,
  //         title: 'works'
  //       },
  //       {
  //         svg: dContact,
  //         title: 'contact'
  //       }
  //     ]
  //   },
  //   footer: ['Released under the MIT License', 'All Rights Reserved ', `Copyright © 2014-${new Date().getFullYear()} Korey Zhao`],
  //   overview: {
  //     infoList: ['30years', 'B.S.', 'ChengDu', 'On Job'],
  //     quote: 'Life is a kind of endless yearning, eager to continue to rise, become more great and noble.',
  //     desList: ['I am Korey Zhao, Tencent Senior FE engineer', 'Used to be Jumei E-commerce & growth team FE leader', 'keyu.zhao@foxmail.com']
  //   },
  //   skill: {
  //     outCircleList: [
  //       {
  //         bg: {
  //           backgroundColor: 'rgba(121,100,102,0.8)'
  //         },
  //         name: 'vue'
  //       },
  //       {
  //         bg: {
  //           backgroundColor: 'rgba(49,65,82,0.8)'
  //         },
  //         name: 'react'
  //       },
  //       {
  //         bg: {
  //           backgroundColor: 'rgba(76,157,160,0.8)'
  //         },
  //         name: 'angular'
  //       },
  //       {
  //         bg: {
  //           backgroundColor: 'rgba(66,66,66,0.8)'
  //         },
  //         name: 'nodejs'
  //       },
  //       {
  //         bg: {
  //           backgroundColor: 'rgba(193,131,106,0.8)'
  //         },
  //         name: 'miniP'
  //       },
  //       {
  //         bg: {
  //           backgroundColor: 'rgba(117,148,179,0.8)'
  //         },
  //         name: 'quickapp'
  //       },
  //       {
  //         bg: {
  //           backgroundColor: 'rgba(71,83,94,0.8)'
  //         },
  //         name: 'ssr'
  //       },
  //       {
  //         bg: {
  //           backgroundColor: 'rgba(147,147,189,0.8)'
  //         },
  //         name: 'ts'
  //       }
  //     ],
  //     innerCircleList: [
  //       {
  //         bg: {
  //           backgroundColor: 'rgba(179,164,140,0.8)'
  //         },
  //         name: 'build'
  //       },
  //       {
  //         bg: {
  //           backgroundColor: 'rgba(171,209,220,0.8)'
  //         },
  //         name: 'opt'
  //       },
  //       {
  //         bg: {
  //           backgroundColor: 'rgba(238,215,163,0.8)'
  //         },
  //         name: 'test'
  //       },
  //       {
  //         bg: {
  //           backgroundColor: 'rgba(207,184,178,0.8)'
  //         },
  //         name: 'deploy'
  //       }
  //     ],
  //     desList: [
  //       '7 years FE development experience,2 years management experience',
  //       'Actually lead the development of many platform projects (APP, PC, H5, miniprogram, quickapp, etc.), formulated and standardized the team workflow',
  //       'Try different FE technology stacks, Good at component development and construction optimization',
  //       'Self-driven, Author of webpack, vue and other source code analysis series articles'
  //     ]
  //   },
  //   exp: {
  //     expList: [
  //       {
  //         title: 'Tencent',
  //         time: '2017.04-now',
  //         post: 'Senior FE engineer',
  //         img: {
  //           backgroundImage: `url(${eTx})`
  //         },
  //         contentList: [
  //           'Responsible for the development of Tencent UMA',
  //           'Participate in the formulation of team collaboration standards',
  //           'Participate in the development of UMA client miniP and SaaS',
  //           'Participate in the source community contribution'
  //         ]
  //       },
  //       {
  //         title: 'Jumei',
  //         time: '2017.04-2021.04',
  //         post: 'Senior FE engineer/leader',
  //         img: {
  //           backgroundImage: `url(${eJm})`
  //         },
  //         contentList: [
  //           'Responsible for daily work of jumei e-commerce and growth FE team(10+)',
  //           'Participated in CRM development of jiedian, C/S development of unmanned shelves of meidian, etc',
  //           'Lead the development of jumei and other miniprogram/quickapp and growth',
  //           'Optimize and reconstruct some basic libraries of jumei, such as jumei-sdk'
  //         ]
  //       },
  //       {
  //         title: 'LANTU TECH',
  //         time: '2015.06-2017.04',
  //         post: 'Web front-end R & D engineers',
  //         img: {
  //           backgroundImage: `url(${eLt})`
  //         },
  //         contentList: [
  //           'Responsible for H5 hybrid development related to university campus mobile APP',
  //           'Responsible for the rapid construction of high-quality APP / PC / WeChat page',
  //           'According to business needs to design the appropriate project',
  //           'Highly component, modular thinking, with the platform debugging capabilities'
  //         ]
  //       },
  //       {
  //         title: 'Zhuohuang Management Co., Ltd',
  //         time: '2014.08-2015.06',
  //         post: 'Web development and SEO',
  //         img: {
  //           backgroundImage: `url(${eZh})`
  //         },
  //         contentList: [
  //           'Responsible for enterprise station static page development and simple interaction',
  //           'Responsible for website background maintenance',
  //           'Responsible for Baidu bid operation and seo optimization',
  //           'Outside of work to enhance their own javascript coding ability'
  //         ]
  //       }
  //     ]
  //   },
  //   works: {
  //     worksList: [
  //       {
  //         title: 'Jumei+ MiniProgram',
  //         des:
  //           'Jumei+ MiniProgram is the realization of Jumei e-commerce business on WeChat small program, including general merchandise, sales process of shopping carts, shopping process, user center and other modules.',
  //         mini: wJm,
  //         style: {}
  //       },
  //       {
  //         title: 'lushangLife MiniProgram',
  //         des:
  //           'lushangLife MiniProgram is the realization of Jumei counter purchase business on WeChat small program, including a full set of sales processes such as counter purchase area selection and delivery methods, as well as shopping process and user center modules.',
  //         mini: wLs,
  //         style: {}
  //       },
  //       {
  //         title: 'Jumei quickapp',
  //         des:
  //           'Jumei quickapp is the realization of Jumei e-commerce business in Android quickapp. Based on the new application form of mobile phone hardware platform, it provides a new channel for sales channels.',
  //         url: 'http://hapjs.org/app/com.jm.quickapp',
  //         style: {}
  //       },
  //       {
  //         title: 'Jumei H5',
  //         des:
  //           'The core carrier of the mobile terminal of Jumei e-commerce business, including the three pages, shopping process, user center, etc., is also widely used in the app through the jsbridge part of the page.',
  //         url: 'https://h5.jumei.com',
  //         style: {}
  //       },
  //       {
  //         title: 'Jumei growth',
  //         des:
  //           'The new growth project of Jumei e-commerce business, the main promotion activities of e-commerce hosted the page, realized the adoption of multi-page architecture, and supported the work mode of packaging a single activity.',
  //         url: 'http://r.jumei.com',
  //         style: {}
  //       },
  //       {
  //         title: 'jiedian CRM',
  //         des: 'The PC-side street power crm back-end merchant management system includes several functions such as various merchant entry, statistics, and maintenance.',
  //         url: '',
  //         style: {}
  //       },
  //       {
  //         title: 'Campus APP',
  //         des:
  //           'One-stop, the whole life cycle of the campus official mobile service platform, covering PC, Andrews, IOS, WeChat platform, on-line schools, including CUFE, BJTU, NACTA, LNU, SWUFE and so on, download Hundreds of thousands, loved by the students teacher.',
  //         url: 'http://app.cufe.edu.cn/',
  //         style: {}
  //       },
  //       {
  //         title: 'campus management system',
  //         des:
  //           'According to the background management system of campus APP, including the personnel structure, information statistics, H5 production machine, data exchange platform, data management of each module, feedback settings, etc., for the university to provide Internet-based mobile campus overall solution.',
  //         url: '',
  //         style: {}
  //       },
  //       {
  //         title: 'Web front engineer resumes (2015)',
  //         des:
  //           'The first edition of this resume, on the line a month later, Baidu keyword `web front engineer resumes` ranked the top three, hundreds of millions of traffic, by the majority of front-end beginners praise and imitation, so far the search Baidu 10 pages are everywhere See the copy of the resume.',
  //         url: 'http://www.flqin.com/2015/',
  //         style: {}
  //       },
  //       {
  //         title: '@korey/MVVM',
  //         des:
  //           'A simple MVVM framework that implements the functions of data-binding and view-refresh. Currently, it only serves this resume project. It is still optimized and updated. Welcome to learn communication.',
  //         url: 'https://github.com/zhaoky/mvvm',
  //         style: {}
  //       },
  //       {
  //         title: '@korey/Fullpage',
  //         des:
  //           'A simple Fullpage framework that implements full-screen page-turning with pull-up, scrolling, and anchor-pointing. Currently only serves this resume project, it is still optimized and updated. Welcome to learn communication.',
  //         url: 'https://github.com/zhaoky/fullpage',
  //         style: {}
  //       }
  //     ],
  //     viewMore: 'Go to github see more'
  //   },
  //   contact: {
  //     title: 'Contact Me',
  //     desList1: ['INSPIRATION', 'CODE', 'DREAM', 'FUTURE'],
  //     desList2: [
  //       'Focus on efficiency, preference for agile development',
  //       'Like to try, look forward to something new',
  //       'Front is interested, interest is the future',
  //       'Line road friends, is a shortcut',
  //       'With me, see the bigger world together'
  //     ],
  //     download: 'Download Resume',
  //     fileList: [
  //       {
  //         title: 'HTML',
  //         url: 'www.baidu.com'
  //       },
  //       {
  //         title: 'PDF',
  //         url: 'www.baidu.com'
  //       }
  //     ],
  //     typeList: [
  //       {
  //         icon: sGithub,
  //         url: 'https://github.com/zhaoky'
  //       },
  //       {
  //         icon: sSf,
  //         url: 'https://segmentfault.com/u/fe_korey'
  //       },
  //       {
  //         icon: sBlog,
  //         url: 'https://blog.flqin.com'
  //       },
  //       {
  //         icon: sZh,
  //         url: 'https://www.zhihu.com/people/fe_korey'
  //       },
  //       {
  //         icon: sJj,
  //         url: 'https://juejin.im/user/57c91b3b165abd0068db89c2'
  //       }
  //     ]
  //   }
  // }
};
