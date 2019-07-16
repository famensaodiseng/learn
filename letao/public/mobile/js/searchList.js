var products = {};
var page = 1;
var pageSize = 5;
var isLast = false;
var loading = false;
var totalPage = 0;
var priceSort = 1;
var numSort = 1;
var params = {};
var This = null;
	
params.page = page;
params.pageSize = pageSize;
params.price = priceSort;
params.num = numSort;

$(function(){

	var key = getParamsByUrl(location.href,'key');

	if(!key){

		return;

	}

	params.proName = key;

	mui.init({
	  pullRefresh : {
	    container:document.querySelector('#refresh'),//待刷新区域标识，querySelector能定位的css选择器均可，比如：id、.class等
	    up : {
	      height:50,//可选.默认50.触发上拉加载拖动距离
	      auto:true,//可选,默认false.自动上拉加载一次
	      contentrefresh : "正在加载...",//可选，正在加载状态时，上拉加载控件上显示的标题内容
	      contentnomore:'没有更多数据了',//可选，请求完毕若没有更多数据时显示的提醒内容；
	      callback : findProduct //必选，刷新函数，根据具体业务来编写，比如通过ajax从服务器获取新数据；
	    }
	  }
	});

	$('#priceSort').on('tap',function(){

		params.price = (params.price == 1 ? 2 : 1);

		products.data.length = 0;

		isLast = false;

		params.page = 1;

		mui('#refresh').pullRefresh().refresh(true);

		findProduct()

	});

	$('#numSort').on('tap',function(){

		params.num = (params.num == 1 ? 2 : 1);

		products.data.length = 0;

		isLast = false;

		params.page = 1;

		mui('#refresh').pullRefresh().refresh(true);

		findProduct()

	})


})


function findProduct(){

	if(!This){
		This = this;
	}
	
	console.log(This)

	if(!isLast && !loading){

		$.ajax({
			type:'get',
			url:'/product/queryProduct',
			data:params,
			beforeSend:function(){

				loading = true;

			},
			success:function(result){

				totalPage = Math.ceil(result.count/pageSize);

				loading = false;

				for(var attr in result){

					if(attr != 'data'){

						products[attr] = result[attr];

					}else{

						if(!products.data){

							products.data = result[attr];

						}else{

							for(var i=0;i<result[attr].length;i++){

								products.data.push(result[attr][i]);

							}

						}

					}

				}

				console.log(result)

				$('#productBox').html(template('productTpl',{result:products}));


				// console.log(result);

				params.page++;

				if(params.page > totalPage){

					isLast = true;

				}else{

					isLast = false;

				}
				
				This.endPullupToRefresh(isLast);
			
			}
		})

	}
	

}