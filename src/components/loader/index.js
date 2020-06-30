import { h } from 'preact'
import style from './style.css'
import cn from 'classnames'
const Header = () => (
  <div class={style['sk-cube-grid']}>
    <div class={cn(style['sk-cube'], style['sk-cube1'])} />
    <div class={cn(style['sk-cube'], style['sk-cube2'])} />
    <div class={cn(style['sk-cube'], style['sk-cube3'])} />
    <div class={cn(style['sk-cube'], style['sk-cube4'])} />
    <div class={cn(style['sk-cube'], style['sk-cube5'])} />
    <div class={cn(style['sk-cube'], style['sk-cube6'])} />
    <div class={cn(style['sk-cube'], style['sk-cube7'])} />
    <div class={cn(style['sk-cube'], style['sk-cube8'])} />
    <div class={cn(style['sk-cube'], style['sk-cube9'])} />
  </div>
)

export default Header
