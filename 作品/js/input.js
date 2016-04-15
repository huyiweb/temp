// JavaScript Document
$(function(){
	$("#inputSearch").focus(function(){
		$(this).addClass("focus");
		if($(this).val()==this.defaultValue){
			$(this).val("");
			}
		}).blur(function(){
			$(this).removeClass("focus");
			if($(this).val()==''){
				$(this).val(this.defaultValue);
				}
			}).keyup(function(e){
				if(e.which==13){
					alert('回车提交表单！');
					}
				})
	})
	
$(function(){
	$("#nav li").hover(function(){
		$(this).find(".jnNav").show();
		},function(){
			$(this).find(".jnNav").hide();
			});
	})
	
	
	var index=0;
	$("#jnImageroll div a").mouseover(function(){
		index=$("#jnImageroll div a").index(this);
		showImg(index);
		}).eq(0).mouseover();
	
	
function showImg(index){
	var $rollobj=$("#jnImageroll");
	var $rolllist=$rollobj.find("div a");
	var newhref=$rolllist.eq(index).attr("href");
	$("#JS_imgWrap").attr("href",newhref)
					.find("img").eq(index).stop(true,true).fadeIn()
					.siblings().fadeOut();
	$rolllist.removeClass("chos").css("opacity","0.7")
						.eq(index).addClass("chos").css("opacity","1");
	}
	
