<template>
  <div>

	<h1>注册页面</h1>
	<div class="container">
		<div>

			<table>

				<tr>
					<td>
						用户名：
					</td>
					<td>
						<input type="text" v-model='username''>
					</td>
				</tr>

				<tr>
					<td>
						密码：
					</td>
					<td>
						<input type="password" v-model='password'>
					</td>
				</tr>

				<tr>
					<td></td>
					<td>
						<Button color='blue' @click='submit'>提交</Button>
					</td>
				</tr>

			</table>

		</div>



	</div>
    
  </div>
  
</template>


 
<script>

export default {
  data () {
    return {
	  msg: "这是一个变量",

	  // 表单数据
	  username :'',
	  password :'',
	
    }
  },

  mounted:function(){

	


	},
  methods:{

	// 定义提交事件
	submit:function(){

		// 非空验证
		if (this.username==''){

			this.$Message('您没有输入用户名');
			return false

		}
		else if(this.password == ''){

			this.$Message('您没有输入密码');
			return false

		}

		// 请求后台接口
		this.axios.get('http://localhost:8000/register/',{params:{
			username:this.username,password:this.password
		}}).then((result)=>{

			console.log(result);

			this.$Message(result.data.message);

			this.$router.push('login');

		});

	}

     
  }
}


</script>
 
<style>

td {
	padding: 10px;
}

</style>