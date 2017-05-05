window.onload = function(){
	var lsBtn = document.getElementById("leftSendBtn");
	var rsBtn = document.getElementById("rightSendBtn");
	lsBtn.addEventListener("click", lsend);
	rsBtn.addEventListener("click", rsend);
}
function lsend(){
	var text = document.getElementById("leftText").value;
	if(text.trim() != ""){
		var leftContent = document.getElementById("leftContent");
		var rightContent = document.getElementById("rightContent");
		var option = document.createElement("option");
		var len = text.length;
		option.style.width = len * 15 + len*2 + "px";
		option.style.marginLeft = 350 - (len * 15 + len*2) - 72 +"px";
		option.innerHTML = text;
		leftContent.appendChild(option);
		var option1 = document.createElement("option");
		option1.innerHTML = text;
		option1.style.backgroundColor = "white";
		option1.style.marginLeft = "10px";
		option1.style.width = len * 15 + len*2 + "px";
		rightContent.appendChild(option1);
		document.getElementById("leftText").value = "";
	}
}
function rsend(){
	var text = document.getElementById("rightText").value;
	if(text.trim() != ""){
		var leftContent = document.getElementById("leftContent");
		var rightContent = document.getElementById("rightContent");
		var option = document.createElement("option");
		var len = text.length;
		var len = text.length;
		option.style.width = len * 15 + len*2 + "px";
		option.style.marginLeft = 350 - (len * 15 + len*2) - 72 +"px";
		option.innerHTML = text;
		rightContent.appendChild(option);
		var option1 = document.createElement("option");
		option1.innerHTML = text;
		option1.style.backgroundColor = "white";
		option1.style.marginLeft = "10px";
		option1.style.width = len * 15 + len*2 + "px";
		leftContent.appendChild(option1);
		document.getElementById("rightText").value = "";
	}
}
window.onkeydown = function(event){
	if(event.keyCode == 13){
		var text1 = document.getElementById("leftText").value;
		var text2 = document.getElementById("rightText").value;
		if(text1.trim() != "" || text2.trim() != ""){
			lsend();
			rsend();
		}
	}
}

