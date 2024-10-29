import { withInstall } from '../utils/with-install'
import _Button from './Button'

// 给组件添加注册方法
export const Button = withInstall(_Button)
export default Button

// 组件类型声明
declare module 'vue' {
  export interface GlobalComponents {
    SButton: typeof Button
  }
}
