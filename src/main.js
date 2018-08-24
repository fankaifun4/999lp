import Vue from 'vue'
import App from './App'
Vue.config.productionTip = false
App.mpType = 'app'

import Comm from './components/comm/index'

import '../static/style/comm.scss'

Object.keys(Comm).forEach(item => {
    Vue.component(Comm[item].name, Comm[item])
})

const app = new Vue(App)
app.$mount()
export default {
    // 这个字段走 app.json
    config: {
        // 页面前带有 ^ 符号的，会被编译成首页，其他页面可以选填，我们会自动把 webpack entry 里面的入口页面加进去
        pages: [
            '^pages/index/main',
            'pages/community/main',
            'pages/communityDetail/main',
            'pages/my/main',
            'pages/news/main',
            'pages/newsdescribe/main',
            'pages/job_style/main',
            'pages/activity/main',
            'pages/article/main',
            'pages/taskDetail/main',
            'pages/taskList/main',
            'pages/strategy/main',
            'pages/publish/main'
        ],
        tabBar: {
            color: "#2c2c2c",
            backgroundColor: "#c2c2c2",
            position: "bottom",
            selectedColor: "#c90915",
            list: [{
                    pagePath: "pages/index/main",
                    text: "首页",
                    iconPath: "/static/imgs/home.png",
                    selectedIconPath: "/static/imgs/home_act.png"
                },
                {
                    pagePath: "pages/community/main",
                    text: "龙门客栈",
                    iconPath: "/static/imgs/shequ.png",
                    selectedIconPath: "/static/imgs/shequ_act.png"
                }
                // , {
                //     pagePath: "pages/my/main",
                //     text: "我的",
                //     iconPath: "/static/imgs/my.png",
                //     selectedIconPath: "/static/imgs/my_act.png"
                // }
            ]
        },
        window: {
            backgroundTextStyle: 'black',
            navigationBarBackgroundColor: '#c2c2c2',
            navigationBarTitleText: 'WeChat',
            navigationBarTextStyle: 'black',
            enablePullDownRefresh: false
        }
    }
}
