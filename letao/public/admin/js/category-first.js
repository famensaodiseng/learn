$(function(){

	var page = 1;
	var pagesize = 10;
	var totalPage = 0;

	GetCategory();

	$('#prevBtn').on('click',function(){

		page--;

		if(page < 1){

			page = 1;

			alert('已经到了第一页');

			return;
		}

		GetCategory();

	});

	$('#nextBtn').on('click',function(){

		page++;
		
		if(page > totalPage){

			page = totalPage;

			alert('已经到了最后一页');

			return;

		}

		GetCategory()

	});


	function GetCategory(){

		$.ajax({
			url:'/category/queryTopCategoryPaging',
			type:'get',
			data:{
				page:page,
				pageSize:pagesize
			},
			success:function(result){

				totalPage = Math.ceil(result.total/pagesize);

				$('#categoryBox').html(template('categoryTpl',{data:result}));

			}
		});

	}




	$('#addCategory').on('click',function(){

		var categoryName = $('#categoryName').val();

		if(!categoryName){

			alert('请输入分类名称');

			return;

		}

		$.ajax({
			type:'post',
			url:'/category/addTopCategory',
			data:{
				categoryName:categoryName
			},
			success:function(result){

				if(result.success){

					$('#modal').modal('hide');

					location.reload();

				}

			}
		})

	});














});

