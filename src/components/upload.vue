<template>
    <div>
  
              <div>
                  <table>
  
                      <tr>
                          <td>
                              上传图片：
                          </td>
  
                          <td>
                              <input type="file" @change='upload'>
                          </td>
  
                      </tr>

                      <tr>
                          <td>
                            <Button @click='upload'>上传</Button>
                          </td>
                      </tr>
  
  
                  </table>
              </div>
  
          </div>
      </section>
      
    </div>
    
  </template>
  
  
   
  <script>
  
  
  export default {
    data () {
      return {
        msg: "这是一个变量",
      }
    },
  
    //注册组件标签
    components:{
  
    },
  
    mounted:function(){
  
      
    },
    methods:{
      
  
      //定义提交事件 注意e是even，若input标签出现file上传图片，自定义方法里就要传参e
      upload:function(e){
  
          //获取文件
          let file = e.target.files[0]
  
          //声明表单参数
          let param = new FormData()
          //			后端获取的文件，文件实体，文件名称
          param.append('file',file,file.name)
          param.append('uid',localStorage.getItem('uid'))
  
  
          //声明请求头
          let config = {headers:{'Content-Type':'multipart/form-data'}}
  
  
          //请求后台接口 
          this.axios.post('http://127.0.0.1:8000/upload/',param,config).then((result)=>{
  
              console.log(result)
              this.src = 'http://localhost:8000/static/upload/'+result.data.filename

              console.log(result.data.message)
  
          })
      },
      
       
    }
  }
  
  
  </script>
   
  <style>

  </style>


