window.onload = function () {

 var cartTable = document.getElementById('cartTable');
var tr = cartTable.children[1].rows;
var onecheck = document.getElementsByClassName('check');
var allcheck = document.getElementsByClassName('check-all');
var selectedTotal = document.getElementById('selectedTotal');
var priceTotal = document.getElementById('priceTotal');
var selected = document.getElementById('selected');
var foot = document.getElementById('foot');
var selectedViewList = document.getElementById('selectedViewList');

  function total(){
	  var num = 0;
	  var price = 0;
	  var HTMLstr = '';
	for(var i=0;i<tr.length;i++){
		
			if(tr[i].getElementsByTagName('input')[0].checked){	
				tr[i].className = 'on';			
				num += parseInt(tr[i].getElementsByTagName('input')[1].value);
				price += parseFloat(tr[i].cells[4].innerHTML);
				HTMLstr += '<div><img src="'+tr[i].getElementsByTagName('img')[0].src+'"><span class ="del" index = "'+i+'">取消选择</span></div>'
				}else{
					tr[i].className = '';		}			
		}
		selectedTotal.innerHTML = num;
		priceTotal.innerHTML = price.toFixed(2);
		selectedViewList.innerHTML = HTMLstr;
	}
  
	  for(var i=0;i<onecheck.length;i++){
		  onecheck[i].onclick =  function(){
			  if(this.className === 'check-all check'){
				  for(var i=0;i<onecheck.length;i++){
					 onecheck[i].checked = this.checked }
					  }
			    if(this.checked === false){
				  for(var j=0;j<allcheck.length;j++){
					  allcheck[j].checked = false;}}
			  total();
		  }
	  }
	  
	  selected.onclick = function(){
		  if(foot.className == 'foot'){
			  foot.className = 'foot show';
			  }else{
				   foot.className = 'foot';}
			  }
			  
	 selectedViewList.onclick = function(e){
	
        var el = e.srcElement;
		if(el.className == 'del'){
			var index = el.getAttribute('index');
			 var input = tr[index].getElementsByTagName('input')[0];
			input.checked = false;
			input.onclick();
			}
		 }
		 
	for(var i=0;i<tr.length;i++){
		 tr[i].onclick = function(e){
			 var el = e.srcElement;
			 var csl =el.className;
			 var input = this.getElementsByTagName('input')[1];
			 var val = parseInt(input.value);
			 switch(csl){
				case 'add':
					input.value = val + 1;
					xiaoji(this);
					total()
					break;
				case 'reduce':
					input.value = val - 1;
					if(input.value == -1)
					input.value = 0;
					xiaoji(this);
					total()
					break;
					 }
				 }
		 tr[i].getElementsByTagName('input')[1].onkeyup = function(){
			 var val = parseInt(this.value);
			 if(isNaN(val)||val<1){
				 val=0;}
				 this.value = val;
			 xiaoji(this.parentNode.parentNode);
			 total();}
	}
	
	function xiaoji(tr){
		var danjia = parseFloat(tr.cells[2].innerHTML);
		var shuliang = parseInt(tr.getElementsByTagName('input')[1].value);
		zong = parseFloat(danjia*shuliang);
		tr.cells[4].innerHTML = zong;
		}
	
}












