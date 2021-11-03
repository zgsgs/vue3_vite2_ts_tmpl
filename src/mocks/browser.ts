/*
 * @Author       : Jason <2087108700@qq.com>
 * @Date         : 2021-11-03 10:15:11
 * @Description  :
 * @FilePath     : \vue3_vite2_ts_tmpl\src\mocks\browser.ts
 * @LastEditTime : 2021-11-03 18:02:51
 * @LastEditors  : Jason
 */
import { setupWorker } from 'msw'
import handlers from './handlers'

export const worker = setupWorker(...handlers)
