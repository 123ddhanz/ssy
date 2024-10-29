import type { Plugin } from 'vue'
import Avatar from './avatar/Avatar.vue'
import { Button } from './button'
import { Link } from './link'

const plugins: Plugin[] = [Link, Button]

export default plugins
export { Avatar }
