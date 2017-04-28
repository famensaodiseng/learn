// JavaScript Document
//随着滚动条走的小图片
$(function(){
	$(window).scroll(function(e) {
		//console.log($(window).scrollTop());
		var yidong = $(window).scrollTop() + 100;//'+yidong+'
		$('.navImg').stop().animate({'top':''+yidong+'px'},300);
	});	
	$('button').click(function(e) {
		$(this).parent().hide();
	});
	
//nav导航条
	$('.hiRight .demo>li').css('background','url(img/down.jpg) no-repeat right center');
	$('.hiRight .demo>li').mouseover(function(e){
		$(this).css('background','url(img/up.jpg) no-repeat right center');	
		$(this).children('ul').show();	
	})	
	$('.hiRight .demo>li').mouseout(function(e){
		$(this).children('ul').hide();
		$(this).css('background','url(img/down.jpg) no-repeat right center');	
	})

//我的商城和购物车结算
	$('.logoRight ul li').hover(function(e){
		$(this).children('div').css('display','block');
		$(this).children('a').css({'border-bottom':'none','background':'#fff'});
		$(this).children('a').children('i').css('background','url(img/arrow-all-up.jpg) no-repeat left center');
	},function(){
		$(this).children('div').css('display','none');
		$(this).children('a').css({'border-bottom':'1px solid #DBDBDB','background':'#FAFAFA'});
		$(this).children('a').children('i').css('background','url(img/arrow-all-down.jpg) no-repeat left center');
	})	

//右侧导航四个图标
	$('.niRight>a').hover(function(e) {
		$(this).children('span').stop().fadeIn();
	},function(){
		$(this).children('span').css('display','none');
	});
	
//banner图
	$('.bannerCenter ul li').eq(0).show();
	var timer = null;
	var num = 0;
	var tFn =function(){
		num ++;
		if(num >1){
			num = 0;	
		}
		$('.bannerCenter ul li').eq(num).stop().fadeOut().siblings().stop().fadeIn();
	};
	
	//添加或清除定时器
	timer = setInterval(tFn,2000)
	$('.bannerCenter ul li').hover(function(){
		clearInterval(timer);	
		timer = null
	},function(){
		timer = setInterval(tFn,2000)
	})
		
	
//左边导航栏
	$('.bannerLeft>dl').hover(function(){
		//alert(1);	
		$(this).children('div').show();
		$(this).css('border','1px solid #F0378D');
	},function(){
		$(this).children('div').hide();
		$(this).css({'border':'1px solid #DDDDDD',' border-right':'none'});
	})
	
//窗口右边导航栏
		//$(window).height();
		var wH;
		wH = $(window).height();
		$('.rightNavIn').css('height',''+wH+'px');
		
		//单击小头像弹出登陆对话框
		$('.rightNav .rnLoginIcon .userLogin').click(function(e) {
            //alert(1);
			$(this).parent().children('.loginWindow').css('display','block');
        });
		
		//单击登陆对话框右上角的小X号关闭当前对话框
		$('.rightNav .rnLoginIcon .loginWindow .x').click(function(e) {
            //alert(1);
			$(this).parent().css('display','none');
        });
		
		//根据background-positon改变图片
		$('.rightNavIn ul li a').each(function(index, element) {
            //.css('background-position','-13px -4px');
			var bp;
			bp = -4 + index * -60;
			$(element).css('background-position','-13px '+bp+'px');
        });
		
		//单击小X号关闭右边竖条菜单
		$('.rightNavIn .closeX').click(function(e) {
            //alert(1);
			$('.rightNav').stop().animate({'right':'-60px'},800);
			$('.rightNav .hideBar').stop().animate({'right':'0px'},800);
        });
		
		//鼠标经过li变图片+文字颜色
		$('.rightNav ul li').hover(function(e) {
            //alert(1);
			var bp;
			bp = -4 + $(this).index() * -60;
			$(this).children('a').css('background-position','-63px '+bp+'px').siblings().css('background-position','-3px '+bp+'px');
			$(this).css('background','#D93600');
			$(this).children('i').css('color','#fff').siblings().css('color','#333333');
        },function(){
			$(this).children('i').css('color','#333333');	
			var bp;
			bp = -4 + $(this).index() * -60;
			$(this).children('a').css('background-position','-13px '+bp+'px');
			$(this).css('background','none');
		});
		
		//单击返回顶部按钮返回顶部
		$('.rightNav ul li:eq(3)').click(function(){
			$('body,html').stop().animate({'scrollTop':'0px'},400);
		})
		
		//单击小孩儿让右边菜单栏显示
		$('.hideBar').click(function(){
			//alert(1);	
			$('.rightNav').stop().animate({'right':'0px'},800);
			$('.rightNav .hideBar').stop().animate({'right':'-79px'},800);
		})



//精品团购banner,品牌特卖banner,海外直邮
		$('.banner .bannerIn ul li:eq(0)').show();
			var timer1 = null;
			var num1 = 0;
			var tFn1 =function(){
				num1 ++;
				if(num1 >1){
					num1 = 0;	
				}
				$('.banner .bannerIn ul li').eq(num1).stop().fadeOut().siblings().stop().fadeIn();
			};
			
			//添加或清除定时器
			timer1 = setInterval(tFn1,2000)
			$('.banner .bannerIn ul li').hover(function(){
				clearInterval(timer1);	
				timer1 = null
			},function(){
				timer1 = setInterval(tFn1,2000)
			})
			
})

//时间啊啊啊啊啊
    var SysSecond;
    var InterValObj;
    $(document).ready(function () {
        SysSecond = parseInt(9700); //这里获取倒计时的起始时间
        InterValObj = window.setInterval(SetRemainTime, 1000); //间隔函数，1秒执行
    });
    //将时间减去1秒，计算天、时、分、秒
    function SetRemainTime() {
        if (SysSecond > 0) {
            SysSecond = SysSecond - 1;
            var second = Math.floor(SysSecond % 60);             // 计算秒    
            var minite = Math.floor((SysSecond / 60) % 60);      //计算分
            var hour = Math.floor((SysSecond / 3600) % 24);      //计算小时
            var day = Math.floor((SysSecond / 3600) / 24);        //计算天
            if (day > 0) {
                if (day == 1) {
                    $(".remainTime").html('销量：' + day + "天 " + hour + "时" + minite + "分" + second + "秒");
                } else {
                    $(".remainTime").html('销量：' + day + "天 " + hour + "时" + minite + "分" + second + "秒");
                }
            } else {
                $(".remainTime").html('销量：' + hour + "时" + minite + "分" + second + "秒");
            }
        } else {//剩余时间小于或等于0的时候，就停止间隔函数
            window.clearInterval(InterValObj);
            //这里可以添加倒计时时间为0后需要执行的事件
        }
    }

