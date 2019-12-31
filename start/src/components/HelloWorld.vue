<template>
  <div class="quill-editor">
    <el-upload
      class="upload-demo"
      action="http://localhost/goods/addNewGoodsPicture"
      accept=".jpg,.jpeg,.png,.gif]"
      :headers="headers"
      :show-file-list="false"
      :on-success="handleSuccess"
	  :on-error="handleError"
      :before-upload="beforeUpload"
      id="uploadImg"
      ref="uploadImg"
      >
      上传
    </el-upload>
    <quill-editor
      v-model="content"
      :content="content"
      :options="editorOption"
      @blur="onEditorBlur($event)"
      @focus="onEditorFocus($event)"
      @ready="onEditorReady($event)"
      ref="QuillEditor">
    </quill-editor>
  </div>
</template>
 
<script>
import { Quill } from 'vue-quill-editor'
// import { ImageDrop } from 'quill-image-drop-module'
// import ImageResize from 'quill-image-resize-module'
// Quill.register('modules/imageDrop', ImageDrop)
// Quill.register('modules/imageResize', ImageResize)
 
const toolbarOptions = [
  ['bold', 'italic', 'underline', 'strike'],
  ['blockquote', 'code-block'],
  // [{ 'header': 1 }, { 'header': 2 }],
  [{ 'list': 'ordered' }, { 'list': 'bullet' }],
  [{ 'script': 'sub' }, { 'script': 'super' }],
  // [{ 'indent': '-1' }, { 'indent': '+1' }],
  // [{ 'direction': 'rtl' }],
  [{ 'size': ['small', false, 'large', 'huge'] }],
  // [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
  [{ 'font': [] }],
  [{ 'color': [] }, { 'background': [] }],
  [{ 'align': [] }],
  // ['clean'],
  ['link', 'image', 'video']
]
export default {
  data () {
    return {
      // name: 'register-modules-example',
      content: `1231`,
      editorOption: {
        modules: {
          history: {
            delay: 1000,
            maxStack: 50,
            userOnly: false
          },
          toolbar: {
            container: toolbarOptions,
            handlers: {
              'image': function (value) {
                if (value) {
                  // 调用iview图片上传
                  console.log(document.querySelector('#uploadImg .el-upload'))
                  document.querySelector('#uploadImg .el-upload').click()
                  console.log(value, 1231)
                } else {
                  console.log(212222222222222)
                  this.quill.format('image', false)
                }
              }
            }
          },
          // imageDrop: true,
          // imageResize: {
          //   displayStyles: {
          //     backgroundColor: 'black',
          //     border: 'none',
          //     color: 'white'
          //   },
          //   modules: [ 'Resize', 'DisplaySize', 'Toolbar' ]
          // }
        }
      },
      headers: {
        'Authorization': 'Bearer ' + sessionStorage.getItem('token')
      }
    }
  },
  methods: {
    onEditorBlur (editor) {
      // console.log('editor blur!', editor)
      console.log(editor)
	  console.log(this.$refs.QuillEditor._content)
	  console.log(5555)
    },
    onEditorFocus (editor) {
      console.log('editor focus!', editor)
    },
    onEditorReady (editor) {
      console.log('editor ready!', editor)
    },
    // 上传之前加认证信息
    beforeUpload () {
      this.headers.Authorization = 'Bearer ' + sessionStorage.getItem('token')
    },
    // 图片上传成功方法
    handleSuccess (response, file, fileList) {
      // 获取富文本组件实例
      let quill = this.$refs.QuillEditor.quill
      // 如果上传成功
      if (response) {
        // 获取光标所在位置
        let length = quill.getSelection().index
        // 插入图片，res为服务器返回的图片链接地址
        quill.insertEmbed(length, 'image', response.data.url)
        // 调整光标到最后
        quill.setSelection(length + 1)
      } else {
        // 提示信息，需引入Message
        // Message.error('图片插入失败')
        alert('图片插入失败')
      }
    },
	handleError (v){
		console.log(v);
		console.log("上传失败");
	}
  }
}
/**
 * https://www.cnblogs.com/chun321/p/8690876.html
 * https://blog.csdn.net/PT1993/article/details/89431518
 * https://www.jianshu.com/p/e967fe9b06a4
 * */
</script>