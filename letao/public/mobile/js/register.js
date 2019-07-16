$(function(){


	$('#regBtn').on('tap',function(){

		var This = $(this);

		var data = {
			username: $.trim($('[name="username"]').val()),
			mobile:$.trim($('[name="mobile"]').val()),
			password:$.trim($('[name="password"]').val()),
			vCode:$.trim($('[name="checkCode"]').val())
		}

		var againPass = $.trim($('[name="againPass"]').val())

		if(!data.username){

			mui.toast('请输入用户名');

			return;

		}

		if(!/^1[4578]\d{9}$/.test(data.mobile)){

			mui.toast('请输入正确格式的手机号');

			return;

		}

		if(!data.password){

			mui.toast('请输入密码');

			return;

		}

		if(!againPass){

			mui.toast('请输入确认密码');

			return;
		}

		if(data.password != againPass){

			mui.toast('两次密码输入的不相同');

			return;

		}

		if(!/^\d{6}$/.test(data.vCode)){

			mui.toast('验证码输入的格式不正确');

			return;

		}

		$.ajax({
			type:'post',
			url:'/user/register',
			data:data,
			beforeSend:function(){

				This.html('正在提交数据...');

			},
			success:function(result){

				if(result.success){

					mui.toast('注册成功');

					setTimeout(function(){

						location.href = "login.html";

					},2000)
					
				}else{

					mui.toast('注册失败');

					This.html('注册');

				}
			}
		});

	});


	$('#getCode').on('tap',getCheckCode);


});