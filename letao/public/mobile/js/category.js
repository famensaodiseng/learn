$(function(){

	$.ajax({
		type:'get',
		url:'/category/queryTopCategory',
		success:function(result){
			
			$('#leftCate').html(template('leftCateTpl',{data:result.rows}))

			if(result.rows.length > 0){

				var id = result.rows[0].id;

				$.ajax({
					type:'get',
					url:'/category/querySecondCategory',
					data:{
						id:id
					},
					success:function(result){
						$('#rightCate').html(template('rightCateTpl',{data:result.rows}))

						$('#leftCate').find('a:first-child').addClass('active');

					}
				})

			}

		}
	});



	$('body').on('tap','.getSecond',function(){
		
		var id = $(this).attr('data-id');

		$(this).addClass('active').siblings().removeClass('active');

		$.ajax({
			type:'get',
			url:'/category/querySecondCategory',
			data:{
				id:id
			},
			success:function(result){
				$('#rightCate').html(template('rightCateTpl',{data:result.rows}))
			}
		})

	});

})