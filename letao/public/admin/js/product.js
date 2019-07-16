$(function(){

	var page = 1;
	var pagesize = 10;
	var totalPage = 0;
		
	GetProduct();

	function GetProduct(){

		$.ajax({
			type:'get',
			url:'/product/queryProductDetailList',
			data:{
				page:page,
				pageSize:pagesize
			},
			success:function(result){

				totalPage = Math.ceil(result.total/pagesize);

				$('#productBox').html(template('productTpl',{data:result}));

			}
		});

	}


	$('#prevBtn').on('click',function(){

		page--;

		if(page < 1){

			page = 1;

			alert('已经是第一页了');

			return;

		}

		GetProduct();

	});


	$('#nextBtn').on('click',function(){

		page++;

		if(page > totalPage){

			page = totalPage;

			alert('已经是最后一页了');

			return;

		}

		GetProduct();

	});

	$.ajax({
		url:'/category/querySecondCategoryPaging',
		type:'get',
		data:{
			page:1,
			pageSize:100
		},
		success:function(result){

			$('#brandBox').html(template('brandTpl',{data:result}));

			console.log(result);

		}

	});

	var pic = [];

	$('#fileUpload').fileupload({
	    dataType: 'json',
	    done: function (e, data) {

	    	pic.push(data._response.result);

	    	$('#imgBox').html(template('imgsTpl',{data:pic}))

	    }
	});


	$('#addProduct').on('click',function(){

		var brandOptions = $('#brandOptions').val();
		var productName = $("#productName").val();
		var productDescription = $("#productDescription").val();
		var productNum = $("#productNum").val();
		var productSize = $("#productSize").val();
		var productOriginPrice = $("#productOriginPrice").val();
		var productNowPrice = $("#productNowPrice").val();


		if(brandOptions == -1){

			alert('请选择品牌');

			return;

		}

		if(!productName){

			alert('请输入产品名称');

			return;

		}

		if(!productDescription){

			alert('请输入产品描述');

			return;

		}

		if(!productNum){

			alert('请输入产品数量');

			return;

		}

		if(!productSize){

			alert('请输入产品尺寸');

			return;

		}

		if(!productOriginPrice){

			alert('请输入产品原价格');

			return;

		}

		if(!productNowPrice){

			alert('请输入产品折扣价');

			return;

		}

		if(pic.length == 0){

			alert('请上传产品图片');

			return;

		}

		$.ajax({
			type:'post',
			url:'/product/addProduct',
			data:{
				proName:productName,
				oldPrice:productOriginPrice,
				price:productNowPrice,
				proDesc:productDescription,
				size:productSize,
				statu:1,
				num:productNum,
				brandId:brandOptions,
				pic:pic
			},
			success:function(result){
				
				if(result.success){

					location.reload();

				}else{

					alert('商品添加失败');

				}

			}
		})


	});


});