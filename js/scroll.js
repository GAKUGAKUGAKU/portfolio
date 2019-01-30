// #にダブルクォーテーションが必要
// 参考URL：http://proclass.jp/blog/?p=4307
$(function(){
	$('a[href^="#"]').click(function() {
	var speed = 500;
	var headerHight = 100;
	
	var href= $(this).attr("href");
	var target = $(href == "#" || href == "" ? 'html' : href);
	var position = target.offset().top - headerHight; //ヘッダの高さ分位置をずらす
	$('body,html').animate({scrollTop:position}, speed, 'swing');
	return false;
 });
});