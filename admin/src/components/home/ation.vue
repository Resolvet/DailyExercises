<template>
  <div>
    <header-lang></header-lang>
    <el-row class="contetaoner_wrapp">
      <el-col :span="4" class="wrappBox">
        <left-nav></left-nav>
      </el-col>
      <el-col :span="20" class="upload_wrapp">
        <h1>用户头像更换</h1>
          <el-upload
            ref="upload"
            class="avatar-uploader"
            action="http://127.0.0.1:9988/upload"
            :show-file-list="false"
            :on-success="handleAvatarSuccess"
            :before-upload="beforeAvatarUpload">
            <img v-if="imageUrl" :src="imageUrl" class="avatar">
            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
          </el-upload>
          <el-button  size="small" type="success" @click="submitUpload">上传</el-button>
      </el-col>
    </el-row>
  </div>
</template>
<script>
  import HeaderLang from '@/components/common/Header'
  import LeftNav from '@/components/common/LeftNav.vue'
  export default {
    name: "ation",
    data (){
      return {
        imageUrl: ''
      }
    },
    methods:{
       handleAvatarSuccess(res, file) {
               this.imageUrl = URL.createObjectURL(file.raw);
             },
             beforeAvatarUpload(file) {
                    const isJPG = file.type === 'image/jpeg';
                    const isLt2M = file.size / 1024 / 1024 < 2;

                    if (!isJPG) {
                      this.$message.error('上传头像图片只能是 JPG 格式!');
                    }
                    if (!isLt2M) {
                      this.$message.error('上传头像图片大小不能超过 2MB!');
                    }
                    return isJPG && isLt2M;
                  },
                   submitUpload() {
                          this.$refs.upload.submit();
                          console.log(this.$refs)
                        },
    },
    components:{
        HeaderLang,
        LeftNav
    }
  }
</script>
<style lang="less">
  .contetaoner_wrapp{
      position: absolute;
      width: 100%;
      height: 100%;
      top: 60px;
      .wrappBox{
        background-color: rgb(84, 92, 100);
        height: 100%;
      }
    }
    .upload_wrapp{
      margin-top: 10px;
      text-align: center;
      h1{
        color: #409EFF;
        margin-bottom: 20px;
      }
    }
    .avatar-uploader .el-upload {
        border: 1px dashed #d9d9d9;
        border-radius: 6px;
        cursor: pointer;
        position: relative;
        overflow: hidden;
      }
      .avatar-uploader .el-upload:hover {
        border-color: #409EFF;
      }
      .avatar-uploader-icon {
        font-size: 28px;
        color: #8c939d;
        width: 178px;
        height: 178px;
        line-height: 178px;
        text-align: center;
      }
      .avatar {
        width: 178px;
        height: 178px;
        display: block;
      }
</style>
