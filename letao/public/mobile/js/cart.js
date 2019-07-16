$(function(){

	var carts = [];
	var size = 0;
	var num = 0;
	var productNum = 0;

	$.ajax({
		url:'/cart/queryCart',
		type:'get',
		success:function(result){

			if(result.error && result.error == 400){

				localStorage.setItem('returnUrl',location.href);

				location.href = "login.html";

				return;

			}

			carts = result;

			console.log(result);

			$('#cartBox').html(template('cartTpl',{data:result}))

		}
	})

	$('body').on('tap','.deleteBtn',function(){

		var id = $(this).attr('data-id');

		$.ajax({
			url:'/cart/deleteCart',
			type:'get',
			data:{
				id:[id]
			},
			success:function(result){

				if(result.error && result.error == 400){

					localStorage.setItem('returnUrl',location.href);

					location.href = "login.html";

					return;

				}

				if(result.success) location.reload();


			}
		})

	});

	$('body').on('tap','.editBtn',function(){

		var id = $(this).attr('data-id');

		var item = findGoodsById(carts,id);

		productNum = item.productNum;
		num = item.num;
		size = item.size;
		var productSize = item.productSize.split('-');
		var start = parseInt(productSize[0]);
		var end = parseInt(productSize[1]);

		item.customSize = [];

		for(var i=start;i<=end;i++){

			item.customSize.push(i);

		}

		console.log(item)

		var html = template('detailTpl',{data:item}).replace(/\n/g,'');

		var btnArray = ['确定', '取消'];

		mui.confirm(html, '编辑商品', btnArray, function(e) {

			if (e.index == 0) {
				
				$.ajax({
					url:'/cart/updateCart',
					type:'post',
					data:{
						id:id,
						size:size,
						num:num
					},
					success:function(result){

						if(result.success){

							alert('修改成功');

							location.reload();

						}

					}
				})

			} else {
				alert('MUI没有得到你的认可，继续加油')
			}
		})

	});


	$('body').on('tap','.detail-size span',function(){

		$(this).addClass('active').siblings().removeClass('active');

		size = $(this).html();

	});


	$('body').on('tap','.detail-num .reduce',function(){

		num = $('.detail-num .num').val();

		num--;

		if(num<0){
			num=0;
		}

		$('.detail-num input').val(num);

	})

	$('body').on('tap','.detail-num .plus',function(){

		num = $('.detail-num .num').val();

		num++;

		if(num>productNum){
			num=productNum;
		}

		$('.detail-num input').val(num);


	})


})

function findGoodsById(result,id){
	console.log(result)
	for(var i=0;i<result.length;i++){

		if(result[i].id == id){

			return result[i];

		}

	}

}