$(function(){

	var id = getParamsByUrl(location.href,'id');
	var size = -1;
	var num = 1;
	var rest = 0;

	$.ajax({
		url:'/product/queryProductDetail',
		type:'get',
		data:{
			id:id
		},
		success:function(result){
			console.log(result)
			if(!result.error){

				var size = result.size.split('-');
				var start = parseInt(size[0]);
				var end = parseInt(size[1]);

				rest = result.num;

				result.size = [];

				for(var i=start;i<=end;i++){

					result.size.push(i);

				}

				$('#detailBox').html(template('detailTpl',{data:result}));

				console.log(result)


				var gallery = mui('.mui-slider');

				gallery.slider();

			}else{

				alert(result.message);

			}
			
		}
	});


	$('body').on('tap','.detail-size span',function(){

		$(this).addClass('active').siblings().removeClass('active');

		size = $(this).html();

	});


	$('body').on('tap','.plus',function(){

		num++;

		if(num > rest){
			num = rest;
		}

		$('.num').val(num);

	});

	$('body').on('tap','.reduce',function(){

		num--;

		if(num < 1){
			num = 1;
		}

		$('.num').val(num)

	});


	$('#addCart').on('tap',function(){

		if(size == -1){

			alert('请选择尺码');

			return;

		}

		$.ajax({
			type:'post',
			url:'/cart/addCart',
			data:{
				productId:id,
				num:num,
				size:size
			},
			success:function(result){
				
				if(result.error && result.error == 400){

					localStorage.returnUrl = location.href;

					location.href = "login.html";

				}


				if(result.success){

					mui.confirm('添加成功,去购物车看看?','温馨提示',['确定','取消'],function(message){

						if(message.index == 0){

							location.href = "cart.html";

						}
					}) 

				}
			}
		})

	});






});