<template>
  <div style="margin: 100px 0">
    <div style="width: 60%;margin: 0 auto;display: flex">
      <div style="margin: 0 20px;width: 50%">
        <h2 class="font_2" style="line-height:1.4em;">
          <span style="line-height:1.4em;letter-spacing:5px">在线留言</span>
        </h2>
        <el-input style="border: 1px solid rgba(143, 115, 101, 1);" v-model="inputName" placeholder="姓名" class="input-dist"></el-input>
        <el-input style="border: 1px solid rgba(143, 115, 101, 1);" v-model="inputPhone" placeholder="手机" class="input-dist"></el-input>
        <el-input style="border: 1px solid rgba(143, 115, 101, 1);" v-model="inputTitle" placeholder="主题" class="input-dist"></el-input>
        <el-input style="border: 1px solid rgba(143, 115, 101, 1);" v-model="inputContent" placeholder="内容" class="input-dist"
                  type="textarea"
                  :autosize="{ minRows: 10, maxRows: 15}"></el-input>
        <el-button style="" class="bt-style" @click="send">发送</el-button>
      </div>
      <div style="margin: 0 20px;width: 50%">
        <h2 class="font_2" style="line-height:1.4em;">
          <span style="line-height:1.4em;letter-spacing:5px">联系我们</span>
        </h2>
        <div class="newline-div"></div>
        <div style="width: 80%;height: 340px;
        border-left:1px dotted  rgba(143, 115, 101, 1);
        border-bottom: 2px dashed  rgba(143, 115, 101, 1)">
          <p class="font_7" style="font-size:18px;margin: 5px 0 0 0;">
          <span style="font-size:18px;">
            <span style="font-weight:bold;margin: 5px 0 0 10px">
              广州安腾达化工科技有限公司
            </span>
          </span>
          </p>
          <p style="margin: 5px 0 0 10px">地址：广州市海珠区海联路6-8号B09房</p>
          <p style="margin: 5px 0 0 10px">电话：+86-20-8417 2256</p>
          <p style="margin: 5px 0 0 10px">传真：+86-20-8417 2256</p>
          <p style="margin: 5px 0 0 10px">邮编：510230</p>
          <p style="margin: 5px 0 0 10px"> 邮箱：gz.att@aliyun.com</p>
          <img style="margin: 50px 0 0 -1px" src="../../static/imgs/contacts/contact.gif"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "Contact",
      data(){
          return{
            inputName:'',
            inputPhone:'',
            inputTitle:'',
            inputContent:''
          }
      },
      methods:{
          send(){
            if(this.inputName && this.inputPhone && this.inputTitle){
              this.$message({
                message: '您的信息发送成功，我们会尽快与您联系，请保持联系方式畅通！',
                type: 'success'
              });
              //以后建立一个简单后台，短信通知。
              this.inputName = '';
              this.inputPhone = '';
              this.inputTitle = '';
              this.inputContent = '';
            }else{
              alert('请输入必要的信息！')
            }

          }
      }
    }
</script>

<style scoped>
  .input-dist{
    margin: 8px 0;
  }
  .bt-style {
    background:rgba(106, 75, 59, 1);
    font: normal normal normal 15px/1.4em 'times new roman',times,serif;
    float: right;
    color:white;
    /*width: 40px;*/
    /*height: 31px;*/
  }
  .font_7 {
    font: normal normal normal 15px/1.4em 'times new roman',times,serif;
    font-size: 15px;
    line-height: 1.4em;
    color: #441C08;
  }

  .newline-div{
    border-top:3px solid black;
    border-bottom:1px solid black;
    height: 5px;
    width: 80%;
  }
</style>
