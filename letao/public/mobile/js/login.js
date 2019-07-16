$(function(){

	$('#loginBtn').on('tap',function(){

		var This = $(this);

		var data = {
			username:$.trim($('[name="username"]').val()),
			password:$.trim($('[name="password"]').val())
		}

		if(!data.username){

			mui.toast('请输入用户名');

			return;

		}

		if(!data.password){

			mui.toast('请输入密码');

			return;

		}

		$.ajax({
			url:'/user/login',
			type:'post',
			data:data,
			beforeSend:function(){

				This.html('正在登录中...');

			},
			success:function(result){
				
				if(result.success){

					This.html('登录成功');

					setTimeout(function(){

						if(localStorage.getItem('returnUrl')){

							location.href = localStorage.getItem('returnUrl');

							localStorage.removeItem('returnUrl');

						}else{

							location.href = "user.html";

						}
						

					},2000)

				}else{

					This.html('登录');

					mui.toast(result.message);

				}

			},
			error:function(error){
				console.log(error)
			}
		})



	});

})