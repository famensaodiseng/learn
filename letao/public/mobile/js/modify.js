$(function(){

	$('#modifyBtn').on('tap',function(){

		var This = $(this);

		var data = {
			oldPassword:$.trim($('[name="originPass"]').val()),
			newPassword:$.trim($('[name="newPass"]').val()),
			reNewPassword:$.trim($('[name="sureNewPass"]').val()),
			vCode:$.trim($('[name="checkCode"]').val())
		};

		if(!data.oldPassword){

			mui.toast('请输入原密码');

			return;

		}

		if(!data.newPassword){

			mui.toast('请输入新密码');

			return;

		}


		if(!data.reNewPassword){

			mui.toast('请输入确认新密码');

			return;

		}

		if(data.newPassword != data.reNewPassword){

			mui.toast('密码两次输入的不一样');

			return;

		}

		if(!/^\d{6}$/.test(data.vCode)){

			mui.toast('验证码的格式不符合要求');

			return;

		}


		$.ajax({
			url:'/user/updatePassword',
			type:'post',
			data:data,
			beforeSend:function(){

				This.html('正在修改密码');

			},
			success:function(data){

				if(data.success){

					location.href = "login.html";

				}else{

					This.html('修改密码');

					mui.toast('密码修改失败:'+data.message);

					if(data.error == 400){

						localStorage.setItem('returnUrl',location.href);

						setTimeout(function(){

							location.href = "login.html";

						},2000)

					}

				}		

			}
		})



	});


	$('#getCheckCode').on('tap',getCheckCode);

})