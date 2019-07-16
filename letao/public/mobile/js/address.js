$(function(){

	$.ajax({
		url:'/address/queryAddress',
		method:'get',
		success:function(result){
			console.log(result);
			$('#adress').html(template('adressTpl',{result:result}))
		}
	});



	// 删除收货地址
	$('body').on('tap','.deleteAdress',function(){

		$.ajax({
			url:'/address/deleteAddress',
			type:'post',
			data:{
				id:$(this).attr('data-id')
			},
			success:function(result){

				if(result.success){

					location.reload();

				}else{

					mui.toast('删除地址失败');

				}

			}
		})

	});

})