<template>
    <div>
        <Button @click="shan">
            删除
        </Button>
    </div>
  </template>
  
  <script>
  export default {
      data:{
          retuen:{
  
          }
      },
      method:{
          shan:function(){
              this.axios.get('http://127.0.0.1:8000/youpai/').then(res=>{
                  console.log(res)
              })
          }
      },
  }
  </script>
  
  <style>
  
  </style>