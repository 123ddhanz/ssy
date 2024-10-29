import { version } from '../package.json'
import Avatar from './avatar/Avatar.vue'
import plugins from './plugins'
import 'virtual:uno.css'
// import type { App } from 'vue'
// import SButton from './button/Button'
// import SFCButton from './SFCButton.vue'
// import TSXButton from './TSXButton'

// 导出单独组件
// export { SButton, SFCButton, TSXButton }
export * from './button'
export * from './link'

// 编写一个插件，实现一个 install 方法
// export default {
// install(app: App): void {
// app.component(SButton.name, SButton)
// app.component(SFCButton.name, SFCButton)
// app.component(TSXButton.name, TSXButton)
// },
// }
export default {
  install(app) {
    plugins.forEach(c => app.use(c))
  },
  version,
}
export { Avatar }
