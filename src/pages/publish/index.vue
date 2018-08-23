<style scoped lang="scss">
  .container{
    height: 100%;
  }
  .from-cover{
    width:750px;
    height:300px;
    background: #878787;
    border-bottom:1px solid #ccc;
  }
</style>
<template>
<div class="container">
  <div class="from-cover" @click="addCover" >

  </div>
  <div class="form-group">
    <label for="">文章标题</label>
  </div>
  <div class="form-group">
    <label for="">文章内容</label>
    <input type="text">
  </div>
</div>
</template>
<script>
export default {
  data(){
    return{

    }
  },
  methods:{
    addCover(){
      wx.chooseImage({
        count:1,
        success:res=>{
          let filePath = res.tempFilePaths[0]
          let name = filePath.substring( filePath.indexOf('/') )
          // wx.uploadFile({
          //   url: 'https://sm.ms/api/upload',
          //   filePath: filePath,
          //   name: 'smfile',
          //   success: res => {
          //     //逆向转换JSON字符串后抽取网址
          //     console.log(JSON.parse(res.data).data.url)
          //   }
          // })
        }
      })
    }
  }
}
</script>
