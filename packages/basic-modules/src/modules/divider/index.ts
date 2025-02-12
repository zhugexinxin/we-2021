/**
 * @description divider module
 * @author wangfupeng
 */

import { IModuleConf } from '@wangeditor/core'
import withDivider from './plugin'
import { renderDividerConf } from './render-elem'
import { dividerToHtmlConf } from './elem-to-html'
import { insertDividerMenuConf, deleteDividerMenuConf } from './menu/index'

const image: Partial<IModuleConf> = {
  renderElems: [renderDividerConf],
  elemsToHtml: [dividerToHtmlConf],
  menus: [insertDividerMenuConf, deleteDividerMenuConf],
  editorPlugin: withDivider,
}

export default image
