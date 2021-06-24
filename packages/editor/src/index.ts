/**
 * @description editor entry
 * @author wangfupeng
 */

import './assets/index.less'
import '@wangeditor/core/css/style.css'
import { IDomEditor } from '@wangeditor/core'

// basic-modules
import '@wangeditor/basic-modules/css/style.css'
import basicModules from '@wangeditor/basic-modules'

// list-module
import '@wangeditor/list-module/css/style.css'
import wangEditorListModule from '@wangeditor/list-module'

// table-module
import '@wangeditor/table-module/css/style.css'
import wangEditorTableModule from '@wangeditor/table-module'

// video-module
import '@wangeditor/video-module/css/style.css'
import wangEditorVideoModule from '@wangeditor/video-module'

// upload-image-module
import wangEditorUploadImageModule from '@wangeditor/upload-image-module'

// code-highlight
import '@wangeditor/code-highlight/css/style.css'
import {
  wangEditorCodeHighlightModule,
  wangEditorCodeHighLightDecorate,
} from '@wangeditor/code-highlight'

// 默认配置
import getDefaultEditorConfig from './editor-config'

import WangEditor from './WangEditor'

import registerModule from './register-module'

// 注册 basic-modules ，及其他 module
basicModules.forEach(module => registerModule(module))
registerModule(wangEditorListModule)
registerModule(wangEditorTableModule)
registerModule(wangEditorVideoModule)
registerModule(wangEditorUploadImageModule)
registerModule(wangEditorCodeHighlightModule)

// editor config
const defaultConfig = getDefaultEditorConfig()
WangEditor.setConfig({
  ...defaultConfig,
  decorate: wangEditorCodeHighLightDecorate, // 代码高亮
})

// export default WangEditor // TODO 要输出 WangEditor

// -------------------------------------- 分割线 ------------------------------------

const editorView = new WangEditor(
  'editor-container',
  // @ts-ignore
  window.content
)
// editorView.config.autoFocus = false
// editorView.config.readOnly = true
editorView.config.onChange = (editorCore: IDomEditor) => {
  const html = editorCore.getHtml()
  // @ts-ignore
  document.getElementById('editor-content-view').innerHTML = html
}
editorView.create()

// toggle readOnly
document.getElementById('toggle-readOnly')?.addEventListener('click', () => {
  editorView.setConfig({ readOnly: !editorView.config.readOnly })
})
