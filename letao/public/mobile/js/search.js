$(function(){

	$('#searchBtn').on('click',function(){

		var keyword = $('#keyword').val();

		if(!keyword){

			alert('请输入关键字');

			return;

		}

		if(localStorage.getItem('keywords')){

			var keywords = JSON.parse(localStorage.getItem('keywords'));

			keywords.push(keyword);

			localStorage.setItem('keywords',JSON.stringify(keywords));

		}else{

			localStorage.setItem('keywords',JSON.stringify([keyword]));

		}

		location.href = "search-list.html?key="+keyword;


	});


	if(localStorage.getItem('keywords')){

		var keywords = JSON.parse(localStorage.getItem('keywords'));

		$('#historySearch').html(template('historySearchTpl',{data:keywords}));

	}

	$('#clearHistory').on('tap',function(){

		localStorage.removeItem('keywords');

		$('#historySearch').html('');

	})

});