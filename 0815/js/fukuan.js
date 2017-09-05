
$('#fukuan').click(function(){
	$(this).addClass('active').siblings().removeClass('active');
})


$('.okfukuan').click(function(){
	$('.onmoney').hide()
	$('.okfukuan2').show()
})

$('.nofukuan').click(function(){
	$('.onmoney').show(1500);
	$('.okfukuan2').hide()
})


/*$(".userslideDown").mouseover(function(){
	var password = "<div class='slidedownBox'><ul class='w120 h120'><li class='padding8'><a href='javascript:;' target='Mainindex' class='fs20 '>修改密码</a></li><li class='padding8'><a href='index.html' target='_parent' class='fs20'>退出</a></li></ul></div>"
	$(".superUser").append(password);

});
$(".userslideDown, .slidedownBox").mouseout(function(){
	var password = "<div class='slidedownBox'><ul class='w120 h120'><li class='padding8'><a href='javascript:;' target='Mainindex' class='fs20 '>修改密码</a></li><li class='padding8'><a href='index.html' target='_parent' class='fs20'>退出</a></li></ul></div>"
	$(".slidedownBox"). remove();

});*/


/*$(document).ready(function(){
	var w =	$(".tableyq > tbody >tr th").width()
	$('.btn-divqy').css({width: w + 16 + 'px'})
});*/
