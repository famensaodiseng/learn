/*
* @Author: yang fangtao
* @Date:   2018-07-26 10:13:29
* @Last Modified by:   famensaodiseng
* @Last Modified time: 2018-07-27 22:25:49
*/
$(function () {
	$('#fullpage').fullpage({
		navigation:true,
		navigationPosition:'left',
		loopBottom:true,
		scrollingSpeed:1200,

		afterLoad:function (anchorLine,index) {
			if (index == 2) {
				
			}
		}
	});
});