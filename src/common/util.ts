/**
 * 常用公共方法
 */
import { Util } from '~/common'
const $util = {
  /**
   * storage方法简写
   * @param type 存储类型
   * @param action 执行动作
   * @param key 键名称
   * @param value 键值
   */
  storage (type: Util.StorageType, action: Util.StorageAction, key: string, value?: string): void {
    if (type === 'local') {
      if (action === 'set') {
        window.localStorage.setItem(key, value || '')
      } else if (action === 'del') {
        window.localStorage.removeItem(key)
      } else if (action === 'get') {
        window.localStorage.getItem(key)
      }
    } else if (type === 'session') {
      if (action === 'set') {
        window.sessionStorage.setItem(key, value || '')
      } else if (action === 'del') {
        window.sessionStorage.removeItem(key)
      } else if (action === 'get') {
        window.sessionStorage.getItem(key)
      }
    }
  },
  /**
   * 简易倒计时
   * @param sec 倒计时总秒数
   * @param changeFun 每秒变化时的回调
   * @param doneFun 倒计时完成时的回调
   */
  countDown (sec: number, changeFun: (sec: number) => void, doneFun?: () => void) {
    const timer = setInterval(() => {
      sec--
      if (sec) {
        changeFun(sec)
      } else {
        clearInterval(timer)
        if (doneFun) {
          doneFun()
        }
      }
    }, 1000)
  },
}

export default $util
