import {createWebHashHistory, createRouter} from 'vue-router'
import Home from './views/Home.vue'
import Doc from './views/Doc.vue'
import Switch from './components/SwitchIntro.vue'
import Button from './components/ButtonIntro.vue'
import Dialog from './components/DialogIntro.vue'
import Tabs from './components/TabsIntro.vue'
import Intro from './views/Intro.vue'
import Install from './views/Install.vue'
import Start from './views/Start.vue'


const history = createWebHashHistory()
export const router = createRouter({
    history: history,
    routes: [
        {path: '/', component: Home},
        {path: '/doc', component: Doc, children:[
          {path: '', component: Intro},
          {path: 'intro', component: Intro},
          {path: 'install', component: Install},
          {path: 'start', component: Start},
          {path: 'switch', component: Switch},
          {path: 'button', component: Button},
          {path: 'dialog', component: Dialog},
          {path: 'tabs', component: Tabs},

        ]},
    ]
})

